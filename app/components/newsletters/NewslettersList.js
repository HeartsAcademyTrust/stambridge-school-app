import React from 'react';
import moment from 'moment';

class NewslettersList extends React.Component {
	render() {
		var newsletters = this.props.yearsNewsletters.map((newsletter, index) => {
			var date = moment(newsletter.date_published).format('Do MMMM YYYY');
			return(
				<a href={newsletter.file} target="_blank" className="collection-item col-sm-6 col-md-4 col-lg-6 purple-text text-darken-4" key={index}>
					<i className="material-icons left">description</i>{date}
				</a>
			);
		});
		return (
			<ul className="collection">
				{newsletters}
			</ul>
		);
	}
}

export default NewslettersList;