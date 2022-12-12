import React from "react";
import {Component} from 'react'
 class Counter extends Component{
    state={
        count:0,
    };
    handleIncrement=()=>{
        this.setState({ count: this.state.count + 1})
    };
    handleDecrement=()=>{
        this.setState({count: this.state.count - 1})
    };
    check=()=>{
        if(this.state.count === 3){

            throw new Error('Crashed!!!')
        }
    }
    render(){
        return(
            <div className="App">
                <this.check/>
            <button onClick={this.handleIncrement}>+</button>
            <span>{this.state.count}</span>
            <button onClick={this.handleDecrement}>-</button>
        </div>
    )
}
};
export default Counter