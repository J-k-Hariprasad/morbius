import React from 'react';
import './Home.css';
import logo from '../Home/logo.png';
import img from '../Home/img.png';
import AboutUs from './About';
import Landing from './Landing';
import Nav from './Nav';
const steps = [
    { number: "1", description: "Submit Intake Form" },
    { number: "2", description: "We do the search and curation for list of jobs" },
    { number: "3", description: "You approve, we do the tedious part (applying)" },
    { number: "4", description: "You get the interviews" },
  ];
const Home = () => {
  return (
<div>
    <div className="tp">
      <Nav/>
      <div className="main-content">
        <h1>Land job interviews 10x faster</h1>
        <p>
          Custom-built resumes that match your goals, keywords, and recruiter expectations.
        </p>
        <button className="cta-button">Get Started</button>
      </div>

      <div className="ebook">
        <img src={img} alt="2024 / 2025 Hiring Trends" />
         <p>Download Free E-Book</p>
      </div>
    <div className="work-process">
        <h2>How we work?</h2>
        <div className="steps-container">
            {steps.map((step, index) => (
            <div className="step" key={index}>
                <div className="circle">{step.number}</div>
                <div className="line"></div>
                <p>{step.description}</p>
            </div>
            ))}
        </div>
    </div>
    </div>
    <AboutUs/>
    <Landing/>
</div>
  );
};

export default Home;
