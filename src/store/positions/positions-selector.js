export const selectAllPositions = (state) => state.position;

export const selectVisiblePositions = (state, filters) => {
	if (filters.length === 0) return state.position;

	return state.position.filter((pos) => {
		const posFilter = [].concat(
			pos.role,
			pos.level,
			...pos.languages,
			...pos.tools
		);
		return filters.every((filter) => posFilter.includes(filter));
	});
};
