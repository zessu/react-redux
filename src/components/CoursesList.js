import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export function CoursesList({ courses }) {
  return (
    <div>
      <List>
        {courses.map((course) => (
          <ListItem divider key={course.title}>
            <ListItemText>{course.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
