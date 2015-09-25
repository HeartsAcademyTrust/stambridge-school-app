import React from 'react';
import moment from 'moment';

class EventDialog extends React.Component {
	render() {
		return (
			<div>
				<a className="purple darken-4 waves-effect waves-light btn modal-trigger" href="#modal1">{this.props.event.name}</a>
				
				<div id="modal1" className="modal">
					<div className="modal-content black-text">
						<h4 className="indigo-text text-darken-4">
							{`${this.props.event.name} - ${moment(this.props.event.start_time).format('DD/MM/YY')}`}
						</h4>
						<p>
							{this.props.event.end_time && <p>Duration: {moment(this.props.event.end_time).to(moment(this.props.event.start_time), true)}</p>}
							{this.props.event.start_time && <p>Start Time: {moment(this.props.event.start_time).format('H:mm A')}</p>}
							{this.props.event.end_time && <p>End Time: {moment(this.props.event.end_time).format('H:mm A')}</p>}
							<br/>
							{this.props.event.description}
						</p>
					</div>
					<div className="modal-footer">
						<a className="modal-action modal-close waves-effect waves-purple btn-flat">Close</a>
					</div>
				</div>
			</div>
		);
	}
}

export default EventDialog;