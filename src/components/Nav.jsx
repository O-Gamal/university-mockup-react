import { useState } from 'react';

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav>
      <div className='container'>
        <div className='logo'>
          <a href=''>
            <img src='assets/Images/Logo.jpg' alt='logo' />
          </a>
        </div>
        <div className='menu'>
          <ul>
            <li className='home'>
              <a href='#'>Home</a>
            </li>
            <li className='drop-down-menu'>Research & Technologies</li>
            <li className='drop-down-menu'>Translation</li>
            <li className='drop-down-menu'>People</li>
            <li className='drop-down-menu'>News & Events</li>
          </ul>
          <button
            className='mobile-nav-menu'
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <span className='material-symbols-outlined '>menu</span>
          </button>
          <div className='search'>
            <span className='material-symbols-outlined'> search </span>
            search
          </div>
        </div>
      </div>
      {showMobileNav && <MobileNav />}
    </nav>
  );
};

const MobileNav = () => {
  return (
    <div className='mobile-nav'>
      <div className='menu'>
        <h2>Menu</h2>
        <ul>
          <li>Home</li>
          <li>Research & Technologies</li>
          <li>Translation</li>
          <li>People</li>
          <li>News & Events</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
