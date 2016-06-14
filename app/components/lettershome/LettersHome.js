import React from 'react';
import YearsTabs from './YearsTabs';
import helpers from '../../utils/helpers';

class LettersHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: []
    };
  }

  componentDidMount() {
    helpers.getYears.then((response) => {
      this.setState({
        years: response.data
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <h1 className="indigo-text text-darken-4">Letters Home</h1>
          <p className="flow-text">
						Please choose the age group with the tabs below for the letters you would like to view
          </p>
          <YearsTabs years={this.state.years} data_key="letters" />
        </div>
      </div>
		);
  }
}

export default LettersHome;
