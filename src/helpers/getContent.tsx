import BaseAPI from "./baseapi";

async function getContent() {

	const url = "https://dumbsplain-v2-775ed0b11db8.herokuapp.com/topic/";
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getContent };