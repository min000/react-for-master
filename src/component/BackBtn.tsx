import styled from 'styled-components';

const Btn = styled.h3`
  background: white;
  position: absolute;
  top: 25px;
  border-radius: 10%;
  padding: 10px 15px;
`;

function BackBtn() {
    return (
      <Btn>
        🔙
      </Btn>
    );
  }
  
  export default BackBtn;