import React from 'react'
import port1 from "../assets/port1.jpg"
import port2 from "../assets/port2.jpg"
import port3 from "../assets/port3.jpg"
import port4 from "../assets/port4.jpg"
import port5 from "../assets/port5.jpg"
import port6 from "../assets/port6.jpg"
const Portfolio = ({activeSection}) => {
  return (
    <div>
        {activeSection === 'portfolio' && (
                <section className= "container active" id="portfolio">
                    <div className="main-title">
                        <h2 id='main-h2'>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
                    </div>
                    <p className="port-text">
                        Here is some of my work that I've done in various programming languages.
                    </p>
                    <div className="portfolios">
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={port1} alt=''/>
                            </div>
                            <div className="hover-items">
                                <h5>Django Event Management App</h5>
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="https://github.com/mhd-lasin/django_event_management_app" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
        
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={port2} alt=''/>
                            </div>
                            <div className="hover-items">
                                <h5>React Job Listing App</h5>
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="https://github.com/mhd-lasin/react-job-listing-app" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
        
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={port3} alt=''/>
                            </div>
                            <div className="hover-items">
                            <h5>Django Hospital Management App</h5>
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="https://github.com/mhd-lasin/django_hospital_management_app" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
        
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={port4} alt=''/>
                            </div>
                            <div className="hover-items">
                                <h5>Next Js Landing Page</h5>
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="https://github.com/mhd-lasin/nexcent-landing-page" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
        
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={port5} alt=''/>
                            </div>
                            <div className="hover-items">
                                <h5>React Weather App</h5>
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="https://github.com/mhd-lasin/react-weather-app" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
        
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={port6} alt=''/>
                            </div>
                            <div className="hover-items">
                                <h5>Static Tourist website</h5>
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="https://github.com/mhd-lasin/tourist-website" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )}
    </div>
  )
}

export default Portfolio