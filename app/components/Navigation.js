import React from 'react';
import helpers from '../utils/helpers';
import {Link} from 'react-router';

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
						<a data-activates="mobile-nav" className="button-collapse col-xs-3 col-sm-3 col-md-3">
							<i className="material-icons">menu</i>
						</a>
						<a href="/" className="brand-logo col-xs-9 col-sm-9 col-md-9 hidden-lg-up ">
							<div className="col-md-8">
								Stambridge Primary 
								<span className="hidden-xs-down"> School</span>
							</div>
						</a>						
						<ul className="side-nav" id="mobile-nav">
							<div className="col-xs-12">
								<Link style={{height: 'auto'}} to="/">
									<img className="img-responsive" src="../images/stambridgelogosmall.jpg" style={imgStyle}></img>
								</Link>
							</div>
							<li className="divider"></li>
							<ul className="collapsible" data-collapsible="accordion">
								<li>
									<a className="collapsible-header waves-effect waves-purple"><b>About</b>
										<i className="material-icons right">arrow_drop_down</i>
									</a>
									<div className="collapsible-body">
										<ul>
											<li><Link className="waves-effect waves-indigo" to="/curriculum">Curriculum</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/policies">Policies</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/school-performance">School Performance</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/staff">Staff</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/statutory-info">Statutory Information</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/uniform">Uniform</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/vacancies">Vacancies</Link></li>
										</ul>
									</div>
								</li>
								<li>
									<a className="collapsible-header waves-effect waves-purple"><b>Parents</b>
										<i className="material-icons right">arrow_drop_down</i>
									</a>
									<div className="collapsible-body">
										<ul>
											<li><Link className="waves-effect waves-indigo" to="/calendar">Calendar</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/letters-home">Letters Home</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/newsletters">Newsletters</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/term-dates">Term Dates</Link></li>
											<li><Link className="waves-effect waves-indigo" to="/school-menu">School Menu</Link></li>
										</ul>
									</div>
								</li>		
							</ul>
							<ul className="non-dropdown">
								<li><Link className="waves-effect waves-indigo" to="/children"><b>Children</b></Link></li>
								<li><Link className="waves-effect waves-indigo" to="/admissions"><b>Admissions</b></Link></li>
								<li><Link className="waves-effect waves-indigo" to="/gallery"><b>Gallery</b></Link></li>
								<li><Link className="waves-effect waves-indigo" to="/contact-us"><b>Contact Us</b></Link></li>
							</ul>
						</ul>

						<ul className="hidden-md-down">
							<li className="col-lg-2 col-xl-2 center-align no-pads">
								<a className="dropdown-button waves-effect col-xs-12" data-activates="aboutDropdown">
									About
									<i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
							<li className="col-lg-2 col-xl-2 center-align no-pads">
								<a className="dropdown-button waves-effect col-xs-12" data-activates="parentsDropdown">
									Parents
									<i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
							<li className="col-lg-2 col-xl-2 center-align no-pads waves-effect"><Link to="/children">Children</Link></li>
							<li className="col-lg-2 col-xl-2 center-align no-pads waves-effect"><Link to="/admissions">Admissions</Link></li>
							<li className="col-lg-2 col-xl-2 center-align no-pads waves-effect"><Link to="/gallery">Gallery</Link></li>
							<li className="col-lg-2 col-xl-2 center-align no-pads waves-effect"><Link to="/contact-us">Contact Us</Link></li>
						</ul>

						<ul id="aboutDropdown" className="dropdown-content">
							<li><Link className="purple darken-4 white-text" to="/curriculum">Curriculum</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/policies">Policies</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/school-performance">School Performance</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/staff">Staff</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/statutory-info">Statutory Information</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/uniform">Uniform</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/vacancies">Vacancies</Link></li>
						</ul>

						<ul id="parentsDropdown" className="dropdown-content">
							<li><Link className="purple darken-4 white-text" to="/calendar">Calendar</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/letters-home">Letters Home</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/newsletters">Newsletters</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/term-dates">Term Dates</Link></li>
							<li className="divider"></li>
							<li><Link className="purple darken-4 white-text" to="/school-menu">School Menu</Link></li>
						</ul>
					</div>
				</nav>

				
			</header>
		);
	}
}

export default Navigation;