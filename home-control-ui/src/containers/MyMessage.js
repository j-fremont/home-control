import { connect } from 'react-redux'
import { setMessage } from '../actions'
import MyMessage from '../components/MyMessage'

const mapStateToProps = state => ({
	message: state.control.message
})

const mapDispatchToProps = dispatch => ({
	setMessage: message => dispatch(setMessage(message))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyMessage)
