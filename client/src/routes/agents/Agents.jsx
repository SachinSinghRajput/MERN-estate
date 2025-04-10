import "./agents.scss";

const agents = [
  {
    name: "Ravi Sharma",
    experience: "5+ Years",
    location: "Delhi",
    contact: "ravi@dreamnest.com",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Neha Kapoor",
    experience: "7+ Years",
    location: "Mumbai",
    contact: "neha@dreamnest.com",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Aman Verma",
    experience: "3+ Years",
    location: "Bangalore",
    contact: "aman@dreamnest.com",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
];

const Agents = () => {
  return (
    <div className="agentsPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Meet Our Trusted Agents</h1>
          <p className="description">
            Our team of experienced and dedicated agents is here to help you
            every step of the way.
          </p>
          <div className="boxes">
            {agents.map((agent, index) => (
              <div className="box" key={index}>
                <img src={agent.img} alt={agent.name} />
                <h2>{agent.name}</h2>
                <p>{agent.experience}</p>
                <p>{agent.location}</p>
                <p>{agent.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
