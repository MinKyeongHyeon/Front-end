# React 오목 게임 학습 가이드

이 프로젝트는 주니어 개발자가 React를 학습하면서 오목 게임을 만들어보는 실습 프로젝트입니다.

## 🎯 학습 목표

1. **React 기본 개념 이해**

   - 컴포넌트 (Component)
   - JSX 문법
   - Props와 State
   - 이벤트 핸들링

2. **React Hooks 학습**

   - useState를 활용한 상태 관리
   - 배열과 객체 상태 업데이트

3. **프로젝트 구조 이해**
   - 컴포넌트 분리 및 재사용
   - CSS 모듈 및 스타일링

## 📁 프로젝트 구조

```
src/
├── App.jsx          # 메인 게임 컴포넌트
├── App.css          # 게임 스타일링
├── main.jsx         # React 앱 진입점
└── index.css        # 전역 스타일
```

## 🔧 주요 기능

### 1. 게임 보드 관리

- 15x15 크기의 2차원 배열로 게임 보드 상태 관리
- 각 셀의 상태: 0(빈칸), 1(흑돌), 2(백돌)

### 2. 플레이어 턴 관리

- `currentPlayer` 상태로 현재 플레이어 추적
- 돌을 놓을 때마다 플레이어 전환

### 3. 승리 조건 체크

- 가로, 세로, 대각선 방향으로 5개 연속 체크
- 8방향 탐색 알고리즘 구현

### 4. 게임 초기화

- 모든 상태를 초기값으로 리셋
- 새 게임 시작 기능

## 🎮 게임 실행 방법

1. **개발 서버 시작**

   ```bash
   npm run dev
   ```

2. **브라우저에서 확인**
   - http://localhost:5173 접속

## 📚 핵심 React 개념 설명

### 1. useState Hook

```javascript
const [board, setBoard] = useState(() =>
  Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(0))
);
```

- 게임 보드의 상태를 관리
- 초기값으로 15x15 빈 배열 생성

### 2. 이벤트 핸들링

```javascript
const handleCellClick = (row, col) => {
  // 클릭 이벤트 처리 로직
};
```

- 사용자 인터랙션에 따른 상태 업데이트

### 3. 조건부 렌더링

```javascript
{
  winner ? (
    <h2>{winner === 1 ? "흑돌" : "백돌"} 승리!</h2>
  ) : (
    <h2>현재 플레이어: {currentPlayer === 1 ? "흑돌" : "백돌"}</h2>
  );
}
```

- 게임 상태에 따른 다른 UI 표시

### 4. 배열 렌더링

```javascript
{
  board.map((row, rowIndex) => (
    <div key={rowIndex} className="row">
      {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
    </div>
  ));
}
```

- map 함수를 사용한 동적 컴포넌트 생성

## 🛠 개선 아이디어

프로젝트를 완성한 후 다음과 같은 기능들을 추가해볼 수 있습니다:

1. **게임 기록 저장**

   - 게임 진행 과정 기록
   - 되돌리기 기능

2. **AI 플레이어**

   - 컴퓨터와 대전 기능
   - 난이도 조절

3. **온라인 멀티플레이**

   - WebSocket을 활용한 실시간 대전

4. **게임 통계**

   - 승률, 게임 횟수 등 통계 기능

5. **모바일 반응형**
   - 터치 인터페이스 최적화

## 🐛 디버깅 팁

1. **개발자 도구 활용**

   - React DevTools 설치 추천
   - Console.log로 상태 변화 확인

2. **자주 발생하는 오류**

   - Key prop 누락: map 함수 사용 시 key 속성 필수
   - 상태 직접 변경: setState 함수 사용 필수

3. **성능 최적화**
   - 불필요한 리렌더링 방지
   - React.memo, useCallback 활용

## 📖 추가 학습 자료

- [React 공식 문서](https://react.dev/)
- [JavaScript 배열 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [CSS Flexbox 가이드](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 💡 학습 진행 방법

1. **코드 읽기**: 각 함수의 역할과 동작 방식 이해
2. **주석 확인**: 상세한 설명이 포함된 주석 참고
3. **실험하기**: 코드를 수정해보며 동작 변화 관찰
4. **확장하기**: 새로운 기능 추가해보기

행운을 빕니다! 🍀
