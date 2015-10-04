import React from 'react';
import moment from 'moment';
import helpers from '../../utils/helpers';

class Curriculum extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			curriculum: {}
		};
	}
	componentDidMount(){
		helpers.getCurriculum
		.then((response) => {
			this.setState({
				curriculum: response.data
			});
		})
		.catch((response) => {
			console.log(response);
		});
	}
	render() {
		var curriculum = this.state.curriculum;
		return (
			<div className="container">
				<div className="row">
					<h1 className="indigo-text text-darken-4">Curriculum</h1>
					{curriculum.extra_notes && <p className="flow-text" style={{whiteSpace: 'pre-line'}}>{curriculum.extra_notes}</p>}
					{curriculum.date_published && <span className="grey-text lighten-2">
						Uploaded: {moment(curriculum.date_published).format('Do MMMM YYYY')}
					</span>}
					<br/>
					{curriculum.file && <a href={curriculum.file} 
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

export default Curriculum;