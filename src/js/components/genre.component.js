import buildBoxes from './buildBoxes';


const genres = () => {

	const type = 'genres';
	// This will build the svg with the init genres user can choose 
	const predefinedGenres = {
			hipHop: 'hip-hop',
			folk: 'folk',
			funk: 'funk',
			house: 'house',
			beats: 'beats',
			country: 'country',
			rock: 'rock',
			electronic: 'electronic',
			futureBeats: 'future-beats',
		};

	buildBoxes(predefinedGenres, type);

};

export default genres;