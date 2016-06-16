import React from 'react';
import moment from 'moment';
import Week from './Week';
import { StyleRoot } from 'radium';

const Weeks = ({
  current_month, selected_date, dates_with_events, day_button_class, handle_select
}) => {
  let weeks = [];
  let endOfMonth = false;
  const date = current_month.clone().startOf('month').add('w' - 1).day('Sunday');
  let monthIndex = date.month();
  let count = 0;

  while (!endOfMonth) {
    weeks.push(
      <Week
        key={date.toString()}
        weekDate={date.clone()}
        current_month={moment(current_month)}
        selected_date={selected_date}
        dates_with_events={dates_with_events}
        day_button_class={day_button_class}
        handle_select={handle_select}
      />
    );
    date.add(1, 'w');
    endOfMonth = count++ > 2 && monthIndex !== date.month();
    monthIndex = date.month();
  }
  return (
    <StyleRoot>
      <div>
        {weeks}
      </div>
    </StyleRoot>
   );
};

export default Weeks;
