import React, { useState } from 'react'
import "./Mywork.css"
import {mywork_data} from "../../assets/mywork_data"
import { FaArrowRight } from 'react-icons/fa';


const Mywork = () => {
  const [value, setValue] = useState(6);

  function showmore()
  {
   setValue(mywork_data.length);
  }
  return (
    <div className='mywork' id="Mywork">
    <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src="" alt="" />
    </div>
    <div className="mywork-container">
    {
  mywork_data.map((work, index) => (
   
    index<value?( 
    <div className="mywork-data" key={index}> 
      <img src={work.w_img} alt=""/>
      <h2>{work.w_name}</h2>
      <div>
  
  <button className="theproject">
    <a href="https://github.com/CHITTESWARAN" target="_blank" rel="noopener noreferrer">
      Project Link
    </a>
  </button>

 
  {work?.w_link && (
    <button className="theproject">
      <a href={work.w_link} target="_blank" rel="noopener noreferrer"> 
        Work Link
      </a>
    </button>  
  )}
</div>

      
    </div>
  ):null
  ))
}
    </div>
    <div className="mywork-showmore" onClick={showmore}> 
        <p>Show More</p> 
       <p><FaArrowRight/></p>
    </div>

    </div>
  )
}

export default Mywork