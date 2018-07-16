import { streamTrack } from '../utils/streamTrack';
import { updateInfo } from "../common/info";

const queryString = require('querystring');


/**
 * @author nomadmystics@gmail.com
 * @param {array} svgTrianglesElements
 * @return void
 */

export const tracksEvents = (svgTrianglesElements) => {
	const svgTrianglesElementsLength = svgTrianglesElements.length;

	const svgTrianglesElementEvent = (event) => {
		// console.log(event);
		if (event.target && event.target.tagName === 'text' || event.target.tagName === 'rect') {
			const parsedURL = document.createElement('a');
			parsedURL.href = event.target.dataset.trackUri;

			console.log(queryString.parse(event.target.dataset.trackUri));

			console.log(parsedURL.pathname);
			let trackURL = parsedURL.pathname;

			console.log(`${trackURL}`);
			streamTrack(trackURL);
			updateInfo(event);
		}
	};

	for (let i = 0; i < svgTrianglesElementsLength; i++) {
		svgTrianglesElements[i].addEventListener('click', svgTrianglesElementEvent, false);
	}
};
