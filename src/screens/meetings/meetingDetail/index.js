/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MeetingDetail from './layout';
import NavigatorPropType from '../../../types/navigator';

class MeetingDetailContainer extends Component {
    handlePressBack =() => {
    	const { navigator } = this.props;
    	navigator.pop();
    };

    render() {
    	const { meeting, navigator } = this.props;
    	return (
    	<MeetingDetail
    	  meeting={meeting}
		  onPressBack={this.handlePressBack}
		  navigator={navigator}
	    />
    	);
    }
}

MeetingDetailContainer.propTypes = {
	meeting: PropTypes.shape( {
		date: PropTypes.string,
		meetingId: PropTypes.string,
		profilePict: PropTypes.number,
		state: PropTypes.number,
		text: PropTypes.string
	} ).isRequired,
	navigator: NavigatorPropType.isRequired
};

export default MeetingDetailContainer;
