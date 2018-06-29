// depends
const SC = require('soundcloud');


/**
 * @author nomadmystics@gmail.com
 * @param {string} trackNumber
 * @return void
 */
const streamTrack = ((trackNumber) => {

	SC.stream(`/tracks${trackNumber}`).then(function(player) {
		console.log(player);
		player.play().then(() =>  {

			console.log('Playback started!');

		}).catch((e) => {

			console.error('Playback rejected. Try calling play() from a user interaction.', e);
		});
	});

})(trackNumber);



export default streamTrack;