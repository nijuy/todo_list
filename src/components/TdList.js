import React, { Component } from 'react';
import TdItem from "./TdItem";

class TdList extends Component {
    render(){
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map( 
            ({id, text, checked}) => (
                <TdItem 
                        id = {id} 
                        text = {text} 
                        checked = {checked} 
                        onToggle = {onToggle}
                        onRemove = {onRemove}
                        key = {id}
                    />
        ));

        return(
            <div>
                { todoList }
            </div>
        );
    }
}

export default TdList;