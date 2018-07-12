import React, {Component} from 'react';
// import '../../../style/facebook.css'
import LoginBar from './LoginBar';

class MenuBar extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="menubar_container">
                <div className="menubar clearfix">
                    <div className="lfloat">
                        <h1>
                            <a href="https://www.facebook.com/" title="Vào trang chủ facebook">
                                <i className="fb_logo">
                                    <u>Facebook</u>
                                </i>
                            </a>
                        </h1>
                    </div>
                    <div>
                        <LoginBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuBar;