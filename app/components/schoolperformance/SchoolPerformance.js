import React from 'react';
import helpers from '../../utils/helpers';
import CollapsibleAccordian from '../common/CollapsibleAccordian';

class SchoolPerformance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      performance_reports: []
    };
  }

  componentDidMount() {
    helpers.getPerformanceReports.then((response) => {
      this.setState({
        performance_reports: response.data
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="indigo-text text-darken-4">School Performance</h1>
          <p className="flow-text">
						The school performance report will be made
						available as soon as it is released by Ofsted:
          </p>
          <CollapsibleAccordian
            data={this.state.performance_reports}
            title_key="title"
            extra_notes_key="extra_notes"
            date_published_key="date_published"
            date_format="YYYY"
            file_key="file"
            show_info_icon={true}
            show_time_icon={false}
            deadline_date={false}
          />
        </div>
      </div>
		);
  }
}

export default SchoolPerformance;
