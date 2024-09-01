import BaseAPI from "./baseapi";
import { API_URL } from "../config";

async function getContent() {
	const timestamp = new Date().getTime(); // get client timestamp
	const url = `${API_URL}/topic/?q=${timestamp}`;
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getContent };