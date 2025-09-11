import { connect } from 'react-redux'
import { setLinkyBase, setMessage } from '../actions'
import MyLinkySend from '../components/MyLinkySend'

const mapStateToProps = state => ({
	message: state.control.message
})

const mapDispatchToProps = dispatch => ({
	setLinkyBase: base => dispatch(setLinkyBase(base)),
	setMessage: message => dispatch(setMessage(message))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyLinkySend)
