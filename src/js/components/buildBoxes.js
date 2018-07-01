// events
import { genreEvent } from '../events/genre.events';
import { tracksEvent } from '../events/tracks.events';


// utils
import { isInPage } from '../utils/dom';

/**
 * @author nomadmystics@gmail.com
 * @description This will build the dom node for testing functionality in the end it will build SVGs
 * @param {any} buildingBlocks
 * @param {string} type
 * @return void
 */

const buildBoxes = (buildingBlocks, type) => {

	console.log(typeof buildingBlocks);

	// const tracks = JSON.parse(buildingBlocks);

	let genreBoxes = '';
	let tracksBoxes = '';

	if (buildingBlocks != null && type === 'genres') {
		for (let genre in buildingBlocks) {
			if (buildingBlocks.hasOwnProperty(genre)) {
				console.log(genre);
				genreBoxes += `<div id="${buildingBlocks[genre]}" data-genre="${buildingBlocks[genre]}" class="box">${buildingBlocks[genre]}</div>`;
			}
		}
	} else if (buildingBlocks != null && type === 'tracks') {
		// const buildingBlocksJSON = JSON.parse(buildingBlocks);
		buildingBlocks.forEach((track, index) => {
			tracksBoxes += `<div id="${index}" 
								data-uri="${track.uri}" 
								data-track-title="${track.title}"
								data-track-artwork-url="${track.artwork_url}"
								data-track-user="${track.user.username}"
								data-track-waveform="${track.waveform_url}"
								class="box"
								>
								${index}
							</div>`;
		});
	}

	const outerWrapper = window.document.getElementById('outerWrapper');
	const genreContainer = window.document.getElementById('genreContainer');
	const tracksContainer = window.document.getElementById('tracksContainer');
	let genreContainerElement;
	let tracksContainerElement;
	let outerWrapperElement;

	// Build the DOM
	if (isInPage(outerWrapper) === false) {
		console.log('logic working');
		outerWrapperElement = window.document.createElement('div');
		outerWrapperElement.id = 'outerWrapper';
		outerWrapperElement.classList.add('outerWrapperElement');
		window.document.body.appendChild(outerWrapperElement);
	}

	if (isInPage(genreContainer) === false) {
		genreContainerElement = document.createElement('div');
		genreContainerElement.id = 'genreContainer';
		genreContainerElement.innerHTML = genreBoxes;
		genreContainerElement.classList.add('isFlex');
		outerWrapperElement.appendChild(genreContainerElement);
	}
	if (isInPage(tracksContainer) === false) {

		tracksContainerElement = document.createElement('div');
		tracksContainerElement.id = 'tracksContainer';
		tracksContainerElement.classList.add('isFlex');
		outerWrapperElement.appendChild(tracksContainerElement);
	}

	console.log(isInPage(outerWrapperElement));
	console.log(isInPage(genreContainerElement));
	console.log(isInPage(tracksContainerElement));

	if ('genres' === type) {
		genreEvent(genreContainerElement);
	} else if ('tracks' === type) {
		// console.dir(genreContainer);
		tracksContainer.innerHTML = tracksBoxes;
		genreContainer.classList.remove('isFlex');
		genreContainer.style.display = 'none';
		tracksEvent(tracksContainer);
	}

	// const boxesGenreEvents = () => {
	// 	container.addEventListener('click', (event) => {
	// 		if (event.target && event.target.tagName === "DIV") {
	//
	// 			const parsedURL = document.createElement('a');
	// 			parsedURL.href = event.target.dataset.streamUrl;
	//
	// 			console.log(parsedURL.pathname);
	// 			let pathname = parsedURL.pathname;
	// 			let trackURL = pathname.substring(pathname.length, 7);
	// 			let testing = trackURL.substring(0, 7);
	//
	// 			console.log(`/tracks${testing}`);
	// 			// stream track id 293
	// 			SC.stream(`/tracks${testing}`).then(function(player) {
	// 				console.log(player);
	// 				player.play().then(function() {
	// 					console.log('Playback started!');
	// 				}).catch(function(e) {
	// 					console.error('Playback rejected. Try calling play() from a user interaction.', e);
	// 				});
	// 			});
	// 		}
	// 	}, false);
	// };
	//
	// boxesGenreEvents();

};


export default buildBoxes;