import React from 'react'

const Contact = ({activeSection}) => {
  return (
    <div>
        {activeSection === 'contact' &&(
        <section className="container active" id="contact">
            <div className="contact-container">
                <div className="main-title">
                    <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                            Have questions or want to collaborate? Feel free to reach out! Whether it's about a project, feedback, or just to say hello, I'm always happy to connect. Let's create something amazing together!
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                    : Kerala, India
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: lasinthangal4@gmail.com</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-user-graduate"></i>
                                    <span>Education</span>
                                </div>
                                <p>
                                    <span>: Calicut University, Thenhipalam</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-phone"></i>
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>: +91 8086172007</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>: English, Hindi, Tamil, Malayalam</span>
                                </p>
                            </div>
                        </div>
                        <div className="contact-icons">
                            <div className="contact-icon">
                                <a href=" https://www.linkedin.com/in/muhamed-lasin/" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                               
                                <a href="https://github.com/mhd-lasin" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                             
                            </div>
                        </div>
                    </div>
                    <div className="right-contact">
                        <form action="" className="contact-form">
                            <div className="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME"/>
                                <input type="email" required placeholder="YOUR EMAIL"/>
                            </div>
                            <div className="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT"/>
                            </div>
                            <div className="input-control">
                                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div className="submit-btn">
                                <a href="/Muhamed-Lasin.pdf" className="main-btn">
                                    <span className="btn-text">Download CV</span>
                                    <span className="btn-icon"><i className="fas fa-download"></i></span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        )}
    </div>
  )
}

export default Contact