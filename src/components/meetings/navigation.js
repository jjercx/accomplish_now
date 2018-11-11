import React,  { Component } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import { TabView, TabBar, renderScene } from "react-native-tab-view";
import Colors from '../../theme/palette';
import Meeting from '../../entities/Meeting';
import Person from '../../entities/Person';
import MeetingPreview from '../meetings/meetingPreview';

import imageProfileDefault from '../../assets/images/meetings/frankDoeCopia3.png';
import imageUserProfileDefault from "../../assets/images/meetings/jhonDoeCopia3.png";

const s = StyleSheet.create( {
	scene: {
		flex: 1
	},
	header: {
		backgroundColor: Colors.white,
		color: Colors.charcoalGrey
	}
} );

const PastMeeting = ({ dataMeeting }) => (
	<View style={[ s.scene ]} >
        <FlatList
            style={s.flatList}
            data={dataMeeting}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => <MeetingPreview {...item} />}
        />
    </View>
)


const CurrentMeeting = ({dataMeeting}) => (
	<View style={[ s.scene ]}> 
		<FlatList
			style={s.flatList}
            data={dataMeeting}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => <MeetingPreview {...item} />}
        />
	</View>
);

const FutureMeeting = () => (
	<View style={[ s.scene ]} />
);

export default class TabViewExample extends Component {

    state = { 
        index: 1, 
        routes: [
            { key: "first", title: "Past" }, 
            { key: "second", title: "Today" }, 
            { key: "third", title: "Future" }
        ] 
    }

    _meetings = () => [
        new Meeting(new Person('1', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '1', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
        new Meeting(new Person('2', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '2', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Rejected', 'Lorem ipsum dolor sit amet.'),
        new Meeting(new Person('3', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '3', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
        new Meeting(new Person('4', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '4', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.'),
        new Meeting(new Person('5', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', ''), '5', imageUserProfileDefault, 'Fri, Oct 19, 08:07 PM', 'Accepted', 'Lorem ipsum dolor sit amet.')
    ];


    _renderTabBar = props => <TabBar {...props} style={s.header} indicatorStyle={{ backgroundColor: Colors.charcoalGrey }} labelStyle={{ color: Colors.charcoalGrey }} />;
    _renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
                return <PastMeeting dataMeeting={this._meetings()}/>;
          case 'second':
                return <CurrentMeeting dataMeeting={this._meetings()} />;
          case 'third':
                return <PastMeeting dataMeeting={this._meetings()} />;
          default:
            return null;
        }
    }

    render() {
    return (
        <TabView 
            navigationState={ this.state } 
            renderScene = {this._renderScene}
            renderTabBar={this._renderTabBar} 
            onIndexChange={index => this.setState(
            { index }
            )} />
    
        );
        }
}
