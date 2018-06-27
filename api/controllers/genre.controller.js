const https = require('https');
const queryString = require('querystring');

// config
import keys from '../../config/keys';


// utils
const getHttpsRequest = require('../utils/getHttpsRequest');


/**
 * @author nomadmystics@gamil.com
 * @description This will get tracks from the API by sending a request to the API and build the queryString needed
 * @param {string} genre
 * @param {object} req
 * @param {object} res
 * @param {NextFunction} next
 * @return void
 */

const getTracksByGenre = (genre, req, res, next) => {

	const query = queryString.stringify({
		q: genre,
		client_id: keys.soundcloudKey,
		client_secret: keys.soundcloudClientSecretKey
	});


	const path = `https://api.soundcloud.com/tracks?${query}`;

	// console.log(query);
	// console.log(path);

	getHttpsRequest(path)
	.then((track) => {
		// console.log(track);
		res.send(track);
	})
	.catch((err) => {
		console.log(err);
	})
};

module.exports = {
  getTracksByGenre
};