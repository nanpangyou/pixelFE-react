import * as React from "react";
import s from "./CssModuleDemo.module.scss";

export const CssModuleDemo: React.FC = () => {
  return (
    <div className={s.warp}>
      CssModuleDemo
      <div className={s.mydiv}>xxx</div>
    </div>
  );
};
