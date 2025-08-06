import { connect } from 'react-redux'
import { setNormal, addSlot } from '../actions'
import MyThermoAuto from '../components/MyThermoAuto'

const mapStateToProps = state => ({
	normal: state.thermo.normal
})

const mapDispatchToProps = dispatch => ({
	setNormal: normal => dispatch(setNormal(normal)),
	addSlot: slot => dispatch(addSlot(slot))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyThermoAuto)
