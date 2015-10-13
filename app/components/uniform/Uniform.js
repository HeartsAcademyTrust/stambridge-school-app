import React from 'react';

class Uniform extends React.Component {
	componentDidUpdate() {
		$('#collapsible').collapsible();
	}
	render(){
		return(
			<div className="row">
				<div className="container">
					<h1 className="indigo-text text-darken-4 center-align">School Uniform</h1>
					<div className="col-xs-12 col-md-6">
						<ul className="collapsible z-depth-0" style={{borderColor:'white'}}>
							<div className="collapsible-header"><i className="material-icons purple-text text-darken-4">done</i> Shirt or blouse to be worn with tie.</div>
							<div className="collapsible-header"><i className="material-icons purple-text text-darken-4">done</i> Grey trousers/skirts.</div>
							<div className="collapsible-header"><i className="material-icons purple-text text-darken-4">done</i> Black school shoes.</div>
							<div className="collapsible-header"><i className="material-icons purple-text text-darken-4">done</i> Blue 'V' neck sweatshirt / jumper</div>
							<div className="collapsible-header"><i className="material-icons purple-text text-darken-4">done</i> Tie - Yellow & Blue</div>
						</ul>
					</div>

					<div className="col-xs-12 col-md-6">
						<div className="col-xs-12 col-sm-6 col-lg-8 col-lg-offset-2">
							<img className="img-responsive" width="175" src="../images/UNIFORM_skyehenry.jpg" />
						</div>
						<div className="col-xs-12 col-sm-6 col-lg-12">
							<div className="col-lg-6">
								<img className="img-responsive" width="191" src="../images/UNIFORM_henry.jpg" />
							</div>
							<div className="col-lg-6">
								<img className="img-responsive" width="191" src="../images/UNIFORM_skye.jpg" />
							</div>
						</div>
					</div>
					
					<div className="col-xs-12">
						<p className="flow-text">
							Foundation & Y1 may wear a white polo shirt. 
						</p>
						<p className="flow-text">
							P.E Kit
							White Stambridge polo, Blue shorts, black plimsoles
							Tracksuit & Trainers may be worn for winter months
						</p>
					</div>

					<div className="row col-xs-12">
						<h5 className="indigo-text text-darken-4">Where to Buy</h5>
						<p className="flow-text">
							To buy the uniform either:
						<ul style={{borderColor:'white'}} className="collapsible z-depth-0" data-collapsible="accordion">
							<a href="http://www.schooltrendsonline.com/schools/stambridgeprimaryschoolss42ap/" target="_blank">
							<div className="collapsible-header active hoverable">
								<i className="material-icons purple-text text-darken-4">shopping_cart</i>School Trends Online Website
							</div>								
							</a>
							<li>
								<div className="collapsible-header active hoverable"><i className="material-icons purple-text text-darken-4">business</i>Danielles (mapped below)</div>
								<div className="collapsible-body hoverable">
									<ul>
										<a href="http://www.daniellesshop.co.uk" target="_blank">
											<div style={{paddingLeft:'36px'}} className="collapsible-header hoverable">
												<i className="material-icons purple-text text-darken-4">shopping_cart</i> Website
											</div>
										</a>
										<a href="tel:+441702 547 738">
											<div style={{paddingLeft:'36px'}} className="collapsible-header hoverable">
												<i className="material-icons purple-text text-darken-4">phone</i> 01702 547 738
											</div>
										</a>
									</ul>
								</div>
							</li>
						</ul>
						</p>

						<iframe className="col-xs-12"
							height="350" 
							frameBorder="0" 
							scrolling="no" 
							marginHeight="0" 
							marginWidth="0" 
							style={{border:0}}
							src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAV97yzUE-uxWk2rMFZ8wmpQNvSWHrvCfQ
							&q=7+Roche+Cl,+Rochford,+Essex+SS4+1PX" allowFullScreen>
						</iframe>
					</div>
				</div>			
			</div>
		);
	}
}

export default Uniform;