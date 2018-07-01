import getPromise from '../utils/getPromise';
import buildBoxes from './buildBoxes';

/**
 * @author nomadmystics@gmail.com
 * @param {string} genre
 * @return void
 */

export const buildTracks = (genre) => {
	getPromise(`http://localhost:8000/api/genre/${genre}`)
	.then((res) => {
		console.log(res);
		buildBoxes(res, 'tracks');
	})
	.catch((error) => {
		console.log(error);
	});
};
