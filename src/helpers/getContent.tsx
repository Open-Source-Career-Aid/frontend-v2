import BaseAPI from "./baseapi";

async function getContent() {

	const url = "https://apiv2.dumbsplain.com/topic/";
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getContent };