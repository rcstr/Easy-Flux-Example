"use strict";

import {EventEmitter} from 'events';
import _ from 'lodash';

let ListStore = _.extend({}, EventEmitter.prototype, {
    // mock default data
    items: [
        {
            name: 'Item 1',
            id: 0
        },
        {
            name: 'Item 2',
            id: 2
        },
        {
            name: 'Item 3',
            id: 3
        },
        {
            name: 'Item 4',
            id: 4
        },
        {
            name: 'Item 5',
            id: 5
        },
        {
            name: 'Item 6',
            id: 6
        },
        {
            name: 'Item 7',
            id: 7
        }
    ],

    getItems: function () {
        return this.items;
    }
});

export default ListStore;