import React from 'react';
import '../Home/Landing.css'
import logo from './121.png'
const steps = [
  { number: "1", description: "It was perfect and good", icon: "📝",name:"John Wick" },
  { number: "2", description: "We do the search and curation for list of jobs", icon: "🔍" ,name:"Goku"},
  { number: "3", description: "You approve, we do the tedious part (applying)", icon: "✅",name:"Luffy D" },
  { number: "4", description: "You get the interviews", icon: "🎯" ,name:"Steve"},
];

const Landing = () => {
  return (
    <div className="landing-page">
       <section className="testimonials">
        <h2>What our clients have to say</h2>
        <div className="testimonial-cards">
          {steps.map((step) => (
            <div key={step.number} className="testimonial-card">
              <div className="icon">{step.icon}</div>
              <p>{step.description}</p>
              <p>{step.name}</p>
            </div>
          ))}
      </div>
        <button className="see-more-btn">See More Reviews</button>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h4>Fast Turn Around</h4>
            <p>Get results quickly</p>
          </div>
          <div className="feature">
            <h4>Best Value Pricing</h4>
            <p>Affordable plans</p>
          </div>
          <div className="feature">
            <h4>Premium Service</h4>
            <p>Top-rated support</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>Job Application Service Plans</h2>
        <div className="plans">
          <div className="plan">
            <h3>Application</h3>
            <p className="price">$35 / week</p>
            <ul>
              <li>✅5 applications per week</li>
              <li>✅Job targeting</li>
              <li>✅Email support</li>
            </ul>
            <button className="select-plan-btn">Select Plan</button>
          </div>
          <div className="plan">
            <h3>Starter</h3>
            <p className="price">$50 / week</p>
            <ul>
              <li>✅10 applications per week</li>
              <li>✅Priority targeting</li>
              <li>✅Chat support</li>
            </ul>
            <button className="select-plan-btn">Most Popular</button>
          </div>
          <div className="plan">
            <h3>Pro</h3>
            <p className="price">$100 / week</p>
            <ul>
              <li>✅Unlimited applications</li>
              <li>✅Advanced targeting</li>
              <li>✅24/7 support</li>
            </ul>
            <button className="select-plan-btn">Select Plan</button>
          </div>
        </div>

  <div class="addon">
  <div class="op2">
    <h3>Advance</h3>
    <p>Top-tier support for serious job hunters:</p>
    <hr />
    <ul>
      <li>✅ Everything in Plus</li>
      <li>✅ Custom Resumes & Cover Letters</li>
      <li>✅ 20 fully customized applications/week</li>
      <li>✅ Help with complex job searches</li>
      <li>✅ Access to senior resume experts, Founder & Exec Coaches</li>
    </ul>
  </div>
  <div class="opl">
    <div class="addon-price">
      <span>$150</span>
      <h6>/week</h6>
    </div>
    <button class="select-addon-btn">Get Started →</button>
  </div>
</div>


      </section>
      <section className="resume-coaching">
      <h2>Resume Building &amp; Coaching</h2>
      <p>Let's talk about where you want to go — and how your resume can get you there. <strong>Schedule a call</strong> to get started.</p>

      <div className="coaching-cards">
        <div className="coaching-card">
          <h3>Resume Rebuild</h3>
          <p className="subtitle">Crafted for senior to VP-level professionals ready for their next big step.</p>
          <div className="price">
            <span>$1000</span> <small>one time</small>
          </div>
          <hr />
          <ul>
            <li>3× 30-min coaching</li>
            <li>Focused on storytelling, not just formatting</li>
            <li>Analyst + full application team on Pacific hours</li>
            <li>Tailored to your target industry, company, or role</li>
            <li>Direct work with our co-founder (ex-Google, JP Morgan)</li>
            <li>Executive coaching from UC Berkeley alum with 10+ yrs experience</li>
            <li>Resume Rebuild portfolio available upon request</li>
          </ul>
          <button className="coaching-btn">Get Started →</button>
        </div>

        <div className="coaching-card">
          <h3>Interview Prep</h3>
          <p className="subtitle">Two sessions to sharpen your story, confidence, and clarity — fast.</p>
          <div className="price">
            <span>$500</span> <small>one time</small>
          </div>
          <hr />
          <ul>
            <li>2× 45-min live coaching with our co-founder</li>
            <li>Real-time, practical feedback</li>
            <li>Build clarity, empathy & executive presence</li>
            <li>For senior and leadership roles — technical & non-technical</li>
          </ul>
          <button className="coaching-btn">Get Started →</button>
        </div>
      </div>
    </section>
      {/* Contact Section */}
      <section className="contact">
        <h2>Still have questions?</h2>
        <button className="contact-btn">Contact us ➔</button>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="MobiusEngine Logo" />
          </div>
          <div className="footer-details">
            <p>1875 Mission St Ste 103 #450<br />San Francisco, CA 94103</p>
            <p><strong>Email</strong> finance@mobiusengine.ai</p>
            <p>650-889-6026</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Mobiusservices LLC</p>
          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing;
