import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Navbar.scss';
import LOGO from '../../utils/nyotalogo';
import UserProfilePopup from '../UserProfilePopup/UserProfilePopup';

const NavBar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [touchDevice, setTouchDevice] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const dropdownItems = {
    invitation: [
      { name: 'Planner Book', path: '/books' },
      { name: 'Wedding Invites', path: '#' },
      { name: 'Party Invites', path: '#' },
      { name: 'Pooja Invites', path: '#' },
      { name: 'Ceremony Invites', path: '#' },
      { name: 'Short Invites - Free', path: '#' }
    ],
    books: [
      { name: 'Soft Cover Photobook', path: '#' },
      { name: 'Hard Cover Photobook', path: '#' },
      { name: 'Spiral Photobook', path: '#' },
      { name: 'Photo Folder', path: '#' },
      { name: 'Digital Photobook', path: '#' }
    ],
    gifts: [
      { name: 'Personalized Gifts', path: '#' },
      { name: 'Gift Cards', path: '#' },
      { name: 'Gift Sets', path: '#' }
    ],
    eshop: [
      { name: 'Shagun Envelop', path: '#' },
      { name: 'Gifts', path: '#' },
      { name: 'Photo Magnet', path: '#' },
      { name: 'Essentials', path: '#' }
    ],
    wedding: [
      { name: 'Templates', path: '#' },
      { name: 'RSVP Management', path: '#' },
      { name: 'Guest List', path: '#' }
    ]
  };

  useEffect(() => {
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    };
    setTouchDevice(isTouchDevice());

    // Load user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleMenuToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    if (!touchDevice) {
      setOpenDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!touchDevice) {
      setOpenDropdown(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setProfileOpen(false);
    navigate('/');
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const renderDropdown = (menuKey) => (
    openDropdown === menuKey && (
      <div 
        className={`dropdown-menu ${openDropdown === menuKey ? 'active' : ''}`}
        onMouseEnter={() => !touchDevice && setOpenDropdown(menuKey)}
        onMouseLeave={() => !touchDevice && setOpenDropdown(null)}
      >
        {dropdownItems[menuKey].map((item, index) => (
          <a 
            key={index} 
            href={item.path} 
            className="dropdown-item"
            onClick={(e) => {
              if (item.path !== '#') {
                e.preventDefault();
                navigate(item.path);
              }
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    )
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LOGO} alt="Nyouta Logo" />
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        {Object.keys(dropdownItems).map((key) => (
          <div
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
            key={key}
          >
            <button 
              className="navbar-button"
              onClick={() => handleMenuToggle(key)}
              aria-expanded={openDropdown === key}
            >
              {key === 'eshop' ? 'e-shop' : key.charAt(0).toUpperCase() + key.slice(1)}
              <span className="dropdown-arrow">▼</span>
            </button>
            {renderDropdown(key)}
          </div>
        ))}
      </div>

      <div className={`navbar-auth ${menuOpen ? 'active' : ''}`}>
        {user ? (
          <div className="user-profile">
            <button className="welcome-btn" onClick={toggleProfile}>
              Welcome {user.name}
            </button>
            {profileOpen && (
              <UserProfilePopup 
                user={user} 
                onClose={() => setProfileOpen(false)} 
                onLogout={handleLogout} 
              />
            )}
          </div>
        ) : (
          <>
            <button className="login-btn" onClick={() => navigate('/login')}>LOGIN</button>
            <button className="signup-btn" onClick={() => navigate('/signup')}>SIGNUP</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
