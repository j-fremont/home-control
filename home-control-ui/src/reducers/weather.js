
const linky = (state = [], action) => {

	switch (action.type) {
		case 'SET_WEATHER_MEASUREMENT':
			return {
				...state,
				measurement: action.measurement
			}
		case 'SET_WEATHER_TEMPERATURE':
			return {
				...state,
				temperature: action.temperature
			}
		case 'SET_WEATHER_HUMIDITY':
			return {
				...state,
				humidity: action.humidity
			}
		case 'SET_WEATHER_LUMINOSITY':
			return {
				...state,
				luminosity: action.luminosity
			}
		case 'SET_WEATHER_PRESSURE':
			return {
				...state,
				pressure: action.pressure
			}
		case 'SET_WEATHER_CURRENT':
			return {
				...state,
				current: action.current
			}

		default:
			return state
	}
}

export default linky
