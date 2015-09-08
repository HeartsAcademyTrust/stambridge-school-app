import React from 'react';

class Navigation extends React.Component{
	render(){
		return (
			<nav>
				<div className="nav-wrapper indigo darken-4 col s12">
					<ul id="nav-mobile" className="hide-on-med-and-down">
		        <li className="col s2 center-align"><a className="dropdown-button" href="#" data-activates="aboutDropdown">About<i className="material-icons right">arrow_drop_down</i></a></li>
		         <li className="col s2 center-align"><a className="dropdown-button" href="#" data-activates="parentsDropdown">Parents<i className="material-icons right">arrow_drop_down</i></a></li>
		        <li className="col s2 center-align"><a href="#">Children</a></li>
		        <li className="col s2 center-align"><a href="#">Admissions</a></li>
		        <li className="col s2 center-align"><a href="#">Gallery</a></li>
		        <li className="col s2 center-align"><a href="#">Contact Us</a></li>
  				</ul>

  				<ul id="aboutDropdown" className="dropdown-content">
  					<li><a href="#">Statutory Information</a></li>
						<li className="divider"></li>
						<li><a href="#policies/">Policies</a></li>
						<li className="divider"></li>
						<li><a href="#">Curriculum</a></li>
						<li className="divider"></li>
						<li><a href="#">School Performance</a></li>
						<li className="divider"></li>
						<li><a href="#staff/">Staff</a></li>
						<li className="divider"></li>
						<li><a href="#">Uniform</a></li>
						<li className="divider"></li>
						<li><a href="#">Vacancies</a></li>
					</ul>

					<ul id="parentsDropdown" className="dropdown-content">
  					<li><a href="#">Calender</a></li>
						<li className="divider"></li>
						<li><a href="#policies/">Letters Home</a></li>
						<li className="divider"></li>
						<li><a href="#">Newsletters</a></li>
						<li className="divider"></li>
						<li><a href="#">School Day</a></li>
						<li className="divider"></li>
						<li><a href="#staff/">School Menu</a></li>
						<li className="divider"></li>
					</ul>

					<ul id="childrenDropdown" className="dropdown-content">
  					<li><a href="#">Statutory Information</a></li>
						<li className="divider"></li>
						<li><a href="#policies/">Policies</a></li>
						<li className="divider"></li>
						<li><a href="#">Curriculum</a></li>
						<li className="divider"></li>
						<li><a href="#">School Performance</a></li>
						<li className="divider"></li>
						<li><a href="#staff/">Staff</a></li>
						<li className="divider"></li>
						<li><a href="#">Uniform</a></li>
						<li className="divider"></li>
						<li><a href="#">Vacancies</a></li>
					</ul>
				</div>
			</nav>
		)
	}
};

export default Navigation