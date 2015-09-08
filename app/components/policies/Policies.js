import React from 'react';
import PoliciesList from './PoliciesList';
import helpers from '../../utils/helpers';

class Policies extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			policies: []
		};
	}
	componentDidMount(){
		helpers.getPolicies
		  .then((response) => {
		    this.setState({
		    	policies: response.data
		    });
		  })
		  .catch((response) => {
		    console.log(response);
		  });
	}
	render(){
		return(
			<div className="container">
				<h1 className="indigo-text text-darken-4">Policies</h1>
				<p className="flow-text">We have some general policies that apply to all the schools a part of the <a href="http://www.heartsacademytrust.co.uk/trust-information/policies/">Hearts Academy Trust</a></p>
				<p className="flow-text">Here is a list of the policies that are specific to <b className="indigo-text text-darken-4">Stambridge Primary School</b>:</p>

				<PoliciesList policies={this.state.policies} />
			</div>
		)
	}
};

export default Policies;