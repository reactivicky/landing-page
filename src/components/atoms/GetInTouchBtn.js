import React from 'react'
import { MdChatBubbleOutline } from 'react-icons/md';

export const GetInTouch = () => {
  return (
    <a
      className="Nav__button"
      href="/"
    >
      <span className="Nav__button__icon">
        <MdChatBubbleOutline />
      </span>
      Get in Touch
    </a>
  )
}

export default GetInTouch
