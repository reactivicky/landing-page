import React from 'react'
import ChatBox from '../atoms/ChatBox'
import ChatBoxIcon from '../atoms/ChatBoxIcon'

const ChatInfo = (props) => {
  return (
    <div>
      <ChatBox>
        {props.children}
      </ChatBox>
      <ChatBoxIcon />
    </div>
  )
}

export default ChatInfo
