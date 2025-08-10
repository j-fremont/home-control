import { connect } from 'react-redux'
import { updateSlot, removeSlot } from '../actions'
import MyThermoSlot from '../components/MyThermoSlot'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
	updateSlot: slot => dispatch(updateSlot(slot)),
	removeSlot: id => dispatch(removeSlot(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyThermoSlot)
