import './About.css';
import aboutImg from '../assets/ad8bfcdab0f7490450606b60643b9885fbb94a53.gif';

const About = () => {
  return (
    <section className="about-section">
      <div className="container about-content">
        <div className="about-text">
          <h3 className="about-subtitle">About Us</h3>
          <h2>Grow Your Business<br />With Our Agency</h2>
          <p>
            Our team live and breath UI UX, tackling design challenges
            with excitement. Our mission is to improve lives and
            businesses through our design decisions. With versatile
            experience across startups and industry giants, we offer
            outstanding services in multiple fields. When you partner up
            with us, you'll get a superbrain team of UI UX experts,
            dedicated to knowledge sharing and creating a better world.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About Us Illustration" />
        </div>
      </div>
    </section>
  );
};

export default About;
