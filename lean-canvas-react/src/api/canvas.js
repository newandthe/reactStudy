import { canvases } from './http.js';

/* 목록 조회 */
export function getCanvases() {
  return canvases.get('/');
}

/* 추후에 저장 수정 삭제 등 API 코드 추가하면 됨 */
