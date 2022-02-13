import React, { Component } from 'react';
import "./SgItem.css";

class SgItem extends Component {
    render(){
        const { text } = this.props;
        
        return(
            <div className = "sg-item">
                <div className = 'sg-text'>
                    <div> { text } </div>
                </div>

                <div className = "plus_button"> + </div>
            </div>
        );
    }
}

export default SgItem;