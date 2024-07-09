import BaseAPI from "./baseapi";

export function formatLeaderBoardData(data: any) {
	const formattedData = data.map((user: any) => {
		return {
			username: user.username,
			score: user.score,
			hints: user.hints
		}
	})
	return formattedData;
}

async function getLeaderBoard() {

	const url = "http://127.0.0.1:8000/getLeaderboard";
	const method = 'GET';

	const response = await BaseAPI({ method, url });
	return response;
}

export { getLeaderBoard };