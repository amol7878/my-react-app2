import React, { PureComponent } from 'react'

class PureC extends PureComponent {
  render() {
    console.log("Pure Component Render =========")
    return (
      <div>
        Pure Component{this.props.name}
      </div>
    )
  }
}

export default PureC
