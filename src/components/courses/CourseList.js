import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ course }) => {
  const { title, shortDescription, url, imgUrl } = course;

  // reduces length of strings to 200 characters
  const shorten = (text) => {
    if (text && text.length > 200) {
      return text.substr(0, 200) + '...';
    }
    return text;
  };

  return (
    <Fragment>
      <div className='card'>
        <img src={imgUrl} alt={url} className='img-fluid mb-4' />
        <div className='card-body'>
          <h5 className='mb-3'>{title}</h5>
          <p>{shorten(shortDescription)}</p>
          <Link to={url} className='btn btn-info'>
            readmore
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseList;
