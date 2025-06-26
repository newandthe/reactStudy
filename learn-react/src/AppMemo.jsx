import {useState, memo, useMemo, useCallback} from "react";
// 메모이제이션이 적용되지 않은 컴포넌트
const RegularComponent = ({ count, items = [], onCount }) => {
  console.log('RegularComponent 렌더링');

  return (
    <fieldset>
      <legend>일반 컴포넌트</legend>
      <div>{count}</div>
      <ul>
        {items.map(item => (<li key={item.id}>{item.text}</li>))}
      </ul>
      <button onClick={onCount}>카운트 증가</button>
    </fieldset>
  );
};

// 메모이제이션이 적용된 컴포넌트
const MemoizedComponent = memo(({ count, items = [], onCount }) => {
  console.log('MemoizedComponent 렌더링');
  return (
    <fieldset>
      <legend>메모이제이션 컴포넌트</legend>
      <div>{count}</div>
      <ul>
        {items.map(item => (<li key={item.id}>{item.text}</li>))}
      </ul>
      <button onClick={onCount}>카운트 증가</button>
    </fieldset>
  );
});

export default function AppMemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const courses = useMemo(() => {
    return [
      {id: 0, text: "HTML&CSS", level: 0 },
      {id: 1, text: "자바스크립트", level: 0 },
      {id: 2, text: "리액트", level: 0 },
      {id: 3, text: "리액트 중급", level: 1 },
    ]
  }, []);

  const beginnerCourses = useMemo(() => {
    return courses.filter((course) => course.level === 0);
  }, [courses]);

  // const handleCount = () => setCount(count + 1); /* 메모이제이션이 적용되지 않아 메모이제이션 컴포넌트도 재 렌더링 */
  const handleCount = useCallback(() => setCount(count + 1), [count]);    /* 메모이제이션 적용 완료로 메모이제이션 컴포넌트 재 렌더링하지 않음 */


  /* 주의 obj는 primitive 타입이 아니라 같은 내용을 가진 각각의 obj1 !== obj2 (바라보는 주소 값이 달라서..) 새로운 객체를 생성해서 사용하는 경우 useMemo를 사용해야함 */
  /*
  const courses = [
    {id: 0, text: "HTML&CSS", level: 0 },
    {id: 1, text: "자바스크립트", level: 0 },
    {id: 2, text: "리액트", level: 0 },
    {id: 3, text: "리액트 중급", level: 1 },
  ];
  */

  /*
  // 메모이제이션 useState Obj 예제
  const [courses, setCourses] = useState([
    {id: 0, text: "HTML&CSS", level: 0 },
    {id: 1, text: "자바스크립트", level: 0 },
    {id: 2, text: "리액트", level: 0 },
    {id: 3, text: "리액트 중급", level: 1 },
  ]);

  const beginnerCourses = useMemo(() => {
    return courses.filter((course) => course.level === 0);
  }, [courses])
  */

  return (
    <div>
      <h2>컴포넌트 메모이제이션</h2>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <button onClick={() => setOtherState(otherState + 1)}>기타 상태 변경</button>
      <hr />
      <RegularComponent count={count} items={beginnerCourses} onCount={handleCount} />
      <MemoizedComponent count={count} items={beginnerCourses} onCount={handleCount} />
    </div>
  )
}