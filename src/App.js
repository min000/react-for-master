import styled,{keyframes} from "styled-components";

const Mother = styled.div`
    display:flex
`;
const Box = styled.div`
    background-color:${(props) => props.bgColor};
    width:500px;
    height:500px;
`;
const Circle = styled(Box)`
    border-radius:50%
`;
const Title = styled.div`
    font-size:18px  
`;
const Btn = styled.button`
    background-color:orange;
    border-radius:20px;
    color:white;
    width:200px;
    height:50px;
    font-size:30px;
`;
const Input = styled.input.attrs({required:true})`
  background-color:red;
`;
const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius:100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 10px;
  color: white;
`;
const Container = styled.div`
  display:flex;
  width:200px;
  height:200px;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  justify-content:center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  
  ${Emoji}{
    &:hover{
      font-size:30px;
    }
  }
`

function App(){
  return (
    <>
      <Mother>
        <Box bgColor="purple"/>
        <Circle bgColor="blue"/>
        <Title>Hello</Title>
        <Btn>Click</Btn>
        <Btn as="a" href="/">Click</Btn>
      </Mother>
      <Input />
      <Input />
      <Input />
      <Container>
        <Emoji>♡◟( ˘ ³˘)◞ ♡</Emoji>
      </Container>
    </>
  );
}
export default App;