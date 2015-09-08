import React from 'react';
import moment from 'moment';
import {Dialog, RaisedButton} from 'material-ui';


class ThisWeek extends React.Component{
	render(){
		var startOfWeek = moment().startOf('week');
		var endOfWeek = moment().endOf('week');

		var days = [];
		var day = startOfWeek;

		while (day <= endOfWeek) {
		    days.push(day.toDate());
		    day = day.clone().add(1, 'd');
		};

		var weekEvents = days.map((date, index) => {
			var events = this.props.events.filter((event) => {
				return moment(event.start_time).isSame(date, 'day');
			});
			
			return events.map((event, index) => {
				var standardActions = [
					{ text:'Cancel'}
				];
				return (
					<div>
						<RaisedButton label={event.name} secondary={true}  />
						<Dialog ref={event.id} title={event.name} actions={standardActions} actionFocus="Cancel">
							{event.description}
						</Dialog>
					</div>
				);
			});
		});

		return(
			<div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">This Week</span>
          <ul>
          	{weekEvents}
          </ul>
        </div>
      </div>
		)
	}
};

export default ThisWeek;