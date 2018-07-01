import { streamTrack } from '../utils/streamTrack';


const queryString = require('querystring');


/**
 * @author nomadmystics@gmail.com
 * @param {HTMLElement} tracksContainer
 * @return void
 */

export const tracksEvent = (tracksContainer) => {
	tracksContainer.addEventListener('click', (event) => {
		if (event.target && event.target.tagName === 'DIV') {
			console.log(event);
			const parsedURL = document.createElement('a');
			parsedURL.href = event.target.dataset.uri;

			console.log(queryString.parse(event.target.dataset.uri));

			console.log(parsedURL.pathname);
			let trackURL = parsedURL.pathname;

			console.log(`${trackURL}`);
			streamTrack(trackURL);
		}
	}, false);
};
