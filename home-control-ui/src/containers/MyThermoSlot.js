import { connect } from 'react-redux'
import { removeSlot } from '../actions'
import MyThermoSlot from '../components/MyThermoSlot'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
	removeSlot: id => dispatch(removeSlot(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyThermoSlot)
