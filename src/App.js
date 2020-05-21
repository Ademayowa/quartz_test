import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import { CourseProvider } from './context/course/CourseState';
import { Course } from './components/pages/Course';
import { Courses } from './components/courses/Courses';

const App = () => {
  return (
    <CourseProvider>
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Courses} />
            <Route exact path='/courses/:courseId' component={Course} />
          </Switch>
        </div>
      </Router>
    </CourseProvider>
  );
};

export default App;
