import React from 'react';
import './AboutUs.css';
import ashwin from '../Home/pro.png'; // replace with actual path
import nicole from '../Home/pro.png'; // replace with actual path
import linkedinIcon from '../Home/link.png'; // replace with actual path

const AboutUs = () => {
  return (
    <div className="about-section">
      <h2>About Us</h2>
    
      <div className="profile">
        <div className="profile-image">
          <img src={ashwin} alt="Ashwin" className='prof' />
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img className="linkedin-icon" src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <div className="profile-info">
          <p><strong>Ashwin</strong> is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. 
          With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. 
          Ashwin is an MBA holder from Yale University.</p>

          <p>Ashwin’s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.</p>
        </div>
    
        <div className="profile-image">
          <img src={nicole} alt="Nicole" className='prof' />
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img className="linkedin-icon" src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <div className="profile-info">
          <p><strong>Nicole</strong> is an Executive coach at Mobius specializing in resume builds and career advisory.</p>

          <p>With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. 
          She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.</p>
        </div>
      </div>

      <div className="more-links">
        <a href="#">Learn more about our Board of Advisors ↗</a>
        <a href="#">Follow us on our LinkedIn page ↗</a>
      </div>
    </div>
  );
};

export default AboutUs;
