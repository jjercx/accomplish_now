import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Meeting, { MeetingState } from '../../entities/Meeting';
import Button from '../button/Button';
import { responsiveSize } from '../../utils/dimensions';
import Colors from '../../theme/palette';
import MeetingCard from './MeetingCard';
import styles from './styles';

export const MeetingPreviewMode = {
	OWNER: 1,
	GUESS: 2
};

export default class MessagePreview extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			swiped: false
		};
	}

	render() {
		const {
			onPressStartMeeting,
			onPressChangePlan,
			onPressFinished,
			onPressShowDetails,
			onPressAccept,
			meeting,
			mode
		} = this.props;

		if ( meeting.state === MeetingState.FINISHED ) {
			return (
				<TouchableOpacity onPress={() => onPressFinished( meeting )}>
					<MeetingCard meeting={meeting} />
				</TouchableOpacity>
			);
		}

		const buttonLeftHandler = () => onPressChangePlan( meeting );
		const buttonDetailsHandler = () => onPressShowDetails( meeting );

		if ( mode === MeetingPreviewMode.OWNER ) {
			const buttonRightHandler = () => onPressStartMeeting( meeting );
			const confirmBtn = [
				{
					backgroundColor: Colors.paleGreyThree,
					component: (
						<Button
							text="Confirm Start"
							textColor={Colors.white}
							buttonColor={Colors.darkSkyBlue}
							style={styles.buttonSwipe}
							onPress={buttonRightHandler}
						/>
					)
				}
			];

			const { swiped } = this.state;

			return (
				<Swipeout
					backgroundColor="transparent"
					right={confirmBtn}
					buttonWidth={responsiveSize( 112 )}
					openRight={swiped}
					onClose={() => this.setState( { swiped: false } )}
					autoClose
					sensitivity={200}
				>
					<MeetingCard
						meeting={meeting}
						buttonLeft={{
							label: 'Change Plan',
							onPress: buttonLeftHandler
						}}
						buttonRight={{
							label: 'Start Meeting',
							onPress: swiped ? () => {} : () => this.setState( { swiped: true } )
						}}
						buttonDetails={{
							onPress: buttonDetailsHandler
						}}
					/>
				</Swipeout>
			);
		}

		const buttonRightHandler = () => onPressAccept( meeting );

		return (
			<MeetingCard
				meeting={meeting}
				buttonLeft={{
					label: 'Change Plan',
					onPress: buttonLeftHandler
				}}
				buttonRight={{
					label: 'Accept',
					onPress: buttonRightHandler
				}}
				buttonDetails={{
					onPress: buttonDetailsHandler
				}}
			/>
		);
	}
}

MessagePreview.propTypes = {
	meeting: PropTypes.instanceOf( Meeting ).isRequired,
	mode: PropTypes.number.isRequired,
	onPressStartMeeting: PropTypes.func,
	onPressAccept: PropTypes.func,
	onPressChangePlan: PropTypes.func,
	onPressFinished: PropTypes.func,
	onPressShowDetails: PropTypes.func
};

MessagePreview.defaultProps = {
	onPressStartMeeting: () => {},
	onPressAccept: () => {},
	onPressChangePlan: () => {},
	onPressFinished: () => {},
	onPressShowDetails: () => {}
};
