import React from 'react';
import StaffList from './StaffList';
import helpers from '../../utils/helpers';

class Staff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: []
    };
  }

  componentDidMount() {
    helpers.getDepartments
    .then((response) => {
      this.setState({
        departments: response.data
      });
    });
  }

  render() {
    const departments = this.state.departments.map((department, index) => {
      if (department.staff.length > 0) {
        return (
          <div className="row" key={index}>
            <h5 className="indigo-text text-darken-4">{department.name}</h5>
            <StaffList staff={department.staff} />
          </div>
        );
      }

      return (
        <p className="flow-text purple-text text-darken-4">
          No staff members are currently listed for {department.name}
        </p>
      );
    });

    return (
      <div className="row">
        <div className="container">
          <h1 className="indigo-text text-darken-4">Meet Our Staff</h1>
          <p className="flow-text">
            Being a small school, we benefit from a close working relationship with the children,
            providing a very relaxed and comforting environment for your child to grow.
          </p>
          {departments}
        </div>
      </div>
		);
  }
}

export default Staff;
