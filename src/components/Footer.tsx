import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo.png'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import SocialButton from './socialbutton';
import { HiChevronDoubleRight } from "react-icons/hi";
const Footer = () => {
  return (

    <div className='footer'>
      <div className='footer-divs'>
        <div className='footer-div1'>
          <div className='logo-div' style={{ backgroundImage: `url(${logo})` }}></div> 
          <div className='logo-text'> Her türlü kullanım hakkı saklıdır. Bu sitede yer alan resim ve metinler Güçtek Makina Ltd. Şti.'ne aittir. Marka logoları marka sahiplerine aittir.</div>
        </div>
        <div className='footer-div2'>
        <div className='contact'><span> Kurumsal</span> </div>
        <div className='contact-div'>
          <ul>
            <li> <HiChevronDoubleRight></HiChevronDoubleRight><a href='/'>Hakkımızda</a></li>
            <li><HiChevronDoubleRight></HiChevronDoubleRight><a href='/'>Hizmetlerimiz</a></li>
            <li><HiChevronDoubleRight></HiChevronDoubleRight><a href='/'>Ürünler</a></li>
            <li><HiChevronDoubleRight></HiChevronDoubleRight><a href='/'>İletişim</a></li>
          </ul>
        </div>
           </div>
        <div className='footer-div3'>

          <div className='contact'><span> İletişim Bilgilerimiz</span> </div>
          <div className='contact-div'>
            <div className='mail-div'>  
            <IoIosMail style={{color:'#fff', width:'24px', height:'24px'}}></IoIosMail>
            <a href="mailto:info@guctekmakina.com">info@guctekmakina.com</a></div>
           <div className='mail-div'>
            <FaPhoneAlt style={{color:'#fff', width:'24px',height:'24px' }}></FaPhoneAlt> 
            <a href="tel:+905366709954"> 0(536) 670 99 54</a>
            </div>

            <div className='mail-div'>
            <IoLocation style={{color:'#fff', width:'40px',height:'40px' }}></IoLocation> 
            <a href="https://maps.app.goo.gl/14sgsspdSDYYmowV8?g_st=iw"> Emek mah. Ahmet rasim cad. Birdal sok. No 4</a>
            </div>

          </div>


          <div className='contact-icon'>
            <SocialButton icon={FaSquareFacebook} url='https://www.facebook.com/'></SocialButton>
            <SocialButton icon={FaInstagram} url='https://www.instagram.com/'></SocialButton>
            <SocialButton icon={FaLinkedin} url='https://www.linkedin.com/'></SocialButton>
            <SocialButton icon={FaWhatsapp} url='https://www.whatsapp.com/'></SocialButton>

          </div>
        </div>
      </div>

      <div className='footer-copyright'><span>Copyright © 2024 <a href='https://www.selmanates.com' target='_blank'>Selman ATEŞ</a>. All rights reserved.</span></div>
    </div>
  )
}

export default Footer
