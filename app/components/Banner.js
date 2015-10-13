import React from 'react';
import {Link} from 'react-router';

class Banner extends React.Component{
	render(){
		var imgStyle = {
			borderRadius: '75px'
		};
		return (
			<div className="row">
				<Link to="/">
					<h2 className="col-lg-4 hidden-lg-down indigo-text text-darken-4 right-align">Stambridge</h2>
					<div className="col-md-3 col-md-offset-4 col-lg-3 col-lg-offset-4 col-xl-2 col-xl-offset-0 hidden-md-down">
						<img className="img-responsive" src="../images/stambridgelogosmall.jpg" style={imgStyle}></img>
					</div>
					<h2 className="col-lg-6 hidden-lg-down indigo-text text-darken-4">Primary School</h2>
				</Link>
			</div>
		);
	}
}

export default Banner;