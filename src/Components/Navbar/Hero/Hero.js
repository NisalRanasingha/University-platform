import React from 'react'
import dark_arrow from '../../../assets/dark-arrow.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam reiciendis illo cumque. Corrupti velit eaque amet iure. Pariatur fugiat quibusdam quasi distinctio dolores inventore aliquam harum voluptates mollitia natus.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt=''/></button>
      </div>
    </div>
  )
}

export default Hero
