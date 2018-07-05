// depends
const SC = require('soundcloud');

// Utils
import getPromise from './utils/getPromise';

// keys
import keys from '../../config/keys';


import genres from './config/genreList';
import { genreSVGEvents } from './events/svg.events';

import init from './common/init';

init().screenLoad();


// testing to see if this will work out of the box
// genreSVGEvents();


// genres();




// getPromise('http://localhost:8000/api/genre/hip-hop')
// .then((res) => {
// 	buildBoxes(res);
// })
// .catch((error) => {
// 	console.log(error);
// });
//
// SC.initialize({
// 	client_id: keys.soundcloudKey,
// });
//
// const buildBoxes = (res) => {
//
//
// 	boxesEvents();
//
//
//
// };




