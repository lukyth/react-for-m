import React from 'react'
import { observer } from 'mobx-react'
import Message from './Message'

export default observer(['messageStore'], ({ messageStore }) =>
  <div>
    {messageStore.messages
      .map((message, index) => <Message key={index}>{message}</Message>)}
    <p>Message count: {messageStore.messagesCount}</p>
  </div>
)
