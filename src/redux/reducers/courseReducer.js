import * as types from './../contants/action-constants';

const initialState = {
  courses: []
};

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      let newob = {title: action.course};
      return Object.assign({}, state, {courses: state.courses.concat(newob)});
    case types.LOAD_COURSES:
      return Object.assign({}, state, {courses: state.courses.concat(action.posts)});
    default:
      return state;
  }
}
