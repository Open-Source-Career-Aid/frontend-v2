import BaseAPI from "./baseapi";

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

	const url = "https://apiv2.dumbsplain.com/create_session";
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { validate_sessionid, createSession };