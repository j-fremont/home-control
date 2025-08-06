export const PageEnum = {
	THERMOSTAT: 'THERMOSTAT',
	INFORMATION: 'INFORMATION'
}

export const ThermoModeEnum = {
	AUTO: 'Automatique',
	FORCED: 'Forcé'
}

export const setPage = (page) => ({
	type: "SET_PAGE",
	page
});

export const setMode = (mode) => ({
	type: "SET_MODE",
	mode
});

export const setForced = (forced) => ({
	type: "SET_FORCED",
	forced
});

export const setNormal = (normal) => ({
	type: "SET_NORMAL",
	normal
});

export const addSlot = (slot) => ({
	type: "ADD_SLOT",
	slot
});

export const removeSlot = (id) => ({
	type: "REMOVE_SLOT",
	id
});
