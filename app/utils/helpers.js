import axios from 'axios';
import moment from 'moment';

var host = 'http://localhost:8000';
var school = 'Stambridge%20Primary%20School';

function getPolicies(){
	return axios.get(`${host}/schools/policies/?school=${school}`);
}

function getDepartments(){
	return axios.get(`${host}/jobs/departments/?school=${school}`);
}

function getEvents(min_date, max_date){
	return axios.get(`${host}/events/?school=${school}&term=False&min_date=${min_date}&max_date=${max_date}`);
}

function getNewsletters(){
	return axios.get(`${host}/schools/newsletters/?school=${school}`);
}

function getTermDates(){
	return axios.get(`${host}/events/?school=${school}&term=True`);
}

function getStatutoryInfo(){
	return axios.get(`${host}/schools/statuatory-info/?school=${school}`);
}

function getSchoolMenu(){
	return axios.get(`${host}/schools/${school}/school-menu/`);
}

function getYears(){
	return axios.get(`${host}/schools/years/?school=${school}`);
}

var helpers = {
	getEvents(min_date, max_date) {
		return getEvents(min_date, max_date);
	},
	getNewsletters: getNewsletters(),
	getPolicies: getPolicies(),
	getDepartments: getDepartments(),
	getSchoolMenu: getSchoolMenu(),
	getStatutoryInfo: getStatutoryInfo(),
	getYears: getYears(),
	getLatest() {
		return axios.all([
			getEvents(moment().startOf('week').add(1, 'd').format('YYYY-MM-DD'), 
											moment().endOf('week').add(1, 'd').format('YYYY-MM-DD')),
			getNewsletters(),
			getTermDates()])
		.then((arr) => {
			return {
				events: arr[0].data,
				latest_newsletter: arr[1].data[0],
				term_dates: arr[2].data
			};
		});
	}	
};

export default helpers;