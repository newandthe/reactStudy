import './App.css'
import TodoList from "./todo/TodoList.jsx";
import AddTodo from "./todo/AddTodo.jsx";
import {TodoProvider} from "./context/TodoContext.jsx";
import {useEffect} from "react";


function AppTodo() {

  console.log('start');

  useEffect(() => {
    console.log('컴포넌트 마운트 이후 수행될 로직');
  }, []);

  console.log('end');

  return (
    <TodoProvider>
      <h2>할일목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  )

}

export default AppTodo;