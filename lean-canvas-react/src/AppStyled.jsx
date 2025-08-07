import Card from './components/StyledComponents/Card.jsx';
import BaseButton from './components/StyledComponents/BaseButton.jsx';
import StyledButton from './components/StyledComponents/StyledButton.jsx';

function AppStyled() {
  return (
    <>
      <Card />
      <hr />
      <BaseButton>BaseButton</BaseButton>
      <StyledButton>StyledButton</StyledButton>
      {/* 기존의 Base Button을 그대로 확장하며 새 스타일 규칙이 적용된 스타일 버튼 */}
    </>
  );
}

export default AppStyled;
