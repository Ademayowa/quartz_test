import React, { Fragment, useContext, useEffect } from 'react';
import { CourseContext } from '../../context/course/CourseState';

export const Courses = () => {
  const { courses, getCourses } = useContext(CourseContext);

  console.log(courses);

  useEffect(() => {
    getCourses();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h2 className='text-center mt-5 mb-3'>Course List</h2>
      <div className='container mt-5 mb-5' style={grid}>
        <ul>
          {courses.map((item, index) => (
            <li key={index}>{item.author}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridGap: '1.5rem',
};
