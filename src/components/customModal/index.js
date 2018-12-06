import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomModal from './layout';

class CustomModalContainer extends Component {
  state = {
  	// eslint-disable-next-line react/destructuring-assignment
  	isVisible: this.props.openModal
  };

  componentWillReceiveProps( nextProps ) {
  	// eslint-disable-next-line react/destructuring-assignment
  	if ( nextProps.openModal !== this.props.openModal ) {
  		this.toogleModal();
  	}
  }

  toogleModal = () => {
  	this.setState( prevState => ( { isVisible: !prevState.isVisible } ) );
  };

  // eslint-disable-next-line react/destructuring-assignment
  canCloseOutside = () => this.props.closeOutside && this.toogleModal();

  render() {
  	const { title, transparent, ...modalProps } = this.props;
  	return (
	<CustomModal
	isVisible={this.state.isVisible}
	onPressOut={this.canCloseOutside}
	transparent={transparent}
  			{...modalProps}
  		/>
  	);
  }
}
CustomModalContainer.defaultProps = {
	openModal: false,
	closeOutside: false,
	transparent: true
};

CustomModalContainer.propTypes = {
	openModal: PropTypes.bool,
	closeOutside: PropTypes.bool,
	transparent: PropTypes.bool
};

export default CustomModalContainer;
