import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  createCourse,
  loadCoursesThunk,
} from './../redux/actions/courseAction';
import { Button, TextField } from '@material-ui/core';
import { CoursesList } from './CoursesList';
import PropTypes from 'prop-types';

class Courses extends Component {
  componentDidMount() {
    const { courses, loadCourses } = this.props;
    console.log(loadCourses);
    if (courses.length === 0) {
      loadCourses().catch((e) => {
        throw e;
      });
    }
  }

  state = {
    course: {
      title: '',
    },
  };

  handleChange = ($event) => {
    // const course = { ...this.state.course, title: event.target.value };
    const course = Object.assign(
      {},
      { ...this.state.course, title: $event.target.value }
    );
    this.setState({ course }); // set local property
  };

  handleSubmit = ($event) => {
    $event.preventDefault();
    createCourse(this.state.course.title).catch((e) => {
      throw e;
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Course</h2>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <Button color="primary" type="submit">
          Save
        </Button>
        <CoursesList courses={this.props.courses}></CoursesList>
      </form>
    );
  }
}

// what state we want to expose to our component
// course will be exposed as a property of this component -> this.props.courses
function mapStateToProps(state) {
  return {
    courses: state.app.courses,
  };
}

const mapDispatchToProps = {
  createCourse,
  loadCourses: loadCoursesThunk,
};

Courses.propTypes = {
  courses: PropTypes.array.isRequired, // state property
  createCourse: PropTypes.func.isRequired, // action
  loadCourses: PropTypes.func.isRequired, // action
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
