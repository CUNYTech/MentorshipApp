import React from 'react';

const About = () => {
    return (
     <div className="row">
         <div className="row" id="community">
             <h1>Creating a Community of Mentors to Guide you on your Life Journey</h1>
         </div>
         <div className="row" id="about">
             <div id="aboutus">
                <h1>About Us</h1>
             </div>
                 <p>
                 Obec takes its name from the Slovak translation from the English word "community". Obec creates a community
                 among people where they can find short-term or long-term mentors in different areas such as
                 Women in Tech, Career Advice, Life Advice, Programming, and so on.
             </p>
             <p>
                 Meerkats live and work together in their communities. They look out for one another. Obec brings together people from
                 different backgrounds to look out for one another. If you know something valuable and would like to share, then please contribute as a mentor.
                 If you are looking to have someone's point of view on something you don't know or simply don't understand and hold interest on, then please sign up as a mentee.
                 Here at Obec, we give you the opportunity to be both. Let's seek help and provide help.
             </p>
         </div>
         <div className="row" id="images">
                <h2>Meet the Developers</h2>
                <ul className="col-md-11 col-md-offset-1" id="photos">
                    <li className="floatLeft">
                        <img className="imagesSec" src="/alex.jpg"/>
                        <h3>Alexander Onate</h3>
                        <p>Full Stack Developer</p>
                        <div className="overlay">
                            <p>Alex is always ready for a new challenge making him The I-GOT-THIS Developer. He's currently studying at New York City College of Technology.</p>
                        </div>
                    </li>
                    <li className="floatLeft">
                        <img className="imagesSec"src="/laisa.jpg"/>
                        <h3>Laisa Barros</h3>
                        <p>Front-End Developer</p>
                        <p>UI/UX Designer</p>
                        <div className="overlay">
                            <p>Laisa is the web-master, the queen of design and the spirit of the team. She's currently studying at The City College of New York.</p>
                        </div>
                    </li>
                    <li className="floatLeft">
                        <img className="imagesSec" src="/liang.jpg"/>
                        <h3>Liang Chen</h3>
                        <p>Full Stack Developer</p>
                        <div className="overlay">
                            <p>Liang is always learning and coming up with amazing solutions making him The Creative Problem-Solver. He's currently studying at Hunter College.</p>
                        </div>
                    </li>
                    <li className="floatLeft">
                        <img className="imagesSec" src="/maz.jpg"/>
                        <h3>Mazhar Siddique</h3>
                        <p>Full Stack Developer</p>
                        <div className="overlay">
                            <p>Maz can easily come up with a solution for a problem making him The Swift Developer. He recently graduated from Baruch College.</p>
                        </div>
                    </li>
                    <li className="floatLeft">
                        <img className="imagesSec" src="/shri.jpg"/>
                        <h3>Shrijana Ghimire</h3>
                        <p>Full Stack Developer</p>
                        <div className="overlay">
                            <p>Shri is the visionary who jumps in to help in any situation making her The Ideal Mentor. She's currently studying at New York City College of Technology.</p>
                        </div>
                    </li>
                </ul>
         </div>
     </div>
 );
};
export default About;
