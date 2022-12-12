import React,{Component} from "react";
import Hoc from "./HOC";
class Likes extends React.Component{
    constructor(props){
    super(props)
        this.state={
            likes:0,
        }
    }
    handleClick=()=>{
        this.setState({
            likes:this.state.likes+1
        })
    }
    render(){
        return(
            <div>
              {this.state.likes}<or/>
              <button onClick={this.handleClick}>Likes</button>
            </div>
        )
    }
}

const EnhancedLikes=Hoc(Likes);

export default EnhancedLikes;