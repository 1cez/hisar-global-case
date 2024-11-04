import React from "react";
import Header from "components/header";
import Products from "components/products";
import * as Styled from "./Home.styled";
const Home = () => {
  return (
    <Styled.HomeWrapper>
      <Header />
      <Products />
    </Styled.HomeWrapper>
  );
};

export default Home;
