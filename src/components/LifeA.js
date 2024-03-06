import React,{Component} from 'react'
import LifeB from './LifeB'
class LifeA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Vishwas"
        }
        console.log("Constructor-1")
    }
    static getDerivedStateFromProps(props,state){
         // this keyword cannot be used-----in Static 
        
         console.log(" getDerivedStateFromProps---2")
         return null
    }
componentDidMount(){
    console.log("componentDidMoun---4")
    return null
}

    render(){
        console.log("Render---3")
        return(<div>
            <div>Hello</div>
            <LifeB/>
        </div>
            
        )
    }

}

export default LifeA