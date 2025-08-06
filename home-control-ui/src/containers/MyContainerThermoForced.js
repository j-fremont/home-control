import { connect } from 'react-redux'
import { setForced } from '../actions'
import MyContainerThermoForced from '../components/MyContainerThermoForced'

const mapStateToProps = state => ({
	forced: state.thermo.forced
})

const mapDispatchToProps = dispatch => ({
	setForced: forced => dispatch(setForced(forced))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyContainerThermoForced)
