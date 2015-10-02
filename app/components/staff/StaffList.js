import React from 'react';

class StaffList extends React.Component{
	render(){
		var staff = this.props.staff.map((staff, index) => {
			return (
				<div className="col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4" key={index}>
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-purple">
              <img className="activator img-responsive" src={staff.photo} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {staff.name}
                {staff.extra_info && <i className="material-icons right">more_vert</i>}
              </span>
              {staff.role && <p>{staff.role}</p>}
            </div>
            {staff.extra_info && <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{staff.name}<i className="material-icons right">close</i></span>
              <p>{staff.extra_info}</p>
            </div>}
          </div>
        </div>
			);
		});

		return(
			<div>
				{staff}
      </div>
		);
	}
}

export default StaffList;