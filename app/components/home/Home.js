import React from 'react';
import LatestNews from './latest/LatestNews';
import About from './About';
import CoreValues from './CoreValues';
import Gallary from './Gallery';

const Home = () => (
  <div>
    <div className="divider"></div>
    <Gallary />
    <LatestNews />
    <About />
    <CoreValues />
  </div>
);

export default Home;
