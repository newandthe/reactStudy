import {useTodosDispatch} from "../context/TodoContext.jsx";
import {memo} from "react";
// import {useEffect} from "react";

export default memo( function TodoItem({ item }) {

  /* 기존 List의 항목 중 하나만 바꾸더라도 모든 항목에 대해서 리 렌더링이 모두 발생 하였으나, memo 캐싱을 통한 해당 item에 대해서만 리렌더링하도록 변경 */

  // useEffect(() => {
  //   console.log('컴포넌트 마운트 이후 수행될 로직');
  //
  //   return () => {
  //     console.log('컴포넌트 언마운트 이후 수행될 로직');
  //   }
  //
  // }, [item.done]);


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
} );