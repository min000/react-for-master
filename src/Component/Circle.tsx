import { useState } from "react";
import styled from "styled-components";

interface ContainerProps{
    bgColor:string,
    borderColor:string
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    border: 5px solid ${(props) => props.borderColor};
`;

interface CircleProps{
    bgColor:string,
    borderColor?:string,
    text?:string
}

function Circle({bgColor,borderColor,text="Hello"}:CircleProps){
    const [value,setValue] = useState<string | number | boolean>(0);
    
    setValue(1);
    setValue("string");
    setValue(true);

    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} >{text}</Container>;
}

export default Circle;