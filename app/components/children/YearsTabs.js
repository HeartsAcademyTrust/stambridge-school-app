import React from 'react';
import HomeworkList from './HomeworkList';

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
					{year.homework.length === 0 ? <p className="flow-text purple-text text-darken-4">No Homework currently uploaded for <b>{year.year}</b></p> : 
					<HomeworkList homeworks={year.homework} />}
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