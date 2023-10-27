import './TimerSection.css';

function TimerSection() {
  return (
    <div className="timer-section-wrapper">
      <div className="timer-hour">
        <div className="timer-digits">00</div>
        <div className="timer-label">Hours</div>
      </div>
      <div>:</div>
      <div className="timer-minute">
        <div className="timer-digits">00</div>
        <div className="timer-label">Minutes</div>
      </div>
      <div>:</div>
      <div className="timer-seconds">
        <div className="timer-digits">00</div>
        <div className="timer-label">Seconds</div>
      </div>
    </div>
  );
}
export default TimerSection;
