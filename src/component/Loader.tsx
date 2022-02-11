import styled from 'styled-components';

const Text = styled.span`
  text-align: center;
  display: block;
  color: white;
`;

function Loader() {
    return (
      <Text>
        Loading...
      </Text>
    );
  }
  
  export default Loader;