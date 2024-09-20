import React from 'react'
import "./About.css"
import profile from "../../assets/profilephoto.jpg"

const About = () => {
  return (
    <div className='about' id="About">
        <div className="about-title">
         <h1>About me</h1>
         <img src="" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>
             <div className="about-right">
                <div className="about-para">
                    <p>Hi, I’m Chitteswaran J, a web developer with expertise in React, HTML, CSS, and JavaScript. I hold a degree in Electronics and Instrumentation Engineering, which provides a solid technical foundation for my work.

                   Currently, I’m diving into the MERN stack (MongoDB, Express.js, React, Node.js) to enhance my full-stack development skills. I’m passionate about creating efficient and dynamic web applications and enjoy tackling complex challenges.</p>
                    <p> My goal is to build seamless, scalable solutions and continually advance my expertise in modern web technologies.

                I thrive in collaborative environments and am always eager to learn and grow within the web development field. Explore my portfolio to see my work, and feel free to connect with me for potential collaborations or opportunities!</p>
                </div>
                <div className="about-skills">
                  <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}></hr></div>
                  <div className="about-skill"><p>JavaScript</p> <hr style={{width:"70%"}}></hr></div>
                  <div className="about-skill"><p>BootStrap3</p> <hr style={{width:"50%"}}></hr></div>
                  <div className="about-skill"><p>React JS</p> <hr style={{width:"80%"}}></hr></div>
                  <div className="about-skill"><p>Node JS</p> <hr style={{width:"50%"}}></hr></div>
                  <div className="about-skill"><p>Tailwind</p> <hr style={{width:"55%"}}></hr></div>
                  <div className="about-skill"><p>SQL</p> <hr style={{width:"70%"}}></hr></div>
                </div>
              </div>
            </div>
               <div className="about-achivements">
                <div className="about-achivement">
                    <h1>0.4</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>15+</h1>
                    <p>MINI PROJECTS</p>
                </div>

                </div> 

             </div>
        
  )
}

export default About