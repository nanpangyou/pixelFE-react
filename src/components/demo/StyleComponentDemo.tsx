import * as React from "react";
import styled from "styled-components";

const BorderDiv = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 100px;
  &:hover {
    background: red;
  }
`;
export const StyleComponentDemo: React.FC = () => {
  return (
    <>
      <div>StyleComponentDemo</div>
      <BorderDiv />
    </>
  );
};
