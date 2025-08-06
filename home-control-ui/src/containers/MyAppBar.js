import { connect } from 'react-redux'
import { setPage } from '../actions'
import MyAppBar from '../components/MyAppBar'

const mapStateToProps = state => ({
	page: state.control.page
})

const mapDispatchToProps = dispatch => ({
	setPage: page => dispatch(setPage(page))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyAppBar)
