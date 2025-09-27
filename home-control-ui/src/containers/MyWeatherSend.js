import { connect } from 'react-redux'
import { setWeatherMeasurement, setWeatherTemperature, setWeatherHumidity, setWeatherLuminosity, setWeatherPressure, setWeatherCurrent, setMessage } from '../actions'
import MyWeatherSend from '../components/MyWeatherSend'

const mapStateToProps = state => ({
	measurement: state.weather.measurement,
	current: state.weather.current
})

const mapDispatchToProps = dispatch => ({
	setWeatherMeasurement: measurement => dispatch(setWeatherMeasurement(measurement)),
	setWeatherTemperature: temperature => dispatch(setWeatherTemperature(temperature)),
	setWeatherHumidity: humidity => dispatch(setWeatherHumidity(humidity)),
	setWeatherLuminosity: luminosity => dispatch(setWeatherLuminosity(luminosity)),
	setWeatherPressure: pressure => dispatch(setWeatherPressure(pressure)),
	setWeatherCurrent: current => dispatch(setWeatherCurrent(current)),
	setMessage: message => dispatch(setMessage(message))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyWeatherSend)
