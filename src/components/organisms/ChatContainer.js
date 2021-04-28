import React from 'react'
import ChatInfo from '../molecules/ChatInfo'

const ChatContainer = () => {
  return (
    <div className="Testimonials">
      <h2 className="Testimonials__header">Testimonials</h2>
      <div className="Testimonials__container">
        <ChatInfo>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ex deleniti optio assumenda, adipisci quos dolor modi vel maxime sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ex deleniti optio assumenda, adipisci quos dolor modi vel maxime sit.
        </ChatInfo>

        <div className="Testimonials__container__NoDisplayOne">
          <ChatInfo>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ex deleniti optio assumenda, adipisci quos dolor modi vel maxime sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ex deleniti optio assumenda, adipisci quos dolor modi vel maxime sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ex deleniti optio assumenda, adipisci quos dolor modi vel maxime sit.
        </ChatInfo>
        </div>

        <div className="Testimonials__container__NoDisplayTwo">
          <ChatInfo>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ex deleniti optio assumenda, adipisci quos dolor modi vel maxime sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ex deleniti optio assumenda, adipisci quos dolor modi vel maxime sit.
        </ChatInfo>
        </div>

      </div>
    </div>
  )
}

export default ChatContainer
