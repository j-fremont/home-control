import { connect } from 'react-redux'
import { setMode } from '../actions'
import MyThermoSend from '../components/MyThermoSend'

const mapStateToProps = state => ({
	mode: state.thermo.mode
})

const mapDispatchToProps = dispatch => ({
	setMode: mode => dispatch(setMode(mode))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyThermoSend)
