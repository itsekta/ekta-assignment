import { useRef, useState } from 'react';
import './NotificationSection.css';
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

function NotificationSection() {
  const inputRef = useRef('');
  const [inputValue, setInputValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const validateEmail = email => {
    let regex = /^[A-Z0-9._%+-]+@gmail\.com$/i && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = regex.test(email);
    setIsValidEmail(isValid);
  };
  const handleNotifyClick = () => {
    validateEmail(inputValue);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    if (!isValidEmail) {
      setTimeout(() => {
        setIsInvalidEmail(true);
        setIsDone(false);
      }, 3000);
    } else {
      setIsInvalidEmail(false);
      setIsDone(true);
    }
  };
  return (
    <div className="notification-wrapper">
      <div className="notification-desc">{!isLoading && isDone ? `You're all set! You'll be the first to know when we're live.` : `Be the first to know! Share your email and We'll notify you when it's live`}</div>
      <div className="notification-action">
        <input className="notification-input" placeholder="Please enter your email id" type="email" value={inputValue} onChange={handleInputChange}></input>
        <button className={`notification-button ${inputValue === '' ? 'disabled' : ''}`} onClick={handleNotifyClick} disabled={isLoading || isDone}>
          {isLoading ? <CircularProgress size="24px" className="circular-progress" /> : isDone ? <CheckIcon fontSize="32px" /> : 'Notify me'}{' '}
        </button>
      </div>
      <div className="invalid-email"> {isInvalidEmail ? 'Invalid email' : ''}</div>
    </div>
  );
}
export default NotificationSection;
