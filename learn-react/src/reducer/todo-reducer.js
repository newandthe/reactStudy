export default function todoReducer(draft, action) {
  // type
  switch(action.type) {
    /* dispatch 라는 함수를 통해 필요한 변수들을 action 내 객체로 전달 받을 수 있음. */

    case 'added': {
      const { nextId, todoText } = action;
      draft.push({ id: nextId, text: todoText, done: false });

      break;  /* case 구문 특성 답게 break 혹은 return 필수 */
    }
    case 'added_index': {
      const { insertAt, nextId, todoText } = action;
      draft.splice(insertAt, 0, { id: nextId, text: todoText, done: false});

      break;
    }
    case 'delete': {
      const { deleteId } = action;
      return draft.filter(item => item.id !== deleteId);  /* 원본 배열은 수정하지 않지만 반환을 하는 경우는 return 사용 무방 */
    }
    case 'done': {
      const { id, done } = action;

      const target = draft.find(item => item.id === id);
      target.done = done;

      break;

    }
    case 'reverse': {
      return draft.toReversed();
    }
    default: {
      throw Error('알 수 없는 액션 타입: ' + action.type);
    }
  }
}