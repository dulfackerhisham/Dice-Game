import { useState } from "react";
import styled from "styled-components"
const SelectNumbers = () => {
    const numArr = [1,2,3,4,5,6];
    const [selectedNumber, setSelectedNumber] = useState()


    console.log(selectedNumber);
    
  return (
    <NumberSelector>
        <div className="numS">
        {numArr.map((value, i) => (
        <Box key={i}
        isSelected={value===selectedNumber}
         onClick={() => setSelectedNumber(value)}>{value}</Box>
        ) 
        )}
        </div>
        <p>Select Number</p>
    </NumberSelector>
  )
}

export default SelectNumbers;

const NumberSelector = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;

    .numS{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }


`



const Box = styled.div`
    border: 1px solid black;
    height: 72px;
    width: 72px;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => !props.isSelected ? "black" : "white"};
    cursor: pointer;
`