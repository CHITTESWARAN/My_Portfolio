import React from 'react'
import "./About.css"
import profile from "../../assets/profilephoto.jpg"
import { askill_data } from '../../assets/askills_data'

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
              </div>
            </div>
             <div className="about-skilltitle">
                <div className="aboutskill">
                  <h1>SKILLS</h1>
                </div>
                <div className="about-skills">
     { askill_data.map((e) => {
          return (
           <div key={e.s_no} className="skill-item">
            <div className="skill-logos">
             <img src={e.s_img} alt="" />
           </div>
           <div className="skill-percent">
              <p>{e.s_name}</p>
              <hr style={{ width: e.s_per}} />
           </div>
           </div>
          );
            })}
                  
                
                  
                  
                 
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