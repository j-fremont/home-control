import { connect } from 'react-redux'
import { setForced } from '../actions'
import MyThermoForced from '../components/MyThermoForced'

const mapStateToProps = state => ({
	forced: state.thermo.forced
})

const mapDispatchToProps = dispatch => ({
	setForced: forced => dispatch(setForced(forced))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyThermoForced)
