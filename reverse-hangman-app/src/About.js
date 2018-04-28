import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './About.css';
import Facebook from './facebook.png';
import Linkedin from './linkedin.png';
import Gmail from './gmail.png';
import Instagram from './instagram.png';
import Twitter from './twitter.png';
import Snapchat from './snapchat.png';
import Phone from './phone.png';



class About extends Component {
    render() {
        var urls = [
            'https://www.linkedin.com/in/khalilbhijazi/',
            'https://www.facebook.com/khalil.hijazi.5268',
            'mailto:khalilbhijazi@gmail.com',
            'https://www.instagram.com/khalil_hijazi99/',
            'https://twitter.com/MixMasterAhmu',
            'https://www.snapchat.com/add/sonofgoku22',
            'tel:1-408-555-5555'
        ];

        return(
            <div className="About" id="aboutMe">
                <div className="centeredText">
                    <h2>Get to Know Me</h2> 
                    <p>
                        Hello there! I'm Khalil Hijazi, a first year undergraduate student at University of Maryland, College Park. If you haven't figured already,
                        I'm a computer science major. Ever since I was a young teenager, I was into technology, more specifically computers, and as I matured,
                        my interest in technology grew larger and larger. I remember my first touch of HTML at the age of 12; it was all so new and spectacular to me.
                        Seeing elements load up on the screen and being able to design them however way I preferred just blew my mind. Ever since then, I've been floating
                        in computer science waters as I wish.
                    </p>
                    
                    <h4>Join my Social Network Now</h4>
                    <div id="iconsContainer">
                        <Link to={urls[0]}><img src={Linkedin} className="socialIcons" alt={urls[0]}/></Link>
                        <Link to={urls[1]}><img src={Facebook} className="socialIcons" alt={urls[1]}/></Link>
                        <Link to={urls[2]}><img src={Gmail} className="socialIcons" alt={urls[2]}/></Link>
                        <Link to={urls[3]}><img src={Instagram} className="socialIcons" alt={urls[3]}/></Link>
                        <Link to={urls[4]}><img src={Twitter} className="socialIcons" alt={urls[4]}/></Link>
                        <Link to={urls[5]}><img src={Snapchat} className="socialIcons" alt={urls[5]}/></Link>
                        <Link to={urls[6]}><img src={Phone} className="socialIcons" alt={urls[6]}/></Link>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;