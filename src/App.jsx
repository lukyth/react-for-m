import React from 'react'
import { Provider } from 'mobx-react'

import CounterStore from './Counter/CounterStore'
let counterStore = new CounterStore();
import MessageStore from './Message/MessageStore'
let messageStore = new MessageStore();

import Counter from './Counter/Counter'
import ChatBox from './Message/ChatBox'

export default class App extends React.Component {
  render() {
    return (
      <Provider counterStore={counterStore} messageStore={messageStore}>
        <div>
          <Counter />
          <ChatBox />
        </div>
      </Provider>
    )
  }
}
