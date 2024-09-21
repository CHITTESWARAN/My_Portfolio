import React from 'react'
import "./Hero.css"
import profile from "../../assets/profile-pic.jpeg"

const Hero = () => {
  return (
    <div className='hero' id="Hero">
        <img src={profile} alt="" height={"180px"} width={"100px"}/>
        <h1> <span>I'm Chittes Waran,</span> Frontend Developer from India</h1>
<p>I am a frontend developer based in Tamil Nadu, India, with a passion for creating efficient 
  and dynamic web applications. I’m currently seeking opportunities with companies where I can apply and further develop my skills.</p>
 
        <div className="hero-action">
            <div className="hero-connect"><a className='anchor-link' href="#Contact">Connect With me</a></div>
            <div className="hero-resume" > <a href="/CHITTESWARAN J Resume(8).pdf" download>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero