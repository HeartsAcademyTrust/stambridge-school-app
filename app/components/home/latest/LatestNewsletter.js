import React from 'react';
import moment from 'moment';

class LatestNewsletter extends React.Component {
	render(){
    var buttonStyle = {
      lineHeight: 'inherit',
      color: '#4a148c'
    };

		return(
			<div className={this.props.card_class}>
        <div className="card-content black-text center-align">
          <h4 className="indigo-text text-darken-4">Latest Newsletter</h4>
          <p className="flow-text">
            <a className="purple-text text-darken-4" href={this.props.newsletter.file}> 
              <i className="material-icons">description</i>
              {moment(this.props.newsletter.date_published).format("Do MMMM YYYY")}
            </a>
          </p>
        </div>
        <div className="card-action">
          <a href="#newsletters/" className="waves-effect btn-flat col s12" style={buttonStyle}>
            <i className="material-icons right">send</i>All Newsletters
          </a>
        </div>
      </div>
		); 
	}
}

export default LatestNewsletter;
