import React, {Component} from 'react';
import CourseBar from '../element/CourseBar';
import CourseTag from '../element/CourseTag';
import $ from 'jquery';

class CourseList extends Component {
    constructor() {
        super();

        this.state = {
            courses: [],
            nameuser: ""
        }
    }

    componentWillMount() {
        var list = this;

        $.get("/session", function(data, status) {
            if(status == "success") {
                list.setState({nameuser: data.name});
                console.log(list.state.nameuser);
            } else {
                console.log(data);
            }
        })

        $.get("/courses", function(data, status) {
            if(status == "success") {
                list.setState({courses: [...data]});
                console.log(list.state.courses);
            } else {
                console.log(data);
            }
        })
    }

    render() {
        return (
            <div>
                <CourseBar name={this.state.nameuser}/>
                <div style={{height: '100px'}}></div>
                {this.state.courses.map(item => 
                    <CourseTag key={item.id} coursetitle={item.title} coursename={item.name} dateopen={item.dateopen} teacher={item.teacher} status={item.status} />
                )}
            </div>
        )
    }
}

export default CourseList;