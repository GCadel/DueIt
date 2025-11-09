import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header>
      <p>DueIt</p>
      {navOpen ? (
        <div className='sidebar'>
          <nav>
            <div className='justify-apart'>
              <div className='username'>
                <img
                  src='#'
                  alt='User Avatar'
                />
                <span>Username</span>
              </div>
              <button onClick={() => setNavOpen(false)}>Close</button>
            </div>
            <ul>
              <li>
                <a href='#'>Summary</a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <button onClick={() => setNavOpen(true)}>Open</button>
      )}
    </header>
  );
};
export default Navbar;
