import { useLocation, useParams, useSearchParams } from 'react-router-dom';

function CanvasDetail() {
  const { paramsId } =
    useParams(); /* 동적 파라미터 획득 방법. Home.jsx의 2번 게시물 참고*/

  const [searchParams] = useSearchParams(); /* queryString 획득 방법 */
  console.log(searchParams.get('queryStringId'));

  const location = useLocation(); /* Hash 값 취득 방법 */
  console.log(
    'location',
    location,
  ); /* hash 값, 위치에 대한 고유 키, pathname, search(현재 URL에 대한 queryString), state(<Link state> or navigate에 대한 현지 밸류 값)  */
  return (
    <div>
      CanvasDetail
      <p>paramsId: {paramsId}</p>
      <p>queryString: {searchParams.get('queryStringId')}</p>
      <p>hash: {location.hash}</p>
    </div>
  );
}

export default CanvasDetail;
