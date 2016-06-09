import React from 'react';
import SimplePage from '../common/SimplePage';
import helpers from '../../utils/helpers';

class SchoolMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {}
    };
  }

  componentDidMount() {
    helpers.getSchoolMenu.then((response) => {
      this.setState({
        menu: response.data
      });
    });
  }

  render() {
    return (
      <SimplePage
        dataExists={Object.keys(this.state.menu).length > 0}
        title="School Menu"
        description={this.state.menu.text}
        file={this.state.menu.menu}
      />
		);
  }
}

export default SchoolMenu;
