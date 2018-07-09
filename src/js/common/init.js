import { genreSVGEvents } from "../events/svg.events";
import { modifyForGenreSVG } from '../svg/modifyForGenreSVG';
import { modifyForTrackSVG } from "../svg/modifyForTrackSVG";
import {tracksEvents} from "../events/tracks.events";



const init = () => {
	const svgTrianglesNodes = window.document.querySelectorAll('.svgTriangle');
	const svgTrianglesElements = Array.prototype.slice.call(svgTrianglesNodes);


	/**
	 * @description This will load the genres in the SVG and add the events for click to the tracks
	 */

	const screenLoad = () => {
		modifyForGenreSVG(svgTrianglesElements);
		genreSVGEvents(svgTrianglesElements);
	};

	/**
	 * @description once a user has selected the genre they want to load
	 * @param {string} genre
	 */
	const trackLoad = (genre) => {
		console.log(genre);
		modifyForTrackSVG(svgTrianglesElements, genre);
		tracksEvents(svgTrianglesElements);
	};

	return {
		screenLoad: screenLoad,
		trackLoad: trackLoad,
	}
};

export default init;
