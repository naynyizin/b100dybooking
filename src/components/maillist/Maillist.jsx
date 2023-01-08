import "./maillist.css";

export default function Maillist() {
  return (
    <div className="mail">
      <div className="mail-wrapper">
        <h2 className="mail-title">Save time, save money !</h2>
        <p className="mail-desc">
          Sign up and we'll send the best deals to you
        </p>

        <div className="in-btn">
          <input
            type="email"
            placeholder="Your email address"
            className="mail-input"
          />
          <button className="mail-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
