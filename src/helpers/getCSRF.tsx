import BaseAPI from "./baseapi";

async function getCSRF() {

	const url = "https://apiv2.dumbsplain.com/csrf_token";
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getCSRF };