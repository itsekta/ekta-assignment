import React, { useState, useEffect } from 'react';
import './TimerSection.css';

function TimerSection({ isTimerActive, initialHours, initialMinutes, initialSeconds, onTimerCompletion }) {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [timerEnded, setTimerEnded] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const HideTimerSection = () => {
    const timerCompleted = true;
    onTimerCompletion(timerCompleted);
  };
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        setTimerEnded(true);
        HideTimerSection();
        if (minutes === 0) {
          setHours(0);
        }
      } else {
        if (minutes === 0 && seconds === 0) {
          setHours(prevHours => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds(prevSeconds => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [hours, minutes, seconds]);

  return isTimerActive ? (
    <div className="timer-section-wrapper">
      {hours > 0 && (
        <div className="timer-hour">
          <div className="timer-digits">{hours < 10 ? `0${hours}` : hours}</div>
          <div className="timer-label">Hours</div>
        </div>
      )}
      {hours > 0 && <div>:</div>}
      <div className="timer-minute">
        <div className="timer-digits">{minutes < 10 ? `0${minutes}` : minutes}</div>
        <div className="timer-label">Minutes</div>
      </div>
      <div>:</div>
      <div className="timer-seconds">
        <div className="timer-digits">{seconds < 10 ? `0${seconds}` : seconds}</div>
        <div className="timer-label">Seconds</div>
      </div>
    </div>
  ) : null;
}

export default TimerSection;
