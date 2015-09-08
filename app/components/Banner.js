import React from 'react';

class Banner extends React.Component{
	render(){
		var imgStyle = {
			borderRadius: '75px'
		};
		return (
			<div className="row">
				<h1 className="col s12 m4 indigo-text text-darken-4 right-align">Stambridge</h1>
				<img className="col s8 m2" src="../images/stambridgelogosmall.jpg" style={imgStyle}></img>
				<h1 className="col s12 m5 indigo-text text-darken-4">Primary School</h1>
			</div>
		)
	}
};

export default Banner