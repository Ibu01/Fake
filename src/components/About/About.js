import React from 'react';
import './About.css'
import logo from '../../images/teacher1.jpg'
import logo2 from '../../images/teacher2.jpg'
import logo3 from '../../images/techer3.jpg'
import logo4 from '../../images/teacher4jpg.jpg'

const About = () => {
    return (
        <div>
            {/* about section strat here */}
            <h1 className="leader-title">LeaderShips</h1>
            <div className="about-container">
                <div>
                    <img src={logo} alt="" />
                    <h3>Mr Alex hales</h3>
                    <h4>Founder</h4>
                </div>
                <div>
                    <img src={logo2} alt="" />
                    <h3>Md Rahim Str</h3>
                    <h4>HeadMaster</h4>
                </div>
                <div>
                    <img src={logo3} alt="" />
                    <h3>Naimer jnr</h3>
                    <h4>Chairman</h4>
                </div>
                <div>
                    <img src={logo4} alt="" />
                    <h3>Andress pattikal</h3>
                    <h4>Assistant Techaer</h4>
                </div>
            </div>

            {/* service area start here */}
            <div>
                <div className="services-area">
                    <div>
                        <h1>20 Buses</h1>
                        <p>Free Transportation</p>
                    </div>
                    <div>
                        <h1>Parmanent Campus</h1>
                        <p>2 Acres of Own Land</p>
                    </div>
                </div>
                <div className="vission-style">
                    <div>
                        <h1>Vision</h1>
                        <p>Produce at least one student had a good life cycle</p>
                    </div>
                    <div>
                        <h1>Mission</h1>
                        <p>Human Resource Development</p>
                    </div>
                    <div>
                        <h1>Scholarship</h1>
                        <p>Scholarships for both new and current students</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default About;