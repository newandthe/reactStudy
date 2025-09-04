import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  async function fetchData() {
    const data = await fetch('http://localhost:8000/canvases')
      .then(res => res.json())
      .catch(err => console.log(err));
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
