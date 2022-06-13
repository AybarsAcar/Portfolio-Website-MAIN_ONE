import { useState } from 'react';
import './app.scss';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import Hero from './views/hero/Hero';
import Dropdown from './views/navbar/drowdown/Dropdown';
import Navbar from './views/navbar/Navbar';
import Projects from './views/projects/Projects';
import Work from './views/work/Work';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="app">
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Dropdown showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="sections">
        <Hero />
        <About />
        <Projects />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
