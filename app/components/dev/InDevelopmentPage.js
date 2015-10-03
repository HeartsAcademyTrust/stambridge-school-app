import React from 'react';

class InDevelopmentPage extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className="indigo-text text-darken-4">{this.props.title}</h1>
					<p className="flow-text">This page is still under development...</p>
				</div>
			</div>
		);
	}
}

export default InDevelopmentPage;