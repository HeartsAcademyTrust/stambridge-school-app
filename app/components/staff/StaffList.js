import React from 'react';

const StaffList = ({ staff }) => (
  <div>
    {
      staff.map((member, index) => (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4" key={index}>
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-purple">
              <img className="activator img-responsive" src={member.photo} />
            </div>

            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {member.name}
                {member.extra_info && <i className="material-icons right">more_vert</i>}
              </span>
              {member.role && <p>{member.role}</p>}
            </div>

            {
              member.extra_info && <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  {member.name}<i className="material-icons right">close</i></span>
                <p style={{ whiteSpace: 'pre-line' }}>{member.extra_info}</p>
              </div>
            }
          </div>
        </div>
      ))
    }
  </div>
);

export default StaffList;
