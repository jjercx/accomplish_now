/* eslint-disable react/jsx-indent-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timer from './layout';
import { statusTime } from './utils';
import NavigatorPropType from '../../types/navigator';

class TimerContainer extends Component {
    state = {
    	count: 0,
    	hours: 0,
    	status: statusTime.default,
    	openEndModal: false
    };


    // eslint-disable-next-line react/destructuring-assignment
    minutes = this.props.minutes * 60;


    componentWillUnmount = () => {
    	clearInterval( this.interval );
    }


    setTimePassed() {
    	const { status } = this.state;
    	if ( status !== statusTime.pause ) {
    		this.setState( prevState => ( this.updateTime( prevState ) ) );
    	}
    }

    handleStatusPress = () => {
    	const { status } = this.state;
    	switch ( status ) {
    		case statusTime.default:
    			this.startTime();
    			this.setState( { status: statusTime.started } );
    			break;
    		case statusTime.started: this.setState( { status: statusTime.pause } );
    			break;
    		case statusTime.pause: this.setState( { status: statusTime.started } );
    			break;
    		default:
    			break;
    	}
    }

		updateTime = prevState => ( prevState.count < 3599 ? { count: prevState.count + 1 } : { count: 0, hours: prevState.hours + 1 } ) ;

		startTime = () => {
    	this.interval = setInterval( () => {
    		this.setTimePassed();
    	}, 1000 );
		}

togleModal = () => this.setState( prevState => ( { openEndModal: !prevState.openEndModal } ) );

handleConfirmPress = () => {
	const { navigator } = this.props;
	this.togleModal();
	navigator.pop();
};

handleCancelPress = () => this.togleModal();

render() {
    	const {
		count,
		status,
				 hours, openEndModal
	} = this.state;
    	return (
	    		<Timer
		    	 percent={( count * 100 ) / this.minutes}
    			 statusPress={this.handleStatusPress}
		    	 status={status}
					 count={count}
					 hours={hours}
					 openEndModal={openEndModal}
					 onEndPress={this.togleModal}
					 onConfirmPress={this.handleConfirmPress}
					 onCancelPress={this.handleCancelPress}

	    		/>
    	);
}
}

TimerContainer.propTypes = {
	minutes: PropTypes.number.isRequired,
	navigator: NavigatorPropType.isRequired
};

export default TimerContainer;
