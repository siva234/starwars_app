function sortingFunc(selectedIndex, filmsData) {
	let sorted = [...filmsData];
	if (selectedIndex === 1) {
		sorted = [...filmsData].sort((a, b) => {
			if (a.fields.episode_id < b.fields.episode_id) return -1;
			if (a.fields.episode_id > b.fields.episode_id) return 1;
			return 0;
		});
	}
	if (selectedIndex === 2) {
		sorted = [...filmsData].sort((a, b) => {
			if (a.fields.release_date < b.fields.release_date) return -1;
			if (a.fields.release_date > b.fields.release_date) return 1;
			return 0;
		});
	}
	return sorted;
}

export default sortingFunc;
