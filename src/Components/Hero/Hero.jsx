import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero =() => {
  return (
    <div id='home' className='hero'>
       <img src={profile_img} alt="" />
       <h1><span>Every Thing </span>Depends on a One Click</h1>
       <p>We at highly specialized solutions of very specific industry, and as committed to delivering you the most trustable services, by extensive knowledge of industry, with cutting-edge technology to creates personalized solutions and products at exactly meet the demands and behaviors.</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Us</AnchorLink></div>
        <div className="hero-resume">Our resume</div>
        </div>
    </div>
  )
}
export default Hero