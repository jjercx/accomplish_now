import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { heightToPercent, widhtToPercent } from '../../utils/dimensions';

export default {
  titleWrapper:{
    marginLeft: wp( widhtToPercent(24) ),
    marginTop: hp( heightToPercent(22) )
  }
}
