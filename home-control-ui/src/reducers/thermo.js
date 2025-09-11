import config from '../config'

const thermo = (state = [], action) => {

	switch (action.type) {
		case 'SET_THERMO_MODE':
			return {
				...state,
				mode: action.mode
			}
		case 'SET_THERMO_FORCED':
			return {
				...state,
				forced: action.forced
			}
		case 'SET_THERMO_NORMAL':
			return {
				...state,
				normal: action.normal
			}
		case 'ADD_THERMO_SLOT':
			if (state.slots.length < config.maxSlots) {
				return {
					...state,
					slots: [...state.slots, action.slot]
				}
			} else {
				return state;
			}
		case 'UPDATE_THERMO_SLOT':
			return {
				...state,
				slots: state.slots.map(s => s.id===action.slot.id ? action.slot : s)
			}
		case 'REMOVE_THERMO_SLOT':
			return {
				...state,
				slots: state.slots.filter(s => s.id!==action.id)
			}
		default:
			return state
	}
}

export default thermo
