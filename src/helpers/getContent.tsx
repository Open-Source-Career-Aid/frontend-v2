import BaseAPI from "./baseapi";
import { API_URL } from "../config";

async function getContent() {
	const timestamp = new Date().getTime(); // get client timestamp
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const url = `${API_URL}/topic/?q=${timestamp}&zone=${timezone}`;
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getContent };