// Timer.tsx
import { useEffect, useRef } from 'react';
import { useTimer } from 'react-timer-hook';
import countdownSound from '../assets/sound/countdown_5s.mp3';

interface TimerProps {
  round: number;
  onRoundEnd: () => void; 
}

const Timer = ({ round, onRoundEnd }: TimerProps) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: time, onExpire: onRoundEnd });

  useEffect(() => {
    if (isRunning && seconds === 5) {
      const audio = new Audio(countdownSound);
      audio.play();
      audioRef.current = audio;
    }
  }, [isRunning, seconds]);

  useEffect(() => {
    if (!isRunning && audioRef.current) {
      audioRef.current.pause(); // 타이머가 일시정지될 때 오디오 중지
    }
  }, [isRunning]);

  useEffect(() => {
    // 라운드가 종료되면 다음 라운드로 넘어가며 새로운 카운트다운 시작
    if (seconds === 0 && minutes === 0 && hours === 0) {
      restart(time);
    }
  }, [seconds, minutes, hours, restart, time])

  useEffect(() => {
    // 라운드가 종료될 때마다 한 번만 호출되도록 설정
    if (seconds === 0 && minutes === 0 && hours === 0 && isRunning) {
      onRoundEnd();
    }
  }, [seconds, minutes, hours, isRunning, onRoundEnd])

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{hours >= 10 ? hours: `0${hours}`}</span>
        :
        <span>{minutes >= 10 ? minutes: `0${minutes}`}</span>
        :
        <span>{seconds >= 10 ? seconds: `0${seconds}`}</span>
      </div>
      <div>{round} Set</div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px'
      }}>
        {isRunning 
        ? <button onClick={pause}>Pause</button>
        : <button onClick={resume}>Resume</button>
        }
        
      </div>
    </div>
  );
}

export default Timer;
