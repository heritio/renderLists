import React, { Component } from 'react';

class Overview extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <ul>
                {this.props.ourArr.map(function(item,i){
                    return(
                        <li key={`list item ${i}`}>{item}</li>
                    )
                })}
            </ul>
        );
    }
}

export default Overview;