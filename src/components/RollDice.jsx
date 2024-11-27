import { useState } from "react";
import styled from "styled-components"

const RollDice = () => {

    const [randNum, setRandNum] = useState(1)

const generateRandomNum = () => {
    setRandNum(Math.floor(Math.random() * 6)+ 1)
    console.log(randNum);
}


    return(
        <DiceContainer>
            <DiceImg onClick={() => generateRandomNum()}>
            <img src={`/images/dice/dice_${randNum}.png`} alt="" />
            </DiceImg>
            <p>Click on Dice to roll</p>
            <Button1>Reset Score</Button1>
            <Button2>Show Rules</Button2>

        </DiceContainer>
    )
}

export default RollDice;

const DiceContainer = styled.div`
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;

    p{
        font-size: 24px;
        font-weight: 500;
    }
`
const DiceImg = styled.div`
    cursor: pointer;
`


const Button1 = styled.div`
    background-color: white;
    color: black;
    border: 1px solid black;
    margin: 15px 0;
    min-width: 190px;
    border-radius: 5px;
    text-align: center;
    padding: 5px 18px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.4s background ease-in;

    
    &:hover{
        background-color: black;
        color: white;
        transition: 0.3s background ease-in;

    }

`
const Button2 = styled.div`
    background-color: black;
    color: white;
    border: 1px solid black;
    min-width: 190px;
    text-align: center;
    border-radius: 5px;
    padding: 5px 18px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;


    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;

    }

`