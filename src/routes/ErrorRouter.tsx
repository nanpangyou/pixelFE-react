import * as React from "react";
import { useRouteError, useNavigate, NavLink } from "react-router-dom";

export const ErrorRouter: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  const moveToIndex = () => {
    navigate("/");
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div onClick={() => moveToIndex()}>move to index</div>
      <NavLink to="/welcome/1">to welcome 1</NavLink>
    </div>
  );
};
