import { observable } from 'mobx'

export default class CounterStore {
  @observable count = 0;

  increase = () => {
    this.count += 1
  }

  decrease = () => {
    this.count -= 1
  }
}
