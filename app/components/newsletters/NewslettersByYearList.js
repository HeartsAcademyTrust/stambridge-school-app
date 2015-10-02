import React from 'react';
import moment from 'moment';
import NewslettersList from './NewslettersList';

class NewslettersByYearList extends React.Component {
	render(){
		var newslettersByYearList = this.props.newslettersByYear.map((yearsNewsletters, index) => {
			var headerClassName = 'collapsible-header';
			if (moment().year() === yearsNewsletters.year) {
				headerClassName = 'collapsible-header active';
			}

			return (
				<li key={index}>
					<div className={headerClassName}>{yearsNewsletters.year}</div>
					<div className="collapsible-body">
						<NewslettersList yearsNewsletters={yearsNewsletters.newsletters} />
					</div>
				</li>
			);
		});

		return (
			<ul className="collapsible collapsible-accordion" data-collapsible="accordion">
				{newslettersByYearList}
			</ul>
		);
	}
}

export default NewslettersByYearList;