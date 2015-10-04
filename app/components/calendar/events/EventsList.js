import React from 'react';
import moment from 'moment';

class EventsList extends React.Component {
	render() {
		var selectedDate = moment(this.props.selected_date),
			formattedSelectedDate = selectedDate.format('dddd Do MMMM YYYY'),
			monthListClass = 'z-depth-1 valign-wrapper',
			monthBorderColor = '',
			monthTextColor = '';

		if (selectedDate.clone().add(1, 'M').quarter() == 1){
			monthListClass += ' blue lighten-2';
			monthBorderColor += '#64B5F6';
			monthTextColor += 'blue-text text-lighten-2';
		} else if (selectedDate.clone().add(1, 'M').quarter() == 2) {
			monthListClass += ' pink lighten-3';
			monthBorderColor = '#f48fb1';
			monthTextColor += 'pink-text text-lighten-3';
		} else if (selectedDate.clone().add(1, 'M').quarter() == 3) {
			monthListClass += ' green';
			monthBorderColor = '#4caf50';
			monthTextColor += 'green-text';
		} else {
			monthListClass += ' orange';
			monthBorderColor = '#ff9800';
			monthTextColor += 'orange-text';
		}

		var events = this.props.events.map((event, index) => {
			var contentStyle = {
				borderColor: `${monthBorderColor}`,
				borderStyle: 'solid',
				borderWidth: 'thick'
			};

			return (
				<div key={index} className="col-xs-12">
					<div className="card">
						<div className={monthListClass}>
							<span style={{padding:'20px'}} className="card-title purple-text text-darken-3">{`${index + 1}) ${event.name}`}</span>
						</div>
						<div className="card-content left-align" style={contentStyle}>
							<p>
								{event.end_time && <p>Duration: {moment(event.end_time).to(moment(event.start_time), true)}</p>}
								{event.start_time && <p>Start Time: {moment(event.start_time).format('H:mm A')}</p>}
								{event.end_time && <p>End Time: {moment(event.end_time).format('H:mm A')}</p>}
								<br/>
							</p>
							<p style={{whiteSpace: 'pre-line'}}>
								{event.description}
							</p>
						</div>
					</div>
				</div>
			);
		});
		
		return (
			<div className="col-xs-12">
				<h4 className="purple-text text-darken-3">{formattedSelectedDate}</h4>
				{events.length > 0 ? events : <p className={`flow-text left-align ${monthTextColor}`}><b>No Events</b></p>}
			</div>
		);
	}	
}

export default EventsList;

