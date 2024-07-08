import BaseAPI from "./baseapi";

async function getLeaderBoard() {

	const url = "http://127.0.0.1:8000/getLeaderboard";
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getLeaderBoard };