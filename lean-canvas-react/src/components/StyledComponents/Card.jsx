// import styles from './Card.module.css';
import styled from 'styled-components';

/* 기존의 CSS 모듈과 달리 styled components를 사용해 자바스크립트 내 CSS 작성 */
const CardContainer = styled.div.attrs({
  /* class Name 수동 지정하고 싶은 경우 attrs function 내 className 지정  */
  className: 'card-container',
})`
  border: 2px solid #393939;
  padding: 24px;
  border-radius: 6px;
  ${props =>
    props.$dark &&
    `
    background: #393939;
    color: #fff;
    border: none;
  `}
`;

function Card() {
  return (
    /*<div className={styles['card-container']}>*/
    <CardContainer $dark={true}>
      {/*$ 를 작성하면 styled components로 사용하겠다고 선언*/}
      <h2>Styled Component</h2>
      <p>이것은 styled-components로 생성된 카드</p>
    </CardContainer>
  );
}

export default Card;
