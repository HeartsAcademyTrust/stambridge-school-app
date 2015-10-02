import React from 'react';
import DayNames from './DayNames';
import Weeks from './Weeks';

class MonthDisplay extends React.Component {
	render() {
		return (
			<div className="col-xs-12">
				<DayNames day_text_class={this.props.day_text_class}/>
				<Weeks current_month={this.props.current_month} 
					selected_date ={this.props.selected_date}
					handle_select={this.props.handle_select.bind(this)}
					day_button_class={this.props.day_button_class}/>
			</div>
		);
	}
}

export default MonthDisplay;