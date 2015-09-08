import React from 'react';
import Main from '../components/Main';
import Home from '../components/home/Home';
import Policies from '../components/policies/Policies';
import Staff from '../components/staff/Staff';
import {Router, Route, DefaultRoute} from 'react-router';

export default (
	<Route name="app" path="/" handler={Main}>
		<Route name="policies" path="policies/" handler={Policies} />
		<Route name="staff" path="staff/" handler={Staff} />
		<DefaultRoute handler={Home} />
	</Route>
);