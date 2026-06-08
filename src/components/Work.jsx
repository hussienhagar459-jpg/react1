import './Work.css';

import project1Img from '../assets/eb04af81e2cdc8d9cf14dfc95fbd616480218e4f.jpg';
import project2Img from '../assets/cffca1244b96da11b2bcb39c3fb1ebe28806b1d8.jpg';

const projectsData = [
  {
    id: 1,
    title: 'responsive design of e-commerce website\n(uniderma)',
    img: project1Img
  },
  {
    id: 2,
    title: 'mobile application design \n(coffee )',
    img: project2Img
  }
];

const Work = () => {
  return (
    <section className="work-section">
      <div className="container work-header">
        <h3 className="work-subtitle">Our Work</h3>
        <h2 className="work-title">Some of our projects</h2>
      </div>

      <div className="work-bg-block">
        <div className="container work-list">
          {projectsData.map((project) => (
            <div className="project-item" key={project.id}>
              <div className="project-image">
                <img src={project.img} alt="Project Mockup" />
              </div>
              <p className="project-title">
                {project.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
