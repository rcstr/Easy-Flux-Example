"use strict";

import React from 'react';

class AppRoot extends React.Component {
    render() {
        let itemHtml = <li>Hello React</li>;

        return <div>
            <ul>{itemHtml}</ul>
        </div>
    }
}
;

export default AppRoot;