import './TimerPopup.css';
function TimerPopup() {
  return (
    <div className="timer-popup">
      <div className="timer-popup-header">
        <div className="timer-popup-heading">We are Live Now!</div>
        <div className="timer-popup-desc">
          Our new feature is now <b>Live and ready</b> for you to explore. Go ahead and give it a try
        </div>
      </div>
      <button className="timer-popup-button">Get Started</button>
    </div>
  );
}
export default TimerPopup;
