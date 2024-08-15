import BaseAPI from "./baseapi";
import { API_URL } from "../config";

async function getCSRF() {

	const url = `${API_URL}/csrf_token`;
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getCSRF };