import React from 'react';
import Main from '../components/Main';
import Home from '../components/home/Home';
import ContactUs from '../components/contactus/ContactUs';
import Curriculum from '../components/curriculum/Curriculum';
import Policies from '../components/policies/Policies';
import SchoolPerformance from '../components/schoolperformance/SchoolPerformance';
import Staff from '../components/staff/Staff';
import StatutoryInfo from '../components/statutoryinfo/StatutoryInfo';
import Uniform from '../components/uniform/Uniform';
import Vacancies from '../components/vacancies/Vacancies';
import Calendar from '../components/calendar/Calendar';
import LettersHome from '../components/lettershome/LettersHome';
import Newsletters from '../components/newsletters/Newsletters';
import TermDates from '../components/termdates/TermDates';
import SchoolMenu from '../components/schoolmenu/SchoolMenu';
import Children from '../components/children/Children';
import Admissions from '../components/admissions/Admissions';
import Gallery from '../components/gallery/Gallery';
import {Route, DefaultRoute} from 'react-router';

export default (
	<Route name="app" path="/" handler={Main}>
		<Route name="contact-us" path="contact-us/" handler={ContactUs} />
		<Route name="curriculum" path="curriculum/" handler={Curriculum} />
		<Route name="policies" path="policies/" handler={Policies} />
		<Route name="school-performance" path="school-performance/" handler={SchoolPerformance} />
		<Route name="staff" path="staff/" handler={Staff} />
		<Route name="statutory-info" path="statutory-info/" handler={StatutoryInfo} />
		<Route name="uniform" path="uniform/" handler={Uniform} />
		<Route name="vacancies" path="vacancies/" handler={Vacancies} />
		<Route name="calendar" path="calendar/" handler={Calendar} />
		<Route name="letters-home" path="letters-home/" handler={LettersHome} />
		<Route name="newsletters" path="newsletters/" handler={Newsletters} />
		<Route name="term-dates" path="term-dates/" handler={TermDates} />
		<Route name="school-menu" path="school-menu/" handler={SchoolMenu} />
		<Route name="children" path="children/" handler={Children} />
		<Route name="admissions" path="admissions/" handler={Admissions} />
		<Route name="gallery" path="gallery/" handler={Gallery} />
		<DefaultRoute handler={Home} />
	</Route>
);