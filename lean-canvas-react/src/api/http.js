/* Axios 재사용 모듈 */
import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(
    Object.assign({
      // 여러 객체를 머지하는 메소드
      baseURL: baseURL,
    }),
    options,
  );
  return instance;
}

export const canvases = create('http://localhost:8000/canvases');
