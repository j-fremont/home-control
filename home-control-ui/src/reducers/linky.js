
const linky = (state = [], action) => {

	switch (action.type) {
		case 'SET_LINKY_MEASUREMENT':
			return {
				...state,
				measurement: action.measurement
			}
		case 'SET_LINKY_BASE':
			return {
				...state,
				base: action.base
			}
		case 'SET_LINKY_IINST':
			return {
				...state,
				iinst: action.iinst
			}
		default:
			return state
	}
}

export default linky
