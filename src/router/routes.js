import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavigationBar } from '../components/molecules';
import { Home, Cart } from '../containers/pages';

const Routes = () => {
  return (
    <>
      <NavigationBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route
          path="/ops"
          component={() => {
            return <h1>Not Found</h1>;
          }}
        />
        <Route path="*">
          <Redirect
            to={{
              pathname: '/ops',
              state: {
                referrer: window && window.location.href,
                message: '404',
              },
            }}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
