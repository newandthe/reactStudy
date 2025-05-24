function HeartIconBtn({ isFavorite = false}) {

  return (
    <button className="btn">
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

function LinkIconBtn({ link }) {

  return (
    <a className="btn" href={link} target="_blank" rel="noopener noreferrer">
      <img className="btn__img" src="./img/link-icon.png" alt="링크 이미지"/>
    </a>
  )

}

export default function CourseItem({title, description, thumbnail, isFavorite, link}) {

  const isEmpty = false;

  if (isEmpty) {
    return (
      <p>강의가 없습니다.</p>
    )
  }
  
  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의 이미지"/>
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>

      <div className="course__icons">
          <HeartIconBtn isFavorite={isFavorite} />
          {
            link && <LinkIconBtn link={link} />   /* 논리 연산자에 의해 link가 존재해야 a 태그(LinkIconBtn 컴포넌트) 랜더링 */
          }
      </div>
    </article>
  );
}