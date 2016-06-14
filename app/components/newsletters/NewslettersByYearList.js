import React from 'react';
import moment from 'moment';
import NewslettersList from './NewslettersList';

const NewslettersByYearList = ({ newslettersByYear }) => (
  <ul className="collapsible collapsible-accordion" data-collapsible="accordion">
    {
      newslettersByYear.map((yearsNewsletters, index) => {
        let headerClassName = 'collapsible-header';
        moment().year() === yearsNewsletters.year ?	headerClassName = 'collapsible-header active' : headerClassName;

        return (
          <li key={index}>
            <div className={headerClassName}>{yearsNewsletters.year}</div>
            <div className="collapsible-body">
              <NewslettersList yearsNewsletters={yearsNewsletters.newsletters} />
            </div>
          </li>
        );
      })
    }
  </ul>
);

export default NewslettersByYearList;
