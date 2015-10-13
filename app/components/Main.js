import React from 'react';
import {RouteHandler} from 'react-router';
import Banner from './Banner';
import Footer from './Footer';
import Navigation from './Navigation';

class Main extends React.Component{
	render(){
		return (
			<div className="container">
				<Banner />

				<div className="row">
					<Navigation />
					
					<div className="white">	
						<RouteHandler />
					</div>

					<Footer />
				</div>
			</div>
		);
	}
}

Main.childContextTypes = {
	muiTheme: React.PropTypes.object
};

export default Main;