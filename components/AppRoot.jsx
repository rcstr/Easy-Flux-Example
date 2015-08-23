"use strict";

import React from 'react';
import ListStore from '../stores/ListStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

// sub components
import NewItemForm from './NewItemForm';

// method to retrieve state from stores
let getListState = () => {
    return {
        items: ListStore.getItems()
    }
};

// let component
class AppRoot extends React.Component {
    _onChange() {
        this.setState(getListState());
    }

    constructor() {
        super();
        this.state = getListState();
    }

    // Add change listeners to stores
    componentDidMount() {
        ListStore.addChangeListener(this._onChange.bind(this));
    }

    // Remove change listeners from stores
    componentWillUnmount() {
        ListStore.removeChangeListener(this._onChange.bind(this));
    }

    removeItem(e) {
        let id = e.target.dataset.id;

        AppDispatcher.dispatch({
            action: 'remove-item',
            id: id
        });
    }

    render() {
        let _this = this;
        let items = ListStore.getItems();
        let btnClass = 'pure-button pure-button-primary';

        let itemHtml = items.map((listItem) => {
            return <li key={listItem.id}>
                {listItem.name}
                <button onClick={_this.removeItem} data-id={listItem.id} className={btnClass}>x</button>
            </li>;
        });

        return <div>
            <ul>
                {itemHtml}
            </ul>

            <NewItemForm />
        </div>
    }
}
;

export default AppRoot;