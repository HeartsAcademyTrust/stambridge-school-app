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
			var deadline_date_mobile = '';

			if(this.props.deadline_date) {
				var deadline = moment(item[this.props.date_published_key]);
				var collapsibleHeaderClassColour = ' green-text text-darken-4';
				moment().isAfter(deadline) ? collapsibleHeaderClassColour = ' red-text text-darken-2': collapsibleHeaderClassColour = ' green-text text-darken-4';
				collapsibleHeaderClass += collapsibleHeaderClassColour;
				showUploadedDate = '';
				deadline_date_mobile = 
					(<div className={"col-xs-12 hidden-sm-up " + collapsibleHeaderClassColour}>
						<i className="material-icons" style={{marginRight:5, paddingTop:'5px'}}>schedule</i>
						{moment(item[this.props.date_published_key]).format(this.props.date_format)}		  	
					</div>);
			} else{
				collapsibleHeaderClass += ' purple-text text-darken-4';
			}

			return(
				<li key={index}>
					<div className={collapsibleHeaderClass}>
						<div className="col-xs-12 col-sm-7 col-md-8 truncate">
							{this.props.show_info_icon && <i className="material-icons">info_outline</i>}
							{item[this.props.title_key]}
						</div>

						<div className="col-sm-5 col-md-4 right-align hidden-xs-down">
							{this.props.show_time_icon && <i className="material-icons" style={{marginRight:5}}>schedule</i>}
							{moment(item[this.props.date_published_key]).format(this.props.date_format)}
						</div>
					</div>
					<div className="collapsible-body">
					  {deadline_date_mobile}
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