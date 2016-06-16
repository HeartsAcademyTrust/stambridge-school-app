import React from 'react';
import Radium from 'radium';
import moment from 'moment';

const Week = ({
  weekDate, current_month, day_button_class, selected_date, dates_with_events, handle_select
}) => {
  let days = [];
  let date = moment(weekDate);
  const month = moment(current_month).month();

  for (let i = 0; i < 7; i++) {
    const day = {
      name: date.format('dd').substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === month,
      date
    };

    let background_button_color = day_button_class;

    background_button_color === 'blue lighten-2' ? background_button_color = '#64b5f6' : background_button_color;
    background_button_color === 'pink lighten-3' ? background_button_color = '#f48fb1' : background_button_color;

    const dayStyles = {
      width: `${100 / 7}%`,
      textAlign: 'center',
      display: 'inline-block',
      height: '54px',
      lineHeight: '56px',
      ':hover': {
        backgroundColor: background_button_color
      },
      '@media (min-width: 320px)': {
        paddingLeft: '0px',
        paddingRight: '0px'
      }
    };

    let dayClass = `waves-effect waves-${day_button_class} btn-flat purple-text text-darken-3`;

    day.isCurrentMonth ? dayClass : dayClass = 'btn-large disabled';
    day.date.isSame(moment(selected_date), 'day') ? dayStyles.backgroundColor = background_button_color : dayStyles;
    if (dates_with_events.indexOf(day.number) > -1 && day.isCurrentMonth) {
      dayStyles.borderColor = background_button_color;
      dayStyles.borderStyle = 'solid';
      dayStyles.borderWidth = 'medium';
    }

    days.push(
      <a
        key={day.date.toString()}
        style={dayStyles}
        className={dayClass}
        onClick={() => handle_select(day.date)}
      >
        {day.number}
      </a>
    );

    date = date.clone();
    date.add(1, 'd');
  }

  return (
    <div key={days[0].toString()}>
      {days}
    </div>
  );
};

export default Radium(Week);
