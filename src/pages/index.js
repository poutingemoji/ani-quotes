import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const Home = ({quotes}) => {
  console.log("YAY", quotes)
  return (
    <>
      <Hero quotes={quotes}/>
      <Content />
    </>
  );
};

export default Home;