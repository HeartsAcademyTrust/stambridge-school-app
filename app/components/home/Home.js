import React from 'react';
import About from './About';
import CoreValues from './CoreValues';
import LatestNews from './latest/LatestNews';
import Gallery from './Gallery';

class Home extends React.Component{
	render(){
		return (
			<div>					
				<Gallery /> 

				<div className="divider"></div>

				<LatestNews />

				<About />

				<CoreValues />
			</div>
		);
	}
}

export default Home;
