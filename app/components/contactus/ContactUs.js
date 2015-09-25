import React from 'react';

class ContactUs extends React.Component{
	render() {
		return (
			<div className="row">
				<div className="container">
					<h1 className="indigo-text text-darken-4">Contact Us</h1>
					<iframe className="col-xs-12"
						height="350" 
						frameBorder="0" 
						scrolling="no" 
						marginHeight="0" 
						marginWidth="0" 
						style={{border:0}}
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAV97yzUE-uxWk2rMFZ8wmpQNvSWHrvCfQ
							&q=Stambridge+County+Primary+School" allowFullScreen>
					</iframe>
					<div className="col-xs-12 col-xs-offset-4 flow-text">
						<a href="tel:+441702 544369"><i className="material-icons">phone</i> 01702 544369</a>
						<br/>
						<a href="fax:+441702 530713"><i className="material-icons">print</i> 01702 530713</a>
						<br/>
						<a className="truncate" href="mailto:admin@stambridge.essex.sch.uk">
							<i className="small material-icons">email</i>
							admin@stambridge.essex.sch.uk
						</a>
          </div>
				</div>
			</div>
		);
	}
}

export default ContactUs;