import React, {Component} from 'react';

class LeftBod extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="leftbod">
                <div className="description">
                    <div className="content">Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</div>
                    <img className="img" src="./img/map.png" alt="" width="537" height="195" />
                </div>
            </div>
        )
    }  
}

export default LeftBod;