import React, {Component} from 'react';
// import './../../style/course.css';

class CourseTag extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="course-container">
                <div className="course-img">
                    <img src="./img/book.jpg" />
                </div>
                <div className="course-title">
                    <span>{this.props.coursetitle}</span>
                    <div className="course-info-1">
                        <div className="course-name">
                            <p>{this.props.coursename}</p>
                        </div>
                        <div className="course-time">
                            <p><b>Thời gian học: </b>{this.props.dateopen}</p>
                        </div>
                    </div>
                    <hr style={{borderColor: '#810C15', backgroundColor: '#810C15'}} />
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="course-table-title">GIẢNG VIÊN</th>
                                    <th className="course-table-value">{this.props.teacher}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="course-task">
                        <hr style={{width: '85%', marginLeft: '0'}} />
                        <div>
                            <p className="title-1">NHIỆM VỤ HỌC TẬP</p>
                        </div>
                    </div>
                    <div className="course-calendar">
                        <hr/>
                        <div>
                            <p className="title-1">{this.props.status}</p>
                        </div>
                        <button className="join-course-btn">VÀO LỚP &gt;</button>
                    </div>
                </div>
            </div>
        ) 
    }
    
}

export default CourseTag;