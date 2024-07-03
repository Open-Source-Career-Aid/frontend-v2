import BaseAPI from "./baseapi";

async function getContent() {

	const url = "http://127.0.0.1:8000/topic/";
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getContent };