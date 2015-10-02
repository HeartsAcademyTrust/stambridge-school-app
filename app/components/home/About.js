import React from 'react';


class About extends React.Component {
	render(){
		return (
			<div className="indigo darken-4 col-xs-12">
				<h4 className="white-text col s12">About the School</h4>
				
				<p className="white-text flow-text col-xs-12 col-md-6">
					Stambridge Primary School was originally opened in 1877, and resides within Essex Local Authority. 
					We have around 70 pupils.
				</p>

				<p className="white-text flow-text col-xs-12 col-md-6">
					Stambridge School has a village feel and maintains its individuality working with its pupils, parents, staff 
					and the wider community for the good of all.
				</p>
			</div>
		);
	}
}

export default About;