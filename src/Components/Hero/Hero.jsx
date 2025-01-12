import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import "./Hero.css"
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { SiGeeksforgeeks } from "react-icons/si";
import profile from "../../assets/profile-pic.jpeg"

const Hero = () => {
  return (
    <div className='hero' id="Hero">
      <div className='thelink'>
      <img src={profile} alt="" height={"180px"} width={"100px"}/>
      <div>
      <h2 ><a href="https://www.linkedin.com/in/chitteswaran-j-573871232/recent-activity/all/"><FaLinkedin style={{fontSize:'40px', color:"#0A66C2"}} /> </a></h2>
      <h2 ><a href="https://github.com/CHITTESWARAN?tab=repositories"><IoLogoGithub style={{fontSize:"40px",color:"white"}} /></a></h2>
      <h2 ><a href="https://www.geeksforgeeks.org/user/umaycoq631/"><SiGeeksforgeeks style={{fontSize:"40px",color:"#2F8D49"}}/></a></h2>
      </div>
      </div>
        
        <h1> <span>         
           <Typewriter
            words={["I'm Chittes Waran"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={170}
          />
</span>
</h1> 

<h1>Frontend Developer from India</h1>
<p>I am a frontend developer in a India, with a passion for creating efficient 
  and dynamic web applications. I’m currently seeking opportunities with companies where I can apply and further develop my skills.</p>
 
        <div className="hero-action">
            <div className="hero-connect"><a className='anchor-link' href="#Contact">Connect With me</a></div>
            <div className="hero-resume" > <a href="/CHITTESWARAN_JResume(10).pdf" download>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero