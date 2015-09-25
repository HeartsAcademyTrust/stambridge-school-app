import React from 'react';
import helpers from '../utils/helpers';

class Navigation extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			school_menu: {}
		};
	}
	componentDidMount(){
		helpers.getSchoolMenu
		.then((response) => {
			this.setState({
				school_menu: response.data
			});
		})
		.catch((response) => {
			console.log(response);
		});
		$('.button-collapse').sideNav();
	}
	render(){
		var imgStyle = {
			borderRadius: '75px',
			padding: '15px 0px'
		};
		return (
			<header>
				<nav>
					<div className="nav-wrapper indigo darken-4">
						<a href="#" data-activates="mobile-nav" className="button-collapse col-xs-4 col-s-3 col-md-3">
							<i className="material-icons">menu</i>
						</a>
						<a href="#" className="brand-logo col-xs-8 col-sm-9 col-md-9 hidden-lg-up ">
							<div className="col-md-9">
								Stambridge Primary 
								<span className="hidden-xs-down"> School</span>
							</div>
						</a>						
						<ul className="side-nav" id="mobile-nav">
							<li> 
								<div className="col-xs-12">
										<img className="img-responsive" src="../images/stambridgelogosmall.jpg" style={imgStyle}></img>
								</div>
							</li>
							<li className="divider"></li>
							<ul className="collapsible" data-collapsible="accordion">
								<li>
									<a className="collapsible-header waves-effect waves-purple"><b>About</b>
										<i className="material-icons right">arrow_drop_down</i>
									</a>
									<div className="collapsible-body">
										<ul>
											<li><a className="waves-effect waves-indigo" href="#">Curriculum</a></li>
											<li><a className="waves-effect waves-indigo" href="#policies/">Policies</a></li>
											<li><a className="waves-effect waves-indigo" href="#">School Performance</a></li>
											<li><a className="waves-effect waves-indigo" href="#staff/">Staff</a></li>
											<li><a className="waves-effect waves-indigo" href="#statutory-info/">Statutory Information</a></li>
											<li><a className="waves-effect waves-indigo" href="#uniform/">Uniform</a></li>
											<li><a className="waves-effect waves-indigo" href="#vacancies/">Vacancies</a></li>
										</ul>
									</div>
								</li>
								<li>
									<a className="collapsible-header waves-effect waves-purple"><b>Parents</b>
										<i className="material-icons right">arrow_drop_down</i>
									</a>
									<div className="collapsible-body">
										<ul>
											<li><a className="waves-effect waves-indigo" href="#calendar/">Calender</a></li>
											<li><a className="waves-effect waves-indigo" href="#letters-home/">Letters Home</a></li>
											<li><a className="waves-effect waves-indigo" href="#newsletters/">Newsletters</a></li>
											<li><a className="waves-effect waves-indigo" href="#">School Day</a></li>
											<li><a className="waves-effect waves-indigo" href="#school-menu/">School Menu</a></li>
										</ul>
									</div>
								</li>		
							</ul>
							<ul className="non-dropdown">
								<li><a className="waves-effect waves-indigo" href="#"><b>Children</b></a></li>
								<li><a className="waves-effect waves-indigo" href="#"><b>Admissions</b></a></li>
								<li><a className="waves-effect waves-indigo" href="#"><b>Gallery</b></a></li>
								<li><a className="waves-effect waves-indigo" href="#contact-us/"><b>Contact Us</b></a></li>
							</ul>
						</ul>

						<ul className="hidden-md-down">
							<li className="col-lg-2 col-xl-2 center-align no-pads">
								<a className="dropdown-button waves-effect col-xs-12" href="#" data-activates="aboutDropdown">
									About
									<i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
							<li className="col-lg-2 col-xl-2 center-align no-pads">
								<a className="dropdown-button waves-effect col-xs-12" href="#" data-activates="parentsDropdown">
									Parents
									<i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
							<li className="col-lg-2 col-xl-2 center-align no-pads waves-effect"><a href="#">Children</a></li>
							<li className="col-lg-2 col-xl-2 center-align no-pads waves-effect"><a href="#">Admissions</a></li>
							<li className="col-lg-2 col-xl-2 center-align no-pads waves-effect"><a href="#">Gallery</a></li>
							<li className="col-lg-2 col-xl-2 center-align no-pads waves-effect"><a href="#contact-us/">Contact Us</a></li>
						</ul>

						<ul id="aboutDropdown" className="dropdown-content">
							<li><a className="purple darken-4 white-text" href="#">Curriculum</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#policies/">Policies</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#">School Performance</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#staff/">Staff</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#statutory-info/">Statutory Information</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#uniform/">Uniform</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#vacancies/">Vacancies</a></li>
						</ul>

						<ul id="parentsDropdown" className="dropdown-content">
							<li><a className="purple darken-4 white-text" href="#calendar/">Calender</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#letters-home/">Letters Home</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#newsletters/">Newsletters</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#">School Day</a></li>
							<li className="divider"></li>
							<li><a className="purple darken-4 white-text" href="#school-menu/">School Menu</a></li>
						</ul>
					</div>
				</nav>

				
			</header>
		);
	}
}

export default Navigation;