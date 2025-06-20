import TodoItem from "./TodoItem.jsx";
import {useTodos} from "../context/TodoContext.jsx";
import {useState} from "react";

function TodoList() {

  const todos = useTodos();

  const [isDone, setIsDone] = useState(false);
  const getFilteredTodos = () => {
    if (!isDone) {
      return todos;
    } else {
      return todos.filter((todo) => todo.done);
    }
  }

  const filterdTodos = getFilteredTodos();

  const getStatsCount = () => {
    console.log('getStatsCount Function Start');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;   /* 리랜더링 시 이렇게 filter로 순회하면 todos의 배열의 크기가 매우 큰 경우 전체 순회를 통한 성능 저하가 우려됨. 따라서 메모리 캐싱을 통한 해결이 가능하다. */
    return {
      totalCount, doneCount
    }
  }

  const { totalCount, doneCount } = getStatsCount();

  return (
    <>
      <div>
        <input
          id={"isDone"}
          type={"checkbox"}
          checked={isDone}
          onChange={(e) => setIsDone(e.target.checked)}
        />
        <label htmlFor={"isDone"}>완료된 항목 보기({doneCount}/{totalCount})</label>
      </div>
      <ul>
          {filterdTodos.map(item => (
          <li key={item.id}>
            <TodoItem
              item={item}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList;