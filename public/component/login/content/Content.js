import React, {Component} from 'react';
// import '../../../style/facebook.css';
import LeftBod from './LeftBod';
import RightBod from './RightBod';

class Content extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="contentwrapper">
                <div id="content">
                    <LeftBod />
                    <RightBod />
                </div>
            </div>
        )
    }
}

export default Content;
