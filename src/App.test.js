test("fake test", () => {
	expect(true).toBeTruthy();
});

describe("Sorting function", () => {
	const sortfunc = require("./sorting");
	const sortingindex = {
		EPISODE_INDEX: 1,
		YEAR_INDEX: 2,
	};
	const mockDataInput = [
		{
			fields: {
				episode_id: 4,
				release_date: "1987-05-25",
			},
		},
		{
			fields: {
				episode_id: 3,
				release_date: "1977-05-25",
			},
		},
		{
			fields: {
				episode_id: 2,
				release_date: "1979-05-25",
			},
		},
	];
	test("Checking if sorting function responds", () => {
		expect(sortfunc(sortingindex.EPISODE_INDEX, [])).toEqual([]);
	});
	test("It should sort based on Episode", () => {
		const dataOutput = [
			{
				fields: {
					episode_id: 2,
					release_date: "1979-05-25",
				},
			},
			{
				fields: {
					episode_id: 3,
					release_date: "1977-05-25",
				},
			},
			{
				fields: {
					episode_id: 4,
					release_date: "1987-05-25",
				},
			},
		];
		expect(sortfunc(sortingindex.EPISODE_INDEX, mockDataInput)).toEqual(
			dataOutput
		);
	});
	test("It should sort based on Year", () => {
		const dataOutput = [
			{
				fields: {
					episode_id: 3,
					release_date: "1977-05-25",
				},
			},
			{
				fields: {
					episode_id: 2,
					release_date: "1979-05-25",
				},
			},
			{
				fields: {
					episode_id: 4,
					release_date: "1987-05-25",
				},
			},
		];
		expect(sortfunc(sortingindex.YEAR_INDEX, mockDataInput)).toEqual(
			dataOutput
		);
	});
	test("It should not sort based on Episode or Year", () => {
		const dataOutput = mockDataInput;
		expect(sortfunc(3, mockDataInput)).toEqual(dataOutput);
	});
});
