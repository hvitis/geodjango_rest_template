import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  redirect: redirect,
  ...props 
}) => {
  let isAuthenticated = props.isAuthenticated;
  let path = props.path;
  console.log('Router props: ', props)
  return (
    <Route
      path={ path }
      component={props => {
        if (isAuthenticated) {
          return <Component { ...props } />;
        } else {
          return (
            <Redirect
              to={{
                pathname: redirect,
              }}
            />
          );
        }
      }}
    />
  );
};
