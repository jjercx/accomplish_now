import {
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { HTP } from '../../utils/dimensions';

export default {
	center: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	flex1: { display: 'flex', flex: 1 },
	border: {
		borderWidth: 1,
		borderColor: 'green'
	},
	flexRow: { flexDirection: 'row' },
	space_b: {
		display: 'flex',
		alignContent: 'space-between',
		justifyContent: 'space-between'
	},
	space_a: {
		display: 'flex',
		alignContent: 'space-around',
		justifyContent: 'space-around'
	},
	absolute: { position: 'absolute' },
	// ────────────────────────────────────────────────────────────────────────────────
	container: {
		flex: 1
	},
	buttonForward: {
		marginTop: hp( HTP( 15 ) ),
		marginBottom: hp( HTP( 15 ) )
	}
};
