import React from 'react';
import moment from 'moment';
import Week from './Week';

class Weeks extends React.Component {

	render() {
		var weeks = [],
			endOfMonth = false,
			selected_date = moment(this.props.start_date),
			date = selected_date.clone().startOf('month').add('w' -1).day('Sunday'),
			monthIndex = date.month(),
			count = 0;

		while(!endOfMonth) {
			weeks.push(
				<Week key={date.toString()} date={date.clone} month={selected_date.month()}/>
			);
			date.add(1, 'w');
			endOfMonth = count++ >2 && monthIndex !== date.month();
			monthIndex = date.month();
		}	
		return (
			<div>weeks</div>
		)
	}
}

export default Weeks;