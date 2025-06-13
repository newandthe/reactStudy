import {createContext, useContext} from "react";
import {useImmerReducer} from "use-immer";
import todoReducer from "../reducer/todo-reducer.js";

/* todos 상태 관리 */
// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext(null);

/* dispatch 관리 */
// eslint-disable-next-line react-refresh/only-export-components
export const TodoDispatchContext = createContext(null);

export function TodoProvider({children}) {
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    {id: 0, text: "HTML&CSS 공부하기", done: false },
    {id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

/* (하위에서 매번 반복하여 취득하기 때문) */
// eslint-disable-next-line react-refresh/only-export-components
export function useTodos() {
  return useContext(TodoContext); // todos 반환
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTodosDispatch() {
  return useContext(TodoDispatchContext); // todoReducer에 대한 dispatch 반환
}