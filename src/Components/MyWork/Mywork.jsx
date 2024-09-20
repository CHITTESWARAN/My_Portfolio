import React from 'react'
import "./Mywork.css"
import {mywork_data} from "../../assets/mywork_data"
import { FaArrowRight } from 'react-icons/fa';

const Mywork = () => {
  return (
    <div className='mywork' id="Mywork">
    <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src="" alt="" />
    </div>
    <div className="mywork-container">
    {
  mywork_data.map((work, index) => (
    <div className="mywork-data" key={index}>
      <img src={work.w_img} alt="" />
      <h2>{work.w_name}</h2>
    </div>
  ))
}
    </div>
    <div className="mywork-showmore">
        <p>Show More</p>
       <p><FaArrowRight /></p>
    </div>

    </div>
  )
}

export default Mywork