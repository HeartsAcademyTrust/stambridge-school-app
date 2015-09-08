import React from 'react';
import StaffList from './StaffList';
import helpers from '../../utils/helpers';

class Staff extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			staff: []
		}
	}
	componentDidMount(){
		helpers.getStaff
		  .then((response) => {
		    this.setState({
		    	staff: response.data
		    });
		  })
		  .catch((response) => {
		    console.log(response);
		  });
	}
	render(){
		return(
			<div className="container">
				<h1 className="indigo-text text-darken-4">Meet Our Staff</h1>
				<p className="flow-text">
				Being a small school, we benefit from a close working relationship with the children, 
				providing a very relaxed and comforting environment for your child to grow.
				</p>
				<StaffList staff={this.state.staff} />
			</div>
		)
	}
};

export default Staff;