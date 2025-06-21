import React from 'react';
import './About.css';
import aboutPic from '../../assets/michael.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img src={aboutPic} alt="Michael Laureles" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>"Hi, I'm Michael Laureles. Computer Engineering Graduate with a Bachelor of Science in Computer Engineering. Skilled in hardware design, and systems analysis, with a strong foundation in digital circuits, and embedded systems. Eager to apply academic knowledge and hands-on experience in real-world projects. Quick to adapt to new technologies and committed to continuous learning and professional growth."</p>
        
        <div className="about-details">
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li><strong>College:</strong> Bachelor of Science in Computer Engineering (BSCPE) | STI College Lucena 2021 - 2025</li>
              <li><strong>Senior High School:</strong> Humanities and Social Sciences (HUMSS) | Dr. Maria D. Pastrana National High School 2019-2021</li>
            </ul>
          </div>
          
          <div className="certifications">
            <h3>Certifications & Qualifications</h3>
            <ul>
              <li>Huawei Certificate Basics Concepts of Cloud Computing 2024</li>
              <li>Huawei Certificate CRA Training Program 2024</li>
              <li>Cybersecurity Fundamentals</li>
              <li>Member of Institute of Computer Engineers of the Philippines (ICpEP)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 