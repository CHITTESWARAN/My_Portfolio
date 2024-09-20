import React from 'react';
import './Services.css';
import { Services_Data } from '../../assets/Services_data';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <div className='services' id="Services">
      <div className="services-title">
        <h1>My Interest</h1>
        <img src="" alt="" />  
      </div>
      <div className="services-container">
        {
          Services_Data.map((e, index) => {
            return (
              <div key={index} className='services-format'>
                <h3>{e.s_no}</h3>
                <h2>{e.s_name}</h2>
                <p>{e.s_desc}</p>
                <div className="services-readmore">
                  <p>Read More</p>
                  <p><FaArrowRight /></p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Services;
