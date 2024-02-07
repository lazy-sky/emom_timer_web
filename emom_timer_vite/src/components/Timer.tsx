import { useTimer } from 'react-timer-hook';

interface TimerProps {
  expiryTimestamp: Date;
}

const Timer = ({ expiryTimestamp }: TimerProps) => {
  const {
    // totalSeconds,
    seconds,
    minutes,
    hours,
    // days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const handleRestartClick = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    restart(time);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px'
      }}>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={handleRestartClick}>Restart</button>
      </div>
    </div>
  );
}

export default Timer;