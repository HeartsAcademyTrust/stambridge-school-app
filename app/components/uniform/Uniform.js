import React from 'react';
import {List, ListItem} from 'material-ui';

class Uniform extends React.Component {
	render(){
		return(
			<div className="row">
				<div className="container">
					<h1 className="indigo-text text-darken-4 center-align">School Uniform</h1>
					<div className="col-xs-12 col-md-6">
						<List>
						  <ListItem 
						  	primaryText="Shirt or blouse to be worn with tie." 
						  	leftIcon=<i className="material-icons purple-text text-darken-4">done</i> 
						  	disabled={true}/>
						  <ListItem 
							  primaryText="Grey trousers/skirts." 
							  leftIcon=<i className="material-icons purple-text text-darken-4">done</i> 
							  disabled={true}/>
						  <ListItem 
							  primaryText="Black school shoes." 
							  leftIcon=<i className="material-icons purple-text text-darken-4">done</i> 
							  disabled={true}/>
						  <ListItem 
							  primaryText="Blue 'V' neck sweatshirt / jumper" 
							  leftIcon=<i className="material-icons purple-text text-darken-4">done</i> 
							  disabled={true}/>
						  <ListItem 
							  primaryText="Tie - Yellow & Blue" 
							  leftIcon=<i className="material-icons purple-text text-darken-4">done</i> 
							  disabled={true}/>
						</List>
					</div>

					<div className="col-xs-12 col-md-6">
						<div className="col-xs-12 col-sm-6 col-lg-8 col-lg-offset-2">
							<img className="materialboxed img-responsive" width="175" src="../images/UNIFORM_skyehenry.jpg" />
						</div>
						<div className="col-xs-12 col-sm-6 col-lg-12">
							<div className="col-lg-6">
							<img className="materialboxed img-responsive" width="191" src="../images/UNIFORM_henry.jpg" />
							</div>
							<div className="col-lg-6">
							<img className="materialboxed img-responsive" width="191" src="../images/UNIFORM_skye.jpg" />
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
						<List>
						  <ListItem 
						  	href="http://www.schooltrendsonline.com/schools/stambridgeprimaryschoolss42ap/"
						  	primaryText="School Trends Online Website" 
						  	leftIcon=<i className="material-icons purple-text text-darken-4">shopping_cart</i> />
						  <ListItem 
							  primaryText="Danielle's (mapped below)"  
							  initiallyOpen={true}
							  leftIcon=<i className="material-icons purple-text text-darken-4">business</i>
							  nestedItems={[
					      <ListItem 
					      href="http://www.daniellesshop.co.uk"
					      primaryText="Website" 
					      leftIcon=<i className="material-icons purple-text text-darken-4">shopping_cart</i> />,
					      <ListItem
					      	href="tel:+441702 547 738"
					        primaryText="01702 547 738"
					        leftIcon=<i className="material-icons purple-text text-darken-4">phone</i> />
					      ]}
			        />
						</List>
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