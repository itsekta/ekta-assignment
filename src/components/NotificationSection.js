import { useRef, useState } from 'react';
import './NotificationSection.css';
function NotificationSection() {
  const inputRef = useRef(null);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const validateEmail = email => {
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    setIsValidEmail(regex.test(email));
  };
  return (
    <div className="notification-wrapper">
      <div className="notification-desc">Be the first to know! Share your email and We'll notify you when it's live</div>
      <div className="notification-action">
        <input className="notification-input" placeholder="Please enter your email id" type="email" ref={inputRef} onChange={() => validateEmail(inputRef.current.value)}></input>
        <button className={`notification-button ${isValidEmail ? '' : 'disabled'}`}>Notify me</button>
      </div>
    </div>
  );
}
export default NotificationSection;
