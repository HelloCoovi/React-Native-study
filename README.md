# React-Native: UPDOWN-Game

> React-Native의 다양한 기능을 사용해 간단한 게임을 구현했다.

### **배운 주요 기능**

&emsp;➪ 커스텀 컴포넌트 구현하기  
&emsp;&emsp;🧩 core Component를 응용해서 커스텀 컴포넌트를 구현해서 사용할 수 있다.  
&emsp;➪ state와 if를 사용해 화면 전환하기  
&emsp;&emsp;🧩 if (state) ~ 를 사용해 state로 Screen을 변환할 수 있다.  
&emsp;➪ `useEffect`를 사용해 작업하기  
&emsp;&emsp;🧩 component의 랜더링을 확인해 미리 지정해둔 작업을 실행한다.  
&emsp;➪ Expo에서 제공해주는 라이브러리 사용하기  
&emsp;&emsp;🧩 Expo에서는 다양한 아이콘, 로딩, 폰트 등 많은 것을 제공한다.

---

### **Custom Component 구현**

- 설정&사용하는 곳이 많은 버튼, 제목 등을 만들어 사용할 수 있다.
  - `<PrimaryButton>`, `<Title>`, `<Card>`, etc...
- 재사용을 통해 코드를 간결하게 유지해보자
- **계단식 스타일**을 사용해 커스텀 컴포넌트에서 추가로 style 지정이 가능하다!

---

### **State로 Screen전환하기**

`if`에 조건을 지정해 특정 조건을 만족한다면 screen 변수를 재할당해서 화면에 표시되는 내용을 바꿀 수 있다.

```javascript
let screen = <StartGameScreen />;

if (userNumber) {
  screen = <GameScreen />;
}
if (gameIsOver && userNumber) {
  screen = <GameOverScreen />;
}
```

기본적으로 표시할 화면을 할당하고 조건을 설정해서 state로 화면을 전환할 수 있다.

---

### **useEffect로 작업 실행하기**

- component가 랜더링 될 때마다 실행되며 조건을 달아두거나 의존성을 편집해서 작업을 실행 시킬 수 있다.

- 사용 목적에 따라 의존성을 편집해두면 다른 방식으로 사용가능하다.
  - 기본적으로`useEffect`에서 사용하는 모든 데이터는 의존성에 추가해야 한다.
  - 단, 첫 로드 때 한 번만 실행 시키는 `useEffect`는 의존성을 비워둔다.

```javascript
useEffect(() => {
  if (currentGuess === userNumber) {
    onGameOver(guessRounds.length);
  }
}, [currentGuess, userNumber, onGameOver]);

useEffect(() => {
  console.log("화면 랜더링 완료!");
}, []);
```

---

### **Expo 라이브러리 사용하기**

- font와 그를 보조할 수 있는 AppLoading 등 의 라이브러리로 개발자의 일을 줄여준다.
  - 많은 것이 이미 포함되어있지만 어떤 라이브러리는 설치해야한다.

---

### **반응형 UI 코드 작성하기**

- `Dimensions`를 사용한 기기의 screen 크기 확인
- `useWindowDimensions`를 사용한 동적 screen 크기 인식
- `Platform` 컴포넌트를 사용한 OS 별 코드 작성

  - `Platform.OS`를 사용해 현재 실행되는 기기의 OS를 파악해서 if로 분기하거나 삼항연산자로 UI 코드를 작성
  - `Platform.select`를 사용해 OS 별 다른 코드 적용

  ```javascript
  borderWidth: Platform.OS === "android" ? 2 : 0,
  borderWidth: Platform.select({ ios: 0, android: 2 }),
  ```

- 컴포넌트의 파일 이름 자체를 수정해서 OS별 다른 컴포넌트 적용하기
