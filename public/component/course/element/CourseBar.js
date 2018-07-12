import React, {Component} from 'react';

const style = {
    padding: '0px',
    margin: '0px',
    width: '100%',
    height: '100px',
    backgroundColor: '#810C15',
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: '5000'
}

class CourseBar extends Component {
    constructor () {
        super();
    };

    render() {
        return (
            <div style={style}>
                <div style={{float: 'right', color: 'white', margin: '0px 10px'}}>
                    <p>Xin chào, {this.props.name}</p>
                    <a href="/logout">Đăng xuất</a>
                </div>
            </div>
        )
    }
}

export default CourseBar;