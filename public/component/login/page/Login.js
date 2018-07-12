import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MenuBar from '../menubar/MenuBar';
import Content from '../content/Content';

class Login extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <MenuBar />
                <Content />
            </div>
        )
    }
}

export default Login;
