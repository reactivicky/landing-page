import React from 'react'
import ClientIcon from '../../assets/testimonial-icon.png'

export const ChatBoxIcon = () => {
  return (
    <div className="Testimonials__icon">
      <img src={ClientIcon} alt="Client-icon" />
      <div className="Testimonials__icon__description">
        <p className="Testimonials__icon__description__heading">Client Name</p>
        <p className="Testimonials__icon__description__body">Position, ORG</p>
      </div>
    </div>
  )
}

export default ChatBoxIcon
