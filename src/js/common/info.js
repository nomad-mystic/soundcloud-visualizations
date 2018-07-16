


export const updateInfo = (event) => {

	let detail = window.document.querySelector('.detail');
	let thumbnailImg = window.document.querySelector('.thumbnailImg');
	let trackTitle = window.document.querySelector('.track-title');
	let username = window.document.querySelector('.username');
	let trackUrl = window.document.querySelector('.track-url');
	let waveImg = window.document.querySelector('.waveImg');
	let controls = window.document.querySelector('.controls');

	let titleElement = window.document.createElement('h2');
	titleElement.textContent = `${event.target.dataset.trackTitle}`;

	let usernameElement = window.document.createElement('h2');
	usernameElement.textContent = `${event.target.dataset.trackUser}`;

	controls.classList.remove('isNotVisible');

	thumbnailImg.src = `${event.target.dataset.artworkUrl}`;

	waveImg.src = `${event.target.dataset.trackWaveform}`;
	trackTitle.appendChild(titleElement);
	username.appendChild(usernameElement);

	console.log('event for updateInfo()');
	console.log(event);

};
