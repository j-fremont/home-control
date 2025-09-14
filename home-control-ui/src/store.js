
import { createStore } from "redux"
import reducer from "./reducers"

import { PageEnum, ThermoModeEnum, LinkyMeasEnum } from './actions'

const initialState = {
	control: {
		page: PageEnum.THERMOSTAT
	},
	thermo: {
		mode: ThermoModeEnum.AUTO,
		normal: "20",
		forced: "20",
		slots: []
	},
	linky: {
		measurement: LinkyMeasEnum.BASE,
		base: [],
		iinst: []
	}
}

const store = createStore(reducer, initialState);

export default store;
