import BaseAPI from "./baseapi";

async function getCSRF() {

	const url = "https://dumbsplain-v2-775ed0b11db8.herokuapp.com/csrf_token";
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getCSRF };