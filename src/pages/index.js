import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";

const Home = ({ quotes, isLoading }) => {
  console.log("YAY", quotes);
  return (
    <>
      <Hero quotes={quotes} isLoading={isLoading} />
      <Content />
    </>
  );
};

export default Home;
