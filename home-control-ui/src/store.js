
import { createStore } from "redux"
import reducer from "./reducers"

import { PageEnum } from './actions'

const initialState = {
	control: {
		page: PageEnum.THERMOSTAT
	},
	thermo: {
		mode: 'Automatique',
		normal: "20",
		forced: "20",
		slots: []
	},
	linky: {
		base: []
	}
}

const store = createStore(reducer, initialState);

export default store;
