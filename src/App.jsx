import React from 'react'
import { useState } from 'react'
import "../src/styles/style.css"
import hero from "../src/assets/hero.jpeg"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Blogs from "./components/Blogs"
import Contact from "./components/Contact"
import Controls from "./components/Controls"
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <>
   {activeSection==='home' && (
    <header className="container header active" id="home">
        <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src={hero} alt=''/>
                </div>
            </div>
            <div className="right-header">
                <h1 className="name">
                    <span>Muhamed Lasin</span><br/>
                    Full Stack Developer
                </h1>
                <p>
                    I’m a passionate Full Stack Developer specializing in building scalable, user-friendly web applications. With expertise in React for crafting dynamic front-end experiences and Python frameworks like Django and FastAPI for robust back-end solutions, I bridge the gap between elegant design and efficient functionality.</p>
                <div className="btn-con">
                    <a href="/Muhamed-Lasin.pdf" className="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><i className="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    )}
    <main>
   <About activeSection={activeSection} />
    <Portfolio activeSection={activeSection} />
    <Blogs activeSection={activeSection} />
    <Contact activeSection={activeSection} />
    </main>
    <Controls activeSection={activeSection} handleSectionClick={handleSectionClick} />
      </>
  )
}

export default App