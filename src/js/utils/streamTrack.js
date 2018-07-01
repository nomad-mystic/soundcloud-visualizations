// depends
const SC = require('soundcloud');

// keys
import keys from '../../../config/keys';



SC.initialize({
	client_id: keys.soundcloudKey,
});


/**
 * @author nomadmystics@gmail.com
 * @param {string} trackNumber
 * @return void
 */

export const streamTrack = (trackNumber) => {

	SC.stream(`${trackNumber}`).then(function(player) {
		console.log(player);
		player.play().then(() =>  {

			console.log('Playback started!');

		}).catch((e) => {

			console.error('Playback rejected. Try calling play() from a user interaction.', e);
		});
	});

};
