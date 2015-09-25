import React from 'react';
import DayNames from './DayNames';
import Weeks from './Weeks';

class MonthDisplay extends React.Component {
	render() {
		return (
			<div className="col-xs-12">
				<DayNames />
				<Weeks start_date={this.props.current_date}/>
			</div>
		);
	}
}

export default MonthDisplay;