import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { getCanvases } from '../api/canvas.js';

function Home() {
  async function fetchData() {
    /*
      // fetch API
      const data = await fetch('http://localhost:8000/canvases')
      .then(res => res.json())  /!* fetch 에서는 json 으로 형태 변환을 해야함 *!/
      .catch(err => console.log(err));
      */

    /* 모듈화된 Axios 사용 */
    /* fetch API 보다 더 상세하게 config 및 header, status 등 상세하게 나오게 됨 */
    // const data = await axios.get('http://localhost:8000/canvases');
    const data = await getCanvases(); /* 모듈화 된 Axios 사용 예제 */
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      HomePage !
      <ul>
        <li>
          <Link to={'/canvases/1'}>1번 게시글</Link>
        </li>
        <li>
          <Link to={'/canvases/2?queryStringId=canvasTest#hashTest'}>
            2번 게시글
          </Link>
        </li>
        <li>
          <Link to={'/canvases/3'}>3번 게시글</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
