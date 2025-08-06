import React from 'react';
import { connect } from 'react-redux'
import { ThermoModeEnum } from '../actions'
import MyContainerThermoSetup from '../components/MyContainerThermoSetup'
import MyContainerThermoAuto from '../components/MyContainerThermoAuto'
import MyContainerThermoForced from '../components/MyContainerThermoForced'
import MyContainerEmpty from '../components/MyContainerEmpty'

const getContainer = (mode) => {

	switch (mode) {
		case ThermoModeEnum.AUTO:
			return (<MyContainerThermoAuto />);
		case ThermoModeEnum.FORCED:
			return (<MyContainerThermoForced />);
		default:
			return (<MyContainerEmpty />);
	}
}

const mapStateToProps = state => ({
	container: getContainer(state.thermo.mode),
})

export default connect(
	mapStateToProps,
	undefined
)(MyContainerThermoSetup)
