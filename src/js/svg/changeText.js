/**
 * @author nomadmystics@gmail.com
 * @param {object} textToChange
 * @param {array} svgTrianglesElements
 */


export const changeText = (textToChange, svgTrianglesElements) => {
	console.log(typeof textToChange);
	console.log(textToChange.type);
	console.log(svgTrianglesElements);

	if (typeof textToChange === 'object' && 'genres' === textToChange.type) {
		const genres = textToChange.predefinedGenres;
		for (let genre in genres) {
			if (genres.hasOwnProperty(genre)) {
				console.log(genre);
				genreBoxes += `<div id="${buildingBlocks[genre]}" data-genre="${buildingBlocks[genre]}" class="box">${buildingBlocks[genre]}</div>`;
			}
		}
	}
};
