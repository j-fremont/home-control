import { connect } from 'react-redux'
import MyThermoSlots from '../components/MyThermoSlots'

const mapStateToProps = state => ({
	slots: state.thermo.slots
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyThermoSlots)
