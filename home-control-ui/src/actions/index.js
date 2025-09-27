export const PageEnum = {
	THERMOSTAT: 'THERMOSTAT',
	LINKY: 'LINKY',
	WEATHER: 'WEATHER',
	INFORMATION: 'INFORMATION'
}

export const ThermoModeEnum = {
	AUTO: 'Automatique',
	FORCED: 'Forcé',
	OFF: 'Eteindre'
}

export const LinkyMeasEnum = {
	BASE: 'Index base',
	IINST: 'Intensité instantanée'
}

export const WeatherMeasEnum = {
	TEMPERATURE: 'Température',
	HUMIDITY: 'Humidité',
	LUMINOSITY: 'Luminosité',
	PRESSURE: 'Pression'
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

export const setLinkyMeasurement = (measurement) => ({
	type: "SET_LINKY_MEASUREMENT",
	measurement
});

export const setLinkyBase = (base) => ({
	type: "SET_LINKY_BASE",
	base
});

export const setLinkyIinst = (iinst) => ({
	type: "SET_LINKY_IINST",
	iinst
});

export const setWeatherMeasurement = (measurement) => ({
	type: "SET_WEATHER_MEASUREMENT",
	measurement
});

export const setWeatherTemperature = (temperature) => ({
	type: "SET_WEATHER_TEMPERATURE",
	temperature
});

export const setWeatherHumidity = (humidity) => ({
	type: "SET_WEATHER_HUMIDITY",
	humidity
});

export const setWeatherLuminosity = (luminosity) => ({
	type: "SET_WEATHER_LUMINOSITY",
	luminosity
});

export const setWeatherPressure = (pressure) => ({
	type: "SET_WEATHER_PRESSURE",
	pressure
});

export const setWeatherCurrent = (current) => ({
	type: "SET_WEATHER_CURRENT",
	current
});
