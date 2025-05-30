import { useState } from 'react';
import './App.css'
import TodoList from "./todo/TodoList.jsx";
function AppTodo() {
  const [todos] = useState([
    {id: 0, label: "HTML&CSS 공부하기" },
    {id: 1, label: "자바스크립트 공부하기" },
  ]);
  return (
    <div>
      <h2>할일목록</h2>
      <TodoList todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default AppTodo;