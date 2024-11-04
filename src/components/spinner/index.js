import React from "react";
import { HashLoader } from "react-spinners";
import * as Styled from "./Spinner.styled";

const Spinner = () => {
  return (
    <Styled.SpinnerWrapper>
      <HashLoader size={26} color="#f95656" />
    </Styled.SpinnerWrapper>
  );
};

export default Spinner;
