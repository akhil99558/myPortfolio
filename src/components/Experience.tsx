import './Experience.css';
import { useState } from 'react';
import experiences from '../consts/consts';

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="experience-carousel">
        <h1 className='title-line'>Work Experience</h1>
      <button className="carousel-button prev" onClick={prevSlide}>
        &lt;
      </button>
      
      <div className="carousel-track">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={`experience-card ${index === currentIndex ? 'active' : ''}`}
          >
            <h3 className="experience-period">{exp.period}</h3>
            <h3 className="experience-period">{exp.company} : {exp.location}</h3>
            
            <h2 className="experience-title">{exp.title}</h2>
            <ul className="experience-description">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className="carousel-button next" onClick={nextSlide}>
        &gt;
      </button>

      <div className="carousel-dots">
        {experiences.map((_, index) => (
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

export default Experience;