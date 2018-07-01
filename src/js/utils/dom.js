

export const isInPage = (node) => {
	return (node === document.body) ? false : document.body.contains(node);
};



