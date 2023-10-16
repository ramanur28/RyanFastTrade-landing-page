import "../style/contact.css";

const Contact = () => {
  return (
    <div className="contact container">
      <h2 className="subtitle">CONTACT US</h2>
      <p>on:</p>
      <div className="contact-wrapper">
        <a href="#" className="contact-item">
          Whatsapp
        </a>
        <a href="#" className="contact-item">
          Telegram
        </a>
        <a href="#" className="contact-item">
          Instagram
        </a>
      </div>
      <div className="telegram">
        <h2>Join Our Telegram Group</h2>
        <a href="#" className="tele-link">
          Clck Here!
        </a>
      </div>
    </div>
  );
};

export default Contact;
