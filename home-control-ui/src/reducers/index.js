import { combineReducers } from 'redux'
import control from './control'
import thermo from './thermo'
import linky from './linky'
import weather from './weather'

export default combineReducers({
	control,
	thermo,
	linky,
	weather
})
