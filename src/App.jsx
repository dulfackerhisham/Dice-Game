import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted, setSsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setSsGameStarted((prev) => !prev)
  }

  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
      
    </>
  )
}

export default App
