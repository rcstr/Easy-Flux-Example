"use strict";

import React from 'react';
import ListStore from '../stores/ListStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

class NewItemForm extends React.Component {
    createItem(e) {
        // avoid reloading the page
        e.preventDefault();

        // crete id
        let id = guid();

        // get value from input
        let item_title = React.findDOMNode(this.refs.item_title).value.trim();


        // MAGIC
        AppDispatcher.dispatch({
            action: 'add-item',
            new_item: {
                id: id,
                name: item_title
            }
        });
    }

    render() {
        // classes
        let formClass = 'pure-form';
        let btnClass = 'pure-button pure-button-primary';

        return <form onSubmit={this.createItem.bind(this)} className={formClass}>
            <input type="text" ref="item_title"/>
            <button className={btnClass}>Add new Item</button>
        </form>
    }
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

export default NewItemForm;