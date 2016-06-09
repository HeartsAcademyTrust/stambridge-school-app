import React from 'react';
import moment from 'moment';
import helpers from '../../../utils/helpers';
import LatestNewsletter from './LatestNewsletter';
import ThisWeek from './ThisWeekEvents';
import UpcomingTermDate from './UpcomingTermDate';

class LatestNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      latest_newsletter: {},
      term_dates: []
    };
  }

  componentDidMount() {
    helpers.getLatest().then((response) => {
      this.setState({
        events: response.events,
        latest_newsletter: response.latest_newsletter,
        term_dates: response.term_dates
      });
    });
  }

  render() {
    var term_dates = this.state.term_dates.filter((term_date) => {
			return moment(term_date.end_time).isAfter(moment());
		});

		latest_termdate = 'No Upcoming Term Date Information Available';
		if (term_dates.length > 0) {
			var closest_time = term_dates[0].end_time;
			if (moment(term_dates[0].start_time).isAfter(moment())) {
				closest_time = moment(term_dates[0].start_time);
			}

			var latest_termdate = term_dates.reduce((previous, current) => {
				if ((moment(current.start_time).isAfter(moment()) && moment(current.start_time).isBefore(closest_time))
					|| (moment(current.end_time).isAfter(moment()) && moment(current.end_time).isBefore(closest_time))){
					return current;
				}
				return previous;
			}, term_dates[0]);
		}

		var pos = 'End';

		var date = moment(latest_termdate.end_time);
		if (moment(latest_termdate.start_time).isAfter(moment())){
			pos = 'Start';
			date = moment(latest_termdate.start_time);
		}

		var formattedDate = `${pos} of ${latest_termdate.name} - ${date.format('ddd Do MMMM H:mm A')}`;

		var imgFile = '';
		var cardClass = 'card';

		if (date.clone().add(1, 'M').quarter() == 1){
			imgFile = 'url("../images/winter3.jpg")';
			cardClass = 'card blue lighten-2';
		} else if (date.clone().add(1, 'M').quarter() == 2) {
			imgFile = 'url("../images/spring2.jpg")';
			cardClass = 'card pink lighten-3';
		} else if (date.clone().add(1, 'M').quarter() == 3) {
			imgFile = 'url("../images/summer4.jpg")';
			cardClass = 'card green';
		} else {
			imgFile = 'url("../images/autumn2.jpg")';
			cardClass = 'card orange';
		}

		return (
			<div>
				<div className="col-xs-12 col-md-5">
					<LatestNewsletter newsletter={this.state.latest_newsletter} cardClass={cardClass}/>
				</div>

				<div className="col-xs-12 col-md-7">
					<UpcomingTermDate date={formattedDate} imgFile={imgFile} cardClass={cardClass}/>
				</div>

				<div className="col-xs-12">
					<ThisWeek events={this.state.events} cardClass={cardClass}/>
				</div>
			</div>
		);
	}
}

export default LatestNews;
