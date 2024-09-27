import React from 'react'
import './About.css'
import play_img from '../../assets/play-icon.png'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='' className='about_img'/>
        <img src={play_img} alt='' className='play_img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tommorow's Leaders Today</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam quia corrupti nihil voluptatem ullam asperiores culpa, aliquid soluta perferendis ipsa id numquam. Voluptatum, provident ipsa animi impedit voluptates obcaecati!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam quia corrupti nihil voluptatem ullam asperiores culpa, aliquid soluta perferendis ipsa id numquam. Voluptatum, provident ipsa animi impedit voluptates obcaecati!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam quia corrupti nihil voluptatem ullam asperiores culpa, aliquid soluta perferendis ipsa id numquam. Voluptatum, provident ipsa animi impedit voluptates obcaecati!</p>
      </div>
    </div>
  )
}

export default About
