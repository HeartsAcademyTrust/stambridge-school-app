import React from 'react';
import helpers from '../../utils/helpers';
import moment from 'moment';
import MonthSlider from './MonthSlider';
import MonthDisplay from './monthdisplay/MonthDisplay';

class Calendar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			events: [],
			current_date: moment()
		};
	}
	componentDidMount(){
		var current_date = this.state.current_date; 
		helpers.getEvents(current_date.startOf('month').format('YYYY-MM-DD'), current_date.endOf('month').format('YYYY-MM-DD'))
		.then((response) => {
			this.setState({
				events: response.data
			});
		})
		.catch((response) => {
			console.log(response);
		});
	}
	handleAddMonth(){
		this.setState({
			events: [],
			current_date: this.state.current_date.add(1, 'M')
		});
	}
	handleSubtractMonth(){
		this.setState({
			events: [],
			current_date: this.state.current_date.subtract(1, 'M')
		});
	}
	render() {
		var date = moment(this.state.current_date);
		var monthClass = 'z-depth-1 valign-wrapper';

		if (date.clone().add(1, 'M').quarter() == 1){
			monthClass += ' blue lighten-2';
		} else if (date.clone().add(1, 'M').quarter() == 2) {
			monthClass += ' pink lighten-3';
		} else if (date.clone().add(1, 'M').quarter() == 3) {
			monthClass += ' green';
		} else {
			monthClass += ' orange';
		}

		return(
			<div className="row">
				<div className="container center-align">
					<h1 className="indigo-text text-darken-4">
						<i className="medium material-icons">today</i>
						Calendar
					</h1>
					
					<div className="col-xs-12">
						<MonthSlider 
							current_date={this.state.current_date} 
							month_class={monthClass}
							add_month={this.handleAddMonth.bind(this)} 
							subtract_month={this.handleSubtractMonth.bind(this)}/>
					</div>

					<MonthDisplay current_date={this.state.current_date}/>
				</div>
			</div>
		);
	}
}

export default Calendar;