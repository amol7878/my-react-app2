import React, { Component } from 'react'
import LifeCycleB1 from './LifeCycleB1'
class LifeCycleA1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Vishavas"
      }
      console.log("Lifecycle A1 Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle A1 getDerivedStateFromProps ")
        return null

    }
componentDidMount(){
    console.log("LifeCycleA1")
}

    
  render() {
    console.log("LifeCycle A1 Render")
    return (
      <div>
        <div>
        LifeCycleA1 
        <LifeCycleB1/>
      </div>
       
      </div>
    )
  }
}

export default LifeCycleA1
