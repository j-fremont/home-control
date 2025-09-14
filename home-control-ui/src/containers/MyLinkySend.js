import { connect } from 'react-redux'
import { setLinkyMeasurement, setLinkyBase, setLinkyIinst, setMessage } from '../actions'
import MyLinkySend from '../components/MyLinkySend'

const mapStateToProps = state => ({
	measurement: state.linky.measurement
})

const mapDispatchToProps = dispatch => ({
	setLinkyMeasurement: measurement => dispatch(setLinkyMeasurement(measurement)),
	setLinkyBase: base => dispatch(setLinkyBase(base)),
	setLinkyIinst: iinst => dispatch(setLinkyIinst(iinst)),
	setMessage: message => dispatch(setMessage(message))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyLinkySend)
