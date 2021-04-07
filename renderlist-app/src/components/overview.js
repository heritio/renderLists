import React, { Component } from 'react';

class Overview extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <ul>
                {this.props.ourArr.map(function(item){
                    return(
                        <li>{item}</li>
                    )
                })}
            </ul>
        );
    }
}

export default Overview;