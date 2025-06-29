import {useEffect, useState} from "react";

function Courses() {

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {

    fetch(`data/courses_${filter}.json`)
      .then(res => res.json())
      .then(data => {
        console.log("데이터 조회 완료");
        setList(data);
    })

    return () => {

      console.log('소켓 혹은 리스너 등 연결이 필요한경우 연결 해제 : 클리너 함수 - 해당 로직에서는 toggle로 언마운트 시 수행 됩니다.');

    }
  }, [filter]);

  return(
    <>
      <label htmlFor="all">전체</label>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === 'all'}
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === 'favorite'}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default function AppEffect() {

  /* 1] DOM 조작하기
  useEffect(() => {
    const $h2 = document.querySelector("#title");
    $h2.textContent = 'Data Fetching';
  }, [])
  */

  const [show, setShow] = useState(true);


  return (
    <>
      <h2 id={"title"}>데이터 가져오기</h2>
      <button onClick={() => setShow(!show)}>toggle</button>
      <hr />
      {show && <Courses/>}
    </>
  )
}