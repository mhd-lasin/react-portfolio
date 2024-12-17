import React from 'react'

const About = ({activeSection}) => {
  return (
    <div>
            {activeSection === 'about' &&(
            <section className="container active" id='about'>
                    <div className="main-title">
                        <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
                    </div>
                    <div className="about-container">
                        <div className="left-about">
                            <h4>Info About me</h4>
                            <p>
                                Dedicated web developer with over one year of experience seeking a junior-level position in a dynamic
                                organization where i can contribute my skills to innovative web projects, gain exposure to new technologies
                                and further and further develop my expertise in python i am eager to explore new technologies and
                                frameworks to enhance my technical capabilities. i am committed to staying updated with the latest trends.     
                            </p>
                            <div className="btn-con">
                                <a href="/Muhamed-Lasin-Resume.pdf" className="main-btn">
                                    <span className="btn-text">Download CV</span>
                                    <span className="btn-icon"><i className="fas fa-download"></i></span>
                                </a>
                            </div>
                        </div>
                        <div className="right-about">
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">10+</p>
                                    <p className="small-text">Projects <br /> completed</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">1+</p>
                                    <p className="small-text">Years of <br /> experience</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">5+</p>
                                    <p className="small-text">Certifications <br />achieved</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">10+</p>
                                    <p className="small-text">Mentor <br /> reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-stats">
                        <h4 className="stat-title">My Skills</h4>
                        <div className="progress-bars">
                            <div className="progress-bar">
                                <p className="prog-title">html5</p>
                                <div className="progress-con">
                                    <p className="prog-text">85%</p>
                                    <div className="progress">
                                        <span className="html"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">css3</p>
                                <div className="progress-con">
                                    <p className="prog-text">80%</p>
                                    <div className="progress">
                                        <span className="css"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">javascript</p>
                                <div className="progress-con">
                                    <p className="prog-text">75%</p>
                                    <div className="progress">
                                        <span className="javascript"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">Python</p>
                                <div className="progress-con">
                                    <p className="prog-text">80%</p>
                                    <div className="progress">
                                        <span className="python"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">React</p>
                                <div className="progress-con">
                                    <p className="prog-text">75%</p>
                                    <div className="progress">
                                        <span className="react"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">Django</p>
                                <div className="progress-con">
                                    <p className="prog-text">80%</p>
                                    <div className="progress">
                                        <span className="django"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="stat-title">My Timeline</h4>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2024 - present</p>
                            <h5>Full stack engineer<span> - Nexeor</span></h5>
                            <p>
                                Assisted to Develop and maintain an ERP module for Nexeor, handling content management, email
                                notifications, and other tasks.
                                Built responsive frontend interfaces using Vue 3, Nuxt, Vuetify, and Pinia, with Axios for API integrations.
                                Set up and configured the backend with FastAPI, Python, PostgreSQL and Docker for deployment.
                                Debugged using VS Code for efficient development.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2022 - 2023</p>
                            <h5>Web developer intern<span> - SOFT SOLUTIONS
                            </span></h5>
                            <p>
                                Collaborated with the web development team to design, develop, and maintain scalable websites.
                                Contributed to the development of new features and participated in code reviews.
                                Gained hands-on experience with frameworks such as Django and also debugged and troubleshooted code.
                                Enhanced programming skills and gained practical experience in a professional setting 
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2018 - 2021</p>
                            <h5>Bsc computer science<span> - Calicut university</span></h5>
                            <p>
                                Graduated with a solid foundation in computer science principles and practical experience in software development, algorithms, and design. The program emphasized problem-solving, programming, and innovation.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2022 - 2023</p>
                            <h5>Python development<span> - LCC COMPUTER EDUCATION</span></h5>
                            <p>
                                Successfully completed a comprehensive course in Python Full Stack Web Development. The program covered Front-End Development, Back-End Proficiency, Database Management, API Development and Project Deployment.
                            </p>
                        </div>
                    </div>
                </section>
                )}
    </div>
  )
}

export default About