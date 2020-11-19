const sortingindex = {
	EPISODE_INDEX: 1,
	YEAR_INDEX: 2,
};

function sortingFunc(selectedIndex, filmsData) {
	let sorted = [...filmsData];
	if (selectedIndex === sortingindex.EPISODE_INDEX) {
		sorted = [...filmsData].sort((a, b) => {
			if (a.fields.episode_id < b.fields.episode_id) return -1;
			if (a.fields.episode_id > b.fields.episode_id) return 1;
			return 0;
		});
	}
	if (selectedIndex === sortingindex.YEAR_INDEX) {
		sorted = [...filmsData].sort((a, b) => {
			if (a.fields.release_date < b.fields.release_date) return -1;
			if (a.fields.release_date > b.fields.release_date) return 1;
			return 0;
		});
	}
	return sorted;
}

module.exports = sortingFunc;
