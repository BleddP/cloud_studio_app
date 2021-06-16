import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div class='nav-wrapper'>
        <Link href='#' class='brand-logo'>
          <img
            src='https://icon-library.com/images/cloud-vector-icon/cloud-vector-icon-7.jpg'
            alt='logo'
            style={{ width: 60, marginLeft: 50 }}
          />
        </Link>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <Link href='sass.html'>Frameworks</Link>
          </li>
          <li>
            <Link href='badges.html'>Recent Projects</Link>
          </li>
          <li>
            <Link href='collapsible.html'>IR35</Link>
          </li>
          <li>
            <Link href='collapsible.html'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
