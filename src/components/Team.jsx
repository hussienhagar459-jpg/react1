import './Team.css';


import img1 from '../assets/bc90dfabb1488c739e7cf2d6e6238059cdc4e76f.png';
import img2 from '../assets/8845184846d4fa15bea4766f4a91a9417ae70fc4.jpg';
import img3 from '../assets/32d6f8da3e440e1c13d458667b40dd86058116b4.png';
import img4 from '../assets/ffe915c90f6e3bf91653036f1ddbf8e9bd82d8bd.jpg';

const teamData = [
  {
    id: 1,
    name: 'Rahma Farahat',
    role: 'Ui designer',
    phone: '01111446852',
    email: 'Rahma1562@gamil.com',
    img: img1 
  },
  {
    id: 2,
    name: 'Alyaa',
    role: 'Ui designer',
    phone: '012008449871',
    email: 'Alyaa1456@gamil.com',
    img: img2
  },
  {
    id: 3,
    name: 'Aya Mahmoud',
    role: 'Ui designer',
    phone: '01062984510',
    email: 'Aya1025@gamil.com',
    img: img3
  },
  {
    id: 4,
    name: 'mostafa abo elmagd',
    role: 'Ui designer',
    phone: '01062984990',
    email: 'mostafa122@gamil.com',
    img: img4
  }
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="container team-header">
        <h3 className="team-subtitle">our team</h3>
        <h2 className="team-title">they will do their best to achieve your goal</h2>
      </div>
      
      <div className="container team-grid">
        {teamData.map((member) => (
          <div className="team-card-wrapper" key={member.id}>
            <div className="team-avatar">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="team-card">
              <h4>{member.name}</h4>
              <p className="team-role">{member.role}</p>
              <p className="team-phone">{member.phone}</p>
              <p className="team-email">{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
