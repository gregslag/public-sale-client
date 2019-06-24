import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Route
      {...rest}
      render={props =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/leiloes',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
