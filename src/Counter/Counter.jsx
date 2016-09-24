import React from 'react'
import { observer } from 'mobx-react'

@observer(['counterStore'])
class Counter extends React.Component {
  render() {
    return (
      <div>
        <button className='minus' onClick={this.props.counterStore.decrease}>-</button>
        <span>{this.props.counterStore.count}</span>
        <button className='add' onClick={this.props.counterStore.increase}>+</button>
      </div>
    )
  }
}

export default Counter
