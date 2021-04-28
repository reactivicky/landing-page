import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';

const ChatBox = (props) => {
  return (
    <div className="Testimonials__chatbox">
      <p className="Testimonials__chatbox__body">
        <FaQuoteLeft className="Testimonials__chatbox__body__quote" />
        {props.children}
      </p>
    </div>
  )
}

export default ChatBox
