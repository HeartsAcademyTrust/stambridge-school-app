import React from 'react';
import moment from 'moment';

class SimplePage extends React.Component {
	render() {
		var page = <p className="flow-text">There is currently no {this.props.title} uploaded...</p>;
		if (this.props.data_exists){
			page = (
				<div>
					{this.props.description && <p className="flow-text" >{this.props.description}</p>}
					{this.props.date_published && <span className="grey-text lighten-2">
						Uploaded: {moment(this.props.date_published).format('Do MMMM YYYY')}
						<br/>
					</span>}
					{this.props.file && <a href={this.props.file} 
						target="_blank"
						style={{marginBottom:'10'}}
						className="btn-floating btn-large waves-effect waves-light purple darken-4">
						<i className="material-icons">description</i>
					</a>}
				</div>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<h1 className="indigo-text text-darken-4">{this.props.title}</h1>
					{page}
				</div>
			</div>
		);
	}
}

export default SimplePage;