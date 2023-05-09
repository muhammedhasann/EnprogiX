
import logo from '../assets/img/logo.png';
export const Team = () => {
  // For simplicity, we will use a dummy array of club members
  const members = [
    { name: "Muhammed Hasan", role: "President", image: logo },
    { name: "Muhammed palestine", role: "Vice President", image: logo },
    { name: "Siham", role: "Secretary", image: logo },
    { name: "Nmae", role: "Marketer", image: logo }

    // ... more members
  ];

  return (
    <div className="members">
      <h1>Club Members</h1>
      <div className="members-grid">
        {members.map((member) => (
          <div className="member-card" key={member.name}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}