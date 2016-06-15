import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Navigation from './Navigation';

const Main = ({ children }) => (
  <div className="container">
    <Banner />

    <div className="row">
      <Navigation />

      <div className="white">
        {children}
      </div>

      <Footer />
    </div>
  </div>
);

export default Main;
