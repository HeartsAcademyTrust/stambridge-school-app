import React from 'react';
import { Link } from 'react-router';

const UpcomingTermDate = ({ date, imgFile, cardClass }) => {
  const seasonStyle = {
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),${imgFile}`,
    backgroundSize: 'cover',
    opacity: '.96'
  };
  const buttonStyle = {
    lineHeight: 'inherit',
    color: '#4a148c',
    width: '100%'
  };

  return (
    <div className={cardClass}>
      <div className="card-content white-text center-align" style={seasonStyle}>
        <h4>Upcoming Term Dates:</h4>
        <p className="flow-text">{date}</p>
      </div>
      <div className="card-action">
        <Link to="/term-dates" className="waves-effect" style={buttonStyle}>
          <i className="material-icons right">send</i>All Term Dates
        </Link>
      </div>
    </div>
  );
};

export default UpcomingTermDate;
