import BaseAPI from "./baseapi";
import { API_URL } from "../config";

async function getContent() {

	const url = `${API_URL}/topic/`;
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getContent };