import React, { useReducer, createContext } from 'react';
import CourseReducer from './CourseReducer';
import axios from 'axios';

// Initial state
const initialState = {
  courses: [],
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

  return (
    <CourseContext.Provider
      value={{
        courses: state.courses,
        loading: state.loading,
        getCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
