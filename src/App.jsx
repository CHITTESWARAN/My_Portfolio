import {React,useState,useEffect} from 'react'
import "./index.css"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/MyWork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('user');
    return savedCount ? JSON.parse(savedCount) : 0; 
  });

  useEffect(() => {
   
    setCount((pre) => {
      const newCount = pre + 1; 
      localStorage.setItem('user', JSON.stringify(newCount-1)); 
      console.log('Updatecount:', newCount); 
      return newCount; 
    });
  }, []);

  return (
   <>
   
   <Navbar/>
   <section id='/'><Hero/></section>
   <section id='About'><About/></section>
   <section id='Services'><Services/></section>
   <section id='Mywork'><Mywork/></section>
   <section id='Contact'><Contact/></section>
   <Footer/>
   </>
  )
}

export default App