import {useReducer, useState} from 'react';
import './App.css'
import TodoList from "./todo/TodoList.jsx";
import todoReducer from "./reducer/todo-reducer.js";
import {useImmerReducer} from "use-immer";

function AppTodo() {

  const [todoText, setTodoText] = useState('');

  const [todos, dispatch] = useImmerReducer(todoReducer, [
    {id: 0, text: "HTML&CSS 공부하기", done: false },
    {id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  }

  // 1] 추가 added
  const handleAppTodo = () => {

    dispatch({
      type: 'added',
      nextId: todos.length,
      todoText
    });
    /*
    const nextId = todos.length;

    setTodos([
      ...todos,
      { id: nextId, text: todoText }
    ])
    */

    setTodoText('');  /* 기존 input 초기화 // null 및 uundefined는 동작 X */

  }

  // 2] 인덱스 추가 added_index
  const handleAddTodoByIndex = () => {

    dispatch({
      type: 'added_index',
      insertAt: insertAt,
      nextId: todos.length,
      todoText
    })
    setTodoText('');
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAppTodo();
    }
  }

  // 3] 제거 delete
  const handleDeleteTodo = (deleteId) => {
    /* 중간에 있는 배열을 빼기 위해서는 filter, slice 함수가 유용하다. */
    dispatch({
      type: 'deleted',
      deleteId: deleteId,
    })
  }

  // 4] 완료 처리 done
  const handleToggleTodo = (id, done) => {
    /* 기존 배열 안의 객체 속성을 변경 */
    dispatch({
      type: 'done',
      id,
      done
    });
  }

  // 5] 리버스 reverse
  const handleReverse = () => {

    dispatch({
      type: 'reverse'
    })

  }


  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input id={"todoTextInput"}
               type="text"
               value={todoText}
               onChange={handleTodoTextChange}
               onKeyDown={handleKeyDown}
        />
        <button onClick={handleAppTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((key, index) => (
            <option key={key.id} value={index}>{index} 번째 </option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
      </div>
      <div>Preview: {todoText}</div>

      <button onClick={handleReverse}>Reverse</button>

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;