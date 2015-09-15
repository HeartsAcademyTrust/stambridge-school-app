import React from 'react';
import moment from 'moment';

class UpcomingTermDate extends React.Component{
	render() {
		var seasonStyle = {
			backgroundImage: `linear-gradient(
	      rgba(0, 0, 0, 0.5),
	      rgba(0, 0, 0, 0.5)
    	),${this.props.img_file}`,
			backgroundSize: 'cover',
			opacity: '.96'
		};
		var buttonStyle = {
			lineHeight: 'inherit',
			color: '#4a148c'
		};

		return (
			<div className={this.props.card_class}>
        <div className="card-content white-text center-align" style={seasonStyle}>
          <h4>Upcoming Term Dates:</h4>
          <p className="flow-text">{this.props.date}</p>
        </div>
        <div className="card-action">
          <a href="#calender" className="waves-effect btn-flat col-xs-12" style={buttonStyle}>
          	<i className="material-icons right">send</i>All Term Dates
          </a>
        </div>
      </div>
		)
	}
};

export default UpcomingTermDate;
