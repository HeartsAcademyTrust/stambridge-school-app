import React from 'react';
import moment from 'moment';

class HomeworkList extends React.Component{
	render() {
		var homeworks = this.props.homeworks.map((homework, index) => {
			var collapsibleHeaderClass='collapsible-header';

			if (moment().isAfter(moment(homework.deadline))){
				collapsibleHeaderClass += ' red-text text-darken-2';
			} else {
				collapsibleHeaderClass += ' green-text text-darken-4';
			}

			return (					
				<li className="col-xs-12" key={index}>
					<div className={collapsibleHeaderClass}>
						<div className="col-xs-12 col-sm-8 col-xl-9">
							{homework.title}
						</div>
						<div className="col-xs-12 col-sm-4 col-xl-3 right-align">
							<i className="material-icons">schedule</i>
							{homework.deadline}
						</div>
					</div>
					<div className="collapsible-body">
						<p className="flow-text">
							{homework.description && homework.description}
							<br/>
							<a href={homework.file} target="_blank" className="btn-floating btn-medium waves-effect waves-light red">
								<i className="material-icons">description</i>
							</a>
						</p>
					</div>
				</li>
			);
		});

		return (
			<ul className="collapsible collapsible-accordion" data-collapsible="accordion">
				{homeworks}
			</ul>
		);
	}
}

export default HomeworkList;