import React from 'react';
import LettersList from './LettersList';

class YearsTabs extends React.Component {
	componentDidUpdate(){
		$('ul.tabs').tabs();
		$('.collapsible').collapsible();
	}
	render() {
		var yearsTabs = this.props.years.map((year, index) => {
			return (
				<li className="tab" key={index}><a href={`#${index}`}><b>{year.year}</b></a></li>
			);
		});

		var yearsContent = this.props.years.map((year, index) => {
			return (
				<div id={index} className="col-xs-12" key={index}>
					<LettersList letters={year.letters} />
				</div>
			);
		});

		return(
			<div className="row">
				<div className="col-xs-12">
					<ul className="tabs z-depth-1">
						{yearsTabs}
					</ul>
				</div>
				{yearsContent}	
			</div>
		);
	}
}

export default YearsTabs;