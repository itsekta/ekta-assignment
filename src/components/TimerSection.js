import React, { useState, useEffect } from 'react';
import './TimerSection.css';

function TimerSection({ isTimerActive, initialHours, initialMinutes, initialSeconds, onTimerCompletion }) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    if (!isTimerActive) return;

    const timerInterval = setInterval(() => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(timerInterval);
        onTimerCompletion(true);
      } else {
        const newTime = { ...time };

        if (newTime.minutes === 0 && newTime.seconds === 0) {
          newTime.hours -= 1;
          newTime.minutes = 59;
          newTime.seconds = 59;
        } else if (newTime.seconds === 0) {
          newTime.minutes -= 1;
          newTime.seconds = 59;
        } else {
          newTime.seconds -= 1;
        }

        setTime(newTime);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [isTimerActive, time, onTimerCompletion]);

  return isTimerActive ? (
    <div className="timer-section-wrapper">
      {time.hours > 0 && (
        <>
          <div className="timer-hour">
            <div className="timer-digits">{time.hours < 10 ? `0${time.hours}` : time.hours}</div>
            <div className="timer-label">Hours</div>
          </div>
          <div>:</div>
        </>
      )}

      <div className="timer-minute">
        <div className="timer-digits">{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</div>
        <div className="timer-label">Minutes</div>
      </div>
      <div>:</div>
      <div className="timer-seconds">
        <div className="timer-digits">{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</div>
        <div className="timer-label">Seconds</div>
      </div>
    </div>
  ) : null;
}

export default TimerSection;
