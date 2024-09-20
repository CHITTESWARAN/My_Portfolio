import React, { useRef } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar'>
     <h2 style={{ height: '50px', width: '120px' }}>CHITTHU</h2>
      <div className="nav-mob-open" onClick={openMenu}>
       <h2><RiMenu2Line /></h2>
      </div>
      <nav>
        <ul ref={menuRef} className="nav-menu">
          <div className="nav-mob-close" onClick={closeMenu}>
            <IoIosClose />
          </div>
          <li><a className='anchor-link' onClick={closeMenu} href="#/">Home</a></li>
          <li><a className='anchor-link' onClick={closeMenu} href="#About">About Me</a></li>
          <li><a className='anchor-link' onClick={closeMenu} href="#Services">Services</a></li>
          <li><a className='anchor-link' onClick={closeMenu} href="#Mywork">Portfolio</a></li>
          <li><a className='anchor-link' onClick={closeMenu} href="#Contact">Contact</a></li>
        </ul>
      </nav>
      <div className="nav-connect">
        <a className='anchor-link' href="#Contact">Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;
