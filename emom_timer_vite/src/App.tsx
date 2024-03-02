import { useState } from 'react'
import Timer from './components/Timer';
import './App.css'

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); 
  const [round , setRound] = useState(1);

  const onExpireTime = () => {
    setRound(prev => prev + 1)
  }

  const handleResetRoundClick = () => {
    setRound(1);
  }

  return (
    <>
      <h1>EMOM TIMER</h1>
      <div>{round} Set</div>
      <Timer expiryTimestamp={time} onExpireTime={onExpireTime} />
      <button type='button' onClick={handleResetRoundClick}>
        Reset Round
      </button>
    </>
  )
}

export default App
