import React from 'react';
import moment from 'moment';

class LettersList extends React.Component{
	render() {
		var letters = this.props.letters.map((letter, index) => {
			var collapsibleHeaderClass='collapsible-header';

			if (moment().isAfter(moment(letter.deadline))){
				collapsibleHeaderClass += ' red-text text-darken-2';
			} else {
				collapsibleHeaderClass += ' green-text text-darken-4';
			}

			return (					
				<li className="col-xs-12" key={index}>
					<div className={collapsibleHeaderClass}>
						<div className="col-xs-12 col-sm-8 col-xl-9">
							{letter.title}
						</div>
						<div className="col-xs-12 col-sm-4 col-xl-3 right-align">
							<i className="material-icons">schedule</i>
							{letter.deadline}
						</div>
					</div>
					<div className="collapsible-body">
						<p className="flow-text">
							{letter.description && letter.description}
							<br/>
							<a href={letter.file} className="btn-floating btn-medium waves-effect waves-light red">
								<i className="material-icons">description</i>
							</a>
						</p>
					</div>
				</li>
			);
		});

		return (
			<ul className="collapsible collapsible-accordion" data-collapsible="accordion">
				{letters}
			</ul>
		);
	}
}

export default LettersList;