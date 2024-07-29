import React from 'react'
import './About.css'
import theme_patten from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_patten} alt="" />

        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=''/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am specializes in delivering tailored IT business solutions designed to meet the unique challenges and objectives of my clients. We leverage cutting-edge technology to create innovative, high-quality, and cost-effective services. </p> 
                        <p>My expertise spans multiple industries, allowing us to connect people, technologies, and ideas to develop impactful solutions. I am committed to driving the success of our clients through strategic, technology-driven initiatives.</p>
                    </div>
                    <div className="about-technology">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>90+</h1>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>15+</h1>
                        <p>HAPPY CLIENT</p>
                    </div>
                    <hr />
                </div>
    </div>
  )
}
export default About
