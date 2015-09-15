import React from 'react';
import moment from 'moment';
import helpers from '../../utils/helpers';

class Newsletters extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			newsletters: [],
		};
	}
	componentDidMount(){
		helpers.getNewsletters
		  .then((response) => {
		    this.setState({
		    	newsletters: response.data,
		    });
		  })
		  .catch((response) => {
		    console.log(response);
		  });
		  $('.collapsible').collapsible();
	}
	render() {
		var newslettersByYear = React.addons.createFragment({
			newslettersByYear: this.state.newsletters.reduce((groupedByYear, newsletter) => {
				var year = moment(newsletter.date_published).year();
				if (!groupedByYear[year])
					groupedByYear[year] = [];
				groupedByYear[year] = newsletter;
				//console.log(groupedByYear)
				return groupedByYear;
			}, [])
		});

		console.log(newslettersByYear.children)

		var sortedNewslettersByYear = [];

		for (var newslettersYear in newslettersByYear.newslettersByYear) {
			sortedNewslettersByYear.push([newslettersYear, newslettersByYear.newslettersByYear[newslettersYear]])
		}

		sortedNewslettersByYear.sort((a, b) => {if (a[0] < b[0]) return 1; return 0 - 1})
		
		//console.log(sortedNewslettersByYear[1])		
		var formattedNewslettersByYear = sortedNewslettersByYear.map((yearsNewsletters, index) => {
			var newsletters = yearsNewsletters[1].map((newsletter, index) => {
				<a href={newsletter.file} className="collection-item col-sm-6  col-md-4 col-lg-6 purple-text text-darken-4" key={index}>
					<i className="material-icons left">description</i>{moment(newsletter.date_published).format("Do MMMM YYYY")}
				</a>
			});
			return (
				<li key={index}>
					<div className="collapsible-header">{newslettersYear[0]}</div>
					<div className="collapsible-body">{newsletters}</div>
				</li>
			)
		});
		return (
			<div className="row">
				<div className="container">
					<h1 className="indigo-text text-darken-4">Newsletters</h1>
					<ul className="collapsible" data-collapsible="accordion">
						{newslettersByYear}
					</ul>
				</div>
			</div>
		)
	};
};

export default Newsletters;