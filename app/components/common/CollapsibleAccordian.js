import React from 'react';
import moment from 'moment';

class CollapsibleAccordian extends React.Component {
	componentDidUpdate() {
		$('.collapsible').collapsible();
	}
	render() {
		var listItem = this.props.data.map((item, index) => {
			var collapsibleHeaderClass='collapsible-header';
			var showUploadedDate = <span className="grey-text lighten-2">Uploaded: {moment(item[this.props.date_published_key]).format('Do MMMM YYYY')}</span>
			
			if(this.props.deadline_date) {
				var deadline = moment(item[this.props.date_published_key]);
				moment().isAfter(deadline) ? collapsibleHeaderClass += ' red-text text-darken-2' : collapsibleHeaderClass += ' green-text text-darken-4';
				showUploadedDate = '';
			} else{
				collapsibleHeaderClass += ' purple-text text-darken-4';
			}

			return(
				<li key={index}>
					<div className={collapsibleHeaderClass}>
						<div className="col-xs-12 col-sm-8 col-xl-9">
							{this.props.show_info_icon && <i className="material-icons">info_outline</i>}
							{item[this.props.title_key]}
						</div>
						<div className="col-xs-12 col-sm-4 col-xl-3 right-align">
							{this.props.show_time_icon && <i className="material-icons">schedule</i>}
							{moment(item[this.props.date_published_key]).format(this.props.date_format)}
						</div>
					</div>
					<div className="collapsible-body">
						<p>
							{item[this.props.extra_notes_key] && <span className="flow-text">{item[this.props.extra_notes_key]} <br/></span>}
							{showUploadedDate}
							<br/>
							{item[this.props.file_key] && <a href={item[this.props.file_key]} target="_blank" className="btn-floating btn-large waves-effect waves-light purple darken-4">
								<i className="material-icons">description</i>
							</a>}
						</p>
					</div>
				</li>
			);
		});

		return (
			<ul className="collapsible popout collapsible-accordion" dataCollapsible="accordion">
				{listItem}
			</ul>
		);
	}
}

export default CollapsibleAccordian;