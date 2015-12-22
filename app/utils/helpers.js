import axios from 'axios';
import moment from 'moment';

var host = 'http://api-stambridge.rhcloud.com';
var school = 'Stambridge%20Primary%20School';

function getPolicies(){
	return axios.get(`${host}/schools/policies/?school=${school}`);
}

function getPerformanceReports(){
	return axios.get(`${host}/schools/performance/?school=${school}`);
}

function getDepartments(){
	return axios.get(`${host}/jobs/departments/?school=${school}`);
}

function getEvents(min_date, max_date){
	return axios.get(`${host}/events/?school=${school}&min_start_date=${min_date}&max_start_date=${max_date}&term=False`);
}

function getNewsletters(){
	return axios.get(`${host}/schools/newsletters/?school=${school}`);
}

function getSchoolCurriculum(){
	return axios.get(`${host}/schools/school-curriculum/?school=${school}`);
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

function getSchoolAdmissions(){
	return axios.get(`${host}/schools/${school}/school-admissions/`);
}

function getYears(){
	return axios.get(`${host}/schools/years/?school=${school}`);
}

function getStambridgeFlickrPhotos(){
	return axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getContactsPublicPhotos&api_key=701429c56396a4f0cb667e3888cb9084&user_id=138772545%40N07&include_self=1&format=json&nojsoncallback=1')
}

var helpers = {
	getEvents(min_date, max_date) {
		return getEvents(min_date, max_date);
	},
	getTermDates: getTermDates(),
	getNewsletters: getNewsletters(),
	getPolicies: getPolicies(),
	getStambridgeFlickrPhotos: getStambridgeFlickrPhotos(),
	getPerformanceReports: getPerformanceReports(),
	getDepartments: getDepartments(),
	getSchoolMenu: getSchoolMenu(),
	getCurriculum: getSchoolCurriculum(),
	getAdmissions: getSchoolAdmissions(),
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