import * as types from './../contants/action-constants';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadPosts(posts) {
  return { type: types.LOAD_COURSES, posts };
}
