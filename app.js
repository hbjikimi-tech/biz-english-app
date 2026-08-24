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
      { completed: {}, streak: { count: 0, lastDate: null }, wrongItems: {} },
      JSON.parse(localStorage.getItem(LOCAL_KEY))
    );
  } catch (e) {
    return { completed: {}, streak: { count: 0, lastDate: null }, wrongItems: {} };
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
    return Object.assign({ voiceURI: null, voiceBURI: null, rate: 0.9 }, JSON.parse(localStorage.getItem(PREFS_KEY)));
  } catch (e) {
    return { voiceURI: null, voiceBURI: null, rate: 0.9 };
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
      state.wrongItems = remote.wrongItems || {};
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
    { completed: state.completed, streak: state.streak, wrongItems: state.wrongItems },
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

// ---------- 오답 기록/복습 ----------
function recordAnswer(id, day, type, qIndex, correct) {
  if (correct) {
    if (state.wrongItems[id]) { delete state.wrongItems[id]; saveState(); }
  } else {
    const prev = state.wrongItems[id];
    state.wrongItems[id] = { day, type, qIndex, missCount: (prev ? prev.missCount : 0) + 1, lastWrongAt: new Date().toISOString() };
    saveState();
  }
}
function getQuestionByRef(ref) {
  const d = getDayData(ref.day);
  if (!d) return null;
  if (ref.type === "vocab") return d.vocabQuiz[ref.qIndex];
  if (ref.type === "listening") return d.listeningQuiz[ref.qIndex];
  if (ref.type === "reading") return d.reading.questions[ref.qIndex];
  return null;
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
const FEMALE_NAME_HINTS = /samantha|ava|zoe|karen|moira|tessa|allison|victoria|susan|kate|nicky|kathy|sandy|shelley|flo|grandma|princess|tina|alice|anna|alva|monica|luciana|melina/i;
const MALE_NAME_HINTS = /daniel|alex$|fred|ralph|aaron|tom|nathan|evan|rishi|arthur|oliver|gordon|junior|reed|rocko|grandpa|albert|eddy/i;
function voiceGender(v) {
  if (FEMALE_NAME_HINTS.test(v.name)) return "f";
  if (MALE_NAME_HINTS.test(v.name)) return "m";
  return "u";
}
function bestVoiceBURI(primaryURI) {
  if (voicesCache.length < 2) return null;
  const primary = voicesCache.find((v) => v.voiceURI === primaryURI);
  const primaryGender = primary ? voiceGender(primary) : "u";
  const others = voicesCache.filter((v) => v.voiceURI !== primaryURI);
  const oppositeGender = others.filter((v) => primaryGender !== "u" && voiceGender(v) !== "u" && voiceGender(v) !== primaryGender);
  const pool = oppositeGender.length ? oppositeGender : others;
  return [...pool].sort((a, b) => voiceScore(b) - voiceScore(a))[0].voiceURI;
}
function speakerVoiceURI(speaker) {
  if (speaker === "A") return prefs.voiceURI || bestVoiceURI();
  return prefs.voiceBURI || bestVoiceBURI(prefs.voiceURI || bestVoiceURI()) || prefs.voiceURI || bestVoiceURI();
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
    await speak(line.en, { voiceURI: speakerVoiceURI(line.speaker), pitch: line.speaker === "A" ? 1 : 0.92 });
    await sleep(250);
  }
}

// ---------- 녹음(쉐도잉) ----------
function recordFor(ms) {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const chunks = [];
      const rec = new MediaRecorder(stream);
      rec.ondataavailable = (e) => chunks.push(e.data);
      rec.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.onended = resolve;
        audio.onerror = resolve;
        audio.play();
      };
      rec.start();
      setTimeout(() => { if (rec.state === "recording") rec.stop(); }, ms);
    }).catch(reject);
  });
}
async function listenAndRepeat(line, btnEl) {
  if (btnEl.disabled) return;
  btnEl.disabled = true;
  btnEl.textContent = "🔊";
  await speak(line.en, { voiceURI: speakerVoiceURI(line.speaker), pitch: line.speaker === "A" ? 1 : 0.92 });
  await sleep(400);
  btnEl.textContent = "🎙";
  btnEl.classList.add("rec", "recording");
  try {
    await recordFor(4000);
  } catch (e) {
    alert("마이크 사용 권한이 필요해요. 브라우저 설정에서 마이크 접근을 허용해주세요.");
  }
  btnEl.classList.remove("rec", "recording");
  btnEl.textContent = "🎧";
  btnEl.disabled = false;
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
  const wrongCount = Object.keys(state.wrongItems || {}).length;
  const reviewCard = document.getElementById("review-card");
  if (wrongCount > 0) {
    reviewCard.style.display = "";
    document.getElementById("review-count-text").textContent = `틀렸던 문제 ${wrongCount}개가 쌓여있어요`;
  } else {
    reviewCard.style.display = "none";
  }
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
  const selB = document.getElementById("voice-select-b");
  if (!voicesCache.length) {
    sel.innerHTML = `<option>사용 가능한 영어 음성이 없어요</option>`;
    selB.innerHTML = `<option>사용 가능한 영어 음성이 없어요</option>`;
    return;
  }
  const optionsHtml = voicesCache.map((v) => `<option value="${esc(v.voiceURI)}">${esc(v.name)} (${esc(v.lang)})</option>`).join("");
  sel.innerHTML = optionsHtml;
  selB.innerHTML = optionsHtml;
  if (!prefs.voiceURI) prefs.voiceURI = bestVoiceURI();
  if (!prefs.voiceBURI) prefs.voiceBURI = bestVoiceBURI(prefs.voiceURI);
  sel.value = prefs.voiceURI || "";
  selB.value = prefs.voiceBURI || prefs.voiceURI || "";
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
let reviewState = null;
let inReview = false;
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
function wireInlineQA(root, prefix, questions, day, type) {
  root.querySelectorAll(`[data-qkey^="${prefix}-"] .qa-option`).forEach((btn) => {
    btn.onclick = () => {
      const card = btn.closest(".qa-card");
      if (card.dataset.answered) return;
      card.dataset.answered = "1";
      const qi = +btn.dataset.qi, oi = +btn.dataset.oi;
      const q = questions[qi];
      const correct = oi === q.answer;
      card.querySelectorAll(".qa-option").forEach((b) => (b.disabled = true));
      if (correct) btn.classList.add("correct");
      else {
        btn.classList.add("wrong");
        card.querySelector(`.qa-option[data-oi="${q.answer}"]`).classList.add("correct");
      }
      if (day && type) recordAnswer(`${type[0]}${day}-${qi}`, day, type, qi, correct);
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
  html += `<div class="step-sub" style="margin-bottom:12px;">🎧 버튼을 누르면 재생 → 따라 말하기 녹음 → 내 목소리 재생까지 자동으로 이어져요. 어색했으면 같은 버튼을 다시 누르면 반복돼요.</div>`;
  html += `<div class="play-all-row"><button class="btn btn-primary" id="play-all-btn">▶ 전체 재생 (듣기만)</button><button class="btn btn-outline" id="stop-play-btn">⏹ 정지</button></div>`;
  d.dialogue.lines.forEach((line, i) => {
    html += `<div class="dialogue-line">
      <div class="spk ${line.speaker}">${line.speaker}</div>
      <div class="en">${esc(line.en)}</div>
      <div class="btns">
        <button class="icon-btn listen-repeat-btn" data-i="${i}" title="듣고 따라하기">🎧</button>
      </div>
    </div>`;
  });
  html += `<div class="section-title">🎯 리스닝 확인</div>`;
  d.listeningQuiz.forEach((q, qi) => (html += renderInlineQA("lq", qi, q)));
  html += navRow(true, "다음: 리딩 →");
  content().innerHTML = html;
  content().querySelectorAll(".listen-repeat-btn").forEach((btn) => {
    btn.onclick = () => listenAndRepeat(d.dialogue.lines[+btn.dataset.i], btn);
  });
  document.getElementById("play-all-btn").onclick = () => playSequence(d.dialogue.lines);
  document.getElementById("stop-play-btn").onclick = () => window.speechSynthesis.cancel();
  wireInlineQA(content(), "lq", d.listeningQuiz, d.day, "listening");
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
  wireInlineQA(content(), "rq", d.reading.questions, d.day, "reading");
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
      recordAnswer(`v${d.day}-${lessonState.quizIndex}`, d.day, "vocab", lessonState.quizIndex, correct);
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

function startReview() {
  const ids = Object.keys(state.wrongItems);
  if (!ids.length) { alert("복습할 틀린 문제가 없어요!"); return; }
  reviewState = { ids, index: 0, correctCount: 0 };
  inReview = true;
  showView("lesson");
  renderReviewStep();
}
const TYPE_LABEL = { vocab: "어휘", listening: "리스닝", reading: "리딩" };
function renderReviewStep() {
  document.getElementById("lesson-steps").innerHTML =
    `<div style="flex:1;text-align:center;font-size:12px;color:var(--text-soft);">🔁 오답 복습 ${reviewState.index + 1} / ${reviewState.ids.length}</div>`;
  const id = reviewState.ids[reviewState.index];
  const ref = state.wrongItems[id];
  const q = ref ? getQuestionByRef(ref) : null;
  const d = ref ? getDayData(ref.day) : null;
  if (!ref || !q || !d) { nextReviewItem(); return; }
  let html = `<div class="step-title">🔁 오답 복습</div><div class="step-sub">Day ${ref.day} · ${esc(d.titleKo)} · ${TYPE_LABEL[ref.type]}</div>`;
  html += `<div class="quiz-question"><div class="qtext">${esc(q.qKo)}</div></div>`;
  html += `<div class="quiz-options">` + q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${esc(opt)}</button>`).join("") + `</div>`;
  content().innerHTML = html;
  content().querySelectorAll(".quiz-option").forEach((btn) => {
    btn.onclick = () => {
      const i = +btn.dataset.i;
      const correct = i === q.answer;
      content().querySelectorAll(".quiz-option").forEach((b) => (b.disabled = true));
      if (correct) { btn.classList.add("correct"); reviewState.correctCount++; }
      else {
        btn.classList.add("wrong");
        content().querySelector(`.quiz-option[data-i="${q.answer}"]`).classList.add("correct");
      }
      recordAnswer(id, ref.day, ref.type, ref.qIndex, correct);
      setTimeout(nextReviewItem, 900);
    };
  });
}
function nextReviewItem() {
  reviewState.index++;
  if (reviewState.index < reviewState.ids.length) renderReviewStep();
  else finishReview();
}
function finishReview() {
  inReview = false;
  const remaining = Object.keys(state.wrongItems).length;
  document.getElementById("lesson-steps").innerHTML = "";
  let html = `<div class="done-wrap">
    <div class="emoji">🔁</div>
    <div class="big-num">${reviewState.correctCount} / ${reviewState.ids.length}</div>
    <div class="sub">복습 완료! ${remaining > 0 ? remaining + "개는 아직 복습이 더 필요해요." : "모두 정답이에요, 오답노트 클리어! 🎉"}</div>
    <button class="btn btn-primary btn-block" id="review-done-home-btn">홈으로</button>
  </div>`;
  content().innerHTML = html;
  document.getElementById("review-done-home-btn").onclick = () => showView("home");
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
  if (inReview) { inReview = false; showView("home"); return; }
  if (confirm("학습을 종료하고 홈으로 돌아갈까요? (현재 단계까지는 저장되지 않아요)")) showView("home");
};
document.getElementById("home-view-all-btn").onclick = () => showView("days");
document.getElementById("review-start-btn").onclick = () => startReview();
document.querySelectorAll("#bottom-nav button").forEach((btn) => (btn.onclick = () => showView(btn.dataset.view)));

document.getElementById("voice-select").onchange = (e) => { prefs.voiceURI = e.target.value; savePrefs(); };
document.getElementById("voice-select-b").onchange = (e) => { prefs.voiceBURI = e.target.value; savePrefs(); };
document.getElementById("voice-test-btn").onclick = () => speak("Hi, I'd like to walk you through this quarter's results.", { voiceURI: prefs.voiceURI });
document.getElementById("voice-test-btn-b").onclick = () => speak("Sure, that sounds good to me.", { voiceURI: prefs.voiceBURI, pitch: 0.92 });
document.getElementById("rate-range").oninput = (e) => {
  prefs.rate = +e.target.value;
  document.getElementById("rate-value").textContent = prefs.rate;
  savePrefs();
};
document.getElementById("reset-progress-btn").onclick = () => {
  if (confirm("정말로 전체 학습 기록을 초기화할까요? 되돌릴 수 없어요.")) {
    state = { completed: {}, streak: { count: 0, lastDate: null }, wrongItems: {} };
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
