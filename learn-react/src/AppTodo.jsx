import { useState } from 'react';
import './App.css'
import TodoList from "./todo/TodoList.jsx";
function AppTodo() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, text: "HTML&CSS 공부하기", done: false },
    {id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  }

  const handleAppTodo = () => {

    const nextId = todos.length;

    setTodos([
      ...todos,
      { id: nextId, text: todoText }
    ])

    setTodoText('');  /* 기존 input 초기화 // null 및 uundefined는 동작 X */

  }
  
  const handleAddTodoByIndex = () => {
    const nextId = todos.length;
    const newTodos = [
      // 삽입 지점 이전 항목
        ...todos.slice(0, insertAt),
      { id: nextId, text: todoText, done: false},
      // 삽입 지점 이후 항목
      ...todos.slice(insertAt)
    ];
    setTodos(newTodos);
    setTodoText('');
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAppTodo();
    }
  }

  const handleDeleteTodo = (deleteId) => {
    /* 중간에 있는 배열을 빼기 위해서는 filter, slice 함수가 유용하다. */
    const newTodos = todos.filter(item => item.id !== deleteId);
    setTodos(newTodos);
  }

  const handleToggleTodo = (id, done) => {
    /* 기존 배열 안의 객체 속성을 변경 */
    const nextTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, done };
      }

      return item;
    })

    setTodos(nextTodos);
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
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;