"use strict";

import {Dispatcher} from 'flux';
let AppDispatcher = new Dispatcher;

import ListStore from '../stores/ListStore';

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {
    let action = payload.action;
    let new_item = payload.new_item;
    let id = payload.id;

    switch (action) {
        case 'add-item':
            ListStore.addItem(new_item);
            break;
        case 'remove-item':
            ListStore.removeItem(id);
            break;
        default:
            return true;
    }

    // emit change if action was executed
    ListStore.emitChange();

    return true;
});

export default AppDispatcher;