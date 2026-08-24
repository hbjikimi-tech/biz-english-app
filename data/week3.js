// Week 3: Presenting Ideas & Data (Day 13-18)
const WEEK3 = [
  {
    day: 13,
    week: 3,
    titleKo: "프레젠테이션 구조 잡기",
    titleEn: "Structuring a Presentation",
    phrases: [
      { en: "Let me walk you through today's agenda.", ko: "오늘 순서를 간단히 말씀드리겠습니다.", tip: "발표 시작할 때 아젠다 소개" },
      { en: "I'd like to start by giving you some background.", ko: "먼저 배경 설명부터 드리겠습니다.", tip: "인트로에서 배경 설명" },
      { en: "Moving on to the next point,", ko: "다음 내용으로 넘어가서,", tip: "본론 사이 전환 표현" },
      { en: "That brings me to my next slide.", ko: "이제 다음 슬라이드로 넘어가겠습니다.", tip: "슬라이드 전환할 때" },
      { en: "To wrap things up,", ko: "마무리하자면,", tip: "결론부 시작할 때" },
      { en: "I'll leave you with one final thought.", ko: "마지막으로 한 가지만 더 말씀드리겠습니다.", tip: "클로징 멘트" }
    ],
    dialogue: {
      situationKo: "팀 회의에서 신제품 런칭 계획을 발표하기 시작하는 상황",
      lines: [
        { speaker: "A", en: "Good morning, everyone. Thanks for making time for this." },
        { speaker: "B", en: "Of course, we're all looking forward to hearing the update." },
        { speaker: "A", en: "Let me walk you through today's agenda before we dive in." },
        { speaker: "B", en: "Sounds good, go ahead." },
        { speaker: "A", en: "I'd like to start by giving you some background on why we're launching this now." },
        { speaker: "B", en: "That context will be really helpful." },
        { speaker: "A", en: "Moving on to the next point, I'll cover the timeline and key milestones." },
        { speaker: "B", en: "Got it, that's exactly what we wanted to see." },
        { speaker: "A", en: "That brings me to my next slide, which shows our target market." },
        { speaker: "B", en: "Looks clear so far, please continue." }
      ]
    },
    listeningQuiz: [
      { qKo: "A가 발표를 시작하며 가장 먼저 하는 일은?", options: ["질문 받기", "오늘 순서(아젠다) 소개", "예산 발표", "회의 종료"], answer: 1 },
      { qKo: "A가 배경 설명 다음에 다루는 내용은?", options: ["경쟁사 분석", "타임라인과 주요 마일스톤", "인사 발표", "휴가 일정"], answer: 1 },
      { qKo: "다음 슬라이드로 넘어가며 A가 보여주는 것은?", options: ["재무제표", "타겟 시장", "조직도", "회의록"], answer: 1 }
    ],
    reading: {
      passage: "A well-structured presentation makes it easy for the audience to follow along, even when the topic is complex. Most effective presentations follow a simple pattern: an opening that states the purpose, a short overview of the agenda, a body organized into clear points, and a closing that reinforces the main message. Transitions matter more than people realize. Phrases like \"moving on to the next point\" or \"that brings me to my next slide\" act as signposts, telling listeners exactly where they are in the talk. Without these cues, even well-researched content can feel disorganized. Experienced presenters also plan their opening and closing lines in advance, since first and last impressions tend to stick with the audience longest. A strong structure doesn't just help the audience — it also helps the presenter stay calm and on track.",
      questions: [
        { qKo: "이 글에서 말하는 전환 표현의 역할은?", options: ["청중을 지루하게 만든다", "발표 진행 위치를 알려주는 신호 역할을 한다", "발표 시간을 늘린다", "질문을 막는다"], answer: 1 },
        { qKo: "숙련된 발표자들이 미리 준비하는 것은?", options: ["농담 목록", "오프닝과 클로징 멘트", "청중의 이름", "회의실 좌석 배치"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "발표를 시작하며 오늘의 아젠다를 소개하는 2~3문장을 영어로 써보세요.",
      promptEn: "Write 2-3 sentences introducing today's agenda at the start of a presentation.",
      modelAnswer: "Good morning, everyone, and thanks for joining. Let me walk you through today's agenda before we get started. We'll cover the background, the timeline, and next steps."
    },
    vocabQuiz: [
      { qKo: "'오늘 순서를 간단히 말씀드리겠습니다'는 영어로?", options: ["Let me walk you through today's agenda.", "Let's take a coffee break.", "I have no idea what to say.", "Please turn off your phones."], answer: 0 },
      { qKo: "'먼저 배경 설명부터 드리겠습니다'는 영어로?", options: ["I'd like to start by giving you some background.", "I'll finish here right now.", "Let's skip the introduction.", "I'm not prepared today."], answer: 0 },
      { qKo: "다음 내용으로 넘어갈 때 쓰는 전환 표현은?", options: ["Moving on to the next point,", "Never mind that,", "Forget what I said,", "That's all for today,"], answer: 0 },
      { qKo: "'이제 다음 슬라이드로 넘어가겠습니다'는 영어로?", options: ["That brings me to my next slide.", "I lost my slides.", "Let's go back to the previous meeting.", "This slide is broken."], answer: 0 },
      { qKo: "발표 마무리를 시작할 때 쓰는 표현은?", options: ["To wrap things up,", "To begin with,", "By the way,", "On second thought,"], answer: 0 }
    ]
  },
  {
    day: 14,
    week: 3,
    titleKo: "트렌드와 데이터 설명하기",
    titleEn: "Describing Trends & Data",
    phrases: [
      { en: "Revenue rose by 15% compared to last quarter.", ko: "매출이 전 분기 대비 15% 증가했습니다.", tip: "증가 수치 설명" },
      { en: "Sales dropped sharply in March.", ko: "3월에 매출이 급격히 감소했습니다.", tip: "급격한 감소 표현" },
      { en: "The numbers have plateaued over the past two months.", ko: "지난 두 달간 수치가 정체 상태입니다.", tip: "정체 상태 표현" },
      { en: "This is a significant improvement over last year.", ko: "작년 대비 상당한 개선입니다.", tip: "비교하며 강조" },
      { en: "Compared to our competitors, we're slightly behind.", ko: "경쟁사와 비교했을 때 저희가 약간 뒤처져 있습니다.", tip: "경쟁사와 비교" },
      { en: "As you can see from the chart, the trend is clearly upward.", ko: "차트에서 보시다시피, 추세는 확실히 상승세입니다.", tip: "차트를 가리키며 설명" }
    ],
    dialogue: {
      situationKo: "분기 실적 발표에서 매출 데이터 트렌드를 설명하는 상황",
      lines: [
        { speaker: "A", en: "Let's take a look at this quarter's numbers." },
        { speaker: "B", en: "I've been curious how we did compared to last quarter." },
        { speaker: "A", en: "Revenue rose by 15% compared to last quarter, which is above forecast." },
        { speaker: "B", en: "That's great news. Was growth consistent across all months?" },
        { speaker: "A", en: "Not exactly. Sales dropped sharply in March due to a supply issue." },
        { speaker: "B", en: "I see. How did things look afterward?" },
        { speaker: "A", en: "The numbers have plateaued over the past two months, but they're stable." },
        { speaker: "B", en: "And how do we compare to our competitors?" },
        { speaker: "A", en: "Compared to our competitors, we're slightly behind, but as you can see from the chart, the trend is clearly upward." },
        { speaker: "B", en: "Good to know. That gives us a clear picture." }
      ]
    },
    listeningQuiz: [
      { qKo: "이번 분기 매출은 전 분기 대비 어떻게 변했나요?", options: ["10% 감소", "15% 증가", "변화 없음", "50% 증가"], answer: 1 },
      { qKo: "3월에 매출이 급격히 감소한 이유는?", options: ["공급 문제", "마케팅 중단", "직원 파업", "환율 문제"], answer: 0 },
      { qKo: "경쟁사와 비교했을 때 현재 상황은?", options: ["크게 앞서 있다", "약간 뒤처져 있지만 상승세다", "완전히 동일하다", "비교 자료가 없다"], answer: 1 }
    ],
    reading: {
      passage: "When presenting data, word choice matters as much as the numbers themselves. Saying that revenue \"rose\" sounds very different from saying it \"surged,\" even if the percentage is the same. Business English has a rich vocabulary for describing trends: figures can rise, climb, or surge when they go up, and drop, decline, or plummet when they go down. When a number stays flat, presenters often say it has \"plateaued\" or \"leveled off.\" Comparisons are equally important. Phrases like \"compared to last quarter\" or \"year-over-year\" give the audience a reference point, making a single number much more meaningful. Skilled presenters also use visuals and language together, pointing at a chart while saying \"as you can see, the trend is clearly upward.\" This combination helps the audience absorb data quickly instead of getting lost in raw figures.",
      questions: [
        { qKo: "이 글에 따르면 데이터 발표에서 중요한 것은?", options: ["숫자만 정확히 읽는 것", "적절한 단어 선택과 비교 기준 제시", "빠르게 말하는 것", "차트를 숨기는 것"], answer: 1 },
        { qKo: "수치가 변화 없이 유지될 때 쓰는 표현은?", options: ["surged", "plummeted", "plateaued", "skyrocketed"], answer: 2 }
      ]
    },
    writing: {
      promptKo: "최근 매출이 증가한 상황을 설명하는 2~3문장을 영어로 써보세요. (전 분기 대비 수치 포함)",
      promptEn: "Write 2-3 sentences describing a recent increase in sales, including a comparison to the previous quarter.",
      modelAnswer: "Revenue rose by 12% compared to last quarter. This is a significant improvement over last year, and as you can see from the chart, the trend is clearly upward."
    },
    vocabQuiz: [
      { qKo: "'매출이 전 분기 대비 15% 증가했습니다'는 영어로?", options: ["Revenue rose by 15% compared to last quarter.", "Revenue stayed the same.", "Revenue is unpredictable.", "Revenue was cut in half."], answer: 0 },
      { qKo: "'3월에 매출이 급격히 감소했습니다'는 영어로?", options: ["Sales dropped sharply in March.", "Sales increased steadily in March.", "Sales were cancelled in March.", "Sales remained flat all year."], answer: 0 },
      { qKo: "'지난 두 달간 수치가 정체 상태입니다'는 영어로?", options: ["The numbers have plateaued over the past two months.", "The numbers have disappeared.", "The numbers are impossible to read.", "The numbers doubled overnight."], answer: 0 },
      { qKo: "'경쟁사와 비교했을 때 저희가 약간 뒤처져 있습니다'는 영어로?", options: ["Compared to our competitors, we're slightly behind.", "We have no competitors at all.", "We are far ahead of everyone.", "Our competitors closed down."], answer: 0 },
      { qKo: "'차트에서 보시다시피, 추세는 확실히 상승세입니다'는 영어로?", options: ["As you can see from the chart, the trend is clearly upward.", "The chart is missing this quarter.", "Please ignore this chart.", "The trend is impossible to predict."], answer: 0 }
    ]
  },
  {
    day: 15,
    week: 3,
    titleKo: "설득하고 논리 펼치기",
    titleEn: "Persuading & Making Your Case",
    phrases: [
      { en: "The data clearly supports this approach.", ko: "데이터가 이 접근 방식을 명확히 뒷받침합니다.", tip: "근거 제시할 때" },
      { en: "I want to emphasize how important this decision is.", ko: "이 결정이 얼마나 중요한지 강조하고 싶습니다.", tip: "강조하기" },
      { en: "Let me give you a concrete example.", ko: "구체적인 예를 하나 들어보겠습니다.", tip: "구체적 근거 제시" },
      { en: "Based on these findings, I strongly recommend we move forward.", ko: "이 결과를 바탕으로, 진행할 것을 강력히 추천합니다.", tip: "결론적 추천" },
      { en: "If we don't act now, we risk falling behind.", ko: "지금 행동하지 않으면 뒤처질 위험이 있습니다.", tip: "위험성 강조로 설득" },
      { en: "The bottom line is, this investment will pay off.", ko: "결론적으로, 이 투자는 성과를 낼 것입니다.", tip: "핵심 결론 강조" }
    ],
    dialogue: {
      situationKo: "신규 시스템 도입 예산 승인을 상사에게 설득하는 발표 상황",
      lines: [
        { speaker: "A", en: "I know budget is tight, but I'd like to make a case for this investment." },
        { speaker: "B", en: "Go ahead, I'm listening." },
        { speaker: "A", en: "The data clearly supports this approach — efficiency gains of about 20%." },
        { speaker: "B", en: "That's a compelling number. Can you give me more detail?" },
        { speaker: "A", en: "Sure. Let me give you a concrete example from our pilot last month." },
        { speaker: "B", en: "Okay, that helps me picture it." },
        { speaker: "A", en: "I want to emphasize how important this decision is for our long-term competitiveness." },
        { speaker: "B", en: "I understand the urgency." },
        { speaker: "A", en: "If we don't act now, we risk falling behind our competitors." },
        { speaker: "B", en: "Alright. Based on what you've shown me, let's move forward." }
      ]
    },
    listeningQuiz: [
      { qKo: "A가 제안하는 투자로 예상되는 효율성 개선율은?", options: ["5%", "10%", "20%", "50%"], answer: 2 },
      { qKo: "A가 근거로 제시한 것은?", options: ["경쟁사 소문", "지난달 파일럿 테스트 결과", "개인적 추측", "타사 광고"], answer: 1 },
      { qKo: "대화의 결론은?", options: ["투자를 보류한다", "B가 진행을 승인한다", "예산을 삭감한다", "다음 회의로 미룬다"], answer: 1 }
    ],
    reading: {
      passage: "Persuading an audience in a business setting is different from simply presenting facts. A convincing case usually combines three elements: solid evidence, a clear emotional or strategic stake, and a specific call to action. Saying \"the data clearly supports this approach\" establishes credibility, but numbers alone rarely move people to act. Skilled presenters follow evidence with a concrete example — a story or case that makes the abstract data feel real. They also use emphasis deliberately, with phrases like \"I want to emphasize\" or \"the bottom line is,\" to make sure the key message isn't lost among the details. Finally, effective persuasion often includes a sense of urgency, such as \"if we don't act now, we risk falling behind.\" Without urgency, even a strong argument can be set aside indefinitely. The goal is not just to inform the audience, but to move them toward a decision.",
      questions: [
        { qKo: "설득력 있는 주장에 필요한 세 가지 요소는?", options: ["농담, 침묵, 반복", "확실한 근거, 구체적 사례, 긴급성", "긴 발표, 많은 슬라이드, 큰 목소리", "질문 회피, 자신감, 속도"], answer: 1 },
        { qKo: "긴급성을 표현하지 않으면 어떤 일이 생길 수 있나요?", options: ["청중이 즉시 결정한다", "주장이 무기한 보류될 수 있다", "발표가 더 짧아진다", "예산이 자동 승인된다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "상사에게 새로운 프로젝트 예산 승인을 설득하는 2~3문장을 영어로 써보세요.",
      promptEn: "Write 2-3 sentences persuading your manager to approve the budget for a new project.",
      modelAnswer: "Based on these findings, I strongly recommend we move forward with this project. The data clearly supports this approach, and if we don't act now, we risk falling behind our competitors."
    },
    vocabQuiz: [
      { qKo: "'데이터가 이 접근 방식을 명확히 뒷받침합니다'는 영어로?", options: ["The data clearly supports this approach.", "The data is completely irrelevant.", "The data was lost last week.", "The data needs no explanation."], answer: 0 },
      { qKo: "'구체적인 예를 하나 들어보겠습니다'는 영어로?", options: ["Let me give you a concrete example.", "Let's skip the details entirely.", "I have nothing else to add.", "Let's talk about something else."], answer: 0 },
      { qKo: "'이 결과를 바탕으로, 진행할 것을 강력히 추천합니다'는 영어로?", options: ["Based on these findings, I strongly recommend we move forward.", "I have no opinion on this matter.", "Let's cancel the project immediately.", "I'll decide later, maybe never."], answer: 0 },
      { qKo: "'지금 행동하지 않으면 뒤처질 위험이 있습니다'는 영어로?", options: ["If we don't act now, we risk falling behind.", "There's no rush at all.", "We can wait a few years.", "Timing doesn't matter here."], answer: 0 },
      { qKo: "'결론적으로, 이 투자는 성과를 낼 것입니다'는 영어로?", options: ["The bottom line is, this investment will pay off.", "The bottom line is, we should quit now.", "The investment has already failed.", "This has nothing to do with money."], answer: 0 }
    ]
  },
  {
    day: 16,
    week: 3,
    titleKo: "발표 후 질의응답 대응하기",
    titleEn: "Handling Q&A After a Presentation",
    phrases: [
      { en: "That's a great question, let me think about that for a second.", ko: "좋은 질문이네요, 잠시 생각해볼게요.", tip: "답변 전 시간 벌기" },
      { en: "I don't have that number off the top of my head, but I'll follow up.", ko: "지금 정확한 수치가 기억나지 않는데, 확인 후 알려드리겠습니다.", tip: "모를 때 대응" },
      { en: "Just to make sure I understand your question correctly,", ko: "질문을 제대로 이해했는지 확인하고 싶은데요,", tip: "질문 재확인" },
      { en: "Could you clarify what you mean by that?", ko: "그게 무슨 의미인지 좀 더 설명해주시겠어요?", tip: "질문 명확화 요청" },
      { en: "That's outside the scope of today's presentation, but I'm happy to discuss it offline.", ko: "오늘 발표 범위를 벗어나는 내용인데, 따로 논의드릴게요.", tip: "범위 밖 질문 대응" },
      { en: "Let me circle back to that at the end if we have time.", ko: "시간이 되면 마지막에 다시 그 부분으로 돌아오겠습니다.", tip: "답변을 나중으로 미루기" }
    ],
    dialogue: {
      situationKo: "발표 후 질의응답 세션에서 예상하지 못한 질문에 대응하는 상황",
      lines: [
        { speaker: "A", en: "Alright, that's the end of the presentation. Any questions?" },
        { speaker: "B", en: "Yes, actually. What's the exact cost breakdown for phase two?" },
        { speaker: "A", en: "That's a great question, let me think about that for a second." },
        { speaker: "B", en: "Take your time." },
        { speaker: "A", en: "I don't have that number off the top of my head, but I'll follow up by email today." },
        { speaker: "B", en: "That works. One more thing — how does this affect the current team structure?" },
        { speaker: "A", en: "Just to make sure I understand your question correctly, are you asking about headcount?" },
        { speaker: "B", en: "Yes, exactly that." },
        { speaker: "A", en: "That's outside the scope of today's presentation, but I'm happy to discuss it offline." },
        { speaker: "B", en: "Sounds fair, thanks for the clear answers." }
      ]
    },
    listeningQuiz: [
      { qKo: "B가 처음 던진 질문은?", options: ["팀 구조 변경", "2단계 비용 세부 내역", "출시 날짜", "고객 만족도"], answer: 1 },
      { qKo: "A가 정확한 수치를 모를 때 한 약속은?", options: ["이메일로 후속 답변", "질문을 무시함", "즉석에서 추측함", "회의를 취소함"], answer: 0 },
      { qKo: "두 번째 질문(팀 구조)에 대해 A는 어떻게 답했나요?", options: ["바로 상세히 답했다", "오늘 발표 범위 밖이라 따로 논의하자고 했다", "화를 냈다", "질문을 못 들은 척했다"], answer: 1 }
    ],
    reading: {
      passage: "The Q&A session at the end of a presentation can feel more stressful than the presentation itself, mainly because the questions are unpredictable. Experienced presenters manage this by having a small toolkit of phrases ready. Buying a few seconds of thinking time is completely normal — saying \"that's a great question, let me think about that for a second\" is far better than rushing into a weak answer. When you genuinely don't know something, it's more professional to admit it than to guess: \"I don't have that number off the top of my head, but I'll follow up\" builds more trust than an inaccurate answer. Confirming what was actually asked also prevents wasted time; restating the question with \"just to make sure I understand correctly\" avoids answering the wrong thing. Finally, not every question belongs in the current meeting — politely redirecting off-topic questions keeps the session focused and respects everyone's time.",
      questions: [
        { qKo: "질문에 대한 답을 모를 때 권장되는 태도는?", options: ["아무 숫자나 추측해서 말한다", "모른다고 인정하고 후속 답변을 약속한다", "질문을 무시한다", "회의를 끝낸다"], answer: 1 },
        { qKo: "질문을 재확인하는 것이 중요한 이유는?", options: ["시간을 낭비하기 위해서", "엉뚱한 답변을 피하기 위해서", "청중을 혼란스럽게 하려고", "발표를 길게 만들려고"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "발표 중 정확히 모르는 질문을 받았을 때 답하는 2~3문장을 영어로 써보세요.",
      promptEn: "Write 2-3 sentences responding to a question you don't know the exact answer to during a presentation.",
      modelAnswer: "That's a great question, let me think about that for a second. I don't have that number off the top of my head, but I'll follow up with you by email today."
    },
    vocabQuiz: [
      { qKo: "'좋은 질문이네요, 잠시 생각해볼게요'는 영어로?", options: ["That's a great question, let me think about that for a second.", "That's a stupid question, next.", "I already answered that.", "Please stop asking questions."], answer: 0 },
      { qKo: "'지금 정확한 수치가 기억나지 않는데, 확인 후 알려드리겠습니다'는 영어로?", options: ["I don't have that number off the top of my head, but I'll follow up.", "I refuse to answer that question.", "That number doesn't exist.", "I already sent that number."], answer: 0 },
      { qKo: "'질문을 제대로 이해했는지 확인하고 싶은데요'는 영어로?", options: ["Just to make sure I understand your question correctly,", "I don't care about your question,", "Let's move on without answering,", "That question is irrelevant,"], answer: 0 },
      { qKo: "'그게 무슨 의미인지 좀 더 설명해주시겠어요?'는 영어로?", options: ["Could you clarify what you mean by that?", "Could you leave the room now?", "Could you repeat the entire presentation?", "Could you stop talking?"], answer: 0 },
      { qKo: "'오늘 발표 범위를 벗어나는 내용인데, 따로 논의드릴게요'는 영어로?", options: ["That's outside the scope of today's presentation, but I'm happy to discuss it offline.", "That question makes no sense at all.", "I will never discuss that topic.", "That's exactly what today's presentation is about."], answer: 0 }
    ]
  },
  {
    day: 17,
    week: 3,
    titleKo: "숫자와 리포트 발표하기",
    titleEn: "Presenting Numbers & Reports",
    phrases: [
      { en: "We hit 92% of our target this quarter.", ko: "이번 분기 목표의 92%를 달성했습니다.", tip: "목표 대비 실적 발표" },
      { en: "Our conversion rate came in slightly above expectations.", ko: "전환율이 예상보다 약간 높게 나왔습니다.", tip: "지표 설명" },
      { en: "Let's break down the numbers by region.", ko: "지역별로 수치를 나눠서 보겠습니다.", tip: "세부 분석 도입" },
      { en: "Year-over-year, we're up 8%.", ko: "전년 대비 8% 상승했습니다.", tip: "전년 대비 표현" },
      { en: "We fell short of our goal by about 5%.", ko: "목표에 약 5% 미달했습니다.", tip: "목표 미달 표현" },
      { en: "These figures reflect the impact of the new marketing campaign.", ko: "이 수치는 새 마케팅 캠페인의 영향을 반영합니다.", tip: "결과의 원인 설명" }
    ],
    dialogue: {
      situationKo: "월간 매출 리포트를 팀 앞에서 발표하는 상황",
      lines: [
        { speaker: "A", en: "Let's go over last month's report together." },
        { speaker: "B", en: "I'm curious how we did against our target." },
        { speaker: "A", en: "We hit 92% of our target this quarter, which is close but not quite there." },
        { speaker: "B", en: "What about the conversion rate?" },
        { speaker: "A", en: "Our conversion rate came in slightly above expectations, actually." },
        { speaker: "B", en: "That's encouraging. Can we see it by region?" },
        { speaker: "A", en: "Sure, let's break down the numbers by region on the next slide." },
        { speaker: "B", en: "And how does that compare to last year?" },
        { speaker: "A", en: "Year-over-year, we're up 8%, and these figures reflect the impact of the new marketing campaign." },
        { speaker: "B", en: "Great work, that campaign is clearly paying off." }
      ]
    },
    listeningQuiz: [
      { qKo: "이번 분기 목표 달성률은?", options: ["78%", "85%", "92%", "100%"], answer: 2 },
      { qKo: "전환율은 예상과 비교해 어땠나요?", options: ["예상보다 낮았다", "예상보다 약간 높았다", "예상과 완전히 같았다", "측정하지 못했다"], answer: 1 },
      { qKo: "전년 대비 상승률과 그 원인은?", options: ["3% 상승, 원인 불명", "8% 상승, 새 마케팅 캠페인", "5% 하락, 경기 침체", "변화 없음, 계절 요인"], answer: 1 }
    ],
    reading: {
      passage: "Presenting numbers well is a skill separate from simply having good numbers. A report full of raw figures can overwhelm an audience, so effective presenters organize data around a clear reference point: the target. Saying \"we hit 92% of our target\" immediately tells listeners whether performance was strong or weak, without requiring them to do the math themselves. Breaking numbers down — by region, by product line, or by month — also helps the audience see patterns instead of a single flat total. Comparisons like \"year-over-year, we're up 8%\" give even more context, since a number in isolation rarely means much. Finally, strong presenters connect the numbers to a cause. Stating that \"these figures reflect the impact of the new marketing campaign\" turns a report into a story, helping the audience understand not just what happened, but why it happened and what to do next.",
      questions: [
        { qKo: "숫자를 발표할 때 청중에게 기준점을 제공하는 방법은?", options: ["숫자를 최대한 빨리 읽는다", "목표 대비 달성률을 함께 제시한다", "숫자를 아예 생략한다", "표를 화면 밖으로 치운다"], answer: 1 },
        { qKo: "수치를 원인과 연결하는 것이 중요한 이유는?", options: ["발표를 더 길게 만들려고", "청중이 왜 그런 결과가 나왔는지 이해하도록 돕는다", "숫자를 숨기기 위해", "질문을 막기 위해"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "이번 분기 목표 대비 실적을 설명하는 2~3문장을 영어로 써보세요.",
      promptEn: "Write 2-3 sentences explaining this quarter's performance against your target.",
      modelAnswer: "We hit 92% of our target this quarter, which is close but not quite there. Year-over-year, we're up 8%, and these figures reflect the impact of the new marketing campaign."
    },
    vocabQuiz: [
      { qKo: "'이번 분기 목표의 92%를 달성했습니다'는 영어로?", options: ["We hit 92% of our target this quarter.", "We missed every target this quarter.", "We have no target this quarter.", "We doubled our target this quarter."], answer: 0 },
      { qKo: "'지역별로 수치를 나눠서 보겠습니다'는 영어로?", options: ["Let's break down the numbers by region.", "Let's hide the numbers completely.", "Let's ignore regional differences.", "Let's cancel the regional report."], answer: 0 },
      { qKo: "'전년 대비 8% 상승했습니다'는 영어로?", options: ["Year-over-year, we're up 8%.", "Year-over-year, we're down 8%.", "This year has no comparison.", "We stopped tracking last year."], answer: 0 },
      { qKo: "'목표에 약 5% 미달했습니다'는 영어로?", options: ["We fell short of our goal by about 5%.", "We exceeded our goal by 5%.", "We met our goal exactly.", "We never set a goal."], answer: 0 },
      { qKo: "'이 수치는 새 마케팅 캠페인의 영향을 반영합니다'는 영어로?", options: ["These figures reflect the impact of the new marketing campaign.", "These figures have nothing to do with marketing.", "The marketing campaign was cancelled.", "We don't track marketing impact."], answer: 0 }
    ]
  },
  {
    day: 18,
    week: 3,
    titleKo: "3주차 복습 — 미니 프레젠테이션 해보기",
    titleEn: "Week 3 Review — Delivering a Mini Presentation",
    phrases: [
      { en: "Let me walk you through today's agenda.", ko: "오늘 순서를 간단히 말씀드리겠습니다.", tip: "발표 오프닝 (Day 13)" },
      { en: "As you can see from the chart, the trend is clearly upward.", ko: "차트에서 보시다시피, 추세는 확실히 상승세입니다.", tip: "데이터 설명 (Day 14)" },
      { en: "Based on these findings, I strongly recommend we move forward.", ko: "이 결과를 바탕으로, 진행할 것을 강력히 추천합니다.", tip: "설득 마무리 (Day 15)" },
      { en: "That's a great question, let me think about that for a second.", ko: "좋은 질문이네요, 잠시 생각해볼게요.", tip: "Q&A 대응 (Day 16)" },
      { en: "We hit 92% of our target this quarter.", ko: "이번 분기 목표의 92%를 달성했습니다.", tip: "실적 발표 (Day 17)" },
      { en: "To wrap things up, I'll leave you with one final thought.", ko: "마무리하자면, 마지막으로 한 가지만 더 말씀드리겠습니다.", tip: "발표 클로징 (Day 13 종합)" }
    ],
    dialogue: {
      situationKo: "오프닝부터 데이터 설명, 설득, Q&A, 클로징까지 이어지는 미니 프레젠테이션 종합 연습 상황",
      lines: [
        { speaker: "A", en: "Good afternoon, everyone. Let me walk you through today's agenda before we start." },
        { speaker: "B", en: "Great, we're ready whenever you are." },
        { speaker: "A", en: "As you can see from the chart, the trend is clearly upward this quarter." },
        { speaker: "B", en: "Impressive. What's driving that growth?" },
        { speaker: "A", en: "We hit 92% of our target this quarter, largely thanks to the new campaign." },
        { speaker: "B", en: "That's a strong result." },
        { speaker: "A", en: "Based on these findings, I strongly recommend we double down on this strategy next quarter." },
        { speaker: "B", en: "Makes sense. Quick question — what's the cost of scaling this up?" },
        { speaker: "A", en: "That's a great question, let me think about that for a second. I'll follow up with the exact figure by tomorrow." },
        { speaker: "B", en: "Sounds good. Thanks for the clear presentation." }
      ]
    },
    listeningQuiz: [
      { qKo: "A가 발표를 시작하며 가장 먼저 한 일은?", options: ["질문 받기", "아젠다 소개", "숫자 발표", "휴식 제안"], answer: 1 },
      { qKo: "이번 분기 성장의 주된 원인으로 언급된 것은?", options: ["신규 채용", "새 마케팅 캠페인", "가격 인하", "해외 진출"], answer: 1 },
      { qKo: "B의 질문에 A는 어떻게 대응했나요?", options: ["즉석에서 정확한 수치를 말했다", "잠시 생각한 후 다음날 팔로우업을 약속했다", "질문을 무시했다", "발표를 중단했다"], answer: 1 }
    ],
    reading: {
      passage: "A strong business presentation brings together everything covered this week: structure, data, persuasion, and audience interaction. It starts with a clear opening that sets expectations, using signposts like \"let me walk you through today's agenda\" so the audience knows what's coming. The body of the talk presents data with precise, comparative language — \"as you can see from the chart, the trend is clearly upward\" — turning raw numbers into a clear story. From there, the presenter builds a case, using evidence and emphasis to support a specific recommendation rather than just describing what happened. The Q&A that follows tests everything at once: staying composed under unexpected questions, buying time when needed, and admitting honestly when a follow-up is required. Finally, a confident closing reinforces the main message one last time. Presenters who master all five skills — opening, data, persuasion, Q&A, and closing — leave their audience with clarity and confidence in the decision ahead.",
      questions: [
        { qKo: "이 글에서 강한 발표를 구성하는 다섯 가지 요소가 아닌 것은?", options: ["오프닝", "데이터 설명", "설득", "가격 협상"], answer: 3 },
        { qKo: "Q&A 세션이 시험하는 능력으로 언급되지 않은 것은?", options: ["침착함 유지", "시간 벌기", "정직하게 후속 답변 약속하기", "발표 자료 디자인"], answer: 3 }
      ]
    },
    writing: {
      promptKo: "이번 주에 배운 표현을 활용해 미니 발표의 전체 흐름(오프닝-데이터-Q&A)을 2~3문장으로 요약해보세요.",
      promptEn: "Write 2-3 sentences summarizing the overall flow of a mini presentation, using this week's expressions (opening, data, Q&A).",
      modelAnswer: "Let me walk you through today's agenda first. As you can see from the chart, the trend is clearly upward, so based on these findings, I strongly recommend we move forward. If there are any questions, that's a great question, let me think about that for a second."
    },
    vocabQuiz: [
      { qKo: "발표 오프닝에서 아젠다를 소개할 때 쓰는 표현은?", options: ["Let me walk you through today's agenda.", "That's the end of everything.", "I have nothing to present.", "Let's cancel this meeting."], answer: 0 },
      { qKo: "차트를 가리키며 상승 추세를 설명할 때 쓰는 표현은?", options: ["As you can see from the chart, the trend is clearly upward.", "This chart shows nothing useful.", "The chart is completely blank.", "Please ignore this chart."], answer: 0 },
      { qKo: "근거를 바탕으로 강력히 추천할 때 쓰는 표현은?", options: ["Based on these findings, I strongly recommend we move forward.", "I have no recommendation at all.", "Let's forget about the findings.", "The findings don't matter here."], answer: 0 },
      { qKo: "질의응답에서 답변 전 시간을 벌 때 쓰는 표현은?", options: ["That's a great question, let me think about that for a second.", "I refuse to answer that.", "That question is pointless.", "Next presenter, please."], answer: 0 },
      { qKo: "목표 달성률을 발표할 때 쓰는 표현은?", options: ["We hit 92% of our target this quarter.", "We have no target this quarter.", "Our target was cancelled.", "Targets don't apply to us."], answer: 0 }
    ]
  }
];
