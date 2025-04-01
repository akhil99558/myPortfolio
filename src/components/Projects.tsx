import './Projects.css'
import { useState } from 'react';
import projects from '../consts/projConsts';
import xlm from '../assets/XLM.png';


function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="experience-carousel">
          <h1 className='title-line'>Projects I've worked On</h1>
        <button className="carousel-button prev" onClick={prevSlide}>
          &lt;
        </button>
        
        <div className="carousel-track">
          {projects.map((exp, index) => (
            <div 
              key={index}
              className={`experience-card ${index === currentIndex ? 'active' : ''}`}
            >
               <img src={xlm} alt={exp.title} className="project-image" /> 
              <h3 className="project-period">{exp.title}</h3>
              <h3 className="project-description">{exp.description} </h3>
              
              
              <ul className="project-tags">
  {exp.tags.map((desc, i) => (
    <li 
      key={i}
      className={`tag-${desc.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {desc}
    </li>
  ))}
</ul>
            </div>
          ))}
        </div>
  
        <button className="carousel-button next" onClick={nextSlide}>
          &gt;
        </button>
  
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;