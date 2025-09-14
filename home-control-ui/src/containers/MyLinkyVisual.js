import { connect } from 'react-redux'
import MyLinkyVisual from '../components/MyLinkyVisual'

const mapStateToProps = state => ({
	measurement: state.linky.measurement,
	base: state.linky.base,
	iinst: state.linky.iinst
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyLinkyVisual)
