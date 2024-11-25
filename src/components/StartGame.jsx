import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />
        </div>
        <div className='heading'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;


    .heading {
    h1 {
        font-size: 96px;
        white-space: nowrap;
    }
}
`;



const Button = styled.button`
background-color: black;
color: white;
padding: 10px 18px;
border-radius: 5px;
border: 1px solid transparent;
min-width: 220px;
cursor: pointer;
border: none;
transition: 0.4s background ease-in;
&:hover {
background-color: white;
color: black;
border: 1px solid;
transition: 0.3s background ease-in;

}
`