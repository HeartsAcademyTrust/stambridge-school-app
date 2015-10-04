import React from 'react';
import PerformanceList from './PerformanceList';
import helpers from '../../utils/helpers';

class SchoolPerformance extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			performance_reports: []
		};
	}
	componentDidMount(){
		helpers.getPerformanceReports
		.then((response) => {
			this.setState({
				performance_reports: response.data
			});
		})
		.catch((response) => {
			console.log(response);
		});
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className="indigo-text text-darken-4">School Performance</h1>
					<p className="flow-text">
						The school performance report will be made
						available as soon as it is released by Ofsted:
					</p>
					<PerformanceList reports={this.state.performance_reports} />
				</div>
			</div>
		);
	}
}

export default SchoolPerformance;