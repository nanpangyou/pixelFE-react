import * as React from "react";
import first from "../../assets/icons/welcome-first.svg";

export const BootPage1: React.FC = () => {
  return (
    <div h="100%" flex flex-col justify-around items-center>
      <img src={first} alt="" />
      <p text-center text-4xl>
        会挣钱
        <br />
        还要会省钱
      </p>
    </div>
  );
};
