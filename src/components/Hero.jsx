import './Hero.css';
import heroImg from '../assets/UI-UX differences-pana 1.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            A UI UX Design Agency ,<br />
            <span className="highlight">evolving</span> The Way People<br />
            Interact With Digital World.
          </h1>
          <button className="cta-button">get in touch</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="UI UX Designer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
