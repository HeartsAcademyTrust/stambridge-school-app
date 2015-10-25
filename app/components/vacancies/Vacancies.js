import React from 'react';
import VacancyList from './VacancyList';
import helpers from '../../utils/helpers';

class Vacancies extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			departments: []
		};
	}
	componentDidMount(){
		helpers.getDepartments
			.then((response) => {
				this.setState({
					departments: response.data
				});
			});
	}
	render() {
		var vacancies = 0;
		var departments = this.state.departments.map((department, index) => {
			if (department.vacancies.length > 0) {
				vacancies += department.vacancies.length;
				return (
					<div className="row" key={index}>
						<h5 className="indigo-text text-darken-4">{department.name}</h5>
						<VacancyList vacancies={department.vacancies} />
					</div>	
				);
			}
		});

		var text = (
			<div>
					<p className="flow-text">
						If you are interested, you can find more information at 
						<a href="http://www.heartsacademytrust.co.uk/trust-information/recruitment/" 
							target="_blank"> <b>HEARTS</b> Academy Trust's recruitment</a>.
						<br />
						<br />
						If you would like more information on the vacancies listed, please <a href="#contact-us">Contact Us</a>
					</p>
					{departments}
			</div>
		);

		if (vacancies === 0){
			text = (
				<p className="flow-text">
					If you are interested, you can find more information at 
						<a href="http://www.heartsacademytrust.co.uk/trust-information/recruitment/" 
							target="_blank"> <b>HEARTS</b> Academy Trust's recruitment</a>.
					<br />
					<br />
					Unfortunately, Stambridge School currently do not have any vacancies listed...
				</p>
			);
		}

		return(
			<div className="row">
				<div className="container">
					<h1 className="indigo-text text-darken-4">Job Vacancies</h1>
					{text}
				</div>
			</div>
		);
	}
}

export default Vacancies;