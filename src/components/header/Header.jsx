import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
  const links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Pages',
      link: '/',
    },
    {
      name: 'Products',
      link: '/',
    },
    {
      name: 'Blog ',
      link: '/',
    },
    {
      name: 'Shop',
      link: '/',
    },
    {
      name: 'Contact',
      link: '/',
    },
  ]
  return (
    <div className='header'>
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <nav className="header__links">
        <ul>
          {links.map(item =>
            <li className='header__link' key={item.name}>
              {item.name}
            </li>
          )}
        </ul>
      </nav>
      <div className="header__search"></div>
      <div className="header__btns"></div>
    </div>
  )
}

export default Header