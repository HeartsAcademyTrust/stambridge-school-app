import React from 'react';
import moment from 'moment';
import helpers from '../../utils/helpers';

class Admissions extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			admissions: {}
		};
	}
	componentDidMount(){
		helpers.getAdmissions
		.then((response) => {
			this.setState({
				admissions: response.data
			});
		})
		.catch((response) => {
			console.log(response);
		});
	}
	render() {
		var admissions = this.state.admissions;
		return (
			<div className="container">
				<div className="row">
					<h1 className="indigo-text text-darken-4">Admissions</h1>
					{admissions.extra_notes && <p className="flow-text" style={{whiteSpace: 'pre-line'}}>{admissions.extra_notes}</p>}
					{admissions.date_published && <span className="grey-text lighten-2">
						Uploaded: {moment(admissions.date_published).format('Do MMMM YYYY')}
					</span>}
					<br/>
					{admissions.file && <a href={admissions.file} 
						target="_blank"
						style={{marginBottom:'10'}} 
						className="btn-floating btn-large waves-effect waves-light purple darken-4">
						<i className="material-icons">description</i>
					</a>}
				</div>
			</div>
		);
	}
}

export default Admissions;