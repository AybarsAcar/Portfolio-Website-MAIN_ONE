import { Dispatch, SetStateAction } from 'react';
import './navbar.scss';

interface INavbarProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

function Navbar({ showMenu, setShowMenu }: INavbarProps) {
  return (
    <div className="navbar">
      <div className="right">
        <a href="#hero">
          <h1>Aybars.</h1>
        </a>
      </div>
      <div className="left">
        <ul className="links">
          <li>
            <a href="#about">01. About</a>
          </li>
          <li>
            <a href="#projects">02. Projects</a>
          </li>
          <li>
            <a href="#work">03. Experience</a>
          </li>
          <li>
            <a href="#contact">04. Contact</a>
          </li>
        </ul>
        <div
          className={`hamburger ${showMenu && 'active'}`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
