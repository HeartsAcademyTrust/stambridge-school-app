import React from 'react';
import moment from 'moment';
import helpers from '../../utils/helpers';

class TermDates extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			term_dates: []
		};
	}
	componentDidMount(){ 
		helpers.getTermDates
		.then((response) => {
			this.setState({
				term_dates: response.data
			});
		});
	}
	render() {
		var allTermDates = this.state.term_dates,
			terms = allTermDates.map((term, index, termDates) => {
				var date = moment(term.start_time),
					imgFile = '';
				if (date.clone().add(1, 'M').quarter() == 1){
					imgFile = 'url("../images/spring2.jpg")';
				} else if (date.clone().add(1, 'M').quarter() == 2) {
					imgFile = 'url("../images/summer4.jpg")';
				} else if (date.clone().add(1, 'M').quarter() == 3) {
					imgFile = 'url("../images/winter3.jpg")';
				} else {
					imgFile = 'url("../images/autumn2.jpg")';
				}

				var seasonStyle = {
					backgroundImage: `linear-gradient(
						rgba(0, 0, 0, 0.5),
						rgba(0, 0, 0, 0.5)
					),${imgFile}`,
					backgroundSize: 'cover',
					opacity: '.96'
				};

				var midTerms = termDates.filter((termDate) => {
					return moment(termDate.start_time).isBetween(moment(term.start_time), moment(term.end_time));
				});
				
				if(midTerms.length > 0) {
					var midTermDates = midTerms.map((midTerm) => {
						return (
							<p>
								{midTerm.name} : {moment(midTerm.start_time).format('dddd, MMMM Do YYYY')} - {moment(midTerm.end_time).format('dddd, MMMM Do YYYY')}
							</p>
						);
					});
					var termStart = moment(term.start_time);
					return (
						<div className="card" style={seasonStyle} index={index}>
							<div className="card-content white-text" style={seasonStyle}>
								<h4>{term.name} {termStart.year()}</h4>
								<p className="flow-text">
									{termStart.format('dddd, MMMM Do YYYY')} - {moment(term.end_time).format('dddd, MMMM Do YYYY')}
								</p>
								{midTermDates}
							</div>
						</div>
					);
				}
			});
		return (
			<div className="container">
				<div className="row">
					<h1 className="indigo-text text-darken-4">Term Dates</h1>
					<ul className="collection with-header">
						<li className="collection-header"><h4>School Day</h4></li>
						<li className="collection-item">08:55am - 12:00pm | Whole School</li>
						<li className="collection-item">12:45pm - 03:10pm | Infants</li>
						<li className="collection-item">12:45pm - 03:15pm | Juniors</li>
					</ul>

					{terms}
				</div>
			</div>
		);
	}
}

export default TermDates;