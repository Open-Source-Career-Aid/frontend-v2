import BaseAPI from "./baseapi";
import { getCSRF } from "./getCSRF";
import { API_URL } from "../config";

async function postScoresandHints({
    scores,
    hints
}: {
    scores: Array<number>,
    hints: Array<number>
}) {

	const url = `${API_URL}/gamePlayState/`;
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