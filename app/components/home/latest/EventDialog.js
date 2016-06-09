import React from 'react';
import moment from 'moment';

const EventDialog = ({ event }) => (
  <div>
    <a className="purple darken-4 waves-effect waves-light btn modal-trigger col-xs-12" href={`#modal${event.id}`}>
      {event.name}
    </a>

    <div id={`modal${event.id}`} className="modal">
      <div className="modal-content black-text">
        <h4 className="indigo-text text-darken-4">
          {`${event.name} - ${moment(event.start_time).format('DD/MM/YY')}`}
        </h4>
        {event.end_time && <p>Duration: {moment(event.end_time).to(moment(event.start_time), true)}</p>}
        {event.start_time && <p>Start Time: {moment(event.start_time).format('H:mm A')}</p>}
        {event.end_time && <p>End Time: {moment(event.end_time).format('H:mm A')}</p>}
        <br />
        <p style={{ whiteSpace: 'pre-line' }}>
          {event.description}
        </p>
      </div>
      <div className="modal-footer">
        <a className="modal-action modal-close waves-effect waves-purple btn-flat">Close</a>
      </div>
    </div>
  </div>
);

export default EventDialog;
