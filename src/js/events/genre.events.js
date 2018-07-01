import { buildTracks } from '../components/tracks.component';


/**
 * @author nomadmystics@gmail.com
 * @description create the event that will activate call to backend for array of tracks
 * @param {HTMLDivElement} genreContainer
 */

export const genreEvent = (genreContainer) => {
	genreContainer.addEventListener('click', (event) => {
		console.log(event);
		if (event.target && event.target.tagName === "DIV") {
			console.log(event.target.id);

			// Send over the chose genre to fetch the tracks
			buildTracks(event.target.id);
		}
	}, false);
};

