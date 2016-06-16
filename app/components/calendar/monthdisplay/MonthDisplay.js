import React from 'react';
import DayNames from './DayNames';
import Weeks from './Weeks';

const MonthDisplay = ({
  day_text_class, current_month, selected_date, dates_with_events, handle_select, day_button_class
}) => (
  <div className="col-xs-12">
    <DayNames day_text_class={day_text_class} />
    <Weeks
      current_month={current_month}
      selected_date ={selected_date}
      dates_with_events={dates_with_events}
      handle_select={handle_select}
      day_button_class={day_button_class}
    />
  </div>
);

export default MonthDisplay;
