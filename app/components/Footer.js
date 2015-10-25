import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer className="page-footer indigo darken-4">
          <div className="row">
            <div className="col-xs-11 col-xs-offset-1 col-lg-5 col-lg-offset-1">
              <h5 className="white-text">Contact Us</h5>
              <p className="col-xs-12 col-sm-6 grey-text text-lighten-4">
                Stambridge Primary School<br/>
								Stambridge Road<br/>
								Stambridge<br/>
								Essex<br/>
								SS4 2AP<br/>
              </p>
              <p className="col-xs-12 col-sm-6">
                <a href="tel:+441702 544369"><i className="material-icons">phone</i> 01702 544369</a>
                <br/>
								<a href="fax:+441702 530713"><i className="material-icons">print</i> 01702 530713</a>
								<br/>
								<a href="mailto:admin@stambridge.essex.sch.uk">
									<i className="small material-icons">email</i>
                    admin@stambridge.essex.sch.uk
								</a>
              </p>
            </div>
            
            <div className="col-xs-11 col-xs-offset-1 col-lg-5 col-lg-offset-1">
              <h5 className="white-text">Useful Links</h5>
              <ul>
                <li>
                  <a href="http://www.heartsacademytrust.co.uk/">
                    HEARTS Academy Trust
                  </a>
                </li>
                <li>
                  <a href="http://www.wickfordcofe.essex.sch.uk/welcome2.htm" target="_blank">
                    The Wickford Church Of England School
                  </a>
                </li>
                <li>
                  <a href="http://www.watermanprimaryschool.ik.org/" target="_blank">
                    Waterman Primary School
                  </a>
                </li>
                <li>
                  <a href="http://www.briscoe-pri.essex.sch.uk/" target="_blank">
                    Briscoe Primary School and Nursery
                  </a>
                </li>
              </ul>
            </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2015 Created By <a href="https://uk.linkedin.com/in/vasilyshelkov" target="_blank">Vasily Shelkov</a>
          </div>
        </div>
      </footer>
		);
	}
}

export default Footer;