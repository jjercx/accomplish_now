/* @flow */

import React, { Component } from 'react';
import {
	View, StyleSheet, TouchableOpacity, StatusBar, Platform, FlatList
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../theme/palette';
import NavigatorPropType from '../types/navigator';
import ButtonIcon from '../components/button-icon/ButtonIcon';
import Typography from '../components/typography/Typography';
import NavBar from '../components/navbar/NavBar';
import NavigationMeeting from '../components/meetings/navigation';
import Header from '../components/register/Header'
import MeetingPreview from '../components/meetings/meetingPreview';
import Meeting from '../entities/Meeting';
import Person from '../entities/Person';

const logoAccomplish = require( '../assets/images/messages/isoGray.png' );


import imageProfileDefault from '../assets/images/meetings/frankDoeCopia3.png';
import imageUserProfileDefault from '../assets/images/meetings/jhonDoeCopia3.png';


const s = StyleSheet.create( {
	container: {
		flex: 1
	},
	content: {
		flex: 1,

	},
	headerNotificationType: {
		flexDirection: 'row',
		marginTop: 15
	},
	notificationTypeSelected: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: Colors.charcoalGrey,
		borderBottomWidth: 1,
		padding: 5
	},
	notificationTypeDeselected: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: Colors.pinkishGrey,
		borderBottomWidth: 0.5,
		padding: 5
	},
	flatList: {
		backgroundColor: Colors.paleGreyThree,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop:10
	},
});

class Meetings extends Component {
    static navigatorStyle = {
    	navBarHidden: true
    };

	state = {
		viewSelected: 'current',
		viewReceivedNotifications: false
	}

	_openNotification = () => {
		alert('open notification'); //eslint-disable-line
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_meetingsPast = () => [
		new Meeting(new Person('1', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '1', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('2', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '2', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Rejected', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('3', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '3', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('4', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '4', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('5', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '5', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.')
	];

	_meetingsCurrent = () => [
		new Meeting(new Person('1', 'John', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '1', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('2', 'John', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '2', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Rejected', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('3', 'John', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '3', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('4', 'John', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '4', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('5', 'John', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '5', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.')
	];

	_meetingsFuture = () => [
		new Meeting(new Person('1', 'Mike', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '1', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('2', 'Mike', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '2', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Rejected', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('3', 'Mike', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '3', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('4', 'Mike', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '4', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
		new Meeting(new Person('5', 'Mike', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '5', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.')
	];

	render() {
		const { viewReceivedNotifications, viewSelected } = this.state;
		return <View style={s.container}>
        <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} />
        <Header title="Notifications" onPressBack={() => this._onPressBack()} />
        <View style={s.content}>
          <View style={s.headerNotificationType}>
            <TouchableOpacity style={viewSelected == "past" ? s.notificationTypeSelected : s.notificationTypeDeselected} onPress={() => this.setState(
                  { viewSelected: "past" }
                )}>
              <Typography variant="smallTitle" color={viewSelected == "past" ? "charcoalGrey" : "pinkishGrey"} textAlign="left">
                {"Past"}
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity style={viewSelected == "current" ? s.notificationTypeSelected : s.notificationTypeDeselected} onPress={() => this.setState(
                  { viewSelected: "current" }
                )}>
              <Typography variant="smallTitle" color={viewSelected == "current" ? "charcoalGrey" : "pinkishGrey"} textAlign="left">
                {"Today"}
              </Typography>
            </TouchableOpacity>

            <TouchableOpacity style={viewSelected == "future" ? s.notificationTypeSelected : s.notificationTypeDeselected} onPress={() => this.setState(
                  { viewSelected: "future" }
                )}>
              <Typography variant="smallTitle" color={viewSelected == "future" ? "charcoalGrey" : "pinkishGrey"} textAlign="left">
                {"Future"}
              </Typography>
            </TouchableOpacity>
          </View>
          <FlatList style={s.flatList} data={viewSelected == "future" ? this._meetingsFuture() : viewSelected == "current" ? this._meetingsCurrent() : this._meetingsPast()} keyExtractor={(item => item.id)} renderItem={({ item }) => <MeetingPreview onPress={this._openNotification} {...item} />} />
        </View>
      </View>;
	}
}


Meetings.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default Meetings
