import * as React from "react";
import second from "../../assets/icons/welcome-second.svg";

export const BootPage2: React.FC = () => {
  return (
    <>
      <div h="100%" flex flex-col justify-around items-center>
        <img src={second} alt="" />
        <p text-center text-4xl>
          会挣钱
          <br />
          还要会省钱
        </p>
      </div>
    </>
  );
};
