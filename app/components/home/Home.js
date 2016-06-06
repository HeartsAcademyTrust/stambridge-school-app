import React from 'react';
import About from './About';
import CoreValues from './CoreValues';
import LatestNews from './latest/LatestNews';
// import Gallery from './Gallery';

const Home = () => (
  <div>
		{/* <Gallery /> */}
    <div className="divider"></div>
    <LatestNews />
    <About />
    <CoreValues />
  </div>
);

export default Home;
