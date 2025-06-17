import {forwardRef, useEffect, useRef, useState} from "react";

let counter = 0;

function ButtonCounter() {

  const countRef = useRef(0);

  const [count, setCount] = useState(0);

  function handleClick() {
    countRef.current++;
    console.log('countRef: ', countRef.current);
    // counter ++;
    // console.log("counter: ", counter);
    // setCount(count + 1);
  }

  return(
    <>
      <button onClick={handleClick}>Count</button>
    </>
  )

}

/* 커스텀 컴포넌트 */
const MyForm = forwardRef((props, ref) => {   // 여기서 ref는 원하는 DOM 요소에 ref 속성으로 지정해주면 된다.

  const [form, setForm] = useState({
    title: '제목',
    author: '작성자',
    content: ''
  });

  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('DOM 참조 요소: ', titleInputRef.current);

    /* 유효성 검사시 원래는 return 구문 추가 */
    if (!form.title) {
      titleInputRef.current.focus();
    } else if (!form.author) {
      authorInputRef.current.focus();
    } else if (!form.content) {
      contentTextareaInputRef.current.focus();
    }

  }

  const handleForm = (e) => {
    const { name, value } = e.target;

    /* 동적 프로퍼티 할당 */
    setForm({
      ...form,
      [name]: value
    });

  }

  /* 초기 랜더링 시 유효 값 검사 */
  useEffect(() => {
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    } else if (!form.author) {
      authorInputRef.current.focus();
      return;
    } else if (!form.content) {
      contentTextareaInputRef.current.focus();
      return;
    }
  }, []); /* 가장 첫 랜더링 만 수행 */

  const [isChanged, setIsChanged] = useState(false);
  const prevForm = useRef(null);    /* 초기 랜더링 시의 데이터 */

  useEffect(() => {
    prevForm.current = { ...form }; // 서버에서 Fetch 가정

    console.log('formRef: ', formRef);
  }, []);

  /* form 이 변경될 때 마다 Call Back */
  useEffect(() => {

    // 초기 값과 비교 로직
    const hasChanged = (
      prevForm.current.title !== form.title ||
      prevForm.current.author !== form.author ||
      prevForm.current.content !== form.title.content
    )

    setIsChanged(hasChanged);
  }, [form]);

  const formRef = useRef(null);

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <fieldset>
        <legend>글쓰기</legend>
        <input ref={titleInputRef} name={"title"} placeholder={"제목"} value={form.title} onChange={handleForm}/>
        <hr/>
        <input ref={authorInputRef} name={"author"} placeholder={"작성자"} value={form.author} onChange={handleForm}/>
        <hr/>
        <textarea ref={contentTextareaInputRef} name={"content"} placeholder={"내용"} value={form.content} onChange={handleForm}/>
        <hr/>
        <button disabled={!isChanged}>button</button>
        <hr/>
      </fieldset>
    </form>
  )

});

export default function AppRef() {

  const myFormRef = useRef(null);

  useEffect(() => {
    console.log('myFormRef: ', myFormRef);
  }, []);

  return (
    <>
      <h2>Count</h2>
      <ButtonCounter/>
      <ButtonCounter/>

      <h2>Form</h2>
      <MyForm ref={myFormRef}/>
    </>
  )

}