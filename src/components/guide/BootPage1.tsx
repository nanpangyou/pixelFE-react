import * as React from "react";
import { NavLink } from "react-router-dom";

export const BootPage1: React.FC = () => {
  return (
    <>
      <div style={{ border: "1px solid red" }}> Bootpage1</div>
      <NavLink to="/welcome/2">下一页</NavLink>
    </>
  );
};
