import { useTimer } from 'react-timer-hook';

interface TimerProps {
  expiryTimestamp: Date;
  onExpireTime: () => void; 
}

const Timer = ({ expiryTimestamp, onExpireTime }: TimerProps) => {
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
  } = useTimer({ expiryTimestamp, onExpire: () => {
    console.log('onExpire called')
    onExpireTime();

    const time = new Date();
    time.setSeconds(time.getSeconds() + 3);
    
    setTimeout(() => {
      restart(time);
    })
  }});


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{hours >= 10 ? hours: `0${hours}`}</span>
        :
        <span>{minutes >= 10 ? minutes: `0${minutes}`}</span>
        :
        <span>{seconds >= 10 ? seconds: `0${seconds}`}</span>
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
      </div>
    </div>
  );
}

export default Timer;
