//
// Meter Data Management Simulator
//
// EDF R&D
//

import { createStore } from "redux"
import reducer from "./reducers"

const initialState = {
	control: {
	},
	thermo: {
		slots: []
	}
}

const store = createStore(reducer, initialState);

export default store;
