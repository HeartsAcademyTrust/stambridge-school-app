import React from 'react';
import helpers from '../../utils/helpers';
import moment from 'moment';
import MonthSlider from './MonthSlider';
import MonthDisplay from './monthdisplay/MonthDisplay';
import EventsList from './events/EventsList';

class Calendar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			events: [],
			current_month: moment(), 
			selected_date: moment()
		};
	}
	componentDidMount(){
		var current_month = this.state.current_month.clone(); 
		helpers.getEvents(current_month.startOf('month').format('YYYY-MM-DD'), current_month.endOf('month').format('YYYY-MM-DD'))
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
		var current_month = this.state.current_month,
			new_current_month = current_month.add(1, 'M'),
			query_date = new_current_month.clone(),
			monthAlreadyLoaded = this.state.events.filter((event) => {
				return moment(event.start_time).isSame(new_current_month, 'month');
			});

		if (monthAlreadyLoaded.length == 0){
			helpers.getEvents(query_date.startOf('month').format('YYYY-MM-DD'), query_date.endOf('month').format('YYYY-MM-DD'))
			.then((response) => {
				this.setState({
					events: this.state.events.concat(response.data)
				});
			})
			.catch((response) => {
				console.log(response);
			});
		}

		this.setState({
			current_month: new_current_month
		});
	}
	handleSubtractMonth(){
		var current_month = this.state.current_month,
			new_current_month = current_month.subtract(1, 'M'),
			query_date = new_current_month.clone(),
			monthAlreadyLoaded = this.state.events.filter((event) => {
				return moment(event.start_time).isSame(new_current_month, 'month');
			});
		
		if (monthAlreadyLoaded.length == 0){
			helpers.getEvents(query_date.startOf('month').format('YYYY-MM-DD'), query_date.endOf('month').format('YYYY-MM-DD'))
			.then((response) => {
				this.setState({
					events: this.state.events.concat(response.data)
				});
			})
			.catch((response) => {
				console.log(response);
			});
		}

		this.setState({
			current_month: new_current_month
		});
	}
	handleSelectDay(day) {
		this.setState({
			selected_date: day
		});
	}
	render() {
		var currentMonth = moment(this.state.current_month),
			selectedDate = moment(this.state.selected_date),
			monthDisplayClass = 'z-depth-1 valign-wrapper',
			dayTextClass = 'flow-text valign',
			dayButtonColorClass = '';

		if (currentMonth.clone().add(1, 'M').quarter() == 1){
			monthDisplayClass += ' blue lighten-2';
			dayTextClass += ' blue-text text-lighten-2';
			dayButtonColorClass = 'blue lighten-2';
		} else if (currentMonth.clone().add(1, 'M').quarter() == 2) {
			monthDisplayClass += ' pink lighten-3';
			dayTextClass += ' pink-text text-lighten-3';
			dayButtonColorClass = 'pink lighten-3';
		} else if (currentMonth.clone().add(1, 'M').quarter() == 3) {
			monthDisplayClass += ' green';
			dayTextClass += ' green-text';
			dayButtonColorClass = 'green';
		} else {
			monthDisplayClass += ' orange';
			dayTextClass += ' orange-text';
			dayButtonColorClass = 'orange';
		}

		var selectedDaysEvents = this.state.events.filter((event) => {
			return moment(event.start_time).isSame(this.state.selected_date, 'day');
		});

		// var datesWithEvents = this.state.events.reduce((previous, current) => {

		// }, []);

		return(
			<div className="row">
				<div className="container center-align">
					<h1 className="indigo-text text-darken-4">
						<i className="medium material-icons">today</i>
						Calendar
					</h1>
					
					<div className="col-xs-12">
						<MonthSlider 
							current_month={this.state.current_month} 
							month_class={monthDisplayClass}
							add_month={this.handleAddMonth.bind(this)} 
							subtract_month={this.handleSubtractMonth.bind(this)}/>
					</div>

					<MonthDisplay current_month={this.state.current_month}
						selected_date={this.state.selected_date} 
						// dates_with_events={datesWithEvents}
						handle_select={this.handleSelectDay.bind(this)}
						day_button_class={dayButtonColorClass}
						day_text_class={dayTextClass}/>

					<EventsList events={selectedDaysEvents}
						selected_date={this.state.selected_date}/>
				</div>
			</div>
		);
	}
}

export default Calendar;