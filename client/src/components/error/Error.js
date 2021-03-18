import React from 'react';
import error_image from './error-screen-desktop.png';
import { Link, Router } from 'react-router-dom';
import history from '../../history';

function Error() {
  return (
    <div>
      <h2> Error 404 !</h2>
      <Router history={history}>
        <Link to='/'>
          <div className='App-header'>
            <img src={error_image} alt='Error 404' />
          </div>
        </Link>
      </Router>
    </div>
  );
}

export default Error;
