import * as types from './../contants/action-constants';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourses(courses) {
  return { type: types.LOAD_COURSES, courses };
}

export function loadCoursesThunk() {
  return function (dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((courses) => {
        dispatch(loadCourses(courses));
      })
      .catch((e) => {
        throw e;
      });
  };
}
