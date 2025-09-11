
const linky = (state = [], action) => {

	switch (action.type) {
		case 'SET_LINKY_BASE':
			return {
				...state,
				base: action.base
			}
		default:
			return state
	}
}

export default linky
