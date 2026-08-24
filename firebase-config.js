// ============================================================
// Firebase 설정 파일
// ------------------------------------------------------------
// 아래 FIREBASE_CONFIG 값을 본인의 Firebase 프로젝트 설정으로
// 교체해야 폰/PC 동기화가 동작합니다.
//
// 값을 얻는 방법 (요약, 자세한 단계는 안내 문서 참고):
// 1) https://console.firebase.google.com 에서 새 프로젝트 생성
// 2) 프로젝트 설정 > 일반 > "내 앱" 에서 웹 앱(</>) 추가
// 3) 화면에 나오는 firebaseConfig 객체를 통째로 복사해서
//    아래 FIREBASE_CONFIG 자리에 붙여넣기
// 4) Authentication > Sign-in method 에서 "Google" 로그인 사용 설정
// 5) Firestore Database 만들기 (프로덕션 모드로 시작해도 OK,
//    보안 규칙은 안내 문서의 규칙으로 교체)
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
