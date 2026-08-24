// Week 2: Meetings (Day 7-12)
const WEEK2 = [
  {
    day: 7,
    week: 2,
    titleKo: "미팅 잡기",
    titleEn: "Scheduling & Setting Up Meetings",
    phrases: [
      { en: "Do you have some time to hop on a call this week?", ko: "이번 주에 통화할 시간 있으세요?", tip: "미팅 제안할 때 캐주얼하게" },
      { en: "Does Thursday at 2pm work for you?", ko: "목요일 오후 2시 괜찮으세요?", tip: "구체적인 시간 제안" },
      { en: "I'm afraid something's come up — could we push it to Friday?", ko: "일이 좀 생겨서요, 금요일로 미룰 수 있을까요?", tip: "리스케줄 요청" },
      { en: "Let's lock in a time before we all get busy.", ko: "다들 바빠지기 전에 시간을 확정해둡시다.", tip: "일정 확정 재촉" },
      { en: "I'll send a calendar invite with the agenda attached.", ko: "안건을 첨부해서 캘린더 초대를 보낼게요.", tip: "미팅 준비 마무리 멘트" },
      { en: "Could we keep it to 30 minutes? I have a hard stop at 3.", ko: "30분 안에 끝낼 수 있을까요? 3시에 다른 일정이 있어서요.", tip: "시간 제약 미리 알리기" }
    ],
    dialogue: {
      situationKo: "다음 프로젝트 킥오프 미팅 일정을 잡기 위한 동료 간 대화",
      lines: [
        { speaker: "A", en: "Hey, do you have some time to hop on a call this week about the kickoff?" },
        { speaker: "B", en: "Sure, I should be free most of Thursday. Does 2pm work for you?" },
        { speaker: "A", en: "Let me check... actually I have a client call at 2. Could we do 3:30 instead?" },
        { speaker: "B", en: "3:30 works. Should we invite the design team too?" },
        { speaker: "A", en: "Good call. I'll loop them in on the invite." },
        { speaker: "B", en: "Could we keep it to 30 minutes? I have a hard stop at 4:15." },
        { speaker: "A", en: "No problem, 30 minutes should be enough for a first pass." },
        { speaker: "B", en: "Sounds good. I'm afraid I might need to push my own update slightly — I'll confirm by Wednesday." },
        { speaker: "A", en: "That's fine, just let me know. I'll send the calendar invite with the agenda attached." },
        { speaker: "B", en: "Perfect, talk to you Thursday then." }
      ]
    },
    listeningQuiz: [
      { qKo: "처음 제안된 미팅 시간은?", options: ["목요일 오후 2시", "목요일 오전 10시", "금요일 오후 3시", "월요일 오후 2시"], answer: 0 },
      { qKo: "최종적으로 확정된 미팅 시간은?", options: ["목요일 3시 30분", "목요일 4시 15분", "금요일 3시 30분", "목요일 2시 30분"], answer: 0 },
      { qKo: "B가 요청한 것은?", options: ["미팅을 취소하자", "미팅을 30분으로 제한하자", "디자인팀을 빼자", "미팅을 다음 주로 미루자"], answer: 1 }
    ],
    reading: {
      passage: "Scheduling a meeting sounds simple, but doing it well is a skill. The first rule is to be specific: instead of asking \"Are you free sometime this week?\", suggest an actual day and time, such as \"Does Thursday at 2pm work for you?\" This makes it much easier for the other person to say yes or propose an alternative. The second rule is to respect everyone's time. If you only need thirty minutes, say so upfront, and stick to it. Long, vague meetings are one of the biggest complaints in modern offices. Finally, always confirm in writing. A quick calendar invite with a short agenda attached prevents confusion and gives people a chance to prepare. When plans change, don't just disappear — send a short message explaining that something has come up and proposing a new time as soon as possible.",
      questions: [
        { qKo: "미팅 제안 시 좋은 방법은?", options: ["막연하게 '이번 주 언제' 물어본다", "구체적인 요일과 시간을 제안한다", "상대방이 먼저 제안할 때까지 기다린다", "이메일로만 소통한다"], answer: 1 },
        { qKo: "일정이 바뀔 때 해야 할 일은?", options: ["아무 말 없이 잠수한다", "사정을 설명하고 새 시간을 제안한다", "다음 미팅에서 설명한다", "다른 사람에게 대신 전달하게 한다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "동료에게 다음 주 프로젝트 리뷰 미팅을 제안하는 2~3문장짜리 메시지를 영어로 써보세요. (요일/시간 포함)",
      promptEn: "Write a 2-3 sentence message proposing a project review meeting for next week.",
      modelAnswer: "Do you have some time to hop on a call next Tuesday to review the project? Does 10am work for you? I'll send a calendar invite with the agenda once you confirm."
    },
    vocabQuiz: [
      { qKo: "'목요일 오후 2시 괜찮으세요?'는 영어로?", options: ["Does Thursday at 2pm work for you?", "Is Thursday over yet?", "Can you come on Thursday morning?", "Do you like Thursdays?"], answer: 0 },
      { qKo: "'일이 좀 생겨서요'는 영어로?", options: ["Something's come up.", "Nothing happened.", "I'm always busy.", "I forgot everything."], answer: 0 },
      { qKo: "'3시에 다른 일정이 있어서요'라고 시간 제약을 알릴 때는?", options: ["I have a hard stop at 3.", "I never have plans.", "3 o'clock is my favorite time.", "I'm free all day."], answer: 0 },
      { qKo: "'안건을 첨부해서 캘린더 초대를 보낼게요'는 영어로?", options: ["I'll send a calendar invite with the agenda attached.", "I'll call you when I'm free.", "I'll cancel the meeting.", "I'll forget about the agenda."], answer: 0 },
      { qKo: "'다들 바빠지기 전에 시간을 확정해둡시다'는?", options: ["Let's lock in a time before we all get busy.", "Let's wait until everyone is free.", "Let's cancel before it's too late.", "Let's not worry about scheduling."], answer: 0 }
    ]
  },
  {
    day: 8,
    week: 2,
    titleKo: "미팅 시작하고 진행하기",
    titleEn: "Opening & Leading a Meeting",
    phrases: [
      { en: "Thanks everyone for joining, let's go ahead and get started.", ko: "참석해주셔서 감사합니다, 바로 시작하겠습니다.", tip: "미팅 시작 인사" },
      { en: "Today's goal is to align on the Q3 roadmap.", ko: "오늘 목표는 3분기 로드맵에 대해 합의를 보는 것입니다.", tip: "미팅 목표 제시" },
      { en: "Let's run through the agenda quickly before we dive in.", ko: "본격적으로 들어가기 전에 안건을 빠르게 훑어보죠.", tip: "안건 소개" },
      { en: "I'll hand it over to Minji to kick things off.", ko: "민지님이 먼저 시작해주시겠어요.", tip: "발언 순서 넘기기" },
      { en: "Let's keep an eye on the time so we cover everything.", ko: "모든 안건을 다루려면 시간을 좀 신경 써야겠어요.", tip: "시간 관리 언급" },
      { en: "Feel free to jump in with questions as we go.", ko: "진행하면서 궁금한 점 있으면 편하게 말씀해주세요.", tip: "참여 유도" }
    ],
    dialogue: {
      situationKo: "팀 리더가 3분기 로드맵 정렬 미팅을 시작하는 상황",
      lines: [
        { speaker: "A", en: "Thanks everyone for joining, let's go ahead and get started." },
        { speaker: "B", en: "Sounds good. Are we still waiting on anyone?" },
        { speaker: "A", en: "No, I think we're all here. Today's goal is to align on the Q3 roadmap." },
        { speaker: "B", en: "Great, I've been looking forward to this one." },
        { speaker: "A", en: "Let's run through the agenda quickly before we dive in — three items today." },
        { speaker: "B", en: "Works for me." },
        { speaker: "A", en: "First up, I'll hand it over to Minji to kick things off with the budget update." },
        { speaker: "B", en: "Sure, give me one second to share my screen." },
        { speaker: "A", en: "Take your time. Everyone, feel free to jump in with questions as we go." },
        { speaker: "B", en: "Will do. Let's keep an eye on the time too, since we have a lot to cover." }
      ]
    },
    listeningQuiz: [
      { qKo: "오늘 미팅의 목표는?", options: ["신입사원 오리엔테이션", "3분기 로드맵 합의", "연봉 협상", "고객 컴플레인 처리"], answer: 1 },
      { qKo: "안건은 총 몇 개인가요?", options: ["1개", "2개", "3개", "4개"], answer: 2 },
      { qKo: "가장 먼저 발언하는 사람은?", options: ["A", "Minji", "고객", "발언자 없음"], answer: 1 }
    ],
    reading: {
      passage: "How a meeting starts often determines how productive it will be. A strong opener does three things quickly: it welcomes people, states the goal, and previews the agenda. Instead of jumping straight into slides, an effective leader might say, \"Thanks everyone for joining. Today's goal is to align on the Q3 roadmap, and we have three items to cover.\" This gives everyone a mental map before the discussion begins. It's also useful to assign speaking order early — for example, handing the floor to a specific person to kick things off — so there's no awkward silence about who goes first. Good leaders also set expectations about participation, inviting people to jump in with questions rather than saving everything for the end. Finally, keeping an eye on the clock and gently steering the conversation back on track when it wanders is one of the most underrated meeting skills.",
      questions: [
        { qKo: "효과적인 미팅 오프닝이 하는 세 가지는?", options: ["환영, 목표 제시, 안건 미리보기", "인사, 커피, 잡담", "발표, 질문, 마무리", "출석 체크, 사진 촬영, 휴식"], answer: 0 },
        { qKo: "이 글에서 말하는 과소평가된 미팅 스킬은?", options: ["시간 관리 및 대화 흐름 조율", "빠르게 말하기", "슬라이드를 많이 준비하기", "회의를 길게 끌기"], answer: 0 }
      ]
    },
    writing: {
      promptKo: "신제품 출시 회의를 시작하는 오프닝 멘트를 2~3문장으로 영어로 써보세요. (목표와 안건 포함)",
      promptEn: "Write a 2-3 sentence opening for a meeting about a new product launch.",
      modelAnswer: "Thanks everyone for joining, let's go ahead and get started. Today's goal is to finalize the launch timeline, and we have two items on the agenda. I'll run through them quickly before we dive in."
    },
    vocabQuiz: [
      { qKo: "'바로 시작하겠습니다'는 영어로?", options: ["Let's go ahead and get started.", "Let's wait a bit longer.", "Let's end the meeting.", "Let's take a break."], answer: 0 },
      { qKo: "'오늘 목표는 ~에 합의를 보는 것입니다'는?", options: ["Today's goal is to align on...", "Today's goal is to cancel...", "Today's goal is to forget...", "Today's goal is to postpone..."], answer: 0 },
      { qKo: "'민지님이 먼저 시작해주시겠어요'는 영어로?", options: ["I'll hand it over to Minji to kick things off.", "Minji is not joining today.", "Let's skip Minji's part.", "Minji will speak last."], answer: 0 },
      { qKo: "'진행하면서 궁금한 점 있으면 편하게 말씀해주세요'는?", options: ["Feel free to jump in with questions as we go.", "Please hold all questions forever.", "Don't interrupt me.", "Questions are not allowed."], answer: 0 },
      { qKo: "'본격적으로 들어가기 전에 안건을 빠르게 훑어보죠'는 영어로?", options: ["Let's run through the agenda quickly before we dive in.", "Let's skip the agenda entirely.", "Let's end early today.", "Let's talk about lunch first."], answer: 0 }
    ]
  },
  {
    day: 9,
    week: 2,
    titleKo: "의견 제시하고 제안하기",
    titleEn: "Giving Opinions & Suggestions",
    phrases: [
      { en: "From my perspective, we should prioritize speed over polish.", ko: "제 생각에는 완성도보다 속도를 우선시해야 할 것 같아요.", tip: "직접적으로 의견 제시" },
      { en: "I might be wrong, but I think we're underestimating the cost.", ko: "제가 틀릴 수도 있지만, 비용을 과소평가하고 있는 것 같아요.", tip: "완곡하게 의견 제시" },
      { en: "What if we tried a smaller pilot first?", ko: "먼저 소규모로 파일럿을 해보면 어떨까요?", tip: "제안할 때" },
      { en: "It might be worth considering a different vendor.", ko: "다른 업체를 고려해보는 것도 괜찮을 것 같아요.", tip: "완곡한 제안" },
      { en: "Just to play devil's advocate, what happens if the deadline slips?", ko: "일부러 반대 입장에서 말하자면, 마감이 늦어지면 어떻게 되죠?", tip: "일부러 반박 관점 제시할 때" },
      { en: "I'd lean towards option B, mainly because of the budget.", ko: "예산 때문에 저는 B안 쪽으로 기울어요.", tip: "선호 의견 표현" }
    ],
    dialogue: {
      situationKo: "신규 벤더 선정에 대해 팀원들이 각자 의견을 나누는 미팅",
      lines: [
        { speaker: "A", en: "So, what does everyone think about the two vendor proposals?" },
        { speaker: "B", en: "From my perspective, we should prioritize speed over polish, so I'd go with Vendor A." },
        { speaker: "A", en: "I might be wrong, but I think we're underestimating the cost difference." },
        { speaker: "B", en: "That's fair. What if we asked both vendors for a revised quote?" },
        { speaker: "A", en: "Good idea. It might be worth considering a smaller pilot first too." },
        { speaker: "B", en: "Just to play devil's advocate, what happens if the pilot delays the whole rollout?" },
        { speaker: "A", en: "That's a real risk, but I'd lean towards the pilot anyway, mainly because it reduces our exposure." },
        { speaker: "B", en: "Makes sense. I can see the logic there." },
        { speaker: "A", en: "Let's note both options and bring updated numbers next week." },
        { speaker: "B", en: "Sounds like a plan." }
      ]
    },
    listeningQuiz: [
      { qKo: "B가 처음에 선호한 벤더는?", options: ["Vendor A", "Vendor B", "둘 다 반대", "결정 못함"], answer: 0 },
      { qKo: "A가 우려하는 점은?", options: ["일정 지연", "비용을 과소평가하고 있다는 점", "품질 문제", "인력 부족"], answer: 1 },
      { qKo: "두 사람이 최종적으로 하기로 한 것은?", options: ["즉시 계약 체결", "업데이트된 수치를 가지고 다음 주에 다시 논의", "미팅 취소", "다른 팀에 결정 위임"], answer: 1 }
    ],
    reading: {
      passage: "Sharing an opinion in a meeting is a balancing act. Say it too bluntly, and you might come across as dismissive of other people's work. Say it too softly, and your point might get lost entirely. Skilled communicators use a range of phrases depending on the situation. When they feel strongly, they might say, \"From my perspective, we should prioritize speed over polish.\" When they want to soften a potentially unpopular view, they might add a cushion first: \"I might be wrong, but I think we're underestimating the cost.\" Suggestions work best as questions rather than commands — \"What if we tried a smaller pilot first?\" invites collaboration instead of shutting down debate. Sometimes it even helps to explicitly flag that you're taking a contrary position, using a phrase like \"just to play devil's advocate,\" so no one thinks you're being difficult for its own sake.",
      questions: [
        { qKo: "의견을 너무 직설적으로 말하면 생기는 문제는?", options: ["상대방을 무시하는 것처럼 보일 수 있다", "회의가 너무 짧아진다", "아무 문제 없다", "회의가 취소된다"], answer: 0 },
        { qKo: "제안할 때 명령형보다 좋은 방식은?", options: ["질문 형태로 제안하기", "크게 소리치기", "이메일로만 전달하기", "회의 후에 말하기"], answer: 0 }
      ]
    },
    writing: {
      promptKo: "팀 회의에서 마케팅 예산 증액에 대해 완곡하게 반대 의견을 제시하는 2~3문장을 영어로 써보세요.",
      promptEn: "Write a 2-3 sentence response gently disagreeing with increasing the marketing budget.",
      modelAnswer: "I might be wrong, but I think we should hold off on increasing the budget this quarter. What if we tried reallocating existing funds first? It might be worth revisiting this after we see the Q3 results."
    },
    vocabQuiz: [
      { qKo: "'제 생각에는'이라고 직접적으로 의견을 말할 때는?", options: ["From my perspective,", "I have no opinion,", "Never mind,", "Forget it,"], answer: 0 },
      { qKo: "'제가 틀릴 수도 있지만'이라고 완곡하게 시작할 때는?", options: ["I might be wrong, but", "I am always right,", "I don't care, but", "I refuse to say,"], answer: 0 },
      { qKo: "'먼저 소규모로 파일럿을 해보면 어떨까요?'는 영어로?", options: ["What if we tried a smaller pilot first?", "We must do a full rollout.", "Let's cancel the pilot.", "Pilots are a waste of time."], answer: 0 },
      { qKo: "'일부러 반대 입장에서 말하자면'은?", options: ["Just to play devil's advocate,", "Just to agree with everyone,", "Just to change the subject,", "Just to end the meeting,"], answer: 0 },
      { qKo: "'예산 때문에 저는 B안 쪽으로 기울어요'는 영어로?", options: ["I'd lean towards option B, mainly because of the budget.", "I hate option B because of the budget.", "The budget doesn't matter at all.", "I refuse to choose an option."], answer: 0 }
    ]
  },
  {
    day: 10,
    week: 2,
    titleKo: "동의, 반대, 명확히 하기",
    titleEn: "Agreeing, Disagreeing & Clarifying",
    phrases: [
      { en: "That's a fair point, and I'd add one thing.", ko: "맞는 말씀이에요, 한 가지만 덧붙이자면요.", tip: "동의하면서 의견 추가" },
      { en: "I see it a bit differently, if I'm honest.", ko: "솔직히 말하면 저는 좀 다르게 생각해요.", tip: "정중하게 반대 표현" },
      { en: "Sorry, could you clarify what you mean by 'scalable'?", ko: "죄송한데, '확장 가능하다'는 게 정확히 무슨 뜻인지 설명해주실 수 있나요?", tip: "명확히 질문하기" },
      { en: "So, just to make sure I understand — you're saying we should delay the launch?", ko: "제가 제대로 이해했는지 확인차, 출시를 미뤄야 한다는 말씀이신 거죠?", tip: "재확인 질문" },
      { en: "I can see where you're coming from, but I have some reservations.", ko: "무슨 말씀인지 이해는 되지만, 약간 우려되는 점이 있어요.", tip: "이해하지만 우려 표현" },
      { en: "Let's agree to disagree for now and revisit this later.", ko: "일단은 이견을 인정하고 나중에 다시 논의합시다.", tip: "합의 안 될 때 마무리" }
    ],
    dialogue: {
      situationKo: "출시 일정을 미룰지 말지에 대해 의견이 갈리는 팀원들의 대화",
      lines: [
        { speaker: "A", en: "I think we should delay the launch by two weeks to fix the remaining bugs." },
        { speaker: "B", en: "That's a fair point, and I'd add that QA has flagged three critical issues." },
        { speaker: "A", en: "Right, exactly my concern." },
        { speaker: "B", en: "I see it a bit differently, if I'm honest — I worry a delay hurts our market timing." },
        { speaker: "A", en: "Sorry, could you clarify what you mean by 'market timing'?" },
        { speaker: "B", en: "I mean our competitor is launching next month, so we'd lose the first-mover advantage." },
        { speaker: "A", en: "So, just to make sure I understand — you're saying we should launch on time even with known bugs?" },
        { speaker: "B", en: "Not exactly, just the minor ones. The critical bugs still need fixing." },
        { speaker: "A", en: "I can see where you're coming from, but I have some reservations about shipping with any known bugs." },
        { speaker: "B", en: "Fair enough. Let's agree to disagree for now and bring this to leadership." }
      ]
    },
    listeningQuiz: [
      { qKo: "A가 처음 제안한 것은?", options: ["즉시 출시", "2주 출시 연기", "프로젝트 취소", "가격 인하"], answer: 1 },
      { qKo: "B가 우려하는 것은?", options: ["QA 팀 부족", "경쟁사보다 늦게 출시하는 것", "예산 초과", "고객 불만"], answer: 1 },
      { qKo: "대화 마지막에 두 사람이 하기로 한 것은?", options: ["즉시 합의", "리더십에 안건을 가져가기", "미팅 취소", "각자 결정하기"], answer: 1 }
    ],
    reading: {
      passage: "Disagreeing in a meeting doesn't have to be uncomfortable if you use the right language. Rather than flatly saying \"I disagree,\" experienced professionals often soften the delivery: \"I see it a bit differently, if I'm honest,\" or \"I can see where you're coming from, but I have some reservations.\" These phrases acknowledge the other person's view before introducing a different one, which keeps the conversation collaborative rather than combative. Clarifying questions are just as important. Vague terms like \"scalable\" or \"efficient\" mean different things to different people, so asking \"Could you clarify what you mean by that?\" avoids costly misunderstandings later. It also helps to paraphrase what you heard — \"So, just to make sure I understand, you're saying...\" — before responding, since this confirms you're arguing against what was actually said, not what you assumed was said. When a disagreement can't be resolved on the spot, it's often best to agree to disagree and escalate the decision.",
      questions: [
        { qKo: "정중하게 반대하는 방법으로 소개된 것은?", options: ["상대 의견을 인정한 뒤 다른 의견 제시", "무조건 침묵하기", "회의를 나가버리기", "다른 사람에게 대신 말하게 하기"], answer: 0 },
        { qKo: "재확인(paraphrasing) 질문이 중요한 이유는?", options: ["실제로 들은 내용에 대해 반박하기 위해", "회의 시간을 늘리기 위해", "상대를 무시하기 위해", "메모를 줄이기 위해"], answer: 0 }
      ]
    },
    writing: {
      promptKo: "동료의 의견에 정중하게 반대하면서 명확히 확인하는 질문을 포함한 2~3문장을 영어로 써보세요.",
      promptEn: "Write a 2-3 sentence response politely disagreeing with a colleague and asking a clarifying question.",
      modelAnswer: "I see it a bit differently, if I'm honest — I think the timeline is too tight. Sorry, could you clarify what you mean by 'flexible deadline'? So, just to make sure I understand, are we still targeting the end of the month?"
    },
    vocabQuiz: [
      { qKo: "'맞는 말씀이에요, 한 가지만 덧붙이자면요'는 영어로?", options: ["That's a fair point, and I'd add one thing.", "That's completely wrong.", "I don't want to hear it.", "That's not my problem."], answer: 0 },
      { qKo: "'솔직히 말하면 저는 좀 다르게 생각해요'는?", options: ["I see it a bit differently, if I'm honest.", "I totally agree with everything.", "I have no thoughts on this.", "Let's stop talking."], answer: 0 },
      { qKo: "'죄송한데, ~가 무슨 뜻인지 설명해주실 수 있나요?'는 영어로?", options: ["Sorry, could you clarify what you mean by...?", "Sorry, I already know everything.", "Sorry, please stop explaining.", "Sorry, that's irrelevant."], answer: 0 },
      { qKo: "'제가 제대로 이해했는지 확인차'는?", options: ["Just to make sure I understand,", "Just to end the meeting,", "Just to change the topic,", "Just to be rude,"], answer: 0 },
      { qKo: "'일단은 이견을 인정하고 나중에 다시 논의합시다'는 영어로?", options: ["Let's agree to disagree for now and revisit this later.", "Let's never speak of this again.", "Let's force a decision right now.", "Let's ignore the disagreement."], answer: 0 }
    ]
  },
  {
    day: 11,
    week: 2,
    titleKo: "마무리: 액션 아이템과 다음 단계",
    titleEn: "Wrapping Up: Action Items & Next Steps",
    phrases: [
      { en: "Let's wrap up by going over the action items.", ko: "액션 아이템을 정리하면서 마무리하겠습니다.", tip: "미팅 마무리 시작" },
      { en: "Who's going to own this task?", ko: "이 업무는 누가 맡을 건가요?", tip: "담당자 정하기" },
      { en: "Can we set a deadline for that — say, next Wednesday?", ko: "그거 기한을 정할까요, 다음 주 수요일 정도로요?", tip: "기한 정하기" },
      { en: "To summarize, we've agreed on three things.", ko: "요약하자면, 세 가지에 합의했습니다.", tip: "요약할 때" },
      { en: "I'll send out the minutes right after this call.", ko: "이 통화 끝나고 바로 회의록을 보내드릴게요.", tip: "회의록 안내" },
      { en: "Let's touch base again next week to check progress.", ko: "진행 상황 확인차 다음 주에 다시 이야기해요.", tip: "다음 미팅 예고" }
    ],
    dialogue: {
      situationKo: "프로젝트 진행 회의를 마무리하며 액션 아이템을 정리하는 대화",
      lines: [
        { speaker: "A", en: "We're almost out of time, so let's wrap up by going over the action items." },
        { speaker: "B", en: "Sounds good. First, the vendor comparison — who's going to own this task?" },
        { speaker: "A", en: "I can take that one. Can we set a deadline for that — say, next Wednesday?" },
        { speaker: "B", en: "Works for me. Second, updating the budget sheet." },
        { speaker: "A", en: "I'll handle that by Friday." },
        { speaker: "B", en: "Great. To summarize, we've agreed on three things: vendor comparison by Wednesday, budget update by Friday, and a follow-up meeting next week." },
        { speaker: "A", en: "That covers it. I'll send out the minutes right after this call." },
        { speaker: "B", en: "Perfect, thanks for leading today." },
        { speaker: "A", en: "No problem. Let's touch base again next week to check progress." },
        { speaker: "B", en: "Sounds good, talk then." }
      ]
    },
    listeningQuiz: [
      { qKo: "벤더 비교 업무의 담당자와 기한은?", options: ["A, 수요일", "B, 금요일", "A, 금요일", "B, 수요일"], answer: 0 },
      { qKo: "예산 시트 업데이트는 언제까지 완료되나요?", options: ["수요일", "금요일", "다음 주 월요일", "당일"], answer: 1 },
      { qKo: "회의가 끝난 직후 A가 하기로 한 일은?", options: ["회의록 발송", "예산 검토", "고객 미팅", "휴가 신청"], answer: 0 }
    ],
    reading: {
      passage: "A meeting without clear action items is often a wasted meeting. Even a great discussion loses its value if nobody knows what to do next. That's why strong facilitators always leave time at the end to wrap up properly. This usually involves three steps. First, review what was discussed and summarize the key decisions — \"To summarize, we've agreed on three things.\" Second, assign clear ownership by asking directly, \"Who's going to own this task?\" A task with no owner rarely gets done. Third, attach a specific deadline rather than a vague one; \"soon\" or \"eventually\" almost never works, while \"by next Wednesday\" does. Finally, it's good practice to send written minutes shortly after the meeting ends, while the details are still fresh, and to schedule a follow-up to check progress. This simple habit — summarize, assign, deadline, follow up — turns talk into results.",
      questions: [
        { qKo: "회의 마무리에서 강조하는 세 가지 단계는?", options: ["요약, 담당자 지정, 기한 설정", "박수, 사진, 회식", "발표, 질문, 휴식", "출석 체크, 인사, 퇴근"], answer: 0 },
        { qKo: "글에 따르면 '곧', '나중에' 같은 표현이 문제인 이유는?", options: ["기한이 명확하지 않아 실행되지 않는다", "너무 격식 있는 표현이라서", "발음하기 어려워서", "회의 시간을 늘려서"], answer: 0 }
      ]
    },
    writing: {
      promptKo: "회의를 마무리하며 액션 아이템(담당자, 기한 포함)을 요약하는 2~3문장을 영어로 써보세요.",
      promptEn: "Write a 2-3 sentence summary wrapping up a meeting with action items, owners, and deadlines.",
      modelAnswer: "To summarize, we've agreed on two things: I'll finalize the report by Monday, and Sarah will own the client follow-up by Wednesday. I'll send out the minutes right after this call."
    },
    vocabQuiz: [
      { qKo: "'액션 아이템을 정리하면서 마무리하겠습니다'는 영어로?", options: ["Let's wrap up by going over the action items.", "Let's start from scratch.", "Let's cancel all tasks.", "Let's skip the summary."], answer: 0 },
      { qKo: "'이 업무는 누가 맡을 건가요?'는?", options: ["Who's going to own this task?", "Who is late today?", "Who wants coffee?", "Who cancelled the meeting?"], answer: 0 },
      { qKo: "'요약하자면'은 영어로?", options: ["To summarize,", "To conclude nothing,", "By the way,", "Never mind,"], answer: 0 },
      { qKo: "'이 통화 끝나고 바로 회의록을 보내드릴게요'는?", options: ["I'll send out the minutes right after this call.", "I'll never send any notes.", "I'll call you again tomorrow.", "I'll forget about the minutes."], answer: 0 },
      { qKo: "'진행 상황 확인차 다음 주에 다시 이야기해요'는 영어로?", options: ["Let's touch base again next week to check progress.", "Let's never meet again.", "Let's finish everything today.", "Let's ignore the progress."], answer: 0 }
    ]
  },
  {
    day: 12,
    week: 2,
    titleKo: "2주차 복습 — 미팅 처음부터 끝까지 진행하기",
    titleEn: "Week 2 Review — Running a Full Meeting",
    phrases: [
      { en: "Thanks everyone for joining, let's go ahead and get started.", ko: "참석해주셔서 감사합니다, 바로 시작하겠습니다.", tip: "미팅 시작 (Day 8 복습)" },
      { en: "Does Thursday's time slot still work, or should we adjust the agenda?", ko: "목요일 시간대 그대로 괜찮으세요, 아니면 안건을 조정할까요?", tip: "일정/안건 확인 (Day 7 복습)" },
      { en: "From my perspective, we should focus on the client feedback first.", ko: "제 생각에는 고객 피드백을 먼저 다뤄야 할 것 같아요.", tip: "의견 제시 (Day 9 복습)" },
      { en: "I can see where you're coming from, but let's clarify the numbers first.", ko: "무슨 말씀인지 이해는 되지만, 수치부터 명확히 하죠.", tip: "정중한 반대 + 명확화 (Day 10 복습)" },
      { en: "So, just to make sure I understand, we're moving the deadline up?", ko: "제대로 이해했는지 확인차, 마감을 앞당기는 거죠?", tip: "재확인 질문 (Day 10 복습)" },
      { en: "Let's wrap up by going over the action items and next steps.", ko: "액션 아이템과 다음 단계를 정리하며 마무리하겠습니다.", tip: "마무리 (Day 11 복습)" }
    ],
    dialogue: {
      situationKo: "7~11일차에 배운 표현을 총동원해 미팅의 시작부터 마무리까지 전 과정을 다루는 종합 다이얼로그",
      lines: [
        { speaker: "A", en: "Thanks everyone for joining, let's go ahead and get started. Does Thursday's time slot still work for everyone?" },
        { speaker: "B", en: "Yes, still good on my end. Today's goal is to finalize the client proposal, right?" },
        { speaker: "A", en: "Exactly. Let's run through the agenda quickly — feedback, budget, and next steps." },
        { speaker: "B", en: "From my perspective, we should focus on the client feedback first since it affects everything else." },
        { speaker: "A", en: "I might be wrong, but I think the budget numbers need to come first — they could change the whole proposal." },
        { speaker: "B", en: "I can see where you're coming from, but let's clarify the numbers first before deciding the order." },
        { speaker: "A", en: "Fair enough. So, just to make sure I understand, we're reviewing budget numbers, then feedback?" },
        { speaker: "B", en: "That's right. Let's agree to disagree on the order and just cover both today." },
        { speaker: "A", en: "Sounds good. Let's wrap up by going over the action items — who's going to own the client email?" },
        { speaker: "B", en: "I'll take it, by Friday. I'll send out the minutes right after this call too." }
      ]
    },
    listeningQuiz: [
      { qKo: "오늘 미팅의 목표는?", options: ["신규 채용", "클라이언트 제안서 확정", "예산 삭감", "사무실 이전"], answer: 1 },
      { qKo: "A와 B가 처음에 의견 차이를 보인 부분은?", options: ["미팅 장소", "안건 순서(피드백 vs 예산)", "참석자 명단", "미팅 시간"], answer: 1 },
      { qKo: "클라이언트 이메일 작업은 누가, 언제까지 맡기로 했나요?", options: ["A, 수요일까지", "B, 금요일까지", "A, 금요일까지", "B, 월요일까지"], answer: 1 }
    ],
    reading: {
      passage: "Running a full meeting well means moving smoothly through four stages, and this week's expressions map directly onto them. It starts with scheduling — confirming a time works and previewing the agenda. Next comes opening the meeting: welcoming people and stating a clear goal, such as finalizing a client proposal. During the discussion itself, participants share opinions, sometimes directly and sometimes with a softer opener like \"I might be wrong, but...\" Disagreements are natural at this stage, and skilled speakers handle them by acknowledging the other view before clarifying details, rather than simply repeating their own point louder. When two people can't fully agree, saying \"let's agree to disagree\" and moving forward is often more productive than forcing consensus. Finally, every good meeting closes the same way: reviewing action items, assigning an owner to each one, setting a deadline, and promising to send written minutes. Mastering these four stages turns any meeting, in any language, into time well spent.",
      questions: [
        { qKo: "이 글에서 설명하는 미팅의 네 단계는?", options: ["일정 조율, 시작, 논의, 마무리", "인사, 식사, 휴식, 퇴근", "발표, 질문, 투표, 해산", "예약, 취소, 재예약, 확정"], answer: 0 },
        { qKo: "두 사람의 의견이 완전히 합의되지 않을 때 권장되는 방법은?", options: ["한쪽 의견을 무시하고 강행한다", "이견을 인정하고 다음 단계로 넘어간다", "미팅을 무기한 연기한다", "제3자에게 결정을 미룬다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "미팅의 시작부터 마무리까지 흐름이 드러나도록, 오프닝 멘트와 마무리 멘트를 각각 한 문장씩 포함한 2~3문장을 영어로 써보세요.",
      promptEn: "Write 2-3 sentences that show a meeting's flow from opening to closing, including one opening line and one closing line.",
      modelAnswer: "Thanks everyone for joining, let's go ahead and get started — today's goal is to finalize the marketing plan. After hearing everyone's input, I can see where you're coming from on the timeline concerns. Let's wrap up by going over the action items and I'll send out the minutes right after this call."
    },
    vocabQuiz: [
      { qKo: "'바로 시작하겠습니다'는 영어로? (Day 8 복습)", options: ["Let's go ahead and get started.", "Let's cancel today.", "Let's wait forever.", "Let's skip the meeting."], answer: 0 },
      { qKo: "'제 생각에는'이라고 직접적으로 의견을 말할 때는? (Day 9 복습)", options: ["From my perspective,", "I refuse to answer,", "Forget it,", "Never mind,"], answer: 0 },
      { qKo: "'무슨 말씀인지 이해는 되지만'은 영어로? (Day 10 복습)", options: ["I can see where you're coming from, but", "I never understand you, so", "I disagree completely, so", "I don't care, but"], answer: 0 },
      { qKo: "'제대로 이해했는지 확인차'는? (Day 10 복습)", options: ["Just to make sure I understand,", "Just to end this now,", "Just to change topics,", "Just to be clear I'm right,"], answer: 0 },
      { qKo: "'액션 아이템과 다음 단계를 정리하며 마무리하겠습니다'는 영어로? (Day 11 복습)", options: ["Let's wrap up by going over the action items and next steps.", "Let's start over from the beginning.", "Let's ignore the action items.", "Let's postpone everything indefinitely."], answer: 0 }
    ]
  }
];
