import React, { Component } from 'react';

class Overview extends Component {
    constructor(props){
        super(props);
       
    }
   
    render() {
        return (
            <div>

                {this.props.arr.map((task,idx) => {
                    return(
                        <div key={idx}>
                            <p>{idx+1}-{task}</p>
                            <button data-remove={idx} onClick={(e)=>this.props.list(e)} >Delete</button>
                        </div>
                    )
                })}
            
            </div>
        );
    }
}



export default Overview;