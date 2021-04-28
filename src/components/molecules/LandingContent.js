import React from 'react'
import Staff from '../../assets/staffing-icon.png'
import Support from '../../assets/support-icon.png'
import Folder from '../../assets/folder-icon.png'
import LandingCard from '../atoms/LandingCard'

const LandingContent = () => {
  return (
    <div className="Landing__container">
        <h2 className="Landing__heading">Integer bibendum sit amet <br /> arcu vel egestas.</h2>
        <div className="Landing__card-container">
          <LandingCard location={Staff} alt="staff" />
          <LandingCard location={Support} alt="support" />
          <LandingCard location={Folder} alt="folder" />
        </div>
      </div>
  )
}

export default LandingContent
