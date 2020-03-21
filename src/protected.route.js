import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  ...props 
}) => {
  let isAuthenticated = props.isAuthenticated;
  let path = props.path;
  console.log('Redirect should be here' ,props)
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
                pathname: props.redirect,
              }}
            />
          );
        }
      }}
    />
  );
};
