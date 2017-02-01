import React, { Component } from 'react'

class Foo extends Component {

  /**
   * @returns {string}
   */
  shouldReturnBar() {
    return 'bar'
  }

  /**
   * @returns {string}
   */
  shouldReturnJamie() {
    return 'jamie'
  }

  jamie() {
    return 10 * 2
  }

  /**
   * @returns {XML}
   */
  render() {
    return (
      <div className={this.props.className} />
    )
  }
}

export default Foo
