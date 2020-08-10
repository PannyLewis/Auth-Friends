import React from "react";
import { Route, Redirect } from "react-router-dom";

/*
  Private Route rules:
  1. It has the same API as <Route />.  --- meaning how you interface with that thing.... like props
  2. It renders a <Route /> and passes all the props through to it.
  3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/

/* 
  we are going to use the rest operator that looks alot like the spread operator 
      - it lets you take an object and destructor that object
          and rebuild with all the props from that object 
          into a new object called ...rest

      - this will allow us to pull the component object
          prop out of the object and spread the rest with the 
            object to ...rest (its also a banana word) 

      -  Redirect 
          this will redirect the user to login
            -whenever this component is rendered
              it will not render to your screen and 
              route your user to the path you passed through
              
 */

const PrivateRoute = ({ component: Component, ...rest }) => {
  /*
      this will let us pas compent in the return
      or you can pass the component in PrivateRoute for shorthand
   */
  // const Component = component
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          // return the component
          return <Component {...props} />;
        } else {
          // redirect the user to /login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

/* 
    create token

    then if we have a token 
    then we are going to return the component
    else we want to redirect the user to /login

    we are spreading in props the route has an exact path prop and a component prop
*/
