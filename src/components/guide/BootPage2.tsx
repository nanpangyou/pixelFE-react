import * as React from "react";
import { NavLink } from "react-router-dom";

export const BootPage2: React.FC = () => {
  return (
    <>
      <div style={{ border: "1px solid blue" }}> Bootpage2</div>
      <NavLink to="/welcome/3">下一页</NavLink>
    </>
  );
};
