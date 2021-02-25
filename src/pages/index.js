import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading"
const Home = ({ quotes, isLoading }) => {
  if (isLoading) return <Loading />;
  return (
    <>
      <Hero quotes={quotes} />
      <Gallery quotes={quotes} />
    </>
  );
};

export default Home;
