import './Home.css';
import logo from '../Home/logo.png';
function Nav() {
    return(
           <div className="tpl">
                <div className="tpl-left">
                  <img src={logo} alt="Logo" />
                  <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#plans">Plans</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#more">More</a>
                  </nav>
                </div>
                <button className="get-started">Get Started</button>
              </div>
    )
    
}
export default Nav;