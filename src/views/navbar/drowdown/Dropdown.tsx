import React, { Dispatch, SetStateAction } from 'react';
import './dropdown.scss';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

interface INavbarProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const Dropdown = ({ showMenu, setShowMenu }: INavbarProps) => {
  return (
    <div className={`dropdown ${showMenu && 'active'}`}>
      <ul className="links">
        <li onClick={() => setShowMenu(false)}>
          <a href="#about">01. About</a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <a href="#projects">02. Projects</a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <a href="#work">03. Experience</a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <a href="#contact">04. Contact</a>
        </li>
      </ul>

      <ul className="socials">
        <li>
          <a
            href="https://www.linkedin.com/in/aybarsacar/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin /> <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AybarsAcar"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> <p>Github</p>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/AybarsAcar1"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter /> <p>Twitter</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
