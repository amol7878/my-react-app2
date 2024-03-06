import React,{Component} from 'react'

class LifeB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Vishwas"
        }
        console.log("Constructor-1B")
    }
    static getDerivedStateFromProps(props,state){
         // this keyword cannot be used-----in Static 
        
         console.log(" getDerivedStateFromProps---2B")
         return null
    }
componentDidMount(){
    console.log("componentDidMoun---4B")
    return null
}

    render(){
        console.log("Render---3B")
        return(
            <div>Hello</div>
        )
    }

}

export default LifeB