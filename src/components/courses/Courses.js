import React, { Fragment, useContext, useEffect } from 'react';
import { CourseContext } from '../../context/course/CourseState';
import CourseList from './CourseList';

export const Courses = () => {
  const { courses, getCourses } = useContext(CourseContext);

  useEffect(() => {
    getCourses();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h2 className='text-center mt-5 mb-5 '>All Courses</h2>
      <div className='container mt-4 mb-4' style={grid}>
        {courses.map((course) => (
          <CourseList course={course} key={course.courseId} />
        ))}
      </div>
    </Fragment>
  );
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gridGap: '2rem',
};
