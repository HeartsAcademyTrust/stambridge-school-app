import React from 'react';
import Main from '../components/Main';
import Home from '../components/home/Home';
import ContactUs from '../components/contactus/ContactUs';
import Policies from '../components/policies/Policies';
import Staff from '../components/staff/Staff';
import StatuatoryInfo from '../components/statuatoryinfo/StatuatoryInfo';
import Uniform from '../components/uniform/Uniform';
import Vacancies from '../components/vacancies/Vacancies';
import Newsletters from '../components/newsletters/Newsletters';
import {Router, Route, DefaultRoute} from 'react-router';

export default (
	<Route name="app" path="/" handler={Main}>
		<Route name="contact-us" path="contact-us/" handler={ContactUs} />
		<Route name="policies" path="policies/" handler={Policies} />
		<Route name="staff" path="staff/" handler={Staff} />
		<Route name="statuatory-info" path="statuatory-info/" handler={StatuatoryInfo} />
		<Route name="uniform" path="uniform/" handler={Uniform} />
		<Route name="vacancies" path="vacancies/" handler={Vacancies} />
		<Route name="newsletters" path="newsletters/" handler={Newsletters} />
		<DefaultRoute handler={Home} />
	</Route>
);