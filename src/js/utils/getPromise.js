

/**
 * @author nomadmystics@gmail.com
 * @param {string} url
 */

const getPromise = function(url) {

	return new Promise((resolve, reject) => {
		fetch(url)
			.then((res) => {

				if (res.status === 200) {
					resolve(res.json());
				} else {
					reject(new Error(res.statusText));
				}

			})
			.catch((error) => {
				reject(`There was an error in fetching ${url}. Error: ${error}`);
			});

		// const req = new XMLHttpRequest();
		//
		// req.open('GET', url);
		//
		// req.onload = () => {
		// 	// console.log(req);
		// 	if (req.status === 200) {
		// 		resolve(req.response);
		// 	} else {
		// 		reject(Error(req.statusText));
		// 	}
		// };
		//
		// req.onerror = () => {
		// 	reject(Error("Network Error"));
		// };
		//
		//
		// req.send();
	});
};


export default getPromise;
