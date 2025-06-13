import {useState} from "react";
import {useTodos, useTodosDispatch} from "../context/TodoContext.jsx";

export default function AddTodo() {

  /* 입력 값의 현재 상태 */
  const [todoText, setTodoText] = useState('');

  const todos = useTodos();

  const dispatch = useTodosDispatch();

  // 1] 추가 added
  const handleAppTodo = (todoText) => {

    dispatch({
      type: 'added',
      nextId: todos.length,
      todoText: todoText
    });

  }

  return (
    <div>
      <input id={"todoTextInput"}
             type="text"
             value={todoText}
             onChange={(e) => setTodoText(e.target.value)}
             onKeyDown={(e) => {
               if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
                 handleAppTodo(e.target.value);
                 setTodoText('');
               }
             }}
      />
      <button onClick={() => {
        // 저장
        setTodoText('');
        handleAppTodo(todoText);
      }}>추가</button>
    </div>
  )
}