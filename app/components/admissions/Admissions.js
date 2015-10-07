import React from 'react';
import SimplePage from '../common/SimplePage';
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
		});
	}
	render() {
		return (
			<SimplePage data_exists={Object.keys(this.state.admissions).length > 0} 
				title="Admissions"
				description={this.state.admissions.extra_notes}
				date_published={this.state.admissions.date_published}
				file={this.state.admissions.file}/>
			);

	}
}

export default Admissions;