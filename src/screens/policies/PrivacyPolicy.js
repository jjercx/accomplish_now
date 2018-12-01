/* @flow */

import React from 'react';
import {
	View,
	ScrollView
} from 'react-native';
import Typography from '../../components/typography/Typography';
import Header from '../../components/register/Header';
import Spacing from '../../components/spacing/Spacing';
import { responsiveSize } from '../../utils/dimensions';

const styles = {
	container: {
		flex: 1
	},
	infoWrapper: {
		marginLeft: responsiveSize( 24 ),
		marginTop: responsiveSize( 20 ),
		marginRight: responsiveSize( 33 )
	},
	scrollView: {
		paddingBottom: responsiveSize( 20 )
	}
};

const PrivacyPolicy = () => {
	const title = 'Privacy policy';
	const paragraphOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante sapien, accumsan eu convallis id, luctus efficitur arcu. Aliquam ultrices commodo velit, a laoreet nisi sollicitudin dapibus. Nulla nec risus ut augue feugiat ullamcorper sit amet ac lectus. Sed vel euismod dolor, a maximus metus. Duis a euismod diam. Vivamus pharetra quam sit amet nulla efficitur blandit. Sed in sollicitudin nisi. Vestibulum vehicula mi ut justo finibus convallis.';
	const paragraphTwo = 'Quisque lectus mauris, facilisis ut venenatis et, tincidunt vitae velit. Maecenas eleifend finibus enim, malesuada commodo mauris consequat quis. Nunc ac odio ut massa pretium maximus at nec erat. Vivamus luctus dolor sit amet tortor ultrices, non vestibulum erat tincidunt. Fusce rutrum nisi erat, at pharetra enim placerat et. Suspendisse facilisis augue eu quam ultrices iaculis. Suspendisse potenti. In hac habitasse platea dictumst. Suspendisse dolor eros, commodo ut purus at, sodales vestibulum ex. Sed vestibulum at dui vel tincidunt. Suspendisse nec augue tellus.';
	const paragraphThree = 'Praesent sed dolor vitae tellus semper tempor. Aenean sodales est in rutrum lobortis. Morbi id quam quis tortor viverra elementum. Nam congue commodo dui, ac dapibus elit fermentum in. Phasellus aliquam iaculis metus, et accumsan mi cursus ac. Cras faucibus pharetra nulla, a fringilla arcu. Vivamus dignissim ipsum vitae nulla tempor aliquam. Nulla cursus tempor maximus. Morbi scelerisque magna ut faucibus blandit.';
	const paragraphFour = 'Mauris et ante in massa tempor consectetur. In auctor risus convallis faucibus ultrices. Pellentesque gravida ipsum orci, eget condimentum neque semper in. Aenean ut dui libero. Integer eros orci, aliquet et lacus id, mattis iaculis leo. Vestibulum convallis placerat sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vitae iaculis augue, id pulvinar metus. Donec ultrices dolor et lorem viverra, a cursus massa dictum.';

	return (
		<View style={styles.container}>
			<Header title={title} color="charcoalGrey" />
			<Spacing size="small" />
			<ScrollView contentContainerStyle={styles.scrollView}>
				<View style={styles.infoWrapper}>
					<Typography variant="smallTitle" color="charcoalGrey" textAlign="left">{paragraphOne}</Typography>
				</View>
				<View style={styles.infoWrapper}>
					<Typography variant="smallTitle" color="charcoalGrey" textAlign="left">{paragraphTwo}</Typography>
				</View>
				<View style={styles.infoWrapper}>
					<Typography variant="smallTitle" color="charcoalGrey" textAlign="left">{paragraphThree}</Typography>
				</View>
				<View style={styles.infoWrapper}>
					<Typography variant="smallTitle" color="charcoalGrey" textAlign="left">{paragraphFour}</Typography>
				</View>
			</ScrollView>
		</View>
	);
};

export default PrivacyPolicy;
