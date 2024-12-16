import React from 'react'
import port6 from '../assets/port6.jpg'
import port3 from '../assets/port3.jpg'
import port1 from '../assets/port1.jpg'
import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"
const Blogs = ({activeSection}) => {
  return (
    <div>
        {activeSection === 'blogs' && (
        <section className="container active" id="blogs">
            <div className="blogs-content">
                <div className="main-title">
                    <h2>My <span>Blogs</span><span className="bg-text">My Blogs</span></h2>
                </div>
                <div className="blogs">
                    <div className="blog">
                        <img src={port6} alt=''/>
                        <div className="blog-text">
                            <h4>
                                How to Create Your Own Website
                            </h4>
                            <p>
                                In this blog, I guide you through the exciting journey of building your own website from scratch. Learn about choosing the right tools, designing user-friendly layouts, and coding essential features with HTML, CSS, and JavaScript. Whether you're a beginner or looking to refine your skills, this step-by-step guide will help you create a professional, fully functional website.   
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src={blog1} alt=''/>
                        <div className="blog-text">
                            <h4>
                                How to Become an Expert in Web Design
                            </h4>
                            <p>
                                Discover the essential skills and strategies to master web design in this blog. From understanding design principles and user experience to learning tools like Figma and Adobe XD, this guide will help you elevate your design game. Whether you're just starting out or aiming to refine your craft, these tips will set you on the path to web design expertise.
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src={blog2} alt=''/>
                        <div className="blog-text">
                            <h4>
                                Become a Web Designer in 10 Days
                            </h4>
                            <p>
                                This blog breaks down the journey to becoming a web designer in just 10 days! Learn the basics of design principles, master essential tools, and create your first web layouts. Perfect for beginners, this step-by-step guide will help you kickstart your career in web design with confidence.
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src={blog3} alt=''/>
                        <div className="blog-text">
                            <h4>
                                Debbuging made easy with Web Inspector
                            </h4>
                            <p>
                                In this blog, explore how to streamline your debugging process using Web Inspector. Learn how to inspect elements, troubleshoot issues, and optimize your code with this powerful developer tool. Perfect for both beginners and experienced developers looking to debug smarter and faster!
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src={port1}alt=''/>
                        <div className="blog-text">
                            <h4>
                                Get started with Web Design and UI Design
                            </h4>
                            <p>
                                This blog is your beginner-friendly guide to the world of Web Design and UI Design. Learn the fundamentals of creating visually appealing and user-friendly websites, explore essential design tools, and understand the principles of effective user interfaces to kickstart your design journey.
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src={port3} alt=''/>
                        <div className="blog-text">
                            <h4>
                                This is what you need to know about Web Design
                            </h4>
                            <p>
                                In this blog, uncover the key concepts, tools, and techniques that every aspiring web designer should know. From understanding design principles to creating seamless user experiences, this guide provides a solid foundation to excel in the world of web design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )}
    </div>
  )
}

export default Blogs