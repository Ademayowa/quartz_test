import React, { useReducer, createContext } from 'react';
import CourseReducer from './CourseReducer';
import axios from 'axios';

// Initial state
const initialState = {
  courses: [],
  courseId: {},
  loading: true,
};

// Create context
export const CourseContext = createContext(initialState);

// Provider component
export const CourseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CourseReducer, initialState);

  // Actions
  async function getCourses() {
    const url =
      'https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json';

    try {
      const res = await axios.get(url);

      dispatch({
        type: 'GET_COURSES',
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  const getCourse = (courseId) => {
    let course = [...state.courses];

    const singleCourse = course.find((crs) => crs.courseId === courseId);
    return singleCourse;
  };

  return (
    <CourseContext.Provider
      value={{
        courses: state.courses,
        loading: state.loading,
        courseId: state.courseId,
        getCourses,
        getCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
