import { genreSVGEvents } from "../events/svg.events";
import { changeText } from '../svg/changeText';
import genres  from '../config/genreList';


const init = () => {
	const svgTrianglesNodes = window.document.querySelectorAll('.svgTriangle');
	const svgTrianglesElements = Array.prototype.slice.call(svgTrianglesNodes);


	/**
	 * @description This will load the genres in the SVG and add the events for click to the tracks
	 */

	const screenLoad = () => {
		changeText(genres, svgTrianglesElements);
		genreSVGEvents(svgTrianglesElements);

	};

	return {
		screenLoad: screenLoad
	}
};



export default init;
