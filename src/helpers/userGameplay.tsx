import BaseAPI from "./baseapi";
import { getCSRF } from "./getCSRF";

async function postScoresandHints({
    scores,
    hints
}: {
    scores: Array<number>,
    hints: Array<number>
}) {

	const url = "https://dumbsplain-v2-775ed0b11db8.herokuapp.com/gamePlayState/";
	const method = 'POST';
    const body = {
        scores: JSON.stringify(scores),
        hints: JSON.stringify(hints)
    }

    await getCSRF();

	const response = await BaseAPI({ 
        method: method, 
        url: url,
        body: body
    });

	return response;
}

export { postScoresandHints };