import React from "react";

export class Errorboundary extends React.Component{
    constructor(props){
        super(props);
        this.state={error: null,errInfo: null};
}
componentDidCatch(error, errorInfo){
    this.setState(
        {
            error: error,
            errorInfo: errorInfo
        }
    )
}
render(){
    if(this.state.errorInfo){
        return(
            <div>
                <h2>
                    An Error Has Occurred
                </h2>
                <details>
                    {this.state.error && this.state.error.toString()}
                    <br/>
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        )
    }
}
}
export default Errorboundary