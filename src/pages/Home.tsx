import React from "react";
import { NavBar, Products, Thumbnail } from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Thumbnail />
      <Products />;
    </React.Fragment>
  );
};

export default Home;
