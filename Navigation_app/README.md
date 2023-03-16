# React-Native Navigation APP

> React-Navigation을 사용해 음식 레시피를 탐색하고 **즐겨찾기 기능**, **네비게이션** 등의 기술을 응용해 앱을 만들었다.

### **학습 요소**

&emsp;➪ React-Navigation  
&emsp;&emsp;🧩 react-native에서 내비게이션의 구현을 쉽게해주는 라이브러리  
&emsp;➪ 전역변수(상태) 다루기  
&emsp;&emsp;🧩 Context  
&emsp;&emsp;🧩 Redux  
&emsp;➪ useLayout  
&emsp;&emsp;🧩 화면 랜더링 이전에 실행되는 effect

---

### **React-Navigation**

[React-Navigation 공식문서](https://reactnavigation.org/)

- 내비게이션 기능을 담고 있는 라이브러리
- 필요한 navigator(stack, drawer 등)을 호출해 사용가능

  - 공통적으로 외부라이브러리를 설치하는 과정(install)이 필요하며 외부 라이브러리이므로 생각못한 에러가 발생할수 있다.

- 사용하기

  1. `Navigator` 설치(`npm install`)
  2. App에서 navigator를 호출하고
  3. `createNativeOOONavigator`, `NavigationContainer` 등으로 세팅
  4. `Screen`에 원하는 screen을 지정

- **hook**

  - `component`로 등록된 screen은 `route`와 `navigation` 객체를 전달받으며 해당 객체를 사용해 데이터를 보내거나 페이지를 바꾸는 등의 작업도 가능
  - `use~~~`를 사용하면 screen으로 지정하지 않아도 `route`와 `navigation` 객체 사용 가능

- **options**를 사용해 `navigator`에 스타일링과 애니메이션 등을 지정 가능

---

### **useLayout**

- 화면 랜더링 이전에 실행되는 `effect`이며 `navigator` 동적 구현에 필요하다
- 그 외에도 랜더링 이전에 미리 불러올 데이터 같은 경우 `useLayout`을 사용하는 것이 좋다

---

### **Redux**

- `createSlice`로 `store`(전역 상태) 생성
  - App 전체를 `Provider`로 감싸서 사용
  - `initialState`로 변수(상태)관리
  - `reducers`로 함수관리
- **hook**으로 전역변수 호출하기
  - `useSelector`: `store` 변수 호출
  - `useDispatch`: `store` 함수호출

---

### **Context**

- `createContext`로 `context`(전역 상태) 생성
  - `App` 전체를 `Provider`로 감싸서 사용
  - 마치 일반 `State`처럼 사용하는 게 특징
- **hook**
  - `useContext`를 사용해 변수, 함수 모두 호출 가능
