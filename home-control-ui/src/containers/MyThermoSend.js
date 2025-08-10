import { connect } from 'react-redux'
import { setMode, setMessage } from '../actions'
import MyThermoSend from '../components/MyThermoSend'

const mapStateToProps = state => ({
	thermo: state.thermo,
	message: state.control.message
})

const mapDispatchToProps = dispatch => ({
	setMode: mode => dispatch(setMode(mode)),
	setMessage: message => dispatch(setMessage(message)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyThermoSend)
