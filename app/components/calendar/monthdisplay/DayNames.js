import React from 'react';

class DayNames extends React.Component {
	render() {
    var dayNamesStyle = {
      height: '60px'
    };
    var dayWidth = 100/7;
    var dayStyles = {
      width: `${dayWidth}%`,
      textAlign:'center',
      display: 'inline-block',
      fontWeight: 'bold'
    };
		return (
			<div className="valign-wrapper" style={dayNamesStyle}>
          <span className={this.props.day_text_class} style={dayStyles}>Sun</span>
          <span className={this.props.day_text_class} style={dayStyles}>Mon</span>
          <span className={this.props.day_text_class} style={dayStyles}>Tue</span>
          <span className={this.props.day_text_class} style={dayStyles}>Wed</span>
          <span className={this.props.day_text_class} style={dayStyles}>Thu</span>
          <span className={this.props.day_text_class} style={dayStyles}>Fri</span>
          <span className={this.props.day_text_class} style={dayStyles}>Sat</span>
      </div>
		);
	}
}

export default DayNames;