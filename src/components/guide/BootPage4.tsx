import * as React from "react";
import fourth from "../../assets/icons/welcome-fourth.svg";
export const BootPage4: React.FC = () => {
  return (
    <>
      <div h="100%" flex flex-col justify-around items-center>
        <img src={fourth} alt="" />
        <p text-center text-4xl>
          会挣钱
          <br />
          还要会省钱
        </p>
      </div>
    </>
  );
};
