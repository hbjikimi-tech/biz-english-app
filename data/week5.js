// Week 5: Advanced Communication & Networking (Day 25-30)
const WEEK5 = [
  {
    day: 25,
    week: 5,
    titleKo: "네트워킹 행사에서",
    titleEn: "Networking at Events",
    phrases: [
      { en: "Mind if I join you?", ko: "대화에 합류해도 될까요?", tip: "낯선 그룹에 자연스럽게 끼어들 때" },
      { en: "I don't want to keep you, but it was great chatting.", ko: "더 붙잡지 않을게요, 대화 즐거웠어요.", tip: "정중하게 대화를 마무리할 때" },
      { en: "Let's grab a drink and mingle.", ko: "음료 한 잔 하면서 여기저기 어울려봐요.", tip: "네트워킹을 제안할 때" },
      { en: "What line of work are you in?", ko: "어떤 일을 하세요?", tip: "직업을 묻는 자연스러운 표현" },
      { en: "I'll let you get back to it.", ko: "가서 하시던 일 계속 하세요.", tip: "부담 없이 자리를 뜰 때" },
      { en: "Have you got a card on you?", ko: "명함 가지고 계세요?", tip: "명함을 요청할 때" }
    ],
    dialogue: {
      situationKo: "업계 네트워킹 행사에서 낯선 그룹에 합류해 대화하는 상황",
      lines: [
        { speaker: "A", en: "Hi there, mind if I join you for a bit? I don't know many people here." },
        { speaker: "B", en: "Of course, please do. I'm Rachel, I work in supply chain over at Nexlogix." },
        { speaker: "A", en: "Nice to meet you, Rachel. I'm Tom, I'm on the sales side at Pacific Freight." },
        { speaker: "B", en: "Oh nice, small world — we actually looked into working with a few freight partners last quarter." },
        { speaker: "A", en: "Really? I'd love to hear more about what you were looking for." },
        { speaker: "B", en: "Sure, we can chat for a few minutes. Mostly we needed more flexible pricing during peak season." },
        { speaker: "A", en: "That's exactly the kind of thing we specialize in. Do you have a card on you?" },
        { speaker: "B", en: "I do, here you go. Feel free to reach out anytime." },
        { speaker: "A", en: "Thanks so much. I don't want to keep you any longer, but it was great chatting." },
        { speaker: "B", en: "Likewise! Enjoy the rest of the event." }
      ]
    },
    listeningQuiz: [
      { qKo: "Rachel은 어느 회사에서 일하나요?", options: ["Nexlogix", "Pacific Freight", "Google", "Nexlogix Freight Co."], answer: 0 },
      { qKo: "두 사람이 나눈 대화의 주제는?", options: ["채용 정보", "화물 운송 가격의 유연성", "회사 워크숍 일정", "연봉 협상"], answer: 1 },
      { qKo: "대화 끝에 Tom이 Rachel에게 요청한 것은?", options: ["저녁 식사 약속", "명함", "이력서", "다음 회의 일정"], answer: 1 }
    ],
    reading: {
      passage: "Networking events can feel intimidating, especially when everyone else seems to already know each other. The truth is, most people are just as nervous as you are, which makes it easier to break the ice. A simple line like \"Mind if I join you?\" can open the door to a whole new conversation. Once you're in, ask open questions about someone's work rather than talking only about yourself — people tend to remember how a conversation made them feel more than what was actually said. When it's time to move on, don't just walk away awkwardly. A polite exit like \"I don't want to keep you, but it was great chatting\" lets both people continue mingling without any hard feelings. And always ask for a card before you part ways — you never know which conversation will turn into your next big opportunity.",
      questions: [
        { qKo: "글에 따르면 네트워킹 행사에서 사람들의 공통점은?", options: ["다들 편안해한다", "다들 어느 정도 긴장한다", "다들 서로 잘 안다", "다들 대화를 피하고 싶어한다"], answer: 1 },
        { qKo: "대화를 마칠 때 저자가 추천하는 방식은?", options: ["명함을 요청하지 않고 자리를 뜬다", "정중하게 인사하고 명함을 요청한다", "말없이 자리를 뜬다", "다음 사람을 무시한다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "네트워킹 행사에서 낯선 그룹에게 자연스럽게 합류하며 건넬 수 있는 2~3문장짜리 인사말을 영어로 써보세요.",
      promptEn: "Write a 2-3 sentence opener for joining a group of strangers at a networking event.",
      modelAnswer: "Hi, mind if I join you? I don't know too many people here yet, and I couldn't help overhearing you mention the keynote earlier."
    },
    vocabQuiz: [
      { qKo: "'대화에 합류해도 될까요?'는 영어로?", options: ["Mind if I join you?", "Can I get the bill?", "Where's the bathroom?", "Let's cancel the meeting."], answer: 0 },
      { qKo: "'명함 가지고 계세요?'는 영어로?", options: ["Have you got a card on you?", "Do you have the time?", "Is this seat taken?", "Can I borrow a pen?"], answer: 0 },
      { qKo: "'어떤 일을 하세요?'라고 직업을 물으려면?", options: ["What line of work are you in?", "How old are you?", "Where do you live?", "What's your salary?"], answer: 0 },
      { qKo: "'대화 즐거웠어요, 이만 가볼게요'는?", options: ["I don't want to keep you, but it was great chatting.", "I never want to see you again.", "Let's argue about this.", "I have no time for you."], answer: 0 },
      { qKo: "부담 없이 자리를 뜨며 '가서 하시던 일 계속 하세요'는?", options: ["I'll let you get back to it.", "You should leave now.", "Go away please.", "I'm too busy for this."], answer: 0 }
    ]
  },
  {
    day: 26,
    week: 5,
    titleKo: "고객과 스몰토크 및 라포 형성",
    titleEn: "Small Talk with Clients & Building Rapport",
    phrases: [
      { en: "How was your flight in?", ko: "오시는 길 어떠셨어요?", tip: "출장 온 상대에게 건네는 스몰토크" },
      { en: "I noticed on LinkedIn that you're based in Austin — how do you like it there?", ko: "LinkedIn 보니 오스틴에 계시더라고요, 거긴 어떠세요?", tip: "상대 배경을 언급하며 친밀감 쌓기" },
      { en: "We really appreciate you making the trip.", ko: "와주셔서 정말 감사합니다.", tip: "방문에 대한 감사 표현" },
      { en: "Before we dive into numbers, how's everything on your end?", ko: "본론 들어가기 전에 요즘 어떠세요?", tip: "본론 전 라포 형성용 전환 질문" },
      { en: "I heard you're into golf — do you get out much?", ko: "골프 좋아하신다고 들었는데, 자주 치세요?", tip: "공통 관심사를 찾아 대화를 이어갈 때" },
      { en: "It's always nice to put a face to the voice.", ko: "화상으로만 뵙다가 직접 뵈니 좋네요.", tip: "화상 회의로만 알던 사람을 처음 만났을 때" }
    ],
    dialogue: {
      situationKo: "해외 고객사 담당자와 미팅 전 라포를 쌓는 대화",
      lines: [
        { speaker: "A", en: "Thanks so much for making the trip out, Mr. Lindqvist. How was your flight in?" },
        { speaker: "B", en: "Long, but smooth. Please, call me Erik." },
        { speaker: "A", en: "Will do, Erik. I noticed on LinkedIn that you're originally from Stockholm — is that right?" },
        { speaker: "B", en: "Yes, though I've been in Singapore for about five years now." },
        { speaker: "A", en: "That's a big change. How do you like it there?" },
        { speaker: "B", en: "Honestly, I love it. The food alone was worth the move." },
        { speaker: "A", en: "I'll have to take your word for it. Before we dive into numbers, how's everything on your end this quarter?" },
        { speaker: "B", en: "Busier than usual, but in a good way. Demand has been strong." },
        { speaker: "A", en: "Glad to hear it. Well, it's always nice to put a face to the voice after all our calls." },
        { speaker: "B", en: "Agreed. Let's make the most of the time we have today." }
      ]
    },
    listeningQuiz: [
      { qKo: "Erik은 원래 어디 출신인가요?", options: ["Stockholm", "Singapore", "Austin", "London"], answer: 0 },
      { qKo: "Erik은 현재 어디서 지내고 있나요?", options: ["Stockholm", "Singapore", "Seoul", "Tokyo"], answer: 1 },
      { qKo: "두 사람이 라포 형성을 위해 언급한 공통 화제는?", options: ["날씨와 교통", "음식과 이주 경험", "정치 이슈", "환율"], answer: 1 }
    ],
    reading: {
      passage: "Before any serious business discussion, experienced professionals spend a few minutes building rapport with their clients. This isn't wasted time — it lays the groundwork for trust, which makes negotiations and difficult conversations much easier later on. Simple gestures go a long way: asking about someone's flight, mentioning something you noticed about their background, or bringing up a shared interest like a hobby or sports team. The key is to listen more than you talk and to ask genuine follow-up questions instead of rushing toward the agenda. Clients remember how they were treated long after they forget the specific numbers discussed in a meeting. A client who feels respected and heard is far more likely to be flexible during negotiations and to become a repeat customer. In short, rapport isn't a nice extra — it's often the deciding factor in whether a business relationship lasts.",
      questions: [
        { qKo: "글에 따르면 라포 형성이 중요한 이유는?", options: ["시간을 때우기 위해서", "신뢰를 쌓아 이후 협상을 쉽게 만들기 때문에", "고객을 지치게 하려고", "회의를 길게 만들기 위해서"], answer: 1 },
        { qKo: "저자가 추천하는 태도는?", options: ["말을 많이 하고 듣지 않는다", "듣기보다 안건으로 서두른다", "더 많이 듣고 진심 어린 질문을 한다", "고객의 배경에 관심을 두지 않는다"], answer: 2 }
      ]
    },
    writing: {
      promptKo: "해외 고객이 사무실을 방문했을 때 본론에 들어가기 전 건넬 수 있는 라포 형성용 스몰토크를 2~3문장으로 영어로 써보세요.",
      promptEn: "Write 2-3 sentences of rapport-building small talk for a visiting client before starting the meeting.",
      modelAnswer: "Thanks so much for making the trip out today. How was your flight in? Before we dive into the numbers, I'd love to hear how things have been on your end."
    },
    vocabQuiz: [
      { qKo: "'오시는 길 어떠셨어요?(비행)'는?", options: ["How was your flight in?", "How's the weather?", "What's your address?", "Do you like coffee?"], answer: 0 },
      { qKo: "'와주셔서 정말 감사합니다'는?", options: ["We really appreciate you making the trip.", "We don't care if you came.", "You should have stayed home.", "Please leave quickly."], answer: 0 },
      { qKo: "'본론 들어가기 전에 요즘 어떠세요?'는?", options: ["Before we dive into numbers, how's everything on your end?", "Let's skip the small talk entirely.", "Give me the report now.", "I don't have time to chat."], answer: 0 },
      { qKo: "'골프 자주 치세요?'처럼 공통 관심사를 물을 때는?", options: ["I heard you're into golf — do you get out much?", "Do you know how to golf?", "Golf is boring, right?", "Let's not talk about hobbies."], answer: 0 },
      { qKo: "'화상으로만 뵙다가 직접 뵈니 좋네요'는?", options: ["It's always nice to put a face to the voice.", "I don't recognize your voice.", "We've never spoken before.", "This is our first call."], answer: 0 }
    ]
  },
  {
    day: 27,
    week: 5,
    titleKo: "문화 간 커뮤니케이션 팁",
    titleEn: "Cross-Cultural Communication Tips",
    phrases: [
      { en: "I just want to make sure I understood you correctly.", ko: "제가 제대로 이해했는지 확인하고 싶어요.", tip: "완곡한 답변을 명확히 하려 할 때" },
      { en: "Would you mind if I asked a direct question?", ko: "직설적으로 여쭤봐도 될까요?", tip: "직설적 질문 전에 양해를 구할 때" },
      { en: "That's an interesting way to put it — could you elaborate?", ko: "흥미로운 표현이네요, 좀 더 설명해주시겠어요?", tip: "완곡한 표현의 진의를 파악하려 할 때" },
      { en: "I don't mean to be blunt, but...", ko: "무례하게 들릴 수도 있지만...", tip: "직설적으로 말하기 전 완충 표현" },
      { en: "Let me rephrase that to avoid any confusion.", ko: "오해가 없도록 다시 말씀드릴게요.", tip: "표현을 바꿔 오해를 방지할 때" },
      { en: "In my culture, we tend to say things a bit more directly.", ko: "저희 문화권에서는 좀 더 직접적으로 말하는 편이에요.", tip: "문화 차이를 설명할 때" }
    ],
    dialogue: {
      situationKo: "직접적 화법의 관리자와 완곡한 화법을 쓰는 동료 사이의 오해를 조율하는 대화",
      lines: [
        { speaker: "A", en: "Hey, quick check-in — are we still on track for Friday's deadline?" },
        { speaker: "B", en: "It might be a little challenging, but we are doing our best." },
        { speaker: "A", en: "I just want to make sure I understood you correctly — does that mean we might miss the deadline?" },
        { speaker: "B", en: "There is a possibility of a short delay, yes." },
        { speaker: "A", en: "I don't mean to be blunt, but it would really help if you could tell me directly when something's at risk." },
        { speaker: "B", en: "I understand. In my culture, we sometimes soften bad news, but I'll try to be more direct with you." },
        { speaker: "A", en: "I appreciate that. And I'll try to ask more specific questions instead of assuming everything's fine." },
        { speaker: "B", en: "That sounds fair. To be clear, we'll likely need two extra days." },
        { speaker: "A", en: "Got it, thanks for being upfront. Let's plan around Monday then." },
        { speaker: "B", en: "Sounds good. I'll send an updated timeline today." }
      ]
    },
    listeningQuiz: [
      { qKo: "B가 처음 마감일에 대해 어떻게 답했나요?", options: ["매우 직설적으로", "완곡하게", "화를 내며", "대답하지 않았다"], answer: 1 },
      { qKo: "실제로 필요한 추가 기간은?", options: ["1일", "2일", "일주일", "한 달"], answer: 1 },
      { qKo: "A가 앞으로 하겠다고 한 것은?", options: ["더 구체적으로 질문하기", "마감일을 무시하기", "회의를 취소하기", "이메일을 그만 보내기"], answer: 0 }
    ],
    reading: {
      passage: "Communication styles vary widely across cultures, and misunderstandings often happen not because of language, but because of different expectations around directness. In some cultures, saying \"no\" outright is considered rude, so people soften their answers with phrases like \"it might be difficult\" or \"we'll try our best.\" In more direct cultures, the same phrases might be taken at face value, leading to confusion when a deadline is missed. The best way to avoid this is to ask clarifying questions without sounding accusatory — phrases like \"Just to make sure I understood correctly\" or \"Could you elaborate on that?\" give the other person room to be more specific. It also helps to explain your own communication style up front, so colleagues know you value directness and won't be offended by it. Over time, teams that openly discuss these differences tend to build stronger trust than those that just hope for the best.",
      questions: [
        { qKo: "일부 문화권에서 '아니오'를 직접 말하지 않는 이유는?", options: ["거절이 무례하다고 여겨지기 때문에", "시간이 없어서", "영어를 못해서", "규칙이라서"], answer: 0 },
        { qKo: "오해를 줄이기 위해 추천되는 방법은?", options: ["아무것도 묻지 않는다", "비난하지 않는 방식으로 명확히 확인 질문을 한다", "무조건 직설적으로만 말한다", "이메일만 사용한다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "완곡하게 답변한 동료에게 오해 없이 명확한 답을 정중하게 요청하는 2~3문장을 영어로 써보세요.",
      promptEn: "Write 2-3 sentences politely asking a colleague for a more direct answer, without causing offense.",
      modelAnswer: "I just want to make sure I understood you correctly — are we still on track for the deadline? I don't mean to be blunt, but it would really help if I knew as early as possible if something's at risk."
    },
    vocabQuiz: [
      { qKo: "'제가 제대로 이해했는지 확인하고 싶어요'는?", options: ["I just want to make sure I understood you correctly.", "I don't care what you meant.", "You're wrong about this.", "Let's ignore that point."], answer: 0 },
      { qKo: "'직설적으로 여쭤봐도 될까요?'는?", options: ["Would you mind if I asked a direct question?", "Don't ask me anything.", "I refuse to answer that.", "That's none of your business."], answer: 0 },
      { qKo: "'무례하게 들릴 수도 있지만...'은?", options: ["I don't mean to be blunt, but...", "I want to be rude, so...", "This will hurt your feelings...", "I don't respect your opinion..."], answer: 0 },
      { qKo: "'오해가 없도록 다시 말씀드릴게요'는?", options: ["Let me rephrase that to avoid any confusion.", "Forget what I said.", "I refuse to explain further.", "You misunderstood on purpose."], answer: 0 },
      { qKo: "'저희 문화권에서는 좀 더 직접적으로 말하는 편이에요'는?", options: ["In my culture, we tend to say things a bit more directly.", "My culture doesn't matter here.", "Everyone communicates the same way.", "I don't understand cultures."], answer: 0 }
    ]
  },
  {
    day: 28,
    week: 5,
    titleKo: "면접과 커리어 대화",
    titleEn: "Job Interviews & Career Conversations",
    phrases: [
      { en: "Walk me through your background.", ko: "경력을 간단히 설명해주시겠어요?", tip: "면접 초반 단골 질문" },
      { en: "My biggest strength is probably my ability to manage multiple projects at once.", ko: "제 가장 큰 강점은 아마 동시에 여러 프로젝트를 관리하는 능력일 거예요.", tip: "강점을 말할 때" },
      { en: "I'd say my weakness is that I sometimes take on too much myself.", ko: "제 약점은 가끔 혼자 너무 많은 일을 떠맡는다는 거예요.", tip: "약점을 솔직하게 말할 때" },
      { en: "What would you say sets you apart from other candidates?", ko: "다른 지원자들과 차별화되는 점이 뭐라고 생각하세요?", tip: "차별점을 묻는 질문" },
      { en: "I'm looking for a role where I can grow into a leadership position.", ko: "저는 리더십 역할로 성장할 수 있는 자리를 찾고 있어요.", tip: "커리어 목표를 말할 때" },
      { en: "Can you tell me more about the team I'd be working with?", ko: "제가 함께 일할 팀에 대해 더 말씀해주실 수 있나요?", tip: "면접 말미의 역질문" }
    ],
    dialogue: {
      situationKo: "이직을 위한 화상 면접 상황",
      lines: [
        { speaker: "A", en: "Thanks for joining today. Why don't you walk me through your background?" },
        { speaker: "B", en: "Sure. I've spent the last five years in project management, mostly in the tech industry." },
        { speaker: "A", en: "Great. What would you say is your biggest strength?" },
        { speaker: "B", en: "Probably my ability to manage multiple projects at once without losing sight of the details." },
        { speaker: "A", en: "And on the flip side, what would you consider a weakness?" },
        { speaker: "B", en: "I'd say I sometimes take on too much myself instead of delegating early enough." },
        { speaker: "A", en: "That's honest, I appreciate that. What are you looking for in your next role?" },
        { speaker: "B", en: "I'm looking for a position where I can grow into a leadership role over time." },
        { speaker: "A", en: "That aligns well with where this team is headed. Do you have any questions for me?" },
        { speaker: "B", en: "Yes, actually — can you tell me more about the team I'd be working with?" }
      ]
    },
    listeningQuiz: [
      { qKo: "B는 몇 년간 프로젝트 매니지먼트 경력을 쌓았나요?", options: ["3년", "5년", "7년", "10년"], answer: 1 },
      { qKo: "B가 말한 자신의 약점은?", options: ["지각을 자주 한다", "위임을 늦게 한다", "말을 너무 많이 한다", "숫자에 약하다"], answer: 1 },
      { qKo: "B가 다음 역할에서 원하는 것은?", options: ["연봉 인상", "리더십 역할로 성장", "재택근무", "짧은 근무시간"], answer: 1 }
    ],
    reading: {
      passage: "When it comes to job interviews, the questions about strengths and weaknesses often trip candidates up the most. The mistake many people make is either overselling themselves or turning a weakness into a humble brag, like saying \"I work too hard.\" Interviewers can usually tell when an answer isn't genuine. A stronger approach is to pick a real strength that's relevant to the role, back it up with a specific example, and briefly explain why it matters to the team. For weaknesses, honesty combined with self-awareness works best — mention something you're actively improving, and describe the steps you're taking. Beyond strengths and weaknesses, interviewers also want to understand your career goals, so it helps to have a clear, honest answer about where you'd like to grow. Preparing a few thoughtful questions to ask in return shows genuine interest and can leave a lasting impression.",
      questions: [
        { qKo: "인터뷰에서 흔한 실수는?", options: ["약점을 자랑처럼 포장한다", "질문을 너무 많이 한다", "이력서를 가져오지 않는다", "너무 짧게 답한다"], answer: 0 },
        { qKo: "약점에 대한 좋은 답변 방식은?", options: ["약점이 없다고 말한다", "개선 중인 부분과 노력을 설명한다", "다른 사람 탓을 한다", "질문을 무시한다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "면접에서 '당신의 가장 큰 강점은 무엇인가요?'라는 질문에 대한 답변을 2~3문장으로 영어로 써보세요.",
      promptEn: "Write a 2-3 sentence answer to the interview question 'What is your biggest strength?'",
      modelAnswer: "My biggest strength is probably my ability to manage multiple projects at once without losing sight of the details. In my last role, I coordinated three product launches in the same quarter and delivered all of them on time."
    },
    vocabQuiz: [
      { qKo: "'경력을 간단히 설명해주시겠어요?'는?", options: ["Walk me through your background.", "What's your home address?", "How much do you weigh?", "Are you married?"], answer: 0 },
      { qKo: "'제 가장 큰 강점은 아마 동시에 여러 프로젝트를 관리하는 능력일 거예요'는?", options: ["My biggest strength is probably my ability to manage multiple projects at once.", "I have no strengths.", "I can't manage anything well.", "I only do one task at a time."], answer: 0 },
      { qKo: "'다른 지원자들과 차별화되는 점이 뭐라고 생각하세요?'는?", options: ["What would you say sets you apart from other candidates?", "How old are the other candidates?", "Do you know the other candidates?", "Why should we reject you?"], answer: 0 },
      { qKo: "'저는 리더십 역할로 성장할 수 있는 자리를 찾고 있어요'는?", options: ["I'm looking for a role where I can grow into a leadership position.", "I never want to lead a team.", "I plan to retire soon.", "I dislike responsibility."], answer: 0 },
      { qKo: "'제가 함께 일할 팀에 대해 더 말씀해주실 수 있나요?'는?", options: ["Can you tell me more about the team I'd be working with?", "Can I skip meeting the team?", "I don't care about the team.", "Who cares about teamwork?"], answer: 0 }
    ]
  },
  {
    day: 29,
    week: 5,
    titleKo: "어려운 대화와 외교적 화법",
    titleEn: "Difficult Conversations & Diplomacy",
    phrases: [
      { en: "I'm afraid I have some difficult news to share.", ko: "말씀드리기 어려운 소식이 있어요.", tip: "나쁜 소식을 전달하기 시작할 때" },
      { en: "This isn't an easy conversation, but I want to be upfront with you.", ko: "쉬운 대화는 아니지만 솔직하게 말씀드리고 싶어요.", tip: "솔직함을 강조할 때" },
      { en: "I understand this is frustrating, and I want to help find a solution.", ko: "답답하신 거 이해하고, 해결책을 찾도록 돕고 싶어요.", tip: "갈등을 완화할 때" },
      { en: "Let's take a step back and look at this from both sides.", ko: "한 발 물러나서 양쪽 입장에서 봅시다.", tip: "중재하며 감정을 진정시킬 때" },
      { en: "I hear what you're saying, though I see it a bit differently.", ko: "말씀은 이해하지만, 저는 조금 다르게 봐요.", tip: "부드럽게 반박할 때" },
      { en: "Can we agree to revisit this once things have cooled down?", ko: "감정이 가라앉으면 다시 얘기할까요?", tip: "갈등을 잠시 유예할 때" }
    ],
    dialogue: {
      situationKo: "예산 삭감으로 팀원에게 나쁜 소식을 전하고 갈등을 완화하는 대화",
      lines: [
        { speaker: "A", en: "Do you have a few minutes? I'm afraid I have some difficult news to share." },
        { speaker: "B", en: "Okay... that sounds serious. What's going on?" },
        { speaker: "A", en: "Due to budget cuts, we won't be able to move forward with the new hire for your team this quarter." },
        { speaker: "B", en: "That's really frustrating. We've been understaffed for months already." },
        { speaker: "A", en: "I completely understand, and I want to help find a solution even without the extra headcount." },
        { speaker: "B", en: "Honestly, it feels like leadership doesn't see how much pressure we're under." },
        { speaker: "A", en: "I hear what you're saying, though I'd push back a little — this wasn't an easy decision on our end either." },
        { speaker: "B", en: "Fair enough. So what happens now?" },
        { speaker: "A", en: "Let's take a step back and look at what we can prioritize together, and revisit headcount next quarter." },
        { speaker: "B", en: "Okay, I appreciate you being upfront about it." }
      ]
    },
    listeningQuiz: [
      { qKo: "A가 전한 나쁜 소식의 내용은?", options: ["팀 해체", "신규 채용 불가", "연봉 삭감", "사무실 이전"], answer: 1 },
      { qKo: "B의 반응은 어땠나요?", options: ["기뻐했다", "좌절과 불만을 표현했다", "무관심했다", "바로 사표를 냈다"], answer: 1 },
      { qKo: "A가 마지막에 제안한 것은?", options: ["즉시 퇴사", "우선순위 재조정 후 다음 분기 재검토", "무조건적인 채용 진행", "대화 중단"], answer: 1 }
    ],
    reading: {
      passage: "Delivering bad news at work is never easy, but how you say something often matters as much as what you say. Diplomatic communicators tend to follow a few simple habits. First, they don't bury the message — starting with a vague, rambling lead-up only increases anxiety, so it's better to be clear early while still being kind. Second, they acknowledge the other person's feelings before defending their own position, using phrases like \"I understand this is frustrating.\" Third, they focus on solutions rather than dwelling on blame, shifting the conversation toward what can be done next. Finally, skilled communicators know when to pause a heated conversation and revisit it later, rather than pushing for resolution in the moment. None of this means avoiding hard truths — it means delivering them in a way that preserves the relationship and keeps the door open for future collaboration.",
      questions: [
        { qKo: "외교적 커뮤니케이션의 첫 번째 원칙은?", options: ["메시지를 흐리게 전달한다", "명확하게 조기에 전달하되 친절하게 한다", "무조건 나중에 말한다", "상대의 감정을 무시한다"], answer: 1 },
        { qKo: "갈등이 격해질 때 추천되는 방법은?", options: ["끝까지 그 자리에서 해결한다", "대화를 잠시 멈추고 나중에 다시 다룬다", "바로 화를 낸다", "대화를 영원히 피한다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "예산 삭감으로 팀원에게 나쁜 소식을 전하는 상황을 가정하고, 외교적으로 전달하는 2~3문장을 영어로 써보세요.",
      promptEn: "Write 2-3 diplomatic sentences delivering bad news about budget cuts to a team member.",
      modelAnswer: "I'm afraid I have some difficult news to share — due to budget cuts, we won't be able to add headcount this quarter. I understand this is frustrating, and I want to work with you to find a solution in the meantime."
    },
    vocabQuiz: [
      { qKo: "'말씀드리기 어려운 소식이 있어요'는?", options: ["I'm afraid I have some difficult news to share.", "I have great news for you.", "Nothing happened at all.", "Let's celebrate together."], answer: 0 },
      { qKo: "'쉬운 대화는 아니지만 솔직하게 말씀드리고 싶어요'는?", options: ["This isn't an easy conversation, but I want to be upfront with you.", "This is a very easy topic.", "I don't want to be honest.", "Let's avoid this topic forever."], answer: 0 },
      { qKo: "'답답하신 거 이해하고, 해결책을 찾도록 돕고 싶어요'는?", options: ["I understand this is frustrating, and I want to help find a solution.", "I don't care how you feel.", "This is entirely your fault.", "There's no solution available."], answer: 0 },
      { qKo: "'한 발 물러나서 양쪽 입장에서 봅시다'는?", options: ["Let's take a step back and look at this from both sides.", "Let's only consider my side.", "Let's argue more loudly.", "Let's end this conversation now."], answer: 0 },
      { qKo: "'감정이 가라앉으면 다시 얘기할까요?'는?", options: ["Can we agree to revisit this once things have cooled down?", "Let's never discuss this again.", "We must decide right now.", "I refuse to talk later."], answer: 0 }
    ]
  },
  {
    day: 30,
    week: 5,
    titleKo: "최종 복습 — 비즈니스 영어 종합 챌린지",
    titleEn: "Final Review — Full Business English Challenge",
    phrases: [
      { en: "Let's circle back to that point in a moment.", ko: "그 부분은 잠시 후에 다시 다루죠.", tip: "회의를 진행하며 안건을 정리할 때" },
      { en: "I'll follow up with an email summarizing our next steps.", ko: "다음 단계를 정리한 이메일을 보내드릴게요.", tip: "회의를 마무리할 때" },
      { en: "That works for me, as long as we can confirm by Friday.", ko: "금요일까지 확정할 수 있다면 저는 괜찮아요.", tip: "조건부로 협상에 동의할 때" },
      { en: "I really appreciate you taking the time to meet today.", ko: "오늘 시간 내주셔서 정말 감사합니다.", tip: "미팅에 대한 감사 표현" },
      { en: "Let's keep the lines of communication open.", ko: "앞으로도 계속 연락하고 지내요.", tip: "관계를 이어가고 싶을 때" },
      { en: "Congratulations on wrapping up such a successful quarter.", ko: "성공적인 분기를 마무리하신 것을 축하드려요.", tip: "성과를 축하할 때" }
    ],
    dialogue: {
      situationKo: "한 달간 배운 표현을 총정리하는 종합 비즈니스 미팅 시나리오 — 인사, 프로젝트 업데이트, 일정 협상, 마무리 인사까지 이어지는 대화",
      lines: [
        { speaker: "A", en: "Good to finally connect, Minji. Thanks for taking the time to meet today." },
        { speaker: "B", en: "Of course, happy to. How has the quarter been on your end?" },
        { speaker: "A", en: "Busy, but good overall. We're actually ahead of schedule on the product launch." },
        { speaker: "B", en: "That's great to hear. Congratulations on wrapping up such a successful quarter." },
        { speaker: "A", en: "Thanks. Let's circle back to the launch date for a moment — can we confirm October 15th?" },
        { speaker: "B", en: "That works for me, as long as we can lock in the marketing assets by Friday." },
        { speaker: "A", en: "Agreed, I'll make sure the team gets those over by then." },
        { speaker: "B", en: "Perfect. I'll follow up with an email summarizing today's next steps." },
        { speaker: "A", en: "Sounds good. Let's keep the lines of communication open in the meantime." },
        { speaker: "B", en: "Definitely. Great catching up — talk soon!" }
      ]
    },
    listeningQuiz: [
      { qKo: "제품 출시일로 확정된 날짜는?", options: ["September 15th", "October 15th", "November 1st", "December 15th"], answer: 1 },
      { qKo: "B가 동의의 조건으로 요청한 것은?", options: ["예산 증액", "마케팅 자료를 금요일까지 전달", "회의 취소", "출시일 연기"], answer: 1 },
      { qKo: "통화 후 B가 하기로 한 것은?", options: ["아무것도 하지 않는다", "이메일로 다음 단계를 요약해 보낸다", "바로 계약을 해지한다", "전화를 다시 건다"], answer: 1 }
    ],
    reading: {
      passage: "Over the past month, you've built a toolkit for real business situations — introducing yourself at a conference, running a meeting, negotiating a deadline, writing a professional email, and having difficult conversations with tact. None of these skills work in isolation. A strong introduction opens the door to a lasting client relationship; small talk builds the trust that makes negotiations smoother; and diplomatic language keeps even tough conversations productive. The professionals who stand out aren't necessarily the ones with the largest vocabulary — they're the ones who know which phrase fits which moment, and who listen as much as they speak. As you continue practicing, try combining these skills naturally: open with rapport, move confidently into the agenda, negotiate with flexibility, and close every conversation by confirming clear next steps. That combination, more than any single phrase, is what real fluency in business English looks like.",
      questions: [
        { qKo: "이 글에서 강조하는 핵심은?", options: ["단어를 많이 아는 것이 최우선이다", "상황에 맞는 표현을 알고 경청하는 것이 중요하다", "협상은 필요 없다", "이메일만 잘 쓰면 된다"], answer: 1 },
        { qKo: "저자가 권장하는 대화 마무리 방식은?", options: ["다음 단계를 확인하지 않고 끝낸다", "분명한 다음 단계를 확인하며 마무리한다", "화제를 갑자기 바꾼다", "아무 말 없이 나간다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "한 달간의 학습을 마무리하며, 오늘 미팅 내용을 요약하고 다음 단계를 확인하는 이메일을 2~3문장으로 영어로 써보세요.",
      promptEn: "Write a 2-3 sentence closing email summarizing today's meeting and confirming next steps.",
      modelAnswer: "Thanks again for taking the time to meet today — it was great catching up. As discussed, we'll confirm the launch date for October 15th and get the marketing assets over to you by Friday. Let's keep the lines of communication open in the meantime."
    },
    vocabQuiz: [
      { qKo: "'그 부분은 잠시 후에 다시 다루죠'는?", options: ["Let's circle back to that point in a moment.", "Let's forget that point forever.", "That point doesn't matter.", "Let's skip the whole meeting."], answer: 0 },
      { qKo: "'다음 단계를 정리한 이메일을 보내드릴게요'는?", options: ["I'll follow up with an email summarizing our next steps.", "I'll never email you again.", "I won't summarize anything.", "Please don't expect any follow-up."], answer: 0 },
      { qKo: "'금요일까지 확정할 수 있다면 저는 괜찮아요'는?", options: ["That works for me, as long as we can confirm by Friday.", "That doesn't work for me at all.", "I don't care about deadlines.", "Let's cancel the whole plan."], answer: 0 },
      { qKo: "'앞으로도 계속 연락하고 지내요'는?", options: ["Let's keep the lines of communication open.", "Let's stop talking after this.", "I don't want any more contact.", "Please don't reach out again."], answer: 0 },
      { qKo: "'성공적인 분기를 마무리하신 것을 축하드려요'는?", options: ["Congratulations on wrapping up such a successful quarter.", "I'm sorry about this terrible quarter.", "This quarter was a failure.", "Nothing good happened this quarter."], answer: 0 }
    ]
  }
];
