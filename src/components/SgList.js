import React, { Component } from 'react';
import SgItem from "./SgItem";

class SgList extends Component {
    render(){
        const { checkHome } = this.props;
        const { sgitems_home } = ['집1','집2','집3']
        const { sgitems_outside } = ['밖1','밖2','밖3']

        const suggestion_List_Home = sgitems_home.map( 
            ({ text }) => (
                <SgItem
                    text = {text}
                />
        ));

        const suggestion_List_Outside = sgitems_outside.map( 
            ({ text }) => (
                <SgItem
                    text = {text}
                />
        ));

        return(
            <div>
                { (checkHome === 'curr') ? suggestion_List_Home : suggestion_List_Outside}
            </div>
        );
    }
}

export default SgList;