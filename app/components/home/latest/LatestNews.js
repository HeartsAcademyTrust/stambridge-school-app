import React from 'react';
import helpers from '../../../utils/helpers';
import ThisWeek from './ThisWeek';

class LatestNews extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			events: []
		};
	}
	componentDidMount(){
		helpers.getLatestEvents
		  .then((response) => {
		    this.setState({
		    	events: response.data
		    });
		  })
		  .catch((response) => {
		    console.log(response);
		  });
	}
	render(){
		return (
			<div>
				<div className="col s12 m6">
					<ThisWeek events={this.state.events}/>
				</div>

				<div className="col s12 m6">
					<div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Latest Newsletter</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>

					<div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Upcoming Term Dates</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
				</div>
			</div>	
		)
	}
};

export default LatestNews