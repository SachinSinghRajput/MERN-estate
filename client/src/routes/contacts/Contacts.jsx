import "./contacts.scss";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Get In Touch</h1>
          <p className="description">
            Whether you have a question, feedback, or just want to say hi — we’d
            love to hear from you!
          </p>
          <div className="boxes">
            <div className="box">
              <h1>Email</h1>
              <h2>contact@dreamnest.com</h2>
            </div>
            <div className="box">
              <h1>Phone</h1>
              <h2>+91 9876543210</h2>
            </div>
            <div className="box">
              <h1>Location</h1>
              <h2>123 Dream Street, Lucknow, India</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/contact.jpg" alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
