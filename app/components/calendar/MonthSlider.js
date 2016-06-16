import React from 'react';
import moment from 'moment';

const MonthSlider = ({ current_month, month_class, add_month, subtract_month }) => (
  <div className={month_class}>
    <a
      className="btn-floating btn-large waves-effect waves-light purple darken-3 col-xs-1 col-sm-offset-1"
      onClick={subtract_month}
    >
      <i className="medium material-icons left">skip_previous</i>
    </a>
    <p className="flow-text purple-text text-darken-3 col-xs-8 valign center-align">
      <b>{moment(current_month).format('MMMM YYYY')}</b>
    </p>
    <a
      className="btn-floating btn-large waves-effect waves-light purple darken-3 col-xs-1 col-sm-pull-1 col-md-pull-0 col-lg-pull-1 col-xl-pull-0"
      onClick={add_month}
    >
      <i className="medium material-icons left">skip_next</i>
    </a>
  </div>
);

export default MonthSlider;
