import React from 'react';
import helpers from '../../utils/helpers';

class SchoolMenu extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			menu: {}
		};
	}
	componentDidMount(){
		helpers.getSchoolMenu
		.then((response) => {
			this.setState({
				menu: response.data
			});
		})
		.catch((response) => {
			console.log(response);
		});
	}
	render() {
		return(
			<div className="row">
				<div className="container">
					<h1 className="indigo-text text-darken-4">School Menu</h1>
					<p className="flow-text">{this.state.menu.text}</p>
					<a style={{marginBottom:'10'}} 
						href={this.state.menu.menu} 
						target="_blank"
						className="btn-floating btn-large waves-effect waves-light purple darken-4">
						<i className="material-icons">description</i>
					</a>
				</div>
			</div>
		);
	}
}

export default SchoolMenu;