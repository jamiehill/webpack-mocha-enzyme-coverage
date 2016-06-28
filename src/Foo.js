import React, { Component } from 'react'

class Foo extends Component {

  /**
   * @returns {string}
   */
  shouldReturnBar() {
    return 'bar'
  }

  /**
   * @returns {XML}
   */
  render() {
    return (
      <div className='foo' />
    )
  }
}

export default Foo
