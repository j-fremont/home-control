
const control = (state = [], action) => {

	switch (action.type) {
		case 'SET_PAGE':
			return {
				...state,
				page: action.page
			}
		case 'SET_MESSAGE':
			return {
				...state,
				message: action.message
			}
		default:
			return state
	}
}

export default control
