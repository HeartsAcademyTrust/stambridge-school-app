import React from 'react';
import LatestNews from './latest/LatestNews';
import About from './About';
import CoreValues from './CoreValues';

const Home = () => (
  <div>
    <div className="divider"></div>
    <LatestNews />
    <About />
    <CoreValues />
  </div>
);

export default Home;
