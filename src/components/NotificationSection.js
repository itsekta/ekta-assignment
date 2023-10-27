import './NotificationSection.css';

function NotificationSection() {
  return (
    <div className="notification-wrapper">
      <div className="notification-desc">Be the first to know! Share your email and We'll notify you when it's live</div>
      <div className="notification-action">
        <input className="notification-input" placeholder="Please enter your email id" type="email"></input>
        <button className="notification-button">Notify me</button>
      </div>
    </div>
  );
}
export default NotificationSection;
