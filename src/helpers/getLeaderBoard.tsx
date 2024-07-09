import BaseAPI from "./baseapi";

export function formatLeaderBoardData(data: any) {

	let formattedData = [];

	// add each user from the top_users array
	for (let i = 0; i < data.top_users.length; i++) {
		const user = data.top_users[i];
		const [name, score] = user;
		formattedData.push({ 
			"rank": i + 1,
			"name": name,
			"score": score,
			"isCurrentUser": false
		 });
	}

	// add each above user if they don't exist in the top_users array
	for (let i = 0; i < data.above_users.length; i++) {
		const user = data.above_users[i];
		const [name, score] = user;
		if (!formattedData.find((u) => u.name === name)) {
			formattedData.push({ 
				"rank": data.user_rank - data.above_users.length + i,
				"name": name,
				"score": score,
				"isCurrentUser": false
			 });
		}
	}

	// add the current user. if it already exists, make isCurrentUser true
	const [name, score] = data.top_users[data.user_rank];
	const currentUser = formattedData.find((u) => u.name === name);
	if (currentUser) {
		currentUser.isCurrentUser = true;
	} else {
		formattedData.push({ 
			"rank": data.user_rank + 1,
			"name": name,
			"score": score,
			"isCurrentUser": true
		 });
	}

	// add each below user if they don't exist in the top_users array
	for (let i = 0; i < data.below_users.length; i++) {
		const user = data.below_users[i];
		const [name, score] = user;
		if (!formattedData.find((u) => u.name === name)) {
			formattedData.push({ 
				"rank": data.user_rank + 2 + i,
				"name": name,
				"score": score,
				"isCurrentUser": false
			 });
		}
	}

	return formattedData;
}

async function getLeaderBoard() {

	const url = "https://apiv2.dumbsplain.com/getLeaderboard";
	const method = 'GET';

	const response = await BaseAPI({ method, url });

	// format the data
	let _formattedData = formatLeaderBoardData(response);

	return _formattedData;
}

export { getLeaderBoard };