import React from 'react';
import moment from 'moment';
import EventDialog from './EventDialog';


class ThisWeek extends React.Component{
	componentDidUpdate() {
		$('.modal-trigger').leanModal({
			opacity: .7, // Opacity of modal background
			in_duration: 400, // Transition in duration
			out_duration: 300 // Transition out duration
		});
	}
	render(){
		var startOfWeek = moment().startOf('week').add(1, 'd');
		var endOfWeek = moment().endOf('week').add(1, 'd');

		var daysOfWeek = [];
		var day = startOfWeek;

		while (day <= endOfWeek) {
			daysOfWeek.push(day.toDate());
			day = day.clone().add(1, 'd');
		}

		var firstHalfWeekEvents = weeksEvents(daysOfWeek.slice(0,4), this.props.events);
		var secondHalfWeekEvents = weeksEvents(daysOfWeek.slice(4, 7), this.props.events);

		function weeksEvents(days, events){
			return days.map((date, index) => {
				var dayEvents = events.filter((event) => {
					return moment(event.start_time).isSame(date, 'day');
				}).map((event, index) => {
					return (
						<EventDialog event={event} key={index}/>
					);
				});

				if (dayEvents.length === 0)	dayEvents = <p>No Events</p>;

				return (
					<div className="col-xs-12 col-sm-3" key={index}>
						<br className="hidden-sm-up"/>
						<p className="flow-text"><b>{moment(date).format('dddd Do')}</b></p>
						{dayEvents}
						<br className="hidden-sm-up"/>
						<div className="divider hidden-sm-up"></div>
					</div>
				);	
			});
		}

		return(
			<div className={this.props.card_class}>
        <div className="card-content black-text">
				<div className="col-xs-12 center-align">
						<h3 className="indigo-text text-darken-4">This Week</h3>
          </div>
          <div className="row">
						{firstHalfWeekEvents}
					</div>
					<div className="row">
						{secondHalfWeekEvents}
						<a href="#calendar/" className="purple-text text-darken-4 waves-effect waves-light btn-flat btn-large col-xs-12 col-sm-3">
							<i className="material-icons left">today</i>Full Calender
						</a>
					</div>
        </div>
      </div>
		);
	}
}

export default ThisWeek; 