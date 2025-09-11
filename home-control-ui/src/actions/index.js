export const PageEnum = {
	THERMOSTAT: 'THERMOSTAT',
	LINKY: 'LINKY',
	INFORMATION: 'INFORMATION'
}

export const ThermoModeEnum = {
	AUTO: 'Automatique',
	FORCED: 'Forcé',
	OFF: 'Eteindre'
}

export const setPage = (page) => ({
	type: "SET_PAGE",
	page
});

export const setMessage = (message) => ({
	type: "SET_MESSAGE",
	message
});

export const setMode = (mode) => ({
	type: "SET_THERMO_MODE",
	mode
});

export const setForced = (forced) => ({
	type: "SET_THERMO_FORCED",
	forced
});

export const setNormal = (normal) => ({
	type: "SET_THERMO_NORMAL",
	normal
});

export const addSlot = (slot) => ({
	type: "ADD_THERMO_SLOT",
	slot
});

export const updateSlot = (slot) => ({
	type: "UPDATE_THERMO_SLOT",
	slot
});

export const removeSlot = (id) => ({
	type: "REMOVE_THERMO_SLOT",
	id
});

export const setLinkyBase = (base) => ({
	type: "SET_LINKY_BASE",
	base
});
