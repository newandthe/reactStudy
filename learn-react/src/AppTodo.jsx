import './App.css'
import TodoList from "./todo/TodoList.jsx";
import AddTodo from "./todo/AddTodo.jsx";
import {TodoProvider} from "./context/TodoContext.jsx";


function AppTodo() {

  return (
    <TodoProvider>
      <h2>할일목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  )

}

export default AppTodo;