import React from 'react';
import helpers from '../../utils/helpers';
import StatutoryInfoList from './StatutoryInfoList';


class StatutoryInfo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			statuatory_info: []
		};
	}
	componentDidMount(){
		helpers.getStatutoryInfo
		.then((response) => {
			this.setState({
				statuatory_info: response.data
			});
		})
		.catch((response) => {
			console.log(response);
		});
	}
	render() {
		return (
			<div className="row">
				<div className="container">
					<h2 className="indigo-text text-darken-4">Statutory Information</h2>
					<p className="flow-text">
					You can find all the information on the schools expenses, premiums, provisions 
					and general finances below.
					</p>
					<StatutoryInfoList info={this.state.statuatory_info}/>
				</div>
			</div>
		);
	}
}

export default StatutoryInfo;