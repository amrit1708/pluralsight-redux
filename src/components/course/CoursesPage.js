import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    //dispatch : PropTypes.func.isRequired, Since mapDispatchToProps so dispatch isn't added as prop
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)                                                //createCourse : course=>dispatch(courseActions.createCourse(course))     //Equi to function createCourse
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);