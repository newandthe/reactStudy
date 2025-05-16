/*

// 함수 선언식 : 컴포넌트 상태, 로직인 경우 권유

export default function Counter() {  // ! 반드시 Pascal 함수명은 Case로 작성
    return (  // 컴포넌트 호출 시 Return 할 HTML 작성
        <button>Counter</button>
    )
}

*/



/*
* 함수에 export default를 통해
*
* */

// 함수 표현식 : UI만 담당하는 경우
// 상태를 사용하지 않는 컴포넌트에 일반적으로 사용
export const Counter = () => {
    // return ( // => return 문 생략 가능
      <button>Counter</button>
    // )
}

// export default Counter;