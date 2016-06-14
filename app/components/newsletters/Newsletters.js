import React from 'react';
import moment from 'moment';
import helpers from '../../utils/helpers';
import NewslettersByYearList from './NewslettersByYearList';

class Newsletters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsletters: []
    };
  }

  componentDidMount() {
    helpers.getNewsletters.then((response) => {
      this.setState({
        newsletters: response.data
      });
    });
  }

  componentDidUpdate() {
    $('.collapsible').collapsible();
  }

  render() {
    const newslettersByYear = this.state.newsletters.reduce((groupedByYear, newsletter) => {
      function findYear(yearsNewsletters, searchYear) {
        for (let i = 0; i < yearsNewsletters.length; i++) {
          if (yearsNewsletters[i].year === searchYear) {
            return i;
          }
        }
        return -1;
      }

      const year = moment(newsletter.date_published).year();
      const yearIndex = findYear(groupedByYear, year);
      if (yearIndex === -1) {
        groupedByYear.push({ year, newsletters: [newsletter] });
      } else {
        groupedByYear[yearIndex].newsletters.push(newsletter);
      }
      return groupedByYear;
    }, []).sort((a, b) => {
      if (a.year < b.year) {
        return 1;
      }
      return 0 - 1;
    });

    let newsletters = (
      <NewslettersByYearList newslettersByYear={newslettersByYear} />
		);

    if (newslettersByYear.length === 0) {
      newsletters = <p className="flow-text">There are currently no newsletters that have been uploaded</p>;
    }

    return (
      <div className="row">
        <div className="container">
          <h1 className="indigo-text text-darken-4">Newsletters</h1>
					{newsletters}
        </div>
      </div>
		);
  }
}

export default Newsletters;
