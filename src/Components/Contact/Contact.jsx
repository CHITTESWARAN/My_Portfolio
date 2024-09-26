import React, { useState } from 'react'
import "./Contact.css"
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  const [form,setform]=useState({
    name:"",
    email:"",
    message:""
  })
  const handleChange=(event)=>{
    const{name,value}=event.target;
    setform((prevForm) => ({
      ...prevForm,
      [name]: value
    }))


  }
  
  const onSubmit = async (event) => {
    event.preventDefault();

   
    const formData = new FormData(event.target);

    formData.append("access_key", "aa804e64-46fd-4ec0-b84c-fdc0b3b62821");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
     setform({
      name: "",
      email: "",
      message: ""
    });
    }
    else{
      alert("Check a the form")
    }


  }
  return (
    <div className='contact' id='Contact'>
     <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src="" alt="" />

        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on a new project,so feel free to sent me a message about anything that you want me to work on.You contact anytime</p>
                <div className="contact-deatails">
                    <div className="contact-detail">
                    <MdEmail />
                    <p> chitteswarancj06@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <IoMdCall />
                    <p> 91+ 9003411556</p>  
                    </div>
                    <div className="contact-detail">
                    <MdLocationOn />
                    <p>Triuchengode,TamilNadu,India</p>    
                    </div>
                </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>

                 <label htmlFor="name">Your Name</label>
                 <input type="text" placeholder='Enter your name'value={form.name} required onChange={handleChange} name="name" />
                 <label htmlFor="name">Your Email</label>
                 <input type="email" placeholder='Enter your Email'value={form.email} required onChange={handleChange} name="email" />
                 <label htmlFor="">Write your message here</label>
                 <textarea name="message" rows="8" placeholder='Enter your message'value={form.message} required onChange={handleChange}></textarea> 
                 <button className='contact-submit'>Submit now</button>
                </form>  
        </div> 
    </div>
  )
}

export default Contact