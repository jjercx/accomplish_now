import { Platform } from 'react-native';

const largeTitle = {
	fontSize: 36,
	fontWeight: '800',
	fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
};

const midTitle = {
	fontSize: 17,
	fontWeight: '600',
	fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
};

const smallBody = {
	fontSize: 14,
	fontWeight: '300',
	fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
};

export default {
	'largeTitle': largeTitle,
	'midTitle': midTitle,
	'smallBody': smallBody
};
