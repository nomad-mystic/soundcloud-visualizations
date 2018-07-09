import genres from "../config/genreList";
import getPromise from "../utils/getPromise";

// import getPromise  from '../utils/getPromise';

/**
 *
 * @param {array} svgTrianglesElements
 * @param {string} genre
 */

export const modifyForTrackSVG = (svgTrianglesElements, genre) => {

	const URLForListOfTracks = `http://localhost:3000/api/genre/${genre}`;

	getPromise(URLForListOfTracks)
		.then((tracks) => {
			buildTrackInfo(tracks);
		})
		.catch((error) => {
			console.error(error);
		});

	const buildTrackInfo = (tracks) => {
		// console.log(tracks);

		let count = 0;
		console.log(svgTrianglesElements);
		// @TODO figure out more validation
		// make sure there are 9 tracks
		if (tracks) {
			// const genreValues = genres.predefinedGenres;
			tracks.forEach((track, index) => {

				// console.log(track);
				// if (genreValues.hasOwnProperty(genre)) {
					svgTrianglesElements[index].children[1].textContent = index += 1;

					svgTrianglesElements[index].children[0].dataset.trackUri = track.uri.toLowerCase();
					svgTrianglesElements[index].children[1].dataset.trackUri = track.uri.toLowerCase();

					svgTrianglesElements[index].children[0].dataset.trackTitle = track.title;
					svgTrianglesElements[index].children[1].dataset.trackTitle = track.title;

					svgTrianglesElements[index].children[0].dataset.artworkUrl = track.artwork_url;
					svgTrianglesElements[index].children[1].dataset.artworkUrl = track.artwork_url;

					svgTrianglesElements[index].children[0].dataset.trackUser = track.user.username;
					svgTrianglesElements[index].children[1].dataset.trackUser = track.user.username;

					svgTrianglesElements[index].children[0].dataset.trackWaveform = track.waveform_url;
					svgTrianglesElements[index].children[1].dataset.trackWaveform = track.waveform_url;



					// data-uri="${track.uri}"
					// data-track-title="${track.title}"
					// data-track-artwork-url="${track.artwork_url}"
					// data-track-user="${track.user.username}"
					// data-track-waveform="${track.waveform_url}"
					count++;

					// if (count >= 9) {
					// 	break;
					// }
				// }
			});
		}
	}


};