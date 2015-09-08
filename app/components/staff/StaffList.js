import React from 'react';

class StaffList extends React.Component{
	render(){
		var staff = this.props.staff.map((staff, index) => {
			return <a href={staff.file} className="collection-item" key={index}>{staff.title}</a>
		});
		return(
			<ul className="collection">
				{staff}
      		</ul>
		)
	}
};

export default StaffList;