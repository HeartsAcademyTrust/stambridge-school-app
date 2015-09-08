import axios from 'axios';
import moment from 'moment';

var host = 'http://localhost:8000';
var school = 'Stambridge%20Primary%20School';

function getPolicies(){
	return axios.get(`${host}/schools/policies/?school=${school}`);
};

function getStaff(){
	return axios.get(`${host}/jobs/staff/?school=${school}`);
};

function getLatestEvents(min_date, max_date){
	return axios.get(`${host}/events/?school=${school}&holiday=False&min_date=${min_date}&max_date=${max_date}`);
};

var helpers = {
	getPolicies: getPolicies(),
	getStaff: getStaff(),
	getLatestEvents: getLatestEvents(moment().startOf('week').format('YYYY-MM-DD'), moment().endOf('week').format('YYYY-MM-DD'))
};

export default helpers;