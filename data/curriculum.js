// 30일 커리큘럼 데이터를 하나로 합칩니다.
// (week2~5.js가 아직 없을 때도 에러 없이 동작하도록 방어적으로 처리)
const CURRICULUM = []
  .concat(typeof WEEK1 !== "undefined" ? WEEK1 : [])
  .concat(typeof WEEK2 !== "undefined" ? WEEK2 : [])
  .concat(typeof WEEK3 !== "undefined" ? WEEK3 : [])
  .concat(typeof WEEK4 !== "undefined" ? WEEK4 : [])
  .concat(typeof WEEK5 !== "undefined" ? WEEK5 : []);

const WEEKS_META = [
  { week: 1, titleKo: "1주차 · 업무 기본기", days: [1, 2, 3, 4, 5, 6] },
  { week: 2, titleKo: "2주차 · 미팅", days: [7, 8, 9, 10, 11, 12] },
  { week: 3, titleKo: "3주차 · 발표와 데이터", days: [13, 14, 15, 16, 17, 18] },
  { week: 4, titleKo: "4주차 · 협상과 문제 해결", days: [19, 20, 21, 22, 23, 24] },
  { week: 5, titleKo: "5주차 · 고급 커뮤니케이션과 네트워킹", days: [25, 26, 27, 28, 29, 30] }
];

function getDayData(dayNum) {
  return CURRICULUM.find((d) => d.day === dayNum) || null;
}
