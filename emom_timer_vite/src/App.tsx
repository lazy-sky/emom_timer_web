
import './App.css'
import Timer from './components/Timer';

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer
  return (
    <>
      <h1>EMOM TIMER</h1>
      <Timer expiryTimestamp={time} />
    </>
  )
}

export default App
