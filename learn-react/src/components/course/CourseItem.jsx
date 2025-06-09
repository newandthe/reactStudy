function HeartIconBtn({onClick, isFavorite = false}) {

  return (
    <button className="btn" onClick={(e) => onClick(e)}>
    {/*<button className="btn" onClick={() => alert("간단한 경우 이벤트 핸들러의 인라인 방식 예제")}>*/}
      {/*
      {
        isFavorite ? (
          <img className="icon-heart" src="./img/heart-fill-icon.png" alt="하트 이미지"/>
        ) : (
          <img className="icon-heart" src="./img/heart-icon.png" alt="하트 이미지"/>
        )
      }
      */}
      <img className="btn__img" src={isFavorite ? "./img/heart-fill-icon.png" : "./img/heart-icon.png"} alt="하트 이미지"/>
    </button>
  )

}

function LinkIconBtn({link}) {

  return (
    <a className="btn" href={link} target="_blank" rel="noopener noreferrer">
      <img className="btn__img" src="./img/link-icon.png" alt="링크 이미지"/>
    </a>
  )

}

export default function CourseItem({title, description, thumbnail, isFavorite, link, onFavorite, id}) {

  function handleFavorite(e) {
    e.stopPropagation();
    // alert(isFavorite ? '좋아요' : '모르겠어요');
    onFavorite(id, !isFavorite);
  }

  function handleItemClick() {
    alert('item click!');
    open(link, '_blank');
  }
  
  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="강의 이미지"/>
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>

      <div className="course__icons">
          <HeartIconBtn isFavorite={isFavorite} onClick={handleFavorite} />    {/* 핸들러 예시 */}
          {
            link && <LinkIconBtn link={link} />   /* 논리 연산자에 의해 link가 존재해야 a 태그(LinkIconBtn 컴포넌트) 랜더링 */
          }
      </div>
    </article>
  );
}