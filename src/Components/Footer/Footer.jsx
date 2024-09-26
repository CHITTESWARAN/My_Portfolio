import React from 'react'
import "./Footer.css"
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer' id="Footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src=" " alt="" />
                <p>I am frontend developer from,INDIA with the .5 years of experience in the js and the a react   I am always eager to learn 
                    and grow within the web development field. Explore my portfolio to see my work, and feel free to connect with me for potential collaborations or opportunities!</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                <h2 ><FaLinkedin /> <a href="https://www.linkedin.com/in/chitteswaran-j-573871232/recent-activity/all/"> LinkedIn </a></h2>
                <h2 ><IoLogoGithub /> <a href="https://github.com/CHITTESWARAN?tab=repositories">Github</a></h2>
                <h2 ><SiGeeksforgeeks /> <a href="https://www.geeksforgeeks.org/user/umaycoq631/"> Geeksforgeeks</a></h2>
               
                </div>
                <div className="footer-suscribe"><a href="https://www.linkedin.com/in/chitteswaran-j-573871232/recent-activity/all/">Follow me for more update✌️</a></div>
            </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@copy 2024 Chitteswaran.All rights reserved.</p>
                <div className="footer-bottom-right">
                   <p>Term of Services</p>
                   <p>Privacy Policy</p>
                   <p>Connect with me</p> 
                </div>
            </div>
       

    </div>
  )
}

export default Footer