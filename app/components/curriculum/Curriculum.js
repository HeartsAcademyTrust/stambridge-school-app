import React from 'react';
import CollapsibleAccordian from '../common/CollapsibleAccordian';
import helpers from '../../utils/helpers';

class Curriculum extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			curriculum: []
		};
	}
	componentDidMount(){
		helpers.getCurriculum
		.then((response) => {
			this.setState({
				curriculum: response.data
			});
		});
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className="indigo-text text-darken-4">Curriculum</h1>
					<CollapsibleAccordian data={this.state.curriculum}
						title_key='title'
						extra_notes_key='extra_notes'
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

export default Curriculum;