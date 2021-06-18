import React from 'react';

// Libs
import Scroll from 'react-scroll';

const SideNav = ({ links }) => {
  const Link = Scroll.Link;

  return (
    <div>
      <div id='scroll-menu' className='scroll-menu'>
        {links.map((link, i) => {
          return (
            <Link
              key={i}
              activeClass='active'
              spy={true}
              smooth={true}
              to={link.to}
            >
              <span className='scroll-menu__item'>{link.menuLabel}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
