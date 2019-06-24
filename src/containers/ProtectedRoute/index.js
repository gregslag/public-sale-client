import React, { Fragment, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Button } from '../../styles';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    setUser(data);
  }, [])

  return (
    <Route
      {...rest}
      render={props =>
        !!user ? (
          <Fragment>
            <Button
              type="button"
              onClick={() => {
                localStorage.removeItem('user')
                setUser(null);
              }}
            >
              Sair
            </Button>
            <Component {...props} />
          </Fragment>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
