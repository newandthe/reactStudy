import CourseItem from "./CourseItem.jsx";  /* import 시 확장자를 붙여도 안붙여도 무방하지만, 전자가 native ES Modules 사용 방법에 더 가까움 */

export default function CourseListCard() {
  return (    /* 컴포넌트에 return 에 소괄호가 없으면 이 다음 코드문장은 모두 무시가 됩니다. 반드시 작성
                 jsx 문법에서 className으로 사용해야 함 (class로 사용시 오류 발생)
                 필요시 HTML to JSX 변환 사이트 존재하므로 사용하기
   */
    <div className="card">
      <div className="card__header">강의 목록</div>
      <div className="card__body">
        <div className="courses">
          <CourseItem/>
          <CourseItem/>
          <CourseItem/>
        </div>
      </div>
    </div>
  );
}