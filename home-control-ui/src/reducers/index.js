import { combineReducers } from 'redux'
import control from './control'
import thermo from './thermo'
import linky from './linky'

export default combineReducers({
	control,
	thermo,
	linky
})
