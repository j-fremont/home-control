import config from '../config'

const thermo = (state = [], action) => {

	switch (action.type) {
		case 'SET_MODE':
			return {
				...state,
				mode: action.mode
			}
		case 'SET_FORCED':
			return {
				...state,
				forced: action.forced
			}
		case 'SET_NORMAL':
			return {
				...state,
				normal: action.normal
			}
		case 'ADD_SLOT':
			if (state.slots.length < config.maxSlots) {
				return {
					...state,
					slots: [...state.slots, action.slot]
				}
			} else {
				return state;
			}
		case 'REMOVE_SLOT':
			return {
				...state,
				slots: state.slots.filter(s => s.id!==action.id)
			}
		default:
			return state
	}
}

export default thermo
