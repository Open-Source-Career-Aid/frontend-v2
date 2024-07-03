import BaseAPI from "./baseapi";

async function getCSRF() {

	const url = "http://127.0.0.1:8000/csrf_token";
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getCSRF };