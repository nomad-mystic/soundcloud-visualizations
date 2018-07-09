import genres  from '../config/genreList';


/**
 * @author nomadmystics@gmail.com
 * @param {array} svgTrianglesElements
 */

export const modifyForGenreSVG = (svgTrianglesElements) => {
	let count = 0;
	console.log(svgTrianglesElements);
	if (typeof genres === 'object' && 'genres' === genres.type) {
		const genreValues = genres.predefinedGenres;
		for (let genre in genreValues) {
			if (genreValues.hasOwnProperty(genre)) {
				svgTrianglesElements[count].children[1].textContent = genreValues[genre];
				svgTrianglesElements[count].children[0].dataset.genre = genreValues[genre].toLowerCase();
				svgTrianglesElements[count].children[1].dataset.genre = genreValues[genre].toLowerCase();

				count++;
			}
		}
	}
};
