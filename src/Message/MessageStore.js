import { observable, action, computed } from 'mobx'

export default class MessageStore {
  @observable messages = [];
  @observable currentMessage = '';

  @computed get messagesCount() {
    return this.messages.length
  }

  @action changeCurrentMessage = (e) => {
    this.currentMessage = e.target.value
  }

  @action addMessage = () => {
    this.messages.push(this.currentMessage)
    this.currentMessage = ''
  }
}
