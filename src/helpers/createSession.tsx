import BaseAPI from "./baseapi";
import { API_URL } from "../config";

function validate_sessionid() {
	
	const sessionid = document.cookie
		.split('; ')
		.find(row => row.startsWith('sessionid'))
		?.split('=')[1];

	if (sessionid) {
		return true;
	} else {
		return false;
	}
}

async function createSession() {

	const url = `${API_URL}/create_session`;
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { validate_sessionid, createSession };