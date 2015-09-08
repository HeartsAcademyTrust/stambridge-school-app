import React from 'react';
import {RouteHandler} from 'react-router';
import mui from 'material-ui';
import Banner from './Banner';
import Navigation from './Navigation';

var ThemeManager = new mui.Styles.ThemeManager();

class Main extends React.Component{
  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
	render(){
		return (
			<div>
				<Banner />

				<div className="row">
					<Navigation />

					<div className="white row">
						<RouteHandler />
					</div>
				</div>
			</div>
		)
	}
};

Main.childContextTypes = {
	muiTheme: React.PropTypes.object
};

export default Main;