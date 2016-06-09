import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

const LatestNewsletter = ({ newsletter, cardClass }) => {
  const buttonStyle = {
    lineHeight: 'inherit',
    color: '#4a148c',
    width: '100%'
  };

  return (
    <div className={cardClass}>
      <div className="card-content black-text center-align">
        <h4 className="indigo-text text-darken-4">Latest Newsletter</h4>
        <p className="flow-text">
          <a className="purple-text text-darken-4" href={newsletter.file} target="_blank">
            <i className="material-icons">description</i>
            {moment(newsletter.date_published).format('Do MMMM YYYY')}
          </a>
        </p>
      </div>
      <div className="card-action">
        <Link to="/newsletters" className="waves-effect" style={buttonStyle}>
          <i className="material-icons right">send</i>All Newsletters
        </Link>
      </div>
    </div>
  );
};

export default LatestNewsletter;
