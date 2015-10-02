import React from 'react';
import moment from 'moment';
import Week from './Week';

class Weeks extends React.Component {

	render() {
		var weeks = [],
			endOfMonth = false,
			current_month = moment(this.props.current_month),
			date = current_month.clone().startOf('month').add('w' -1).day('Sunday'),
			monthIndex = date.month(),
			count = 0;

		while(!endOfMonth) {
			weeks.push(
				<Week key={date.toString()} 
					date={date.clone()} 
					current_month={current_month}
					selected_date={this.props.selected_date}
					day_button_class={this.props.day_button_class}
					handle_select={this.props.handle_select.bind(this)}/>
			);
			date.add(1, 'w');
			endOfMonth = count++ >2 && monthIndex !== date.month();
			monthIndex = date.month();
		}	
		return (
			<div>{weeks}</div>
		);
	}
}

export default Weeks;