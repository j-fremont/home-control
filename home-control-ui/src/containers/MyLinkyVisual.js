import { connect } from 'react-redux'
import MyLinkyVisual from '../components/MyLinkyVisual'

const mapStateToProps = state => ({
	base: state.linky.base
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyLinkyVisual)
