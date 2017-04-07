import React from 'react';

const About = () => {
    return (
     <div className="row">
         <div className="row" id="wrap">
                <div id="happy-img">
                    <img id="main-image" src="shri_mentee.png" />
                </div>
                <div id="title">
                    <h1>Obec</h1>
                </div>
         </div>
         <div className="row" id="aboutus">
             <h2>About Us</h2>
             <p>
                 Obec takes its name from the Slovak translation from the English word "community". Obec creates a community
                 among people where they can find short-term or long-term mentors in different areas such as
                 Women in Tech, Career Advice, Life Advice, Programming, and so on.
             </p>
             <p>
                 Our logo design of a meerkat symbolizes community. Meerkats live and work together in their communities. They look out
                 for one another. Obec brings together people from different backgrounds to look out for one another. If you know something
                 valuable and would like to share, then please contribute as a mentor. If you are looking to have someone's point of view
                 on something you don't know or simply don't understand and hold interest on, then please sign up as a mentee. Here at Obec, we give you the
                 the opportunity to be both. Let's seek help and provide help.
             </p>
         </div>
         <div className="row" id="images">
                <h2>Meet the Developers</h2>
                <ul className="col-md-11 col-md-offset-1" id="photos">
                    <li className="floatLeft">
                        <img className="imagesSec" src="alex.jpg"/>
                        <h3>Alexander Onate</h3>
                        <p>Full Stack Developer</p>
                    </li>
                    <li className="floatLeft">
                        <img className="imagesSec"src="laisa.jpg"/>
                        <h3>Laisa Barros</h3>
                        <p>Front-End Developer</p>
                        <p>UI/UX Designer</p>
                    </li>
                    <li className="floatLeft">
                        <img className="imagesSec" src="liang.jpg"/>
                        <h3>Liang Chen</h3>
                        <p>Full Stack Developer</p>
                    </li>
                    <li className="floatLeft">
                        <img className="imagesSec" src="maz.jpg"/>
                        <h3>Mazhar Siddique</h3>
                        <p>Full Stack Developer</p>
                    </li>
                    <li className="floatLeft">
                        <img className="imagesSec" src="shri.jpg"/>
                        <h3>Shrijana Ghimire</h3>
                        <p>Full Stack Developer</p>
                    </li>
                </ul>
         </div>
     </div>
 );
};
export default About;
