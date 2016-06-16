import React from 'react';

const DayNames = ({ day_text_class }) => {
  const dayStyles = {
    width: `${100 / 7}%`,
    textAlign: 'center',
    display: 'inline-block',
    fontWeight: 'bold'
  };
  return (
    <div className="valign-wrapper" style={{ height: '60px' }}>
      <span className={day_text_class} style={dayStyles}>Sun</span>
      <span className={day_text_class} style={dayStyles}>Mon</span>
      <span className={day_text_class} style={dayStyles}>Tue</span>
      <span className={day_text_class} style={dayStyles}>Wed</span>
      <span className={day_text_class} style={dayStyles}>Thu</span>
      <span className={day_text_class} style={dayStyles}>Fri</span>
      <span className={day_text_class} style={dayStyles}>Sat</span>
    </div>
  );
};

export default DayNames;
