
import { createStore } from "redux"
import reducer from "./reducers"

import { PageEnum, ThermoModeEnum, LinkyMeasEnum, WeatherMeasEnum } from './actions'

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
	},
	weather: {
		measurement: WeatherMeasEnum.TEMPERATURE,
		temperature: [],
		humidity: [],
		luminosity: [],
		pressure: [],
		current: {
			temperature: {},
			humidity: {},
			luminosity: {},
			pressure: {}
		}
	}
}

const store = createStore(reducer, initialState);

export default store;
