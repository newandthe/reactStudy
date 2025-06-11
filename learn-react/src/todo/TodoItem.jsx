import {useTodosDispatch} from "../context/TodoContext.jsx";

export default function TodoItem({ item }) {

  const dispatch = useTodosDispatch();

  // 3] 제거 delete
  const handleDeleteTodo = (deleteId) => {
    /* 중간에 있는 배열을 빼기 위해서는 filter, slice 함수가 유용하다. */
    dispatch({
      type: 'delete',
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

  return (
    <label>
    <input
      type={"checkbox"}
      checked={item.done}
      onChange={(e) => handleToggleTodo(item.id, e.target.checked)}
    />
    <span>{item.done ? (<del>{item.text}</del>) : item.text}</span>
    <button onClick={() => handleDeleteTodo(item.id)}>X</button>  {/* 항목 제거 버튼 */}
    </label>
  )
}