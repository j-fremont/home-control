import React from 'react';
import { connect } from 'react-redux'
import { PageEnum } from '../actions'
import MyApp from '../components/MyApp'
import MyContainerThermo from '../components/MyContainerThermo'
import MyContainerInfo from '../components/MyContainerInfo'
import MyContainerEmpty from '../components/MyContainerEmpty'

const getContainer = (page) => {

	switch (page) {
		case PageEnum.THERMOSTAT:
			return (<MyContainerThermo />);
		case PageEnum.INFORMATION:
			return (<MyContainerInfo />);
		default:
			return (<MyContainerEmpty />);
	}
}

const mapStateToProps = state => ({
	container: getContainer(state.control.page),
})

export default connect(
	mapStateToProps,
	undefined
)(MyApp)
