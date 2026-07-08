import React from 'react'
import Logo from '../../assets/icons/Logo.svg'
import tiktoc from '../../assets/icons/tictoc_logo.svg'
import fb from '../../assets/icons/fb_logo.svg'
import instaicon from '../../assets/icons/insta_icon.svg'
import yt from '../../assets/icons/YT_icon.svg'

const Footer = () => {
  return (
    <div className='main_div'>
    <footer>
        <div className="footer_logo">
          <img src={Logo} alt="logo" />
          <span>Cooks <br /> Delight</span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Cooking Tips</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <div className="footer_socials">
          <a href="#"><img src={tiktoc} alt="TikTok" /></a>
          <a href="#"><img src={fb} alt="Facebook" /></a>
          <a href="#"><img src={instaicon} alt="Instagram" /></a>
          <a href="#"><img src={yt} alt="YouTube" /></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
