import React from 'react';
import CollapsibleAccordian from '../common/CollapsibleAccordian';

class YearsTabs extends React.Component {
  componentDidUpdate() {
    $('ul.tabs').tabs();
    $('.collapsible').collapsible();
  }

  render() {
    const yearsTabs = this.props.years.map((year, index) => (
      <li className="tab col-xs-2" key={index} style={{ minWidth: '60px' }}>
        <a href={`#${index}`}>
          <b>{year.year}</b>
        </a>
      </li>
    ));

    const yearsContent = this.props.years.map((year, index) => (
      <div id={index} className="col-xs-12" key={index}>
        {
          year.letters.length === 0 ?
            <p className="flow-text purple-text text-darken-4">
              No letters currently uploaded for <b>{year.year}</b>
            </p>
          :
            <CollapsibleAccordian
              data={year.letters}
              title_key="title"
              extra_notes_key="description"
              date_published_key="deadline"
              date_format="ddd Do MMM"
              file_key="file"
              show_info_icon={false}
              show_time_icon={true}
              deadline_date={true}
            />
				}
      </div>
		));

    return (
      <div className="row">
        <div className="col-xs-12">
          <ul className="tabs z-depth-1">
            {yearsTabs}
          </ul>
        </div>
        {yearsContent}
      </div>
		);
  }
}

export default YearsTabs;
