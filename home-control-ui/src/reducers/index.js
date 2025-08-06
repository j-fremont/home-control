import { combineReducers } from 'redux'
import control from './control'
import thermo from './thermo'

export default combineReducers({
	control,
	thermo
})
