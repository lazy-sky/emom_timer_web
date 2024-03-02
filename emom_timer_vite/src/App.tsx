import { useState } from 'react'
import Timer from './components/Timer';
import './App.css'

function App() {
  const [round , setRound] = useState(1);
  const [isCountdownStarted, setIsCountdownStarted] = useState(false);

  const startCountdown = () => {
    setIsCountdownStarted(true);
  }

  const handleRoundEnd = () => {
    setRound(prev => prev + 1);
  }

  return (
    <>
      <h1>EMOM TIMER</h1>
      {/* 시작 버튼을 누르기 전까지는 카운트다운이 시작되지 않음 */}
      {!isCountdownStarted && (
        <button type='button' onClick={startCountdown}>
          Start Countdown
        </button>
      )}
      {/* 카운트다운이 시작되고 라운드가 종료될 때마다 다음 라운드로 넘어가며 새로운 카운트다운 시작 */}
      {isCountdownStarted && <Timer round={round} onRoundEnd={handleRoundEnd} />}
    </>
  )
}

export default App
