// 비즈니스 영어 30일 - 메인 로직
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore, doc, setDoc, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// ---------- Firebase 초기화 ----------
const firebaseReady = typeof FIREBASE_CONFIG !== "undefined" &&
  FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";

let fbApp = null, auth = null, db = null, unsubSnapshot = null, currentUser = null;

if (firebaseReady) {
  try {
    fbApp = initializeApp(FIREBASE_CONFIG);
    auth = getAuth(fbApp);
    db = getFirestore(fbApp);
  } catch (e) {
    console.error("Firebase init failed", e);
  }
}

// ---------- 상태 저장 (로컬 + Firestore) ----------
const LOCAL_KEY = "bizEnglishState_v1";
const PREFS_KEY = "bizEnglishPrefs_v1";

function loadLocalState() {
  try {
    return Object.assign(
      { completed: {}, streak: { count: 0, lastDate: null } },
      JSON.parse(localStorage.getItem(LOCAL_KEY))
    );
  } catch (e) {
    return { completed: {}, streak: { count: 0, lastDate: null } };
  }
}
function saveLocalOnly() {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
}
function saveState() {
  saveLocalOnly();
  if (currentUser && db) pushStateToFirestore();
}
let state = loadLocalState();

function loadPrefs() {
  try {
    return Object.assign({ voiceURI: null, rate: 0.9 }, JSON.parse(localStorage.getItem(PREFS_KEY)));
  } catch (e) {
    return { voiceURI: null, rate: 0.9 };
  }
}
function savePrefs() {
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
}
let prefs = loadPrefs();

// ---------- Firestore 동기화 ----------
function startFirestoreSync(uid) {
  stopFirestoreSync();
  const ref = doc(db, "users", uid);
  unsubSnapshot = onSnapshot(ref, (snap) => {
    if (snap.exists()) {
      const remote = snap.data();
      state.completed = remote.completed || {};
      state.streak = remote.streak || { count: 0, lastDate: null };
      saveLocalOnly();
      refreshCurrentView();
    } else {
      pushStateToFirestore();
    }
  }, (err) => console.error("sync error", err));
}
function stopFirestoreSync() {
  if (unsubSnapshot) { unsubSnapshot(); unsubSnapshot = null; }
}
function pushStateToFirestore() {
  if (!currentUser || !db) return;
  setDoc(doc(db, "users", currentUser.uid),
    { completed: state.completed, streak: state.streak },
    { merge: true }
  ).catch((e) => console.error("push error", e));
}

// ---------- 유틸 ----------
function esc(str) {
  return String(str == null ? "" : str).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
function todayStr() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function bumpStreak() {
  const today = todayStr();
  if (state.streak.lastDate === today) return;
  const y = new Date(Date.now() - 86400000);
  const yStr = y.getFullYear() + "-" + String(y.getMonth() + 1).padStart(2, "0") + "-" + String(y.getDate()).padStart(2, "0");
  state.streak.count = (state.streak.lastDate === yStr) ? state.streak.count + 1 : 1;
  state.streak.lastDate = today;
}
function ddayToSept30() {
  const now = new Date();
  const end = new Date(now.getFullYear(), 8, 30);
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.round((end - startOfToday) / 86400000);
  return diff >= 0 ? "D-" + diff : "D+" + Math.abs(diff);
}
function recommendedDay() {
  for (let i = 1; i <= 30; i++) if (!state.completed[i]) return i;
  return 30;
}

// ---------- TTS ----------
let voicesCache = [];
function refreshVoices() {
  voicesCache = (window.speechSynthesis ? window.speechSynthesis.getVoices() : [])
    .filter((v) => v.lang && v.lang.toLowerCase().startsWith("en"));
}
if (window.speechSynthesis) {
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    refreshVoices();
    if (document.getElementById("view-settings").classList.contains("active")) populateVoiceSelect();
  };
}
function voiceScore(v) {
  let s = 0;
  if (/natural|neural|premium|enhanced/i.test(v.name)) s += 10;
  if (/google/i.test(v.name)) s += 5;
  if (v.lang === "en-US") s += 3;
  if (/samantha|alex|ava|aria|jenny|guy/i.test(v.name)) s += 2;
  return s;
}
function bestVoiceURI() {
  if (!voicesCache.length) return null;
  return [...voicesCache].sort((a, b) => voiceScore(b) - voiceScore(a))[0].voiceURI;
}
function speak(text, opts = {}) {
  if (!window.speechSynthesis) {
    alert("이 브라우저는 음성 재생을 지원하지 않아요.");
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = opts.rate || prefs.rate || 0.9;
    u.pitch = opts.pitch || 1;
    const uri = opts.voiceURI || prefs.voiceURI || bestVoiceURI();
    const v = voicesCache.find((v) => v.voiceURI === uri);
    if (v) u.voice = v;
    u.onend = resolve;
    u.onerror = resolve;
    window.speechSynthesis.speak(u);
  });
}
async function playSequence(lines) {
  window.speechSynthesis.cancel();
  for (const line of lines) {
    await speak(line.en, { pitch: line.speaker === "A" ? 1 : 0.85 });
    await sleep(250);
  }
}

// ---------- 녹음(쉐도잉) ----------
let activeRecorder = null;
async function toggleRecord(btnEl) {
  if (activeRecorder && activeRecorder.state === "recording") {
    activeRecorder.stop();
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const chunks = [];
    activeRecorder = new MediaRecorder(stream);
    activeRecorder.ondataavailable = (e) => chunks.push(e.data);
    activeRecorder.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      btnEl.classList.remove("recording");
      const blob = new Blob(chunks, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      new Audio(url).play();
    };
    activeRecorder.start();
    btnEl.classList.add("recording");
    setTimeout(() => {
      if (activeRecorder && activeRecorder.state === "recording") activeRecorder.stop();
    }, 6000);
  } catch (e) {
    alert("마이크 사용 권한이 필요해요. 브라우저 설정에서 마이크 접근을 허용해주세요.");
  }
}

// ---------- 화면 전환 ----------
const VIEWS = ["home", "days", "settings", "lesson"];
function showView(name) {
  VIEWS.forEach((v) => document.getElementById("view-" + v).classList.toggle("active", v === name));
  document.getElementById("bottom-nav").style.display = name === "lesson" ? "none" : "flex";
  document.querySelectorAll("#bottom-nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === name));
  if (name === "home") renderHome();
  if (name === "days") renderDays();
  if (name === "settings") renderSettings();
  window.scrollTo(0, 0);
}
function updateStreakBadge() {
  document.getElementById("streak-badge").textContent = "🔥 " + state.streak.count + "일";
}
function refreshCurrentView() {
  updateStreakBadge();
  const active = VIEWS.find((v) => document.getElementById("view-" + v).classList.contains("active"));
  if (active === "home") renderHome();
  else if (active === "days") renderDays();
}

// ---------- 홈 ----------
function renderHome() {
  const day = recommendedDay();
  const d = getDayData(day);
  document.getElementById("home-daylabel").textContent = "Day " + day + " / 30";
  const startBtn = document.getElementById("home-start-btn");
  if (d) {
    document.getElementById("home-title-en").textContent = d.titleEn;
    document.getElementById("home-title-ko").textContent = d.titleKo;
    startBtn.disabled = false;
    startBtn.onclick = () => startLesson(day);
  } else {
    document.getElementById("home-title-en").textContent = "콘텐츠 준비 중...";
    document.getElementById("home-title-ko").textContent = "잠시 후 다시 확인해주세요.";
    startBtn.disabled = true;
  }
  document.getElementById("stat-done").textContent = Object.keys(state.completed).length;
  document.getElementById("stat-streak").textContent = state.streak.count;
  document.getElementById("stat-dday").textContent = ddayToSept30();
  renderWeekGrid();
  updateStreakBadge();
}
function renderWeekGrid() {
  const wrap = document.getElementById("home-week-grid");
  wrap.innerHTML = WEEKS_META.map((w) => {
    const doneCount = w.days.filter((dn) => state.completed[dn]).length;
    const pct = Math.round((doneCount / w.days.length) * 100);
    return `<button class="week-tile" data-week="${w.week}">
      <div class="top"><span class="name">${esc(w.titleKo)}</span><span class="frac">${doneCount}/${w.days.length}</span></div>
      <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
    </button>`;
  }).join("");
  wrap.querySelectorAll(".week-tile").forEach((btn) => (btn.onclick = () => showView("days")));
}

// ---------- 커리큘럼 목록 ----------
function renderDays() {
  const wrap = document.getElementById("days-list");
  let html = "";
  WEEKS_META.forEach((w) => {
    html += `<div class="days-week-header">${esc(w.titleKo)}</div>`;
    w.days.forEach((dayNum) => {
      const d = getDayData(dayNum);
      if (!d) { html += `<div class="day-row"><div class="badge">${dayNum}</div><div class="texts"><div class="ttl-ko">Day ${dayNum} · 콘텐츠 준비 중</div></div></div>`; return; }
      const rec = state.completed[dayNum];
      html += `<button class="day-row ${rec ? "done" : ""}" data-day="${dayNum}">
        <div class="badge">${rec ? "✓" : dayNum}</div>
        <div class="texts"><div class="ttl-ko">Day ${dayNum} · ${esc(d.titleKo)}</div><div class="ttl-en">${esc(d.titleEn)}</div></div>
        ${rec ? `<div class="score">${rec.quizScore}/${rec.quizTotal}</div>` : ""}
      </button>`;
    });
  });
  wrap.innerHTML = html;
  wrap.querySelectorAll(".day-row[data-day]").forEach((btn) => (btn.onclick = () => startLesson(+btn.dataset.day)));
}

// ---------- 설정 ----------
function populateVoiceSelect() {
  const sel = document.getElementById("voice-select");
  if (!voicesCache.length) {
    sel.innerHTML = `<option>사용 가능한 영어 음성이 없어요</option>`;
    return;
  }
  sel.innerHTML = voicesCache.map((v) => `<option value="${esc(v.voiceURI)}">${esc(v.name)} (${esc(v.lang)})</option>`).join("");
  if (!prefs.voiceURI) prefs.voiceURI = bestVoiceURI();
  sel.value = prefs.voiceURI || "";
}
function renderSettings() {
  const info = document.getElementById("settings-account-info");
  const loginBtn = document.getElementById("settings-login-btn");
  const logoutBtn = document.getElementById("settings-logout-btn");
  if (currentUser) {
    info.textContent = (currentUser.displayName || currentUser.email) + " 계정으로 동기화 중";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "";
  } else {
    info.textContent = firebaseReady ? "로그인 안 함 (이 기기에만 저장됨)" : "Firebase 미설정 — 이 기기에만 저장됨";
    loginBtn.style.display = firebaseReady ? "" : "none";
    logoutBtn.style.display = "none";
  }
  populateVoiceSelect();
  document.getElementById("rate-range").value = prefs.rate;
  document.getElementById("rate-value").textContent = prefs.rate;
}

// ---------- 레슨 ----------
const STEPS = ["phrases", "listening", "reading", "writing", "quiz"];
let lessonState = null;
const content = () => document.getElementById("lesson-content");

function startLesson(day) {
  if (!getDayData(day)) { alert("아직 콘텐츠가 준비되지 않았어요. 잠시 후 다시 시도해주세요."); return; }
  lessonState = {
    day, stepIndex: 0, quizIndex: 0, quizCorrect: 0,
    writingText: (state.completed[day] && state.completed[day].writingText) || ""
  };
  showView("lesson");
  renderLessonStep();
}
function updateLessonDots(allDone) {
  const wrap = document.getElementById("lesson-steps");
  wrap.innerHTML = STEPS.map((s, i) => {
    let cls = "dot";
    if (allDone || i < lessonState.stepIndex) cls += " done";
    else if (i === lessonState.stepIndex) cls += " active";
    return `<div class="${cls}"></div>`;
  }).join("");
}
function navRow(showPrev, nextLabel) {
  return `<div class="step-nav">
    ${showPrev ? '<button class="btn btn-outline" id="lesson-prev">← 이전</button>' : ""}
    <button class="btn btn-primary" id="lesson-next">${nextLabel}</button>
  </div>`;
}
function wireNav(nextAction) {
  const prev = document.getElementById("lesson-prev");
  if (prev) prev.onclick = () => { lessonState.stepIndex--; renderLessonStep(); };
  const next = document.getElementById("lesson-next");
  if (next) next.onclick = nextAction || (() => { lessonState.stepIndex++; renderLessonStep(); });
}
function renderInlineQA(prefix, qi, q) {
  let html = `<div class="qa-card" data-qkey="${prefix}-${qi}"><div class="q">${esc(q.qKo)}</div>`;
  q.options.forEach((opt, oi) => {
    html += `<button class="qa-option" data-qi="${qi}" data-oi="${oi}">${esc(opt)}</button>`;
  });
  html += `</div>`;
  return html;
}
function wireInlineQA(root, prefix, questions) {
  root.querySelectorAll(`[data-qkey^="${prefix}-"] .qa-option`).forEach((btn) => {
    btn.onclick = () => {
      const card = btn.closest(".qa-card");
      if (card.dataset.answered) return;
      card.dataset.answered = "1";
      const qi = +btn.dataset.qi, oi = +btn.dataset.oi;
      const q = questions[qi];
      card.querySelectorAll(".qa-option").forEach((b) => (b.disabled = true));
      if (oi === q.answer) btn.classList.add("correct");
      else {
        btn.classList.add("wrong");
        card.querySelector(`.qa-option[data-oi="${q.answer}"]`).classList.add("correct");
      }
    };
  });
}

function renderLessonStep() {
  updateLessonDots(false);
  const d = getDayData(lessonState.day);
  const step = STEPS[lessonState.stepIndex];
  if (step === "phrases") renderPhrasesStep(d);
  else if (step === "listening") renderListeningStep(d);
  else if (step === "reading") renderReadingStep(d);
  else if (step === "writing") renderWritingStep(d);
  else if (step === "quiz") { lessonState.quizIndex = 0; lessonState.quizCorrect = 0; renderQuizStep(d); }
  content().scrollTop = 0;
  window.scrollTo(0, 0);
}

function renderPhrasesStep(d) {
  let html = `<div class="step-title">🗝️ 오늘의 핵심 표현</div><div class="step-sub">Day ${d.day} · ${esc(d.titleKo)}<br/>6개 표현을 눈과 귀로 먼저 익혀보세요.</div>`;
  d.phrases.forEach((p, i) => {
    html += `<div class="phrase-card"><div class="texts"><div class="ko">${esc(p.ko)}</div><div class="en">${esc(p.en)}</div><div class="tip">💡 ${esc(p.tip)}</div></div><button class="icon-btn speak-phrase" data-i="${i}">🔊</button></div>`;
  });
  html += navRow(false, "리스닝 시작 →");
  content().innerHTML = html;
  content().querySelectorAll(".speak-phrase").forEach((btn) => (btn.onclick = () => speak(d.phrases[+btn.dataset.i].en)));
  wireNav();
}

function renderListeningStep(d) {
  let html = `<div class="step-title">🎧 리스닝 &amp; 쉐도잉</div>`;
  html += `<div class="dialogue-context">${esc(d.dialogue.situationKo)}</div>`;
  html += `<div class="play-all-row"><button class="btn btn-primary" id="play-all-btn">▶ 전체 재생</button><button class="btn btn-outline" id="stop-play-btn">⏹ 정지</button></div>`;
  d.dialogue.lines.forEach((line, i) => {
    html += `<div class="dialogue-line">
      <div class="spk ${line.speaker}">${line.speaker}</div>
      <div class="en">${esc(line.en)}</div>
      <div class="btns">
        <button class="icon-btn speak-line" data-i="${i}" title="듣기">🔊</button>
        <button class="icon-btn rec rec-line" data-i="${i}" title="따라 말하고 녹음 듣기">🎙</button>
      </div>
    </div>`;
  });
  html += `<div class="section-title">🎯 리스닝 확인</div>`;
  d.listeningQuiz.forEach((q, qi) => (html += renderInlineQA("lq", qi, q)));
  html += navRow(true, "다음: 리딩 →");
  content().innerHTML = html;
  content().querySelectorAll(".speak-line").forEach((btn) => {
    btn.onclick = () => {
      const line = d.dialogue.lines[+btn.dataset.i];
      speak(line.en, { pitch: line.speaker === "A" ? 1 : 0.85 });
    };
  });
  content().querySelectorAll(".rec-line").forEach((btn) => (btn.onclick = () => toggleRecord(btn)));
  document.getElementById("play-all-btn").onclick = () => playSequence(d.dialogue.lines);
  document.getElementById("stop-play-btn").onclick = () => window.speechSynthesis.cancel();
  wireInlineQA(content(), "lq", d.listeningQuiz);
  wireNav();
}

function renderReadingStep(d) {
  let html = `<div class="step-title">📖 리딩</div><div class="step-sub">오늘 주제와 관련된 짧은 글을 읽어보세요.</div>`;
  html += `<div class="reading-passage">${esc(d.reading.passage)}</div>`;
  html += `<button class="btn btn-outline btn-block" id="read-listen-btn" style="margin-bottom:18px;">🔊 전체 듣기</button>`;
  d.reading.questions.forEach((q, qi) => (html += renderInlineQA("rq", qi, q)));
  html += navRow(true, "다음: 라이팅 →");
  content().innerHTML = html;
  document.getElementById("read-listen-btn").onclick = () => speak(d.reading.passage);
  wireInlineQA(content(), "rq", d.reading.questions);
  wireNav();
}

function renderWritingStep(d) {
  let html = `<div class="step-title">✍️ 라이팅</div>`;
  html += `<div class="step-sub">${esc(d.writing.promptKo)}</div>`;
  html += `<div style="font-size:13px;color:var(--text-soft);margin-bottom:10px;">${esc(d.writing.promptEn)}</div>`;
  html += `<textarea class="writing-box" id="writing-input" placeholder="여기에 영어로 답을 써보세요...">${esc(lessonState.writingText)}</textarea>`;
  html += `<button class="btn btn-outline btn-block" id="show-model-btn" style="margin-top:12px;">💡 모범 답안 보기</button>`;
  html += `<div id="model-answer-wrap"></div>`;
  html += navRow(true, "다음: 퀴즈 →");
  content().innerHTML = html;
  document.getElementById("writing-input").oninput = (e) => (lessonState.writingText = e.target.value);
  document.getElementById("show-model-btn").onclick = () => {
    document.getElementById("model-answer-wrap").innerHTML =
      `<div class="model-answer"><div class="lbl">모범 답안 예시</div>${esc(d.writing.modelAnswer)}</div>`;
  };
  wireNav();
}

function renderQuizStep(d) {
  const q = d.vocabQuiz[lessonState.quizIndex];
  let html = `<div class="step-title">✏️ 오늘의 어휘 퀴즈</div>`;
  html += `<div class="quiz-progress">${lessonState.quizIndex + 1} / ${d.vocabQuiz.length}</div>`;
  html += `<div class="quiz-question"><div class="qtext">${esc(q.qKo)}</div></div>`;
  html += `<div class="quiz-options">` + q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${esc(opt)}</button>`).join("") + `</div>`;
  content().innerHTML = html;
  content().querySelectorAll(".quiz-option").forEach((btn) => {
    btn.onclick = () => {
      const i = +btn.dataset.i;
      const correct = i === q.answer;
      content().querySelectorAll(".quiz-option").forEach((b) => (b.disabled = true));
      if (correct) { btn.classList.add("correct"); lessonState.quizCorrect++; }
      else {
        btn.classList.add("wrong");
        content().querySelector(`.quiz-option[data-i="${q.answer}"]`).classList.add("correct");
      }
      setTimeout(() => {
        if (lessonState.quizIndex + 1 < d.vocabQuiz.length) { lessonState.quizIndex++; renderQuizStep(d); }
        else finishLesson(d);
      }, 900);
    };
  });
}

function finishLesson(d) {
  state.completed[lessonState.day] = {
    completedAt: new Date().toISOString(),
    quizScore: lessonState.quizCorrect,
    quizTotal: d.vocabQuiz.length,
    writingText: lessonState.writingText
  };
  bumpStreak();
  saveState();
  updateLessonDots(true);
  renderDoneStep();
}
function renderDoneStep() {
  const rec = state.completed[lessonState.day];
  let html = `<div class="done-wrap">
    <div class="emoji">🎉</div>
    <div class="big-num">${rec.quizScore} / ${rec.quizTotal}</div>
    <div class="sub">Day ${lessonState.day} 학습 완료! 오늘도 수고하셨어요.</div>
    <button class="btn btn-primary btn-block" id="done-home-btn" style="margin-bottom:10px;">홈으로</button>
    ${lessonState.day < 30 && getDayData(lessonState.day + 1) ? '<button class="btn btn-outline btn-block" id="done-next-btn">다음 Day 시작하기</button>' : ""}
  </div>`;
  content().innerHTML = html;
  document.getElementById("done-home-btn").onclick = () => showView("home");
  const nextBtn = document.getElementById("done-next-btn");
  if (nextBtn) nextBtn.onclick = () => startLesson(lessonState.day + 1);
}

// ---------- 로그인 / 앱 셸 전환 ----------
function showAppShell() {
  document.getElementById("view-login").classList.remove("active");
  document.getElementById("app-shell").style.display = "";
  showView("home");
}
function showLoginView() {
  document.getElementById("app-shell").style.display = "none";
  document.getElementById("view-login").classList.add("active");
}
async function doGoogleLogin() {
  if (!firebaseReady) {
    alert("아직 Firebase 설정이 완료되지 않았어요. firebase-config.js 파일을 먼저 설정해주세요. (설정 없이도 '로그인 없이 시작'으로 이용 가능해요)");
    return;
  }
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
  } catch (e) {
    alert("로그인에 실패했어요: " + e.message);
  }
}

// ---------- 이벤트 바인딩 ----------
document.getElementById("google-login-btn").onclick = doGoogleLogin;
document.getElementById("skip-login-btn").onclick = () => showAppShell();
document.getElementById("settings-login-btn").onclick = doGoogleLogin;
document.getElementById("settings-logout-btn").onclick = () => { if (auth) signOut(auth); };
document.getElementById("lesson-back").onclick = () => {
  if (confirm("학습을 종료하고 홈으로 돌아갈까요? (현재 단계까지는 저장되지 않아요)")) showView("home");
};
document.getElementById("home-view-all-btn").onclick = () => showView("days");
document.querySelectorAll("#bottom-nav button").forEach((btn) => (btn.onclick = () => showView(btn.dataset.view)));

document.getElementById("voice-select").onchange = (e) => { prefs.voiceURI = e.target.value; savePrefs(); };
document.getElementById("voice-test-btn").onclick = () => speak("Hi, I'd like to walk you through this quarter's results.");
document.getElementById("rate-range").oninput = (e) => {
  prefs.rate = +e.target.value;
  document.getElementById("rate-value").textContent = prefs.rate;
  savePrefs();
};
document.getElementById("reset-progress-btn").onclick = () => {
  if (confirm("정말로 전체 학습 기록을 초기화할까요? 되돌릴 수 없어요.")) {
    state = { completed: {}, streak: { count: 0, lastDate: null } };
    saveState();
    renderSettings();
    renderHome();
  }
};

// ---------- 부트스트랩 ----------
if (firebaseReady) {
  onAuthStateChanged(auth, (user) => {
    if (user) { currentUser = user; startFirestoreSync(user.uid); showAppShell(); }
    else { currentUser = null; stopFirestoreSync(); }
  });
}
showLoginView();
