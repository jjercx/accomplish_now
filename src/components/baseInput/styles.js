import fonts from '../../theme/fonts';
import { Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { heightToPercent, widhtToPercent } from '../../utils/dimensions';

export default {
  input: {
    fontSize: hp( heightToPercent(17) ),
    fontFamily: fonts.productSansRegular,
    height: hp( heightToPercent(35) ),
    paddingBottom: 0,
    paddingLeft: 0,
    paddingTop: 0
  },
  label:{
    fontSize: hp( heightToPercent(16) ),
    fontFamily: fonts.productSansRegular,
  }
};
