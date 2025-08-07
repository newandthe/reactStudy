import styled from 'styled-components';
import BaseButton from './BaseButton';

// styled.area``;  // 다음과 같이 .으로 통해 접근 하지 않아도 무방
const StyledButton = styled(BaseButton)`
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default StyledButton;
