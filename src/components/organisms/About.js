import React from 'react'
import AboutBody from '../atoms/AboutBody'
import WorldMap from '../../assets/about.jpg'

export const About = () => {
  return (
    <div className="About">
      <AboutBody />
      <div className="About__image-container">
        <img src={WorldMap} alt="world-map" className="About__image" />
      </div>
    </div>
  )
}

export default About
