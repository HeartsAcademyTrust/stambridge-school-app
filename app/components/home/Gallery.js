import React from 'react';


class Gallery extends React.Component {
	render() {
		var imgStyle = {
			display: 'block',
			marginRight: 'auto',
			marginLeft: 'auto',
			width: '260px'
		};

		return(
			<div className="container">
				<a href="http://www.heartsacademytrust.co.uk/" target="_blank">
					<img style={imgStyle} 
					className="center" 
					src="http://www.heartsacademytrust.co.uk/wp-content/uploads/2014/04/HEARTS-logoFIN-01-Copy1.png"/>
				</a>

				<h2 className="indigo-text text-darken-4">Welcome to Stambridge School</h2>
							
				<p className="flow-text"> 
					Stambridge Primary School is committed to providing an inspirational environment,
					through a culture of success and achievement, in which individuals can flourish as confident, happy learners.
				</p>
			</div>
		);
	}
}

export default Gallery;