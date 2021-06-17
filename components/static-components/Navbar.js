import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link href='#' className='brand-logo'>
          <img
            src='https://icon-library.com/images/cloud-vector-icon/cloud-vector-icon-7.jpg'
            alt='logo'
            style={{ width: 60, marginLeft: 50 }}
          />
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link href='#'>Frameworks</Link>
          </li>
          <li>
            <Link href='#'>Recent Projects</Link>
          </li>
          <li>
            <Link href='#'>IR35</Link>
          </li>
          <li>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
