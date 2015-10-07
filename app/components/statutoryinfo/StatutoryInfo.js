import React from 'react';
import helpers from '../../utils/helpers';
import CollapsibleAccordian from '../common/CollapsibleAccordian';


class StatutoryInfo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			statuatory_info: []
		};
	}
	componentDidMount(){
		helpers.getStatutoryInfo
		.then((response) => {
			this.setState({
				statuatory_info: response.data
			});
		});
	}
	render() {
		return (
			<div className="row">
				<div className="container">
					<h2 className="indigo-text text-darken-4">Statutory Information</h2>
					<p className="flow-text">
						If you are interested, there is also some statutory information and finance on 
						<a href="http://www.heartsacademytrust.co.uk/trust-information/finance-and-statutory-info/" target="_blank"> Hearts Academy Trust </a>
						page which could be related.
					</p>
					<p className="flow-text">
						You can find all the information on the schools expenses, premiums, provisions 
						and general finances here:
					</p>
					<CollapsibleAccordian data={this.state.statuatory_info}
						title_key='title'
						extra_notes_key='description'
						date_published_key='date_published'
						date_format='YYYY'
						file_key='file' 
						show_info_icon={true}
						show_time_icon={false} 
						deadline_date={false} />
				</div>
			</div>
		);
	}
}

export default StatutoryInfo;