import SelectNumbers from "./SelectNumbers"
import TotalScore from "./TotalScore"
import styled from "styled-components"

const GamePlay = () => {
  return (
    <Main>
        <TotalScore/>
        <SelectNumbers/>
    </Main>
  )
}

export default GamePlay;

const Main = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 64px;
    align-items: center;
`;