import React from 'react';
import moment from 'moment';

class PerformanceList extends React.Component {
	componentDidUpdate() {
		$('.collapsible').collapsible();
	}
	render() {
		var performance_reports = this.props.reports.map((report, index) => {
			return(
				<li key={index}>
					<div className="collapsible-header purple-text text-darken-4"><i className="material-icons">info_outline</i>
						<p>{report.title} - {moment(report.date_published).format('YYYY')}</p> 
					</div>
					<div className="collapsible-body">
						<p>
						{report.extra_notes && <span className="flow-text">{report.extra_notes}</span>}
						<br/>
						<span className="grey-text lighten-2">Uploaded: {moment(report.date_published).format('Do MMMM YYYY')}</span>
						<br/>
						{report.file && <a href={report.file} target="_blank" className="btn-floating btn-large waves-effect waves-light purple darken-4">
							<i className="material-icons">description</i>
						</a>}
						</p>
					</div>
				</li>
			);
		});

		return (
			<ul className="collapsible popout collapsible-accordion" dataCollapsible="accordion">
				{performance_reports}
			</ul>
		);
	}
}

export default PerformanceList;