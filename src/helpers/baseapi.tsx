import axios from 'axios';

type BaseApiProps = {
	method: 'GET' | 'POST';
	url: string;
	headers: any;
	contentType: string;
	body: any;
	timeout: number
}

export default async function baseApi({ 
	method, 
	url, 
	body, 
	headers = {},
	contentType = 'application/json',
	timeout = 2000
}: BaseApiProps) {
	
	try {
		
		const controller = new AbortController();
		const { signal } = controller;

		let resolvedContentTypeHeader = {};
		if (contentType) {
			resolvedContentTypeHeader = { 'Content-Type': contentType };
		}

		let bodyToSend;
		if (contentType === 'application/json') {
			bodyToSend = JSON.stringify(body);
		} else if (body) {
			bodyToSend = body;
		} else {
			bodyToSend = null;
		}

		let finalMethod = method.toUpperCase();

		let resolvedHeaders = {
			...headers,
			...resolvedContentTypeHeader
		};

		const response = await axios({
			method: finalMethod,
			url,
			headers: resolvedHeaders,
			data: bodyToSend,
			timeout,
			signal
		});

		if (response.status >= 200 && response.status < 300) {
			return response.data;
		}

		throw new Error(response.statusText);
} catch (error) {
		console.error('Error in baseApi', error);
		throw error;
	}
}
