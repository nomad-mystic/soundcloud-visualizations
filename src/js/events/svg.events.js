import init from '../common/init';

/**
 * @author nomadmystics@gmail.com
 * @description This will add the events needed for the svgs to load genres and tracks
 * @return void
 */

export const genreSVGEvents = (svgTrianglesElements) => {
	const triangleArrayLength = svgTrianglesElements.length;

	const svgShapesClickEvent = (event) => {
		event.stopPropagation();

		if (event.target && event.target.tagName === 'text' || event.target.tagName === 'rect') {
			// console.log(event.)
			console.log(event);

			init().trackLoad(event.target.dataset.genre);
		}
	};

	for (let i = 0; i < triangleArrayLength; i++) {
		svgTrianglesElements[i].addEventListener('click', svgShapesClickEvent, false);
	}
};
