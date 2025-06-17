import { useState } from 'react';
import LOGO from '../utils/nyotalogo';

const Navbar = () => {
  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Sample dropdown items for each nav item
  const dropdownItems = {
    invitation: ['Wedding Invites', 'Party Invites', 'Pooja Invites','Ceremony Invites','Short Invites - Free'],
    books: ['Soft Cover Photobook ','Hard Cover Photobook', 'Spiral Photobook','Photo Folder','Digital Photobook'],
    gifts: ['Personalized Gifts', 'Gift Cards', 'Gift Sets'],
    eshop: ['Shagun Envelop', 'Gifts', 'Photo Magnet','Essentials'],
    wedding: ['Templates', 'RSVP Management', 'Guest List']
  };

  // Handle mouse enter to show dropdown
  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  // Handle mouse leave to hide dropdown
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-[#653100] text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={LOGO} // place your logo in public folder or adjust path
          alt="Nyouta Logo"
          className="h-10"
        />
      </div>

      {/* Links */}
      <div className="flex space-x-6 text-sm">
        <div 
          className="group relative"
          onMouseEnter={() => handleMouseEnter('invitation')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:underline flex items-center">
            Invitation
            <span className="ml-1 text-xs">▼</span>
          </button>
          {openDropdown === 'invitation' && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-[#653100] rounded-md shadow-lg z-10">
              {dropdownItems.invitation.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>

        <div 
          className="group relative"
          onMouseEnter={() => handleMouseEnter('books')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:underline flex items-center">
            Books
            <span className="ml-1 text-xs">▼</span>
          </button>
          {openDropdown === 'books' && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-[#653100] rounded-md shadow-lg z-10">
              {dropdownItems.books.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>

        <div 
          className="group relative"
          onMouseEnter={() => handleMouseEnter('gifts')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:underline flex items-center">
            Gifts
            <span className="ml-1 text-xs">▼</span>
          </button>
          {openDropdown === 'gifts' && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-[#653100] rounded-md shadow-lg z-10">
              {dropdownItems.gifts.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>

        <div 
          className="group relative"
          onMouseEnter={() => handleMouseEnter('eshop')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:underline flex items-center">
            e-shop
            <span className="ml-1 text-xs">▼</span>
          </button>
          {openDropdown === 'eshop' && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-[#653100] rounded-md shadow-lg z-10">
              {dropdownItems.eshop.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>

        <div 
          className="group relative"
          onMouseEnter={() => handleMouseEnter('wedding')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:underline flex items-center">
            Wedding website
            <span className="ml-1 text-xs">▼</span>
          </button>
          {openDropdown === 'wedding' && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-[#653100] rounded-md shadow-lg z-10">
              {dropdownItems.wedding.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-3">
        <button className="border border-white px-4 py-1 rounded-full text-white hover:bg-white hover:text-[#653100] transition">
          LOGIN
        </button>
        <button className="bg-white text-[#653100] px-4 py-1 rounded-full hover:bg-yellow-100 transition">
          SIGNUP
        </button>
      </div>
    </nav>
  );
};

export default Navbar;