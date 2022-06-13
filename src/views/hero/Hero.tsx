import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsGithub, BsChevronCompactDown } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { ArrowRightIcon } from '@heroicons/react/outline';

import './hero.scss';

function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="container">
        <div className="left">
          <h3>Hello, World!</h3>
          <h1>Aybars Acar.</h1>
          <h2>I build native apps for iOS and Android.</h2>
          <p>
            I'm an engineer working as a data analyst UGL, building native apps
            for the Mobile. I am currently a masters student in Computer Science
            at Monash University.
          </p>

          <a className="getInTouchButton" href="#contact">
            <ArrowRightIcon className="icon" /> <p>Get in touch</p>
          </a>
        </div>
        <div className="right">
          <img src="assets/hero-image.png" alt="HeroImage" />
        </div>
      </div>

      <div className="socials">
        <ul>
          <li className="linkedInButton">
            <a
              href="https://www.linkedin.com/in/aybarsacar/"
              target="_blank"
              rel="noreferrer"
            >
              <p>LinkedIn</p> <AiOutlineLinkedin size={50} />
            </a>
          </li>
          <li className="githubButton">
            <a
              href="https://github.com/AybarsAcar"
              target="_blank"
              rel="noreferrer"
            >
              <p>GitHub</p> <BsGithub size={50} />
            </a>
          </li>
          <li className="twitterButton">
            <a
              href="https://twitter.com/AybarsAcar1"
              target="_blank"
              rel="noreferrer"
            >
              <p>Twitter</p> <FiTwitter size={50} />
            </a>
          </li>
        </ul>
      </div>

      <a href="#about" className="downArrow">
        <BsChevronCompactDown size={60} />
      </a>
    </div>
  );
}

export default Hero;
