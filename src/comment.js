import React,{Component} from "react";
import Hoc from "./HOC";

 class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comments:0,
        }
    }
    handleClick=()=>{
        this.setState({
            comments:this.state.comments+1
        })
    }
    render(){
        return(
            <div>
              {this.state.comments}<or/>
              <button onClick={this.handleClick}> Add comment</button>
            </div>
        )
    }
}
const EnhancedComments = Hoc(Comments);
export default EnhancedComments