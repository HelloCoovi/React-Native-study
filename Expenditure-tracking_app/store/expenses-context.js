// 1. context와 reducer를 만들기 위한 createContext, useReducer import
import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
];

// 2. createContext로 context생성(context에 담을 data, data를 편집하는 함수)
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

// 4. 리듀서 함수 생성, switch에서 리듀서함수에서 받은 state(현재 data)와 action 객체를 사용한다.
// type이 ~~ 일때 실행되는 코드를 작성
// 원본데이터는 손대지 않고 새로운 배열을 생성해서 return해야한다.
function expensesReducer(state, action) {
  switch (action.type) {
    // ADD 일때, 랜덤하게 만든 id와 action객체에 있는 데이터(payload)로 객체를 만들고, 현재 data(state)에 생성한 데이터를 배열로 묶어 return
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    // UPDATE 일때,
    // 1. 업데이트 할 데이터의 index를 찾고
    // 2. 새로운 변수에 업데이트 할 데이터를 할당
    // 3. 업데이트 할 데이터를 업데이트 해주고
    // 4. 기존 데이터에서 수정할 값이 있는 요소에 업데이트 한 데이터로 교체 후 return
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    // DELETE일때, 지울 데이터를 제외한 배열을 만들어 return
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  // 3. useReducer호출, 리듀서 함수와 초기데이터(시작값)입력
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  // 5. 리듀서 함수에서 생성한 case에 따른 Handler함수 생성
  function addExpense(expenseDate) {
    dispatch({ type: "ADD", payload: expenseDate });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseDate) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseDate } });
  }

  // 6. value에 데이터와 Handler함수를 담고
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  // 7. Provider에 담아 리턴
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
