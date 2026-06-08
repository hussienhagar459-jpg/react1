import './Services.css';


import mobileUiImg from '../assets/Software engineer-cuate 1.png';
import preDesignImg from '../assets/Research paper-bro 1.png';
import websiteUiImg from '../assets/photo_2026-06-07_01-08-06.jpg';


import drawImg from '../assets/freepik--Draw--inject-38.png';
import pencilsImg from '../assets/freepik--Pencils--inject-38.png';
import char1Img from '../assets/freepik--character-1--inject-38.png';
import char2Img from '../assets/freepik--character-2--inject-38.png';

const servicesData = [
  { id: 1, title: 'mobile ui', desc: 'fast ,powerful & design what you want', img: mobileUiImg },
  { id: 2, title: 'ux researches', desc: 'fast ,powerful & design what you want', isCollage: true },
  { id: 3, title: 'pre design', desc: 'fast ,powerful & design what you want', img: preDesignImg },
  { id: 4, title: 'website ui', desc: 'fast ,powerful & design what you want', img: websiteUiImg },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container services-header">
        <h3 className="services-subtitle">Our Services</h3>
        <h2 className="services-title">We Provide Best Quality Service</h2>
      </div>
      
      <div className="services-bg-block">
        <div className="container services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={service.id} style={{ marginTop: index % 2 !== 0 ? '40px' : '0' }}>
              <div className="service-icon">
                {service.isCollage ? (
                  <div className="ux-collage">
                    <img src={drawImg} className="collage-draw" alt="draw board" />
                    <img src={char1Img} className="collage-char1" alt="character 1" />
                    <img src={char2Img} className="collage-char2" alt="character 2" />
                    <img src={pencilsImg} className="collage-pencils" alt="pencils" />
                  </div>
                ) : (
                  <img src={service.img} alt={service.title} />
                )}
              </div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
              <button className="read-more-btn">read more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
