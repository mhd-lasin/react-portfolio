import React from 'react'

const Controls = ({activeSection, handleSectionClick}) => {
  return (
    <div>
        <div className="controls">
    <div className={`control ${activeSection === 'home' ? 'active-btn' : ''}`} onClick={() => handleSectionClick('home')}>
          <i className="fas fa-home"></i>
        </div>
        <div className={`control ${activeSection === 'about' ? 'active-btn' : ''}`} onClick={() => handleSectionClick('about')}>
          <i className="fas fa-user"></i>
        </div>
        <div className={`control ${activeSection === 'portfolio' ? 'active-btn' : ''}`} onClick={() => handleSectionClick('portfolio')}>
          <i className="fas fa-briefcase"></i>
        </div>
        <div className={`control ${activeSection === 'blogs' ? 'active-btn' : ''}`} onClick={() => handleSectionClick('blogs')}>
          <i className="far fa-newspaper"></i>
        </div>
        <div className={`control ${activeSection === 'contact' ? 'active-btn' : ''}`} onClick={() => handleSectionClick('contact')}>
          <i className="fas fa-envelope-open"></i>
        </div>
    </div>  
    </div>
  )
}

export default Controls