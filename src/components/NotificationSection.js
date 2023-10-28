import { useRef, useState } from 'react';
import './NotificationSection.css';
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

function NotificationSection() {
  const inputRef = useRef(null);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const validateEmail = email => {
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = regex.test(email);
    setIsValidEmail(isValid);
    setIsInvalidEmail(!isValid);
    console.log(isValid);
  };
  const handleNotifyClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    if (!isValidEmail) {
      setIsInvalidEmail(true);
    }
    setIsDone(true);
  };
  return (
    <div className="notification-wrapper">
      <div className="notification-desc">{!isLoading && isDone ? `You're all set! You'll be the first to know when we're live.` : `Be the first to know! Share your email and We'll notify you when it's live`}</div>
      <div className="notification-action">
        <input className="notification-input" placeholder="Please enter your email id" type="email" ref={inputRef} onChange={() => validateEmail(inputRef.current.value)}></input>
        <button className={`notification-button ${isValidEmail ? '' : 'disabled'}`} onClick={handleNotifyClick} disabled={isLoading || !isValidEmail || isDone}>
          {isLoading ? <CircularProgress size="24px" className="circular-progress" /> : isDone ? <CheckIcon fontSize="32px" /> : 'Notify me'}{' '}
        </button>
        <div className="invalid-email"> {isInvalidEmail && isLoading ? 'Invalid email' : ''}</div>
      </div>
    </div>
  );
}
export default NotificationSection;
