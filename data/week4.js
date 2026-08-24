// Week 4: Negotiation & Problem-Solving (Day 19-24)
const WEEK4 = [
  {
    day: 19,
    week: 4,
    titleKo: "제안하기",
    titleEn: "Making Proposals & Offers",
    phrases: [
      { en: "I'd like to put forward a proposal.", ko: "제안 하나 드리고 싶습니다.", tip: "공식적으로 제안을 시작할 때" },
      { en: "What if we structured it this way instead?", ko: "이런 식으로 구조를 짜면 어떨까요?", tip: "대안 구조 제시" },
      { en: "We're prepared to offer a 10% discount on bulk orders.", ko: "대량 주문 시 10% 할인을 제공할 준비가 되어 있습니다.", tip: "구체적 조건 제시" },
      { en: "There's some flexibility on our end regarding the timeline.", ko: "일정 부분은 저희 쪽에서 유연하게 조정할 여지가 있습니다.", tip: "협상 여지를 알릴 때" },
      { en: "Let me walk you through a couple of options.", ko: "몇 가지 옵션을 설명드리겠습니다.", tip: "옵션을 소개할 때" },
      { en: "How does that sound to you?", ko: "어떻게 생각하세요?", tip: "제안 후 반응을 물을 때" }
    ],
    dialogue: {
      situationKo: "공급업체와의 미팅에서 새로운 계약 조건을 제안하는 상황",
      lines: [
        { speaker: "A", en: "Thanks for making time today. I'd like to put forward a proposal for the next quarter." },
        { speaker: "B", en: "Sure, go ahead. We're open to hearing what you have in mind." },
        { speaker: "A", en: "We're prepared to offer a 10% discount on bulk orders over 5,000 units." },
        { speaker: "B", en: "That's interesting. What would the delivery schedule look like?" },
        { speaker: "A", en: "Let me walk you through a couple of options. We could do monthly shipments or one large batch quarterly." },
        { speaker: "B", en: "What if we structured it this way instead — smaller shipments, but twice a month?" },
        { speaker: "A", en: "There's some flexibility on our end regarding the timeline, so that could work." },
        { speaker: "B", en: "And the discount would still apply even with the smaller batches?" },
        { speaker: "A", en: "As long as the total volume hits 5,000 units per quarter, yes. How does that sound to you?" },
        { speaker: "B", en: "Sounds reasonable. Let me run it by my team and get back to you by Friday." }
      ]
    },
    listeningQuiz: [
      { qKo: "A가 제안한 할인율은?", options: ["5%", "10%", "15%", "20%"], answer: 1 },
      { qKo: "B가 제안한 대안 배송 방식은?", options: ["분기별 한 번에 대량 배송", "매달 한 번 배송", "한 달에 두 번, 소량 배송", "매주 배송"], answer: 2 },
      { qKo: "대화 마지막에 B는 무엇을 하기로 했나요?", options: ["즉시 계약서에 서명한다", "팀과 상의 후 금요일까지 답한다", "제안을 바로 거절한다", "가격을 더 낮춰달라고 요구한다"], answer: 1 }
    ],
    reading: {
      passage: "A well-structured proposal doesn't just state what you want — it shows the other side what's in it for them. Before presenting an offer, experienced negotiators think through two or three variations in advance, so they have flexibility built in from the start. Instead of saying \"here's our only option,\" they say \"let me walk you through a couple of options,\" which signals openness and invites collaboration. It also helps to be specific: vague offers like \"we can probably work something out\" create uncertainty, while concrete numbers, such as a percentage discount or a delivery date, give the other party something real to evaluate. Finally, always end a proposal by checking in — a simple \"how does that sound to you?\" turns a one-way pitch into a two-way conversation, and makes the next step feel natural rather than forced.",
      questions: [
        { qKo: "이 글에 따르면 노련한 협상가들이 미리 준비하는 것은?", options: ["단 하나의 고정된 제안", "두세 가지 변형된 옵션", "가장 낮은 가격만", "상대방의 예산 정보"], answer: 1 },
        { qKo: "제안을 마칠 때 권장되는 방법은?", options: ["바로 다음 안건으로 넘어간다", "상대방의 반응을 확인하는 질문을 한다", "숫자를 언급하지 않는다", "결정을 재촉한다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "거래처에게 새로운 결제 조건을 제안하는 2~3문장짜리 영어 메시지를 써보세요. (구체적인 조건 포함, 반응을 묻는 문장으로 마무리)",
      promptEn: "Write a 2-3 sentence message proposing new payment terms to a business partner, ending with a question about their reaction.",
      modelAnswer: "I'd like to put forward a proposal regarding our payment terms. We're prepared to extend the payment window from 30 to 45 days if we can lock in a two-year contract. How does that sound to you?"
    },
    vocabQuiz: [
      { qKo: "'제안 하나 드리고 싶습니다'는 영어로?", options: ["I'd like to put forward a proposal.", "I have nothing to say.", "Let's cancel the meeting.", "I disagree with everything."], answer: 0 },
      { qKo: "'일정 부분은 저희 쪽에서 유연하게 조정할 여지가 있습니다'는?", options: ["The timeline is fixed and cannot change.", "There's some flexibility on our end regarding the timeline.", "We never discuss timelines.", "The deadline was yesterday."], answer: 1 },
      { qKo: "제안 후 상대의 의견을 물을 때 자연스러운 표현은?", options: ["How does that sound to you?", "Do you even care?", "That's final, no questions.", "Why are you still here?"], answer: 0 },
      { qKo: "'몇 가지 옵션을 설명드리겠습니다'는 영어로?", options: ["Let me walk you through a couple of options.", "I have no other choice for you.", "Forget about the options.", "Pick whatever you want."], answer: 0 },
      { qKo: "'대량 주문 시 10% 할인을 제공할 준비가 되어 있습니다'는?", options: ["We're prepared to offer a 10% discount on bulk orders.", "We never offer discounts.", "The price is going up 10%.", "Bulk orders are not accepted."], answer: 0 }
    ]
  },
  {
    day: 20,
    week: 4,
    titleKo: "조건 협상하기",
    titleEn: "Negotiating Terms",
    phrases: [
      { en: "That's a bit outside our budget, to be honest.", ko: "솔직히 말씀드리면 저희 예산을 조금 벗어나네요.", tip: "예산 초과를 완곡하게 알릴 때" },
      { en: "Could we meet somewhere in the middle?", ko: "중간 지점에서 합의할 수 있을까요?", tip: "절충안 제시" },
      { en: "If you can lower the price, we could commit to a longer contract.", ko: "가격을 낮춰주시면 저희는 더 긴 계약을 약속드릴 수 있어요.", tip: "조건부 절충안 (트레이드오프)" },
      { en: "Let's revisit the deadline — is there any room to push it back?", ko: "마감일을 다시 논의해볼까요, 조금 미룰 여지가 있나요?", tip: "기한 재협상" },
      { en: "That works for us, provided the terms stay as discussed.", ko: "논의된 조건이 유지된다면 저희도 괜찮습니다.", tip: "조건부 동의" },
      { en: "I think we're close to a deal here.", ko: "거의 합의에 다다른 것 같네요.", tip: "협상이 마무리 단계일 때" }
    ],
    dialogue: {
      situationKo: "계약 갱신을 앞두고 가격과 계약 기간을 두고 협상하는 상황",
      lines: [
        { speaker: "A", en: "So, about the renewal — we're proposing a 15% increase for next year." },
        { speaker: "B", en: "That's a bit outside our budget, to be honest. We were expecting something closer to 5%." },
        { speaker: "A", en: "I understand. Could we meet somewhere in the middle, maybe around 10%?" },
        { speaker: "B", en: "Still a stretch. If you can lower the price to 7%, we could commit to a longer contract — two years instead of one." },
        { speaker: "A", en: "That's a fair trade-off. Let me also ask — is there any room to push back the payment schedule?" },
        { speaker: "B", en: "Let's revisit the deadline once we settle the price. One thing at a time." },
        { speaker: "A", en: "Fair enough. 7% with a two-year commitment — that works for us, provided the terms stay as discussed." },
        { speaker: "B", en: "Agreed. And on the payment schedule, we can extend it from 30 to 45 days." },
        { speaker: "A", en: "I think we're close to a deal here. Let's get it in writing." },
        { speaker: "B", en: "Sounds good. I'll have the updated contract sent over by tomorrow." }
      ]
    },
    listeningQuiz: [
      { qKo: "A가 처음 제시한 인상률은?", options: ["5%", "7%", "10%", "15%"], answer: 3 },
      { qKo: "B가 7%에 동의하는 대가로 제안한 것은?", options: ["더 짧은 계약 기간", "2년 계약", "선불 결제", "즉시 계약 해지"], answer: 1 },
      { qKo: "최종적으로 조정된 결제 기한은?", options: ["30일에서 45일로 연장", "45일에서 30일로 단축", "결제 기한 없음", "60일로 연장"], answer: 0 }
    ],
    reading: {
      passage: "Negotiating terms is rarely about one side simply winning. The most effective negotiators look for trade-offs — giving up something of lower value to them in exchange for something of higher value. For example, a buyer might accept a higher price if the seller offers a longer contract, since stability can matter more than the exact number. Phrases like \"could we meet somewhere in the middle\" or \"if you can lower the price, we could commit to a longer contract\" signal that you're willing to move, but only if the other side moves too. It's also smart to tackle one issue at a time rather than negotiating price, deadline, and payment terms all at once — this keeps the conversation focused and prevents both sides from feeling overwhelmed. When both parties sense the deal is close, saying something like \"I think we're close to a deal here\" helps push the conversation toward a clear, written agreement.",
      questions: [
        { qKo: "이 글에서 말하는 효과적인 협상의 핵심은?", options: ["무조건 낮은 가격을 고수하는 것", "가치 있는 트레이드오프를 찾는 것", "상대방의 요구를 모두 거절하는 것", "협상을 최대한 오래 끄는 것"], answer: 1 },
        { qKo: "여러 조건을 협상할 때 권장되는 방식은?", options: ["모든 조건을 동시에 논의한다", "한 번에 하나씩 다룬다", "가격 얘기는 아예 하지 않는다", "이메일로만 협상한다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "공급업체와 가격 협상 중, 가격을 낮춰주면 더 긴 계약을 약속하겠다는 절충안을 제안하는 2~3문장 영어 메시지를 써보세요.",
      promptEn: "Write a 2-3 sentence message to a supplier proposing a trade-off: a longer contract in exchange for a lower price.",
      modelAnswer: "That's a bit outside our budget, to be honest. If you can lower the price by 5%, we could commit to a two-year contract instead of one. Could we meet somewhere in the middle on this?"
    },
    vocabQuiz: [
      { qKo: "'중간 지점에서 합의할 수 있을까요?'는 영어로?", options: ["Could we meet somewhere in the middle?", "We will never agree.", "Take it or leave it.", "This is not negotiable."], answer: 0 },
      { qKo: "'솔직히 말씀드리면 저희 예산을 조금 벗어나네요'는?", options: ["That's exactly within our budget.", "That's a bit outside our budget, to be honest.", "We have no budget at all.", "Money doesn't matter to us."], answer: 1 },
      { qKo: "'거의 합의에 다다른 것 같네요'는 영어로?", options: ["I think we're close to a deal here.", "We are nowhere close to an agreement.", "This deal is off the table.", "Let's start over completely."], answer: 0 },
      { qKo: "'마감일을 다시 논의해볼까요'는 영어로?", options: ["Let's revisit the deadline.", "The deadline cannot be discussed.", "Forget about the deadline.", "The deadline was cancelled."], answer: 0 },
      { qKo: "'논의된 조건이 유지된다면 저희도 괜찮습니다'는?", options: ["That works for us, provided the terms stay as discussed.", "We reject all the terms.", "Nothing has been discussed yet.", "We refuse to proceed."], answer: 0 }
    ]
  },
  {
    day: 21,
    week: 4,
    titleKo: "반대와 이의 제기 대응하기",
    titleEn: "Handling Objections & Pushback",
    phrases: [
      { en: "I hear where you're coming from.", ko: "무슨 말씀이신지 이해합니다.", tip: "상대 우려를 인정할 때" },
      { en: "That's a fair point, but let me offer some context.", ko: "타당한 지적입니다만, 배경 설명을 좀 드릴게요.", tip: "동의하면서도 재설득할 때" },
      { en: "I can see why that would be a concern.", ko: "왜 그게 우려되실지 이해가 됩니다.", tip: "공감 표현" },
      { en: "Let's address that head-on.", ko: "그 문제를 정면으로 다뤄보죠.", tip: "이슈를 회피하지 않고 다룰 때" },
      { en: "Would it help if I shared some data on that?", ko: "관련 데이터를 보여드리면 도움이 될까요?", tip: "근거 자료로 설득할 때" },
      { en: "I understand the hesitation, but here's why I think it's worth it.", ko: "망설이시는 이유는 이해합니다만, 왜 이게 가치 있는지 말씀드릴게요.", tip: "재설득 시작 문구" }
    ],
    dialogue: {
      situationKo: "새로운 소프트웨어 도입 제안에 대해 클라이언트가 예산과 전환 리스크를 우려하며 반대하는 상황",
      lines: [
        { speaker: "A", en: "Honestly, I'm not sure this is worth the investment right now. The price tag is pretty high." },
        { speaker: "B", en: "I hear where you're coming from. Budget is always a real concern." },
        { speaker: "A", en: "And switching systems mid-year feels risky. What if it disrupts our operations?" },
        { speaker: "B", en: "That's a fair point, but let me offer some context — we'd run both systems in parallel for the first month." },
        { speaker: "A", en: "I can see why that would be a concern for smaller teams, but we have over 200 employees to onboard." },
        { speaker: "B", en: "Let's address that head-on. We'll assign a dedicated onboarding specialist for the first 60 days." },
        { speaker: "A", en: "That helps, but I'm still not convinced the ROI justifies the cost." },
        { speaker: "B", en: "Would it help if I shared some data on that? Our clients typically see a 20% efficiency gain within six months." },
        { speaker: "A", en: "I understand the hesitation, but here's why I think it's worth it — send me that data and I'll review it with my team." },
        { speaker: "B", en: "I'll have it in your inbox by end of day. Thanks for hearing me out." }
      ]
    },
    listeningQuiz: [
      { qKo: "A가 처음 제기한 우려는?", options: ["직원들이 소프트웨어를 싫어한다", "가격이 부담스럽다", "고객 서비스가 나쁘다", "계약 기간이 너무 짧다"], answer: 1 },
      { qKo: "B가 전환 리스크를 줄이기 위해 제안한 것은?", options: ["즉시 전면 교체", "한 달간 두 시스템 병행 운영", "전환을 아예 취소", "가격을 두 배로 인상"], answer: 1 },
      { qKo: "B가 언급한 예상 효율성 개선 효과는?", options: ["6개월 내 20% 향상", "1년 내 50% 향상", "즉시 100% 향상", "효과 없음"], answer: 0 }
    ],
    reading: {
      passage: "When someone pushes back on your proposal, the instinct is often to defend it immediately. But skilled negotiators do the opposite first: they acknowledge the concern. Saying \"I hear where you're coming from\" or \"I can see why that would be a concern\" doesn't mean you agree — it simply shows you're listening, which lowers the other person's guard. Only after that should you respond with context or evidence, using a bridge phrase like \"that's a fair point, but let me offer some context.\" Avoiding the objection rarely works; it usually resurfaces later, often at a worse time. Instead, addressing it directly — \"let's address that head-on\" — signals confidence. And when logic alone isn't landing, offering concrete data, such as a specific efficiency statistic, can turn a skeptical listener into a willing one. The goal isn't to win the argument, but to move the conversation forward together.",
      questions: [
        { qKo: "이 글에서 반대 의견을 들었을 때 먼저 해야 할 일은?", options: ["즉시 반박한다", "우려를 인정한다", "화제를 바꾼다", "대화를 끝낸다"], answer: 1 },
        { qKo: "이 글에 따르면 이의 제기를 회피하면 어떤 일이 생기나요?", options: ["문제가 완전히 사라진다", "나중에 더 나쁜 시점에 다시 불거진다", "상대가 곧바로 동의한다", "협상이 더 빨리 끝난다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "고객이 가격이 너무 비싸다고 반대할 때, 우려를 인정한 뒤 데이터로 재설득하는 2~3문장 영어 답변을 써보세요.",
      promptEn: "Write a 2-3 sentence response to a client who objects that the price is too high, acknowledging their concern and offering data to persuade them.",
      modelAnswer: "I hear where you're coming from — the price does feel like a big jump upfront. Would it help if I shared some data on that? Clients who've made the switch typically recover the cost within four months through efficiency gains."
    },
    vocabQuiz: [
      { qKo: "'무슨 말씀이신지 이해합니다'는 영어로?", options: ["I hear where you're coming from.", "I don't understand you at all.", "That's completely wrong.", "Stop talking now."], answer: 0 },
      { qKo: "'그 문제를 정면으로 다뤄보죠'는 영어로?", options: ["Let's ignore that issue.", "Let's address that head-on.", "Let's postpone this forever.", "Let's blame someone else."], answer: 1 },
      { qKo: "'타당한 지적입니다만, 배경 설명을 좀 드릴게요'는?", options: ["That's a fair point, but let me offer some context.", "You are completely wrong about this.", "I refuse to explain anything.", "That point doesn't matter at all."], answer: 0 },
      { qKo: "'관련 데이터를 보여드리면 도움이 될까요?'는?", options: ["Would it help if I shared some data on that?", "Data is not important here.", "I will never show you numbers.", "Let's forget about evidence."], answer: 0 },
      { qKo: "'왜 그게 우려되실지 이해가 됩니다'는 영어로?", options: ["I can see why that would be a concern.", "Your concern makes no sense.", "I don't care about your worries.", "That's not a real problem."], answer: 0 }
    ]
  },
  {
    day: 22,
    week: 4,
    titleKo: "함께 문제 해결하기",
    titleEn: "Solving Problems Together",
    phrases: [
      { en: "Let's dig into what's actually causing this.", ko: "실제로 무엇이 원인인지 파고들어봅시다.", tip: "근본 원인 파악 시작" },
      { en: "It seems like the bottleneck is happening at the approval stage.", ko: "병목 현상이 승인 단계에서 발생하는 것 같아요.", tip: "문제 지점 특정" },
      { en: "What are our options here?", ko: "우리가 선택할 수 있는 방안은 뭐가 있을까요?", tip: "대안 모색 질문" },
      { en: "One workaround could be to run these two steps in parallel.", ko: "한 가지 해결책은 이 두 단계를 병렬로 진행하는 것일 수 있어요.", tip: "임시 해결책 제안" },
      { en: "Let's not point fingers — let's just fix it.", ko: "책임 소재를 따지기보다 그냥 해결합시다.", tip: "생산적인 분위기로 전환" },
      { en: "Who should own this going forward?", ko: "앞으로 이 문제는 누가 책임지고 맡아야 할까요?", tip: "역할 분담 정할 때" }
    ],
    dialogue: {
      situationKo: "프로젝트 일정이 계속 지연되는 원인을 팀원들과 함께 파악하고 해결책을 찾는 회의",
      lines: [
        { speaker: "A", en: "We've missed the deadline three times now. Let's dig into what's actually causing this." },
        { speaker: "B", en: "From what I've seen, it seems like the bottleneck is happening at the approval stage." },
        { speaker: "A", en: "Interesting. Every request has to go through legal and finance separately, right?" },
        { speaker: "B", en: "Exactly, and they're done one after another instead of at the same time." },
        { speaker: "A", en: "So what are our options here?" },
        { speaker: "B", en: "One workaround could be to run these two steps in parallel instead of sequentially." },
        { speaker: "A", en: "That could easily save us a week per cycle. Any downside?" },
        { speaker: "B", en: "Slightly more coordination needed, but nothing we can't manage." },
        { speaker: "A", en: "Let's not point fingers — let's just fix it. Who should own this going forward?" },
        { speaker: "B", en: "I can set up the parallel process and report back by next Monday." }
      ]
    },
    listeningQuiz: [
      { qKo: "프로젝트가 지연된 원인으로 지목된 단계는?", options: ["기획 단계", "승인 단계", "디자인 단계", "테스트 단계"], answer: 1 },
      { qKo: "제안된 해결책은?", options: ["승인 절차를 아예 없앤다", "두 승인을 순차적이 아닌 병렬로 진행한다", "마감일을 없앤다", "팀원을 해고한다"], answer: 1 },
      { qKo: "B는 다음으로 무엇을 하기로 했나요?", options: ["아무것도 하지 않는다", "병렬 프로세스를 설정하고 월요일까지 보고한다", "즉시 사직한다", "회의를 다시 요청한다"], answer: 1 }
    ],
    reading: {
      passage: "When a process keeps breaking down, it's tempting to jump straight to blame. But teams that solve problems well start with a different question: what's actually causing this? Rather than assuming someone dropped the ball, they trace the issue back to its source — often a structural bottleneck rather than a personal failure. Phrases like \"it seems like the bottleneck is happening at\" help name the problem specifically instead of vaguely. Once the cause is clear, the conversation shifts to options: \"what are our options here?\" opens the floor for creative fixes, such as running two steps in parallel instead of one after another. Just as important is tone — saying \"let's not point fingers, let's just fix it\" keeps the discussion productive instead of defensive. Finally, every solution needs an owner; without someone clearly responsible for the next step, even the best fix tends to fall through the cracks.",
      questions: [
        { qKo: "이 글에서 문제 해결을 잘하는 팀이 먼저 하는 것은?", options: ["누구 잘못인지부터 찾는다", "원인을 구조적으로 파악한다", "바로 담당자를 해고한다", "문제를 무시한다"], answer: 1 },
        { qKo: "해결책 실행에서 마지막으로 중요한 것은?", options: ["누가 책임지고 맡을지 정하는 것", "회의를 더 자주 여는 것", "문서를 더 많이 작성하는 것", "예산을 늘리는 것"], answer: 0 }
      ]
    },
    writing: {
      promptKo: "팀 회의에서 반복되는 문제의 원인을 파악하고 병렬 처리라는 해결책을 제안하는 2~3문장 영어 발언을 써보세요.",
      promptEn: "Write a 2-3 sentence statement for a team meeting identifying the cause of a recurring problem and proposing a parallel-processing solution.",
      modelAnswer: "Let's dig into what's actually causing this delay. It seems like the bottleneck is happening because two reviews are done one after another instead of at the same time. One workaround could be to run them in parallel starting next sprint."
    },
    vocabQuiz: [
      { qKo: "'실제로 무엇이 원인인지 파고들어봅시다'는 영어로?", options: ["Let's dig into what's actually causing this.", "Let's ignore the cause entirely.", "Let's blame the intern.", "Let's cancel the project."], answer: 0 },
      { qKo: "'책임 소재를 따지기보다 그냥 해결합시다'는?", options: ["Let's point fingers first.", "Let's not point fingers — let's just fix it.", "Let's find someone to blame.", "Let's argue about who's at fault."], answer: 1 },
      { qKo: "'우리가 선택할 수 있는 방안은 뭐가 있을까요?'는 영어로?", options: ["What are our options here?", "There is only one option.", "We have no choices left.", "Options don't matter now."], answer: 0 },
      { qKo: "'앞으로 이 문제는 누가 책임지고 맡아야 할까요?'는?", options: ["Who should own this going forward?", "Nobody needs to handle this.", "This is not anyone's job.", "Let's forget about ownership."], answer: 0 },
      { qKo: "'병목 현상이 승인 단계에서 발생하는 것 같아요'는?", options: ["It seems like the bottleneck is happening at the approval stage.", "There is no bottleneck anywhere.", "The approval stage is perfectly fast.", "We don't have an approval stage."], answer: 0 }
    ]
  },
  {
    day: 23,
    week: 4,
    titleKo: "피드백 주고받기",
    titleEn: "Giving & Receiving Feedback",
    phrases: [
      { en: "Can I share some feedback on the report?", ko: "보고서에 대해 피드백 좀 드려도 될까요?", tip: "피드백 시작 전 허락 구하기" },
      { en: "One thing that would make this even stronger is more data upfront.", ko: "앞부분에 데이터를 더 넣으면 훨씬 탄탄해질 것 같아요.", tip: "건설적 피드백 표현" },
      { en: "I really appreciate you pointing that out.", ko: "그렇게 짚어주셔서 정말 감사해요.", tip: "피드백을 방어적이지 않게 받아들일 때" },
      { en: "That's fair — I didn't think about it from that angle.", ko: "맞는 말씀이에요, 그런 관점에서는 생각 못 했네요.", tip: "피드백 수용 표현" },
      { en: "Let me make sure I understood you correctly.", ko: "제가 정확히 이해했는지 확인해볼게요.", tip: "피드백 확인 질문" },
      { en: "Overall this is strong — just a couple of tweaks needed.", ko: "전반적으로 훌륭해요, 몇 가지만 손보면 될 것 같아요.", tip: "긍정 먼저, 개선점은 그 다음" }
    ],
    dialogue: {
      situationKo: "매니저가 팀원의 발표 자료에 대해 피드백을 주고, 팀원이 이를 방어적이지 않게 받아들이는 1:1 미팅",
      lines: [
        { speaker: "A", en: "Thanks for sending the deck over. Can I share some feedback on it?" },
        { speaker: "B", en: "Of course, please. I want it to be as strong as possible before Thursday." },
        { speaker: "A", en: "Overall this is strong — just a couple of tweaks needed. One thing that would make this even stronger is more data upfront." },
        { speaker: "B", en: "That's fair — I didn't think about it from that angle. I jumped straight into the recommendation." },
        { speaker: "A", en: "Right, and the client will want to see the numbers before they trust the conclusion." },
        { speaker: "B", en: "Let me make sure I understood you correctly — you want the market data moved to slide two?" },
        { speaker: "A", en: "Exactly, right after the intro. Also, the font on slide five is hard to read." },
        { speaker: "B", en: "I really appreciate you pointing that out — I hadn't noticed on my screen." },
        { speaker: "A", en: "No problem. Otherwise, the structure and the pacing are both excellent." },
        { speaker: "B", en: "Thanks, I'll have a revised version to you by tomorrow morning." }
      ]
    },
    listeningQuiz: [
      { qKo: "A가 처음 제안한 개선점은?", options: ["색상을 바꿔라", "앞부분에 데이터를 더 넣어라", "슬라이드 수를 줄여라", "발표 시간을 늘려라"], answer: 1 },
      { qKo: "A가 두 번째로 지적한 문제는?", options: ["결론이 없다", "5번 슬라이드 폰트가 읽기 어렵다", "전체 구조가 나쁘다", "발표자가 준비되지 않았다"], answer: 1 },
      { qKo: "B는 피드백을 어떻게 받아들였나요?", options: ["화를 내며 반박했다", "감사하며 수용했다", "무시하고 넘어갔다", "회의를 중단시켰다"], answer: 1 }
    ],
    reading: {
      passage: "Feedback is only useful if it's both given well and received well. On the giving side, the most effective approach starts with permission — \"can I share some feedback\" — followed by something specific and actionable, like \"one thing that would make this even stronger is more data upfront.\" Vague comments such as \"this needs work\" leave no clear next step. Ending on a positive note, such as \"overall this is strong, just a couple of tweaks needed,\" helps the feedback land without discouraging the person. On the receiving side, the instinct to defend can get in the way of actually hearing the point. Responses like \"that's fair, I didn't think about it from that angle\" or \"I really appreciate you pointing that out\" signal openness, which makes colleagues more willing to give honest feedback in the future.",
      questions: [
        { qKo: "이 글에 따르면 피드백을 줄 때 좋은 시작 방법은?", options: ["허락을 구하지 않고 바로 지적한다", "허락을 구한 뒤 구체적으로 말한다", "익명으로 이메일을 보낸다", "다른 사람 앞에서 공개적으로 말한다"], answer: 1 },
        { qKo: "피드백을 받을 때 방어적이지 않은 태도로 권장되는 것은?", options: ["즉시 반박한다", "열린 태도로 감사를 표현한다", "대화를 끝낸다", "못 들은 척한다"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "동료의 프레젠테이션에 대해 긍정적인 부분을 먼저 말하고, 개선점 한 가지를 구체적으로 제안하는 2~3문장 영어 피드백을 써보세요.",
      promptEn: "Write a 2-3 sentence piece of feedback for a colleague's presentation, starting with something positive and then giving one specific, actionable suggestion.",
      modelAnswer: "Overall this is strong — the structure and pacing both worked really well. Can I share one piece of feedback? One thing that would make this even stronger is adding a summary slide at the end."
    },
    vocabQuiz: [
      { qKo: "'보고서에 대해 피드백 좀 드려도 될까요?'는 영어로?", options: ["Can I share some feedback on the report?", "I refuse to comment on the report.", "The report doesn't need feedback.", "Never show me this report again."], answer: 0 },
      { qKo: "'맞는 말씀이에요, 그런 관점에서는 생각 못 했네요'는?", options: ["That's fair — I didn't think about it from that angle.", "You are completely wrong.", "I already knew that.", "That angle doesn't exist."], answer: 0 },
      { qKo: "'그렇게 짚어주셔서 정말 감사해요'는 영어로?", options: ["I really appreciate you pointing that out.", "Don't ever point that out again.", "That comment was useless.", "I don't need your opinion."], answer: 0 },
      { qKo: "'제가 정확히 이해했는지 확인해볼게요'는?", options: ["Let me make sure I understood you correctly.", "I don't want to understand this.", "Understanding is not necessary.", "Explain nothing to me."], answer: 0 },
      { qKo: "'전반적으로 훌륭해요, 몇 가지만 손보면 될 것 같아요'는?", options: ["Overall this is strong — just a couple of tweaks needed.", "This is completely unacceptable.", "Nothing about this works.", "Start over from scratch."], answer: 0 }
    ]
  },
  {
    day: 24,
    week: 4,
    titleKo: "4주차 복습 — 딜 협상하기",
    titleEn: "Week 4 Review — Negotiating a Deal",
    phrases: [
      { en: "I'd like to put forward a proposal for our partnership.", ko: "저희 파트너십에 대한 제안을 드리고 싶습니다.", tip: "제안 시작 (Day 19)" },
      { en: "Could we meet somewhere in the middle on the pricing?", ko: "가격 부분에서 중간 지점을 찾을 수 있을까요?", tip: "절충안 제시 (Day 20)" },
      { en: "I hear where you're coming from, but let me offer some context.", ko: "무슨 말씀이신지 이해합니다만, 배경 설명을 좀 드릴게요.", tip: "이의 제기 대응 (Day 21)" },
      { en: "Let's dig into what's actually driving the hesitation.", ko: "실제로 무엇이 망설임의 원인인지 파고들어봅시다.", tip: "함께 문제 해결 (Day 22)" },
      { en: "Can I share some feedback before we finalize this?", ko: "확정하기 전에 피드백 좀 드려도 될까요?", tip: "피드백 주고받기 (Day 23)" },
      { en: "I think we're close to a deal — let's get it in writing.", ko: "거의 합의에 다다른 것 같아요, 문서로 정리하죠.", tip: "협상 마무리" }
    ],
    dialogue: {
      situationKo: "두 회사가 파트너십 계약을 처음부터 끝까지 협상하여 합의에 도달하는 종합 회의",
      lines: [
        { speaker: "A", en: "Thanks for joining today. I'd like to put forward a proposal for our partnership — a joint marketing campaign for Q1." },
        { speaker: "B", en: "We're open to it, but the budget you mentioned in the email is a bit outside our budget, to be honest." },
        { speaker: "A", en: "I hear where you're coming from. Could we meet somewhere in the middle on the total spend?" },
        { speaker: "B", en: "Maybe. If you can lower it by 15%, we could commit to extending the campaign an extra month." },
        { speaker: "A", en: "That's a fair point, but let me offer some context — our production costs are fixed regardless of the timeline." },
        { speaker: "B", en: "I understand, but let's dig into what's actually driving the hesitation here — it's mostly the upfront cost." },
        { speaker: "A", en: "What if we structured it this way instead — half upfront, half after the first month's results?" },
        { speaker: "B", en: "That works for us, provided the terms stay as discussed. Can I share some feedback before we finalize this? The reporting schedule feels vague — let's define exact check-in dates." },
        { speaker: "A", en: "That's fair — I didn't think about it from that angle. I think we're close to a deal here, so let's get it in writing and send the draft by Friday." },
        { speaker: "B", en: "Sounds great. Looking forward to working together on this." }
      ]
    },
    listeningQuiz: [
      { qKo: "이 대화의 주제는?", options: ["채용 면접", "공동 마케팅 캠페인 파트너십 협상", "고객 불만 처리", "사무실 이전 계획"], answer: 1 },
      { qKo: "B가 예산을 15% 낮춰주는 대가로 제안한 것은?", options: ["캠페인 기간을 한 달 연장", "캠페인을 즉시 종료", "다른 회사와 계약", "가격을 두 배로 인상"], answer: 0 },
      { qKo: "결제 방식으로 합의된 구조는?", options: ["전액 후불", "전액 선불", "절반 선불, 절반은 첫 달 결과 이후", "결제 없음"], answer: 2 }
    ],
    reading: {
      passage: "A real negotiation rarely follows a straight line — it moves through proposing, adjusting terms, handling pushback, solving problems together, and giving feedback, often all in a single conversation. It typically opens with a clear proposal, something concrete enough to react to. When the other side raises a concern about cost or timing, the strongest response acknowledges it first before offering context or an alternative structure. From there, the conversation often shifts to problem-solving: instead of restating positions, both sides dig into what's actually causing the hesitation, which usually turns out to be narrower than it first appeared — often just one detail, like upfront cost or a vague schedule. Even near the finish line, useful feedback can still improve the deal, and a good negotiator welcomes it rather than rushing to close. The final signal that a deal is done is simple: both sides agree to put it in writing, turning a spoken agreement into a shared, concrete commitment.",
      questions: [
        { qKo: "이 글에 따르면 실제 협상은 어떤 방식으로 진행되나요?", options: ["한 단계로 즉시 끝난다", "제안, 조율, 대응, 문제 해결, 피드백이 한 대화에서 섞여 진행된다", "이메일로만 진행된다", "항상 첫 제안대로 마무리된다"], answer: 1 },
        { qKo: "협상이 끝났다는 신호로 이 글이 제시하는 것은?", options: ["악수를 하는 것", "합의 내용을 문서로 정리하는 것", "다음 회의를 잡는 것", "가격을 다시 논의하는 것"], answer: 1 }
      ]
    },
    writing: {
      promptKo: "파트너십 협상을 마무리하며, 절충안에 동의하고 문서화를 제안하는 2~3문장 영어 메시지를 써보세요. (이번 주 배운 표현 중 2개 이상 활용)",
      promptEn: "Write a 2-3 sentence closing message for a partnership negotiation, agreeing to a compromise and proposing to finalize it in writing. Use at least two phrases from this week.",
      modelAnswer: "That works for us, provided the terms stay as discussed. I think we're close to a deal here, so let's get it in writing by the end of the week. Thanks for working through the details with us."
    },
    vocabQuiz: [
      { qKo: "'제안 하나 드리고 싶습니다'는 영어로?", options: ["I'd like to put forward a proposal.", "I have no proposal for you.", "Forget about proposals.", "This meeting is cancelled."], answer: 0 },
      { qKo: "'중간 지점에서 합의할 수 있을까요?'는 영어로?", options: ["Could we meet somewhere in the middle?", "We will never compromise.", "This is not up for discussion.", "Take it or leave it."], answer: 0 },
      { qKo: "'실제로 무엇이 원인인지 파고들어봅시다'는 영어로?", options: ["Let's dig into what's actually causing this.", "Let's ignore the real cause.", "Let's blame someone right away.", "Let's stop investigating."], answer: 0 },
      { qKo: "'확정하기 전에 피드백 좀 드려도 될까요?'는 영어로?", options: ["Can I share some feedback before we finalize this?", "Feedback is not welcome here.", "Let's finalize without any discussion.", "I have nothing more to say."], answer: 0 },
      { qKo: "'거의 합의에 다다른 것 같아요, 문서로 정리하죠'는?", options: ["I think we're close to a deal — let's get it in writing.", "We are far from any agreement.", "Let's forget this deal entirely.", "Nothing has been agreed upon."], answer: 0 }
    ]
  }
];
