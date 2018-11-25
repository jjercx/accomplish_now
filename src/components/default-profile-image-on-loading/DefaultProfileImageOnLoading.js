import React from 'react';
import { Image } from 'react-native';

const profileDefaultImage = require( '../../assets/images/connections/md.png' );

class DefaultProfileImageOnLoading extends React.Component {
	state = { loading: true }

	_onLoadEnd = () => this.setState( { loading: false } );

	render() {
		const { loading } = this.state;
		const { props } = this;
		return (
			<Image
				{...props}
				source={loading ? profileDefaultImage : props.source}
				onLoadEnd={this._onLoadEnd}
			/>
		);
	}
}

export default DefaultProfileImageOnLoading;
