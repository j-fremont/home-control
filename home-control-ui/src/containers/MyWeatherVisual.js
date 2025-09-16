import { connect } from 'react-redux'
import MyWeatherVisual from '../components/MyWeatherVisual'

const mapStateToProps = state => ({
	measurement: state.weather.measurement,
	temperature: state.weather.temperature,
	humidity: state.weather.humidity,
	luminosity: state.weather.luminosity,
	pressure: state.weather.pressure
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyWeatherVisual)
