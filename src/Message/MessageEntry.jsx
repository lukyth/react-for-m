import React from 'react'
import { observer } from 'mobx-react'

@observer(['messageStore'])
export default class MessageEntry extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.messageStore.currentMessage}
          onChange={this.props.messageStore.changeCurrentMessage} />
        <button onClick={this.props.messageStore.addMessage}>Send</button>
      </div>
    )
  }
}
