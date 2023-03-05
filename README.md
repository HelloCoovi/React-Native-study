# React-Native Expenditure Tracking APP

> 지금까지 익힌 학습 내용을 종합한 지출을 추적하는 앱을 만들었다.

### **학습 요소(사용 요소)**

&emsp;➪ react-native에서 학습한 내용 전반  
&emsp;&emsp;🧩 react-native의 핵심 컴포넌트 사용하기  
&emsp;&emsp;🧩 react-native 스타일링  
&emsp;&emsp;🧩 `state`에 따른 화면 전환  
&emsp;&emsp;🧩 `Custom Component` 생성  
&emsp;&emsp;🧩 `React-Navigation`  
&emsp;&emsp;🧩 전역변수(상태) 다루기  
&emsp;&emsp;🧩 Context  
&emsp;➪ reducer를 사용한 전역 상태(데이터) 관리  
&emsp;&emsp;🧩 Context-reducer를 사용한 복잡한 전역 상태관리

---

### **react-native**

- 기존 프로젝트에서 사용한 기능들의 복습 과정
- 각 component가 서로를 의존하므로 설계부터 신중히 할 필요가 있다.

---

### **useReducer**

- `Context`와 함께 전역 상태를 관리하는 방법은 `useState`와 `useReducer` 두 종류가 있다.
- `useState`: 전통적인 상태관리용 `hook`이며 간단한 상태관리에 사용된다.
- `useReducer`: 복잡한 전역 상태를 관리할 때 사용하며 단순 변수가 아닌 복잡한 로직이나 함수를 담을 때 사용한다.
