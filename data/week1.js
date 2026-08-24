// Week 1: Workplace Basics (Day 1-6)
const WEEK1 = [
  {
    day: 1,
    week: 1,
    titleKo: "자기소개와 스몰토크",
    titleEn: "Self-Introduction & Small Talk",
    phrases: [
      { en: "I'm currently leading the marketing team.", ko: "저는 현재 마케팅팀을 이끌고 있어요.", tip: "직급/역할을 소개할 때" },
      { en: "I've been with the company for about three years.", ko: "이 회사에서 일한 지 3년 정도 됐어요.", tip: "근속 기간 말하기" },
      { en: "It's great to finally put a face to the name.", ko: "드디어 얼굴 보고 인사드리네요.", tip: "이메일로만 알던 사람을 처음 만났을 때" },
      { en: "What brings you to the conference?", ko: "이 컨퍼런스엔 어떤 일로 오셨어요?", tip: "스몰토크용 질문" },
      { en: "I'd love to stay in touch.", ko: "계속 연락하고 지내면 좋겠어요.", tip: "헤어질 때 인사" },
      { en: "Let's exchange business cards.", ko: "명함 교환해요.", tip: "명함 주고받기" }
    ],
    dialogue: {
      situationKo: "국제 컨퍼런스 네트워킹 세션에서 처음 만난 동료와의 대화",
      lines: [
        { speaker: "A", en: "Hi, I don't think we've met yet. I'm Sarah, from the Seoul office." },
        { speaker: "B", en: "Nice to meet you, Sarah. I'm David — I handle product marketing out of London." },
        { speaker: "A", en: "Great to meet you in person. What brings you to this conference?" },
        { speaker: "B", en: "Mostly the keynote on AI in retail. I'm curious how other companies are approaching it." },
        { speaker: "A", en: "Same here. How long have you been with your company?" },
        { speaker: "B", en: "About three years now. Time flies. What about you?" },
        { speaker: "A", en: "I joined just last year, but I've been in marketing for almost eight years total." },
        { speaker: "B", en: "That's a solid background. Would you like to exchange business cards?" },
        { speaker: "A", en: "Sure, and I'd love to stay in touch after the conference." },
        { speaker: "B", en: "Absolutely. Let's connect on LinkedIn too." }
      ]
    },
    listeningQuiz: [
      { qKo: "David는 어디서 일하나요?", options: ["Seoul", "London", "Tokyo", "New York"], answer: 1 },
      { qKo: "두 사람이 컨퍼런스에 온 주된 이유는?", options: ["회사 워크숍", "AI 리테일 키노트", "채용 박람회", "제품 출시 행사"], answer: 1 },
      { qKo: "대화 마지막에 두 사람은 무엇을 하기로 했나요?", options: ["저녁 식사 약속", "명함 교환 및 LinkedIn 연결", "다음 회의 일정 잡기", "이메일만 주고받기"], answer: 1 }
    ],
    reading: {
      passage: "Small talk plays a bigger role in business than many people expect. Before a meeting starts, colleagues often spend a few minutes talking about the weather, weekend plans, or a recent trip. This isn't just filler — it helps build trust and makes the real conversation go more smoothly. When you meet someone new at a conference or event, a simple introduction like \"I don't think we've met\" or \"What brings you here?\" can open the door to a longer, useful conversation. Experienced professionals also know how to close small talk naturally, moving from casual chat to business topics without sounding abrupt. The key is genuine curiosity: ask a question, listen to the answer, and respond with a follow-up instead of jumping straight to your own agenda.",
      questions: [
        { qKo: "이 글에 따르면 스몰토크의 역할은?", options: ["시간 때우기용 잡담일 뿐이다", "신뢰를 쌓고 본론을 매끄럽게 만든다", "회의를 늦추는 방해 요소다", "신입사원에게만 필요하다"], answer: 1 },
        { qKo: "능숙한 사람들이 스몰토크를 마무리하는 방법은?", options: ["갑자기 주제를 바꾼다", "자연스럽게 비즈니스 주제로 넘어간다", "질문을 아예 하지 않는다", "상대방 말을 끊는다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "컨퍼런스에서 처음 만난 해외 동료에게 보낼 2~3문장짜리 자기소개를 영어로 써보세요. (이름, 소속, 담당 업무 포함)",
      promptEn: "Write a 2-3 sentence self-introduction for a colleague you just met at a conference.",
      modelAnswer: "Hi, I'm Jiho Kim from the Seoul office. I lead our digital marketing team and have been with the company for about four years. It's great to meet you here at the conference!"
    },
    vocabQuiz: [
      { qKo: "'명함 교환해요'는 영어로?", options: ["Let's exchange business cards.", "Let's grab lunch sometime.", "Let's schedule a call.", "Let's review the report."], answer: 0 },
      { qKo: "'이 회사에서 일한 지 3년 정도 됐어요'는 영어로?", options: ["I'm new to this role.", "I've been with the company for about three years.", "I just started yesterday.", "I'm about to retire."], answer: 1 },
      { qKo: "처음 만난 사람에게 '이 컨퍼런스엔 어떤 일로 오셨어요?'라고 물으려면?", options: ["What brings you to the conference?", "What time is it now?", "Where is the restroom?", "Can I get your seat?"], answer: 0 },
      { qKo: "헤어지면서 '계속 연락하고 지내면 좋겠어요'는?", options: ["I'd love to stay in touch.", "I have to go right now.", "I don't remember you.", "Let's never talk again."], answer: 0 },
      { qKo: "이메일로만 알던 사람을 처음 만났을 때 자연스러운 표현은?", options: ["It's great to finally put a face to the name.", "I've never heard of you.", "You look different than I imagined.", "Let's skip the introduction."], answer: 0 }
    ]
  },
  {
    day: 2,
    week: 1,
    titleKo: "회사와 업무 소개하기",
    titleEn: "Talking About Your Job & Company",
    phrases: [
      { en: "I work in the finance department, mainly handling budgeting.", ko: "저는 재무팀에서 일하며, 주로 예산 관리를 담당해요.", tip: "부서와 담당 업무를 소개할 때" },
      { en: "We provide cloud-based solutions for retail businesses.", ko: "저희는 소매업체를 위한 클라우드 기반 솔루션을 제공합니다.", tip: "회사가 하는 일을 설명할 때" },
      { en: "My role is more focused on the strategy side than execution.", ko: "제 역할은 실행보다는 전략 쪽에 더 가까워요.", tip: "업무 성격을 구체적으로 설명할 때" },
      { en: "I report directly to the VP of Sales.", ko: "저는 영업 부사장에게 직접 보고합니다.", tip: "보고 라인을 설명할 때" },
      { en: "We're a mid-sized company with offices in three countries.", ko: "저희는 3개국에 사무소를 둔 중견기업입니다.", tip: "회사 규모를 설명할 때" },
      { en: "I wear a lot of hats around here.", ko: "저는 여기서 이것저것 여러 업무를 겸하고 있어요.", tip: "여러 업무를 겸직하고 있음을 캐주얼하게 표현할 때" }
    ],
    dialogue: {
      situationKo: "신입사원이 사내 오리엔테이션에서 다른 팀 동료에게 자신의 부서와 업무를 소개하는 대화",
      lines: [
        { speaker: "A", en: "So, which team are you on?" },
        { speaker: "B", en: "I'm on the finance team — I mainly handle budgeting and forecasting." },
        { speaker: "A", en: "Oh nice, do you work closely with sales then?" },
        { speaker: "B", en: "Yeah, quite a bit. I report directly to the VP of Sales, actually." },
        { speaker: "A", en: "Got it. What does your team actually do day to day?" },
        { speaker: "B", en: "We provide cloud-based solutions for retail businesses, so a lot of my work involves tracking project costs." },
        { speaker: "A", en: "Sounds busy. How long has the company been around?" },
        { speaker: "B", en: "About ten years. We're a mid-sized company with offices in three countries now." },
        { speaker: "A", en: "That's impressive growth. Do you only handle budgeting, or more than that?" },
        { speaker: "B", en: "Honestly, I wear a lot of hats around here — budgeting, vendor contracts, you name it." }
      ]
    },
    listeningQuiz: [
      { qKo: "B는 어느 부서에서 일하나요?", options: ["Sales", "Finance", "Marketing", "HR"], answer: 1 },
      { qKo: "B는 누구에게 직접 보고하나요?", options: ["CEO", "VP of Sales", "HR Manager", "CFO"], answer: 1 },
      { qKo: "회사는 몇 개국에 사무실이 있나요?", options: ["1개국", "2개국", "3개국", "5개국"], answer: 2 }
    ],
    reading: {
      passage: "When you meet someone new at work, one of the first questions you'll get is some version of \"What do you do here?\" Having a clear, concise answer ready makes a strong impression. Instead of just naming your job title, try explaining your role in terms of what you actually do: \"I handle budgeting for the finance team\" is more useful than simply saying \"I'm an analyst.\" It also helps to know how to describe your company in one or two sentences — what industry you're in, roughly how big the company is, and what problem you solve for customers. If you work at a company few people have heard of, a quick comparison can help: \"We're kind of like a smaller version of X, but focused on retail.\" Keep it short. Most people won't remember every detail, but they'll remember whether your explanation was clear.",
      questions: [
        { qKo: "자신의 직무를 설명할 때 더 효과적인 방법은?", options: ["직함만 말하기", "실제로 하는 일을 구체적으로 설명하기", "아무 설명도 하지 않기", "회사 로고를 보여주기"], answer: 1 },
        { qKo: "잘 알려지지 않은 회사를 설명할 때 유용한 방법은?", options: ["경쟁사 비방하기", "다른 회사와 비교해서 설명하기", "재무제표 보여주기", "설명을 생략하기"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "새로 만난 동료에게 당신의 부서와 회사가 하는 일을 영어로 2~3문장으로 설명해보세요.",
      promptEn: "Explain your department and what your company does in 2-3 sentences.",
      modelAnswer: "I work in the finance department, mainly handling budgeting and forecasting. Our company provides cloud-based solutions for retail businesses, and we're a mid-sized company with offices in three countries. I actually wear a lot of hats, so I also help out with vendor contracts sometimes."
    },
    vocabQuiz: [
      { qKo: "'재무팀에서 일하며, 주로 예산 관리를 담당해요'는 영어로?", options: ["I work in the finance department, mainly handling budgeting.", "I used to work in HR.", "I'm looking for a new job.", "I don't work here anymore."], answer: 0 },
      { qKo: "'저희는 소매업체를 위한 클라우드 기반 솔루션을 제공합니다'는 영어로?", options: ["We sell furniture directly to customers.", "We provide cloud-based solutions for retail businesses.", "We closed our retail stores last year.", "We don't have any clients yet."], answer: 1 },
      { qKo: "'저는 영업 부사장에게 직접 보고합니다'는 영어로?", options: ["I report directly to the VP of Sales.", "I never talk to my manager.", "I used to work under the CEO.", "I don't have a manager."], answer: 0 },
      { qKo: "'저희는 3개국에 사무소를 둔 중견기업입니다'는 영어로?", options: ["We're a mid-sized company with offices in three countries.", "We're a tiny startup with one office.", "We just closed all our branches.", "We only operate online."], answer: 0 },
      { qKo: "여러 업무를 겸하고 있다는 것을 캐주얼하게 표현하면?", options: ["I wear a lot of hats around here.", "I only do one thing.", "I never help other teams.", "I'm about to quit."], answer: 0 }
    ]
  },
  {
    day: 3,
    week: 1,
    titleKo: "데일리 업무 보고하기",
    titleEn: "Daily Work Updates & Status Reports",
    phrases: [
      { en: "I'm currently working on the client proposal.", ko: "저는 지금 클라이언트 제안서 작업을 하고 있어요.", tip: "현재 하고 있는 업무를 말할 때" },
      { en: "I'm a bit stuck on the data integration part.", ko: "데이터 통합 부분에서 좀 막혔어요.", tip: "막힌 부분(blocker)을 말할 때" },
      { en: "I should have this wrapped up by end of day.", ko: "퇴근 전까지는 끝낼 수 있을 것 같아요.", tip: "완료 예상 시점을 말할 때" },
      { en: "I'm blocked until I hear back from the design team.", ko: "디자인팀 회신을 기다리느라 진행이 막혀있어요.", tip: "외부 요인 때문에 막혀있을 때" },
      { en: "Let me give you a quick update on where things stand.", ko: "현재 상황에 대해 간단히 업데이트 드릴게요.", tip: "보고를 시작할 때" },
      { en: "Nothing major to flag on my end.", ko: "제 쪽에서는 특별히 보고할 이슈가 없어요.", tip: "특별한 이슈가 없을 때" }
    ],
    dialogue: {
      situationKo: "매일 아침 진행하는 팀 스탠드업 미팅에서 진행 상황을 공유하는 대화",
      lines: [
        { speaker: "A", en: "Alright, let's do a quick round of updates. Who wants to go first?" },
        { speaker: "B", en: "I can go. So, I'm currently working on the client proposal for the Q3 campaign." },
        { speaker: "A", en: "How's that coming along?" },
        { speaker: "B", en: "Pretty good, actually. I should have this wrapped up by end of day." },
        { speaker: "A", en: "Great. Any blockers?" },
        { speaker: "B", en: "I'm a bit stuck on the data integration part — I'm blocked until I hear back from the design team." },
        { speaker: "A", en: "Got it, I'll follow up with them after this. What about the report you mentioned yesterday?" },
        { speaker: "B", en: "That's already done. Nothing major to flag on my end." },
        { speaker: "A", en: "Perfect, thanks for the update." },
        { speaker: "B", en: "Sure thing, let me give you a quick heads-up on tomorrow too — I'll be focusing on testing in the morning." }
      ]
    },
    listeningQuiz: [
      { qKo: "B는 현재 무엇을 하고 있나요?", options: ["고객 제안서 작업", "채용 면접", "예산 검토", "디자인 작업"], answer: 0 },
      { qKo: "B가 막혀있는 이유는?", options: ["예산 부족", "디자인팀 회신 대기", "휴가", "장비 고장"], answer: 1 },
      { qKo: "B가 어제 언급한 보고서는 어떻게 되었나요?", options: ["아직 시작도 안 함", "이미 완료됨", "취소됨", "다른 사람에게 넘김"], answer: 1 }
    ],
    reading: {
      passage: "Giving a good status update is a skill that gets noticed. The best updates follow a simple structure: what you're working on, how far along it is, and whether anything is blocking you. Avoid vague statements like \"I'm working on stuff\" — instead, be specific: \"I'm currently working on the client proposal, and I should have it wrapped up by end of day.\" If you're stuck, say so clearly and explain what you need. Managers generally appreciate hearing about blockers early rather than finding out later that a deadline was missed because nobody spoke up. On the other hand, if everything is on track, a short \"nothing major to flag\" is perfectly fine — you don't need to pad your update with extra detail just to sound busy. Keeping updates short and honest builds trust with your team over time, and it makes stand-up meetings faster for everyone involved.",
      questions: [
        { qKo: "좋은 상태 업데이트의 구조로 언급된 것이 아닌 것은?", options: ["현재 하고 있는 일", "진행 정도", "막힌 부분", "점심 메뉴"], answer: 3 },
        { qKo: "막힌 부분(blocker)에 대한 이 글의 조언은?", options: ["절대 말하지 않는다", "최대한 빨리 명확히 알린다", "마감일이 지난 후에 말한다", "다른 사람에게 미룬다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "오늘 진행 중인 업무와 막힌 부분(있다면)을 영어로 2~3문장의 스탠드업 업데이트로 작성해보세요.",
      promptEn: "Write a 2-3 sentence stand-up update about what you're working on today, including any blockers.",
      modelAnswer: "I'm currently working on the client proposal and should have it wrapped up by end of day. I'm a bit stuck on the data integration part, so I'm blocked until I hear back from the design team. Other than that, nothing major to flag on my end."
    },
    vocabQuiz: [
      { qKo: "'클라이언트 제안서 작업을 하고 있어요'는 영어로?", options: ["I'm currently working on the client proposal.", "I already finished everything.", "I'm on vacation this week.", "I haven't started anything yet."], answer: 0 },
      { qKo: "'데이터 통합 부분에서 좀 막혔어요'는 영어로?", options: ["I'm a bit stuck on the data integration part.", "I love working with data.", "The data is perfect.", "I finished the data part early."], answer: 0 },
      { qKo: "'퇴근 전까지 끝낼 수 있을 것 같아요'는 영어로?", options: ["I should have this wrapped up by end of day.", "I'll never finish this.", "I finished this last week.", "I haven't looked at it yet."], answer: 0 },
      { qKo: "'디자인팀 회신을 기다리느라 진행이 막혀있어요'는 영어로?", options: ["I'm blocked until I hear back from the design team.", "I don't need the design team.", "The design team is blocking me on purpose.", "I already got the design files."], answer: 0 },
      { qKo: "'제 쪽에서는 특별히 보고할 이슈가 없어요'는 영어로?", options: ["Nothing major to flag on my end.", "Everything is on fire right now.", "I have ten urgent issues.", "I need help with everything."], answer: 0 }
    ]
  },
  {
    day: 4,
    week: 1,
    titleKo: "이메일 쓰기와 답장하기 (기초)",
    titleEn: "Writing & Replying to Emails",
    phrases: [
      { en: "I hope this email finds you well.", ko: "이 이메일이 잘 전달되었기를 바랍니다.", tip: "격식 있는 이메일 인사말" },
      { en: "I'm writing to follow up on our conversation last week.", ko: "지난주 대화에 대해 후속으로 연락드립니다.", tip: "이메일을 쓰는 목적을 밝힐 때" },
      { en: "Could you possibly send over the updated file by Friday?", ko: "혹시 금요일까지 업데이트된 파일을 보내주실 수 있을까요?", tip: "정중하게 요청할 때" },
      { en: "Please let me know if you have any questions.", ko: "질문 있으시면 알려주세요.", tip: "이메일을 마무리할 때" },
      { en: "Looking forward to hearing from you.", ko: "답장 기다리겠습니다.", tip: "답장을 요청하며 마무리할 때" },
      { en: "Thanks in advance for your help.", ko: "미리 감사드립니다.", tip: "요청 후 감사를 표현할 때" }
    ],
    dialogue: {
      situationKo: "신입사원이 선배에게 클라이언트에게 보낼 이메일 작성에 대해 조언을 구하는 대화",
      lines: [
        { speaker: "A", en: "Hey, do you have a minute? I'm drafting an email to the client and I'm not sure how to start it." },
        { speaker: "B", en: "Sure, what's the situation?" },
        { speaker: "A", en: "I need to follow up on our conversation from last week and ask for an updated file." },
        { speaker: "B", en: "Okay, start with something like \"I hope this email finds you well,\" then get straight to the point." },
        { speaker: "A", en: "Got it. So maybe, \"I'm writing to follow up on our conversation last week\"?" },
        { speaker: "B", en: "Exactly. Then just ask directly — something like \"Could you possibly send over the updated file by Friday?\"" },
        { speaker: "A", en: "That sounds polite but clear. How should I end it?" },
        { speaker: "B", en: "End with \"Please let me know if you have any questions,\" and then \"Looking forward to hearing from you.\"" },
        { speaker: "A", en: "Should I add a thank you too?" },
        { speaker: "B", en: "Definitely — \"Thanks in advance for your help\" works well before your sign-off." }
      ]
    },
    listeningQuiz: [
      { qKo: "A는 이메일에서 무엇을 요청하려고 하나요?", options: ["환불", "업데이트된 파일", "회의 취소", "급여 인상"], answer: 1 },
      { qKo: "B가 제안한 이메일 마무리 문구가 아닌 것은?", options: ["Please let me know if you have any questions.", "Looking forward to hearing from you.", "I hope this email finds you well.", "Thanks in advance for your help."], answer: 2 },
      { qKo: "요청 마감 기한으로 언급된 요일은?", options: ["월요일", "수요일", "금요일", "일요일"], answer: 2 }
    ],
    reading: {
      passage: "A well-structured business email usually follows a simple pattern: a polite greeting, a clear reason for writing, the actual request or information, and a friendly closing. Starting with \"I hope this email finds you well\" is common in more formal settings, though many workplaces now prefer something shorter, like just using the person's name. Whatever greeting you choose, get to the point quickly — busy colleagues appreciate not having to search for your actual request. When asking for something, softening the request with words like \"possibly\" or \"if you have a moment\" tends to sound more polite than a blunt demand. Finally, always close with something that invites a response, such as \"Please let me know if you have any questions\" or \"Looking forward to hearing from you.\" A short thank-you line before your sign-off never hurts either — it shows you value the other person's time and effort.",
      questions: [
        { qKo: "이메일의 기본 구조로 언급되지 않은 것은?", options: ["인사말", "요청 이유", "첨부파일 크기", "마무리 인사"], answer: 2 },
        { qKo: "요청을 부드럽게 만드는 방법으로 언급된 것은?", options: ["명령조로 말하기", "'possibly' 같은 단어 사용하기", "요청을 여러 번 반복하기", "이메일을 짧게 끊기"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "동료에게 업데이트된 자료를 금요일까지 보내달라고 요청하는 이메일을 영어로 2~3문장으로 작성해보세요.",
      promptEn: "Write a 2-3 sentence email asking a colleague to send you an updated file by Friday.",
      modelAnswer: "I hope this email finds you well. I'm writing to follow up on our conversation last week — could you possibly send over the updated file by Friday? Thanks in advance for your help, and please let me know if you have any questions."
    },
    vocabQuiz: [
      { qKo: "'이 이메일이 잘 전달되었기를 바랍니다'는 영어로?", options: ["I hope this email finds you well.", "I never want to hear from you again.", "This email is urgent and angry.", "Please delete this email."], answer: 0 },
      { qKo: "'지난주 대화에 대해 후속으로 연락드립니다'는 영어로?", options: ["I'm writing to follow up on our conversation last week.", "I forgot we ever talked.", "This is unrelated to last week.", "I'm canceling our meeting."], answer: 0 },
      { qKo: "'혹시 금요일까지 업데이트된 파일을 보내주실 수 있을까요?'는 영어로?", options: ["Could you possibly send over the updated file by Friday?", "Send me the file right now.", "I don't need the file anymore.", "You must send the file immediately."], answer: 0 },
      { qKo: "'질문 있으시면 알려주세요'는 영어로?", options: ["Please let me know if you have any questions.", "Don't ask me anything.", "I won't answer questions.", "Questions are not allowed."], answer: 0 },
      { qKo: "'미리 감사드립니다'는 영어로?", options: ["Thanks in advance for your help.", "I don't need your help.", "Thanks for nothing.", "I already thanked you enough."], answer: 0 }
    ]
  },
  {
    day: 5,
    week: 1,
    titleKo: "전화/화상통화 매너",
    titleEn: "Phone & Video Call Etiquette",
    phrases: [
      { en: "Sorry, you're breaking up a little — could you repeat that?", ko: "죄송한데, 소리가 좀 끊겨요. 다시 말씀해 주시겠어요?", tip: "연결 문제로 잘 안 들릴 때" },
      { en: "Can everyone hear me okay?", ko: "모두 잘 들리시나요?", tip: "통화나 회의 시작 전 오디오 확인" },
      { en: "Sorry to interrupt, but I'd like to add something.", ko: "끼어들어서 죄송한데, 한 가지 덧붙이고 싶어요.", tip: "정중하게 발언권을 요청할 때" },
      { en: "I think you're on mute.", ko: "음소거 상태이신 것 같아요.", tip: "상대가 음소거인 채로 말하고 있을 때" },
      { en: "Let's give it a few seconds to see if the connection improves.", ko: "연결이 나아지는지 몇 초만 기다려볼게요.", tip: "연결 문제가 있을 때 대응하는 표현" },
      { en: "I'll hop off here and follow up by email.", ko: "저는 먼저 나가고 이메일로 후속 연락 드릴게요.", tip: "통화를 먼저 마무리하고 나갈 때" }
    ],
    dialogue: {
      situationKo: "화상회의 시작 전 오디오 확인과 발언권 요청이 있는 대화",
      lines: [
        { speaker: "A", en: "Hey, can everyone hear me okay before we get started?" },
        { speaker: "B", en: "Yeah, sounds good on my end — go ahead." },
        { speaker: "A", en: "Great. So today I wanted to cover the Q3 roadmap." },
        { speaker: "B", en: "Sorry, you're breaking up a little. Could you repeat that?" },
        { speaker: "A", en: "Sure, I said I wanted to cover the Q3 roadmap today." },
        { speaker: "B", en: "Got it, thanks. Oh, by the way, I think you're on mute." },
        { speaker: "A", en: "Oh, sorry about that — fixed now. Let's give it a few seconds to see if the connection improves." },
        { speaker: "B", en: "Sounds good. Sorry to interrupt, but I'd like to add something before we continue." },
        { speaker: "A", en: "Go ahead." },
        { speaker: "B", en: "Thanks — I'll hop off after this call and follow up by email with the numbers." }
      ]
    },
    listeningQuiz: [
      { qKo: "회의 시작 전 A가 확인한 것은?", options: ["회의실 예약 여부", "모두가 잘 들리는지", "점심 메뉴", "다음 회의 시간"], answer: 1 },
      { qKo: "B가 A에게 지적한 문제는?", options: ["음소거 상태였음", "지각했음", "카메라가 꺼져있었음", "자료를 안 가져왔음"], answer: 0 },
      { qKo: "B는 통화 후 무엇을 하기로 했나요?", options: ["바로 다음 회의 참석", "이메일로 후속 연락", "아무것도 안 함", "전화로 다시 연락"], answer: 1 }
    ],
    reading: {
      passage: "Video and phone calls have their own etiquette, and small habits can make a big difference in how professional you come across. At the start of a call, it's common to check that the audio is working — a quick \"Can everyone hear me okay?\" saves time later. Connection problems happen to everyone, so if someone sounds unclear, it's perfectly fine to say \"Sorry, you're breaking up a little\" rather than pretending you understood. If you notice someone talking while muted, a gentle heads-up like \"I think you're on mute\" is always appreciated. During group calls, people often talk over each other, so a short phrase like \"Sorry to interrupt, but I'd like to add something\" helps you jump in politely without cutting someone off completely. Finally, when you need to leave early, saying \"I'll hop off here and follow up by email\" is a normal, professional way to exit without disrupting the rest of the meeting.",
      questions: [
        { qKo: "오디오 문제가 있을 때 권장되는 대응은?", options: ["이해한 척한다", "다시 말해달라고 요청한다", "조용히 퇴장한다", "채팅으로만 소통한다"], answer: 1 },
        { qKo: "회의 중 끼어들 때 권장되는 표현은?", options: ["아무 말 없이 끼어든다", "\"Sorry to interrupt, but...\"라고 말한다", "상대의 말을 끝까지 끊는다", "화면을 끈다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "화상회의 중 상대방 목소리가 잘 안 들려서 다시 말해달라고 요청하고, 회의를 먼저 나가야 하는 상황을 영어로 2~3문장으로 작성해보세요.",
      promptEn: "Write 2-3 sentences asking someone to repeat themselves on a call, and explain that you need to leave early.",
      modelAnswer: "Sorry, you're breaking up a little — could you repeat that? Also, I'll need to hop off here in a few minutes, so I'll follow up by email with any details I miss. Thanks for understanding."
    },
    vocabQuiz: [
      { qKo: "'죄송한데, 소리가 끊겨요. 다시 말씀해 주시겠어요?'는 영어로?", options: ["Sorry, you're breaking up a little — could you repeat that?", "I can hear you perfectly.", "Please stop talking now.", "The call is over."], answer: 0 },
      { qKo: "'모두 잘 들리시나요?'는 영어로?", options: ["Can everyone hear me okay?", "Can everyone see me okay?", "Is everyone here today?", "Is everyone busy right now?"], answer: 0 },
      { qKo: "'끼어들어서 죄송한데, 한 가지 덧붙이고 싶어요'는 영어로?", options: ["Sorry to interrupt, but I'd like to add something.", "Please never interrupt me.", "I have nothing to say.", "Let's end the meeting now."], answer: 0 },
      { qKo: "'음소거 상태이신 것 같아요'는 영어로?", options: ["I think you're on mute.", "I think you're too loud.", "I think you're offline.", "I think you're late."], answer: 0 },
      { qKo: "'저는 먼저 나가고 이메일로 후속 연락 드릴게요'는 영어로?", options: ["I'll hop off here and follow up by email.", "I'm staying until the very end.", "I'll never email you.", "I'm turning off my camera forever."], answer: 0 }
    ]
  },
  {
    day: 6,
    week: 1,
    titleKo: "1주차 복습 — 어떤 상황에서도 자기소개하기",
    titleEn: "Week 1 Review — Introducing Yourself in Any Situation",
    phrases: [
      { en: "Let me quickly introduce myself and give you a status update.", ko: "빠르게 제 소개를 하고 업무 현황도 말씀드릴게요.", tip: "자기소개와 업무보고를 자연스럽게 결합할 때" },
      { en: "I'm currently with the finance team, working on the Q3 budget.", ko: "저는 현재 재무팀 소속이고 3분기 예산 작업을 하고 있어요.", tip: "소속과 현재 업무를 함께 소개할 때" },
      { en: "I should wrap this up by tomorrow, but I'm a bit stuck on one part.", ko: "내일까지는 끝낼 것 같은데, 한 부분에서 좀 막혀있어요.", tip: "진행 상황과 블로커를 함께 말할 때" },
      { en: "I'll follow up by email with the details.", ko: "자세한 내용은 이메일로 후속 연락 드릴게요.", tip: "대화나 통화를 마무리할 때" },
      { en: "Sorry, could you say that one more time? The line's a bit choppy.", ko: "죄송한데 한 번 더 말씀해주시겠어요? 연결이 좀 끊기네요.", tip: "통화 중 연결 문제에 대응할 때" },
      { en: "It's great to finally meet you — I've heard a lot about your team.", ko: "드디어 직접 뵙게 되어 반갑습니다 — 팀 이야기 많이 들었어요.", tip: "처음 만난 사람에게 반가움을 표현할 때" }
    ],
    dialogue: {
      situationKo: "새로운 프로젝트 킥오프 화상회의에서 처음 만난 팀원들이 자기소개와 업무 현황을 함께 나누는 종합 대화",
      lines: [
        { speaker: "A", en: "Hi everyone, thanks for joining. Can everyone hear me okay before we start?" },
        { speaker: "B", en: "Yeah, sounds good on my end. Hi, by the way — I don't think we've met yet. I'm Mina." },
        { speaker: "A", en: "Nice to meet you, Mina. I'm Tom, from the product team." },
        { speaker: "B", en: "Great to finally put a face to the name — I've heard a lot about your team." },
        { speaker: "A", en: "Likewise. Let me quickly introduce myself and give you a status update. I'm currently with the finance team, working on the Q3 budget." },
        { speaker: "B", en: "Sorry, could you say that one more time? The line's a bit choppy." },
        { speaker: "A", en: "Sure — I said I'm working on the Q3 budget. I should wrap it up by tomorrow, but I'm a bit stuck on one part." },
        { speaker: "B", en: "Got it. Let me know if you need help — I'll follow up by email with our team's numbers too." },
        { speaker: "A", en: "Sounds great. I'd love to stay in touch even after this project wraps up." },
        { speaker: "B", en: "Absolutely, let's exchange contact info before we hop off." }
      ]
    },
    listeningQuiz: [
      { qKo: "B의 이름은 무엇인가요?", options: ["Sarah", "Mina", "David", "Tom"], answer: 1 },
      { qKo: "A는 어느 팀 소속인가요?", options: ["영업팀", "재무팀", "인사팀", "디자인팀"], answer: 1 },
      { qKo: "A가 겪고 있는 문제는?", options: ["예산 초과", "업무의 한 부분에서 막힘", "팀원 부족", "장비 고장"], answer: 1 }
    ],
    reading: {
      passage: "By now, you've practiced several building blocks of workplace English: introducing yourself, describing your job and company, giving status updates, writing emails, and handling calls smoothly. In real workplace situations, these skills rarely appear in isolation — a single meeting might start with introductions, move into a status update, and end with someone asking to follow up by email. The most natural-sounding professionals aren't the ones who memorize long scripts; they're the ones who can smoothly combine a few short, flexible phrases depending on the situation. For example, \"Let me quickly introduce myself and give you a status update\" blends two skills into one opening line. Likewise, ending a call with \"I'll follow up by email with the details\" works whether you're wrapping up an introduction, a status report, or a request. As you keep practicing, try mixing phrases from different situations rather than treating each one as a separate script — that's what makes your English sound natural rather than memorized.",
      questions: [
        { qKo: "이 글에서 자연스러운 영어 구사의 핵심으로 강조하는 것은?", options: ["긴 대본을 통째로 암기하기", "짧은 표현들을 상황에 맞게 조합하기", "문법책을 여러 번 읽기", "완벽한 발음만 신경쓰기"], answer: 1 },
        { qKo: "실제 회의에서 여러 스킬이 어떻게 나타난다고 설명하나요?", options: ["항상 따로따로 분리되어 나타난다", "한 미팅 안에서 자연스럽게 섞여 나타난다", "절대 함께 쓰이지 않는다", "이메일에서만 나타난다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "새로운 프로젝트 킥오프 미팅에서 처음 만난 동료에게 자기소개를 하고, 현재 진행 중인 업무 상황까지 함께 영어로 2~3문장으로 말해보세요.",
      promptEn: "Introduce yourself to a colleague you just met at a project kickoff, and briefly mention your current work status, in 2-3 sentences.",
      modelAnswer: "Hi, I'm Jiho from the finance team — great to finally put a face to the name. I'm currently working on the Q3 budget and should have it wrapped up by tomorrow. I'll follow up by email if anything comes up."
    },
    vocabQuiz: [
      { qKo: "'빠르게 제 소개를 하고 업무 현황도 말씀드릴게요'는 영어로?", options: ["Let me quickly introduce myself and give you a status update.", "I have nothing to say about my work.", "Please don't ask about my job.", "I'm leaving the company today."], answer: 0 },
      { qKo: "'저는 현재 재무팀 소속이고 3분기 예산 작업을 하고 있어요'는 영어로?", options: ["I'm currently with the finance team, working on the Q3 budget.", "I used to work in finance years ago.", "I have no idea what my team does.", "I'm not working on anything right now."], answer: 0 },
      { qKo: "'내일까지는 끝낼 것 같은데, 한 부분에서 좀 막혀있어요'는 영어로?", options: ["I should wrap this up by tomorrow, but I'm a bit stuck on one part.", "I finished everything already.", "I haven't started this project.", "This project was canceled."], answer: 0 },
      { qKo: "'죄송한데 한 번 더 말씀해주시겠어요? 연결이 좀 끊기네요'는 영어로?", options: ["Sorry, could you say that one more time? The line's a bit choppy.", "Please stop talking immediately.", "I heard you perfectly the first time.", "Let's end the call now."], answer: 0 },
      { qKo: "'드디어 직접 뵙게 되어 반갑습니다 — 팀 이야기 많이 들었어요'는 영어로?", options: ["It's great to finally meet you — I've heard a lot about your team.", "I've never heard of your team.", "I don't want to meet you.", "Your team has a bad reputation."], answer: 0 }
    ]
  }
];
