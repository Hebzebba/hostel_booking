import React from 'react';
import Header from './header'
import Footer from './footer'

const About = (props) => {
    return <div>
        <Header />
        <div className="about-banner"></div>
        <div className="about-content">
            <div className="about-img">
                <img src="images/nelson1.png" alt="" width="100%"/>
            </div>
            <div className="about-text">
                <h3>About-Us</h3>
                <p>
                    This website is an  online booking service which aid
                    students of Koforidua Technical University to make a 
                    reservation of hostels.
                    We have over 20 hostels which suits the preference of every students.
                </p>
            </div>
        </div>
        <Footer />
    </div>
}
 
export default About;