import React from 'react';
import moment from 'moment';

class MonthSlider extends React.Component {
	subtractMonth() {
		this.props.subtract_month();
	}
	addMonth() {
		this.props.add_month();
	}
	render() {
		return (
			<div className={this.props.month_class}>
				<a 
					className="btn-floating btn-large waves-effect waves-light purple darken-3 col-xs-1 col-xs-offset-1"
					onClick={this.subtractMonth.bind(this)}>
					<i className="medium material-icons left">skip_previous</i>
				</a>
				<p className="flow-text purple-text text-darken-3 col-xs-8 valign center-align">
					<b>{moment(this.props.current_date).format('MMMM YYYY')}</b>
				</p>
				<a 
					className="btn-floating btn-large waves-effect waves-light purple darken-3 col-xs-1 col-xs-pull-1 col-md-pull-0 col-lg-pull-1 col-xl-pull-0"
					onClick={this.addMonth.bind(this)}>
					<i className="medium material-icons left">skip_next</i>
				</a>
			</div>
		);
	}
}

export default MonthSlider;