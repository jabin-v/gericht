import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';


import './Footer.css';

const Footer = () => {
  return(
    <div className='app__footer section__padding'>
     <FooterOverlay/>
      <Newsletter/>
    </div>
  )
}

export default Footer;
