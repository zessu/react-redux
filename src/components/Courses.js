import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCourse, loadPosts } from './../redux/actions/courseAction';
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

class Courses extends Component {
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
    this.props.dispatch(createCourse(this.state.course.title));
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        this.props.dispatch(loadPosts(posts));
      });
  }

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
        <List>
          {this.props.courses.map((course) => (
            <ListItem divider key={course.title}>
              <ListItemText>{course.title}</ListItemText>
            </ListItem>
          ))}
        </List>
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

export default connect(mapStateToProps)(Courses);
