# React-Native Fundamental

> React-Native의 기본기를 사용해 만든 목표를 생성하는 앱을 만들었고 이를 통해 react-native의 기본기를 익혔다.

### **React-Native의 주요 개념**

&emsp;➪ react-native의 핵심 컴포넌트  
&emsp;&emsp;🧩 View, Text, Button

&emsp;➪ react-native의 스타일링 방식  
&emsp;&emsp;🧩 Inline styling  
&emsp;&emsp;🧩 StyleSheet object  
&emsp;&emsp;&emsp;🚨 react-native의 styling은 CSS와 비슷해보이지만 다르며 스타일 적용방식 또한 다르다.

&emsp;➪ `app.json` 이란?  
&emsp;&emsp;🧩 Expo에서 앱의 전반적인 설정을 관리하는 공간이며, 배경화면, 배경색 등 여러가지를 설정한다.

---

### **React-Native의 component**

- `InputText`
  - 사용자의 입력을 받는 공간을 생성한다.
- `ScrollView`
  - 콘텐츠가 화면을 초과할때 사용하며,  
    해당 영역을 스크롤 가능하게 만들어준다.
- `FlatList`
  - 콘텐츠 너무 많을때 사용하며,  
    `ScrollView`와 다르게 데이터가 필요한 시점에만 로드하여 초기 로드 부담을 줄여준다.
- `Pressable`
  - 터치가 가능한 영역을 생성한다.(onPress 사용가능)
- `Modal`
  - react-native에 내장된 modal 창 구현을 돕는 component
- `StatusBar`
  - Expo에서 제공하는 상단바 스타일링 component

---

### **React-Native의 주요 로직**

- 기본적으로 react와 동일하다!
- props를 통한 state 주고 받기 setState를 통한 상태관리 등등
- 기억해둘만한 로직
  1. `setState`는 즉시 실행되는 함수가 아니므로 값이 필요하다면 함수 호출로 실행해야한다.
  2. `TextInput`의 `value`를 수정하면 input 영역에 임의의 텍스트를 보여줄수 있다.
  3. `JS`의 `bind()`를 사용하면 component간의 매개변수 관리가 수월해진다.

---

### **flex**

- flex가 기본값으로 적용되어있으며 스타일링에 flex가 유용하게 사용되며 레이아웃 생성의 핵심이다.
- `flexDirection`, `justifyContent`, `alignItems` 등 여러 속성을 사용해서 요소를 배치한다.
