import React from 'react'
import Logo from '../../assets/icons/Logo_navbar.svg'
import serchicon from '../../assets/icons/Search.svg'
import menuicon from '../../assets/images/menu_icon.png'

const Header = () => {
  return (
    <div className='main_div'>
      <header>
        <div className="logo">
          <img src= {Logo} alt="" />
        </div>
        <div className="nav_links">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Cooking Tips</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="search">
          <img src={serchicon} alt="" />
        </div>
        <div className="button_section">
          <button>subscribe now</button>
        </div>
        <div className="menu_link">
          <img src= {menuicon} alt="" />
        </div>
      </header>
    </div>
  )
}

export default Header
