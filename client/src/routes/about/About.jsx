import "./about.scss";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutContent">
        <h1 className="mainTitle">About Nestify</h1>
        <p className="introText">
          At <strong>Nestify</strong>, we believe that finding your dream home
          should be exciting, effortless, and empowering. That’s why we created
          a platform that brings together powerful tools and real people to help
          you every step of the way.
        </p>

        <div className="section">
          <h2>🏠 Our Journey</h2>
          <p>
            Founded in 2024, Nestify started with a simple mission: to connect
            people with the spaces where they truly belong. Whether you’re
            buying, selling, or renting — Nestify is your trusted partner.
          </p>
        </div>

        <div className="section">
          <h2>🌟 What Makes Us Unique?</h2>
          <ul>
            <li>✔ Verified & Trustworthy Listings</li>
            <li>✔ Real-Time Messaging with Agents</li>
            <li>✔ Personalized Dashboard for Buyers & Sellers</li>
            <li>✔ Advanced Search Filters to Find the Perfect Match</li>
            <li>✔ Data Privacy & User-Focused Experience</li>
          </ul>
        </div>

        <div className="section">
          <h2>💡 Our Vision</h2>
          <p>
            We envision a future where real estate is not stressful or
            complicated — but smooth, smart, and human. At Nestify, we're making
            that future possible one home at a time.
          </p>
        </div>

        <div className="teamSection">
          <h2>👨‍💼 Meet the Team Behind Nestify</h2>
          <div className="teamGrid">
            <div className="teamMember">
              <img src="/agent1.jpg" alt="Ravi Sharma" />
              <h3>Ravi Sharma</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="teamMember">
              <img src="/agent2.jpg" alt="Anjali Mehta" />
              <h3>Anjali Mehta</h3>
              <p>Chief Operating Officer</p>
            </div>
            <div className="teamMember">
              <img src="/agent3.jpg" alt="Imran Khan" />
              <h3>Imran Khan</h3>
              <p>CTO & Product Lead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
