import * as React from "react";
import third from "../../assets/icons/welcome-third.svg";

export const BootPage3: React.FC = () => {
  return (
    <>
      <div h="100%" flex flex-col justify-around items-center>
        <img src={third} alt="" />
        <p text-center text-4xl>
          会挣钱
          <br />
          还要会省钱
        </p>
      </div>
    </>
  );
};
