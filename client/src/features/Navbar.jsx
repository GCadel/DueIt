import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);
  return (
    <header className='navbar'>
      <p className='app-title'>DueIt</p>
      {navOpen ? (
        <div className='overlay'>
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
                <button onClick={closeNav}>Close</button>
              </div>
              <p className='board-title'>Project Board Name</p>
              <ul>
                <li>
                  <Link
                    to={"/summary"}
                    onClick={closeNav}
                  >
                    Summary
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to={"/members"}
                    onClick={closeNav}
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/tasks"}
                    onClick={closeNav}
                  >
                    Tasks
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <button onClick={() => setNavOpen(true)}>Open</button>
      )}
    </header>
  );
};
export default Navbar;
