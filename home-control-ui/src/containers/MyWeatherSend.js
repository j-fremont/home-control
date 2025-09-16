import { connect } from 'react-redux'
import { setWeatherMeasurement, setWeatherTemperature, setWeatherHumidity, setWeatherLuminosity, setWeatherPressure, setMessage } from '../actions'
import MyWeatherSend from '../components/MyWeatherSend'

const mapStateToProps = state => ({
	measurement: state.weather.measurement
})

const mapDispatchToProps = dispatch => ({
	setWeatherMeasurement: measurement => dispatch(setWeatherMeasurement(measurement)),
	setWeatherTemperature: temperature => dispatch(setWeatherTemperature(temperature)),
	setWeatherHumidity: humidity => dispatch(setWeatherHumidity(humidity)),
	setWeatherLuminosity: luminosity => dispatch(setWeatherLuminosity(luminosity)),
	setWeatherPressure: pressure => dispatch(setWeatherPressure(pressure)),
	setMessage: message => dispatch(setMessage(message))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyWeatherSend)
