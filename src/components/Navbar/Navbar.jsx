import React from 'react';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'


import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,settoggleMenu]=useState(false)
  return( <div className='app__navbar'>
  <div className='app__navbar-logo'>
    <img src={images.gericht} alt='app logo'/>
  </div>
  <ul className='app__navbar-links'>
    <li className='p__opensans'><a href='#home'>Home</a></li>
    <li className='p__opensans'><a href='#About'>About</a></li>
    <li className='p__opensans'><a href='#Menu'>Menu</a></li>
    <li className='p__opensans'><a href='#Awards'>Awards</a></li>
    <li className='p__opensans'><a href='#contacts'>contacts</a></li>
  </ul>
  <div className='app__navbar-logIn'>
    <a href='#login' className='p__opensans'>Login/Register</a>
    <div/>
    <a href='/' className='p__opensans'>Book A Table</a>
  </div>


                   {/* for small screens starts */}
  <div className='app__navbar-smallscreen'>
  <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{
    settoggleMenu(true);
  }} />

  {toggleMenu && <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
  <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>{
    settoggleMenu(false)
  }}/>
           <ul className="app__navbar-smallscreen_links">
             <li><a href="#home" onClick={() =>{settoggleMenu(false)}}>Home</a></li>
             <li><a href="#about" onClick={()=>{settoggleMenu(false)}}>About</a></li>
             <li><a href="#menu" onClick={()=>{settoggleMenu(false)}}>Menu</a></li>
             <li><a href="#awards" onClick={()=>{settoggleMenu(false)}}>Awards</a></li>
             <li><a href="#contact" onClick={()=>{settoggleMenu(false)}}>Contact</a></li>
             <div></div>
           </ul>
  </div>}
  </div>
   {/* for small screens ends */}

</div>)
  
}

export default Navbar;
