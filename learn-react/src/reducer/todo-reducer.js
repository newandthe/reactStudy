export default function todoReducer(todos, action) {
  // type
  switch(action.type) {
    /* dispatch 라는 함수를 통해 필요한 변수들을 action 내 객체로 전달 받을 수 있음. */

    case 'added': {
      const { nextId, todoText } = action;
      return [
        ...todos,
        { id: nextId, text: todoText }
      ];
    }
    case 'added_index': {
      const { insertAt, nextId, todoText } = action;
      return [
        // 삽입 지점 이전 항목
        ...todos.slice(0, insertAt),
        { id: nextId, text: todoText, done: false},
        // 삽입 지점 이후 항목
        ...todos.slice(insertAt)
      ];
    }
    case 'delete': {
      const { deleteId } = action;
      return todos.filter(item => item.id !== deleteId);
    }
    case 'done': {

      const { id, done } = action;

      return todos.map(item => {
        if (item.id === id) {
          return { ...item, done };
        }

        return item;
      });

    }
    case 'reverse': {
      return todos.toReversed();
    }
    default: {
      throw Error('알 수 없는 액션 타입: ' + action.type);
    }
  }
}