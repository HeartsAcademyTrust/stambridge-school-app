import React from 'react';
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
						{this.props.children}
					</div>

					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;