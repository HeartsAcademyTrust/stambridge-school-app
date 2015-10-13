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
import {Route, IndexRoute} from 'react-router';

export default (
	<Route name="app" path="/" component={Main}>
		<IndexRoute component={Home} />
		<Route path="contact-us" component={ContactUs} />
		<Route path="curriculum" component={Curriculum} />
		<Route path="policies" component={Policies} />
		<Route path="school-performance" component={SchoolPerformance} />
		<Route path="staff" component={Staff} />
		<Route path="statutory-info" component={StatutoryInfo} />
		<Route path="uniform" component={Uniform} />
		<Route path="vacancies" component={Vacancies} />
		<Route path="calendar" component={Calendar} />
		<Route path="letters-home" component={LettersHome} />
		<Route path="newsletters" component={Newsletters} />
		<Route path="term-dates" component={TermDates} />
		<Route path="school-menu" component={SchoolMenu} />
		<Route path="children" component={Children} />
		<Route path="admissions" component={Admissions} />
		<Route path="gallery" component={Gallery} />
	</Route>
);