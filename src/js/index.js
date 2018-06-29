// depends
const SC = require('soundcloud');

// Utils
import getPromise from './utils/getPromise';

// keys
import keys from '../../config/keys';






getPromise('http://localhost:8000/api/genre/hip-hop')
.then((res) => {
	buildBoxes(res);
})
.catch((error) => {
	console.log(error);
});

SC.initialize({
	client_id: keys.soundcloudKey,
});

const buildBoxes = (res) => {
	console.log(res);

	const tracks = JSON.parse(res);

	let boxes = '';
	tracks.forEach((track, index) => {
		boxes += `<div id="${index}" data-stream-url="${track.stream_url}" class="box">${index}</div>`;
	});

	let container = document.createElement('div');
	container.id = 'container';

	container.innerHTML = boxes;

	window.document.body.appendChild(container);


	const boxesEvents = () => {
		container.addEventListener('click', (event) => {
			if (event.target && event.target.tagName === "DIV") {

				const parsedURL = document.createElement('a');
				parsedURL.href = event.target.dataset.streamUrl;

				console.log(parsedURL.pathname);
				let pathname = parsedURL.pathname;
				let trackURL = pathname.substring(pathname.length, 7);
				let testing = trackURL.substring(0, 7);

				console.log(`/tracks${testing}`);
				// stream track id 293
				SC.stream(`/tracks${testing}`).then(function(player) {
					console.log(player);
					player.play().then(function() {
						console.log('Playback started!');
					}).catch(function(e) {
						console.error('Playback rejected. Try calling play() from a user interaction.', e);
					});
				});
			}
		}, false);
	};

	boxesEvents();



};




