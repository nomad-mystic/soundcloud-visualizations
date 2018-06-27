const https = require('https');
const http = require('https');


/**
 * @author nomadmystics@gmail.com
 * @param {string} query
 * @returns {Promise<object>}
 */

const getHttpsRequest = (query) => {

	return new Promise((resolve, reject) => {
		https.get(query, (res) => {

			const { statusCode } = res;
			const contentType = res.headers['content-type'];

			let error;
			if (statusCode !== 200) {
				error = new Error('Request Failed.\n' +
					`Status Code: ${statusCode}`);
				reject(error.message);
			} else if (!/^application\/json/.test(contentType)) {
				error = new Error('Invalid content-type.\n' +
					`Expected application/json but received ${contentType}`);
				reject(error.message);
			}

			if (error) {
				console.error(error.message);
				// consume response data to free up memory
				res.resume();
				return;
			}

			res.setEncoding('utf8');

			let rawData = '';

			res.on('data', (chunk) => { rawData += chunk; });

			res.on('end', () => {
				try {
					const parsedData = JSON.parse(rawData);
					console.log(parsedData);
					resolve(parsedData);
				} catch (err) {
					console.error(err.message);
					reject(err.message)
				}
			});
		}).on('error', (err) => {
			reject(err.message);
			console.error(`Got error: ${err.message}`);
		});
	});
};

module.exports = getHttpsRequest;