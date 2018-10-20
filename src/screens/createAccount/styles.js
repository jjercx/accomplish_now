import fonts from '../../theme/fonts';
import Colors from '../../theme/palette';
import Platform from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { heightToPercent, widhtToPercent } from '../../utils/dimensions';

export default {
  container: {
    flex: 1
  },
  infoWrapper:{
    marginLeft: wp( widhtToPercent(24) ),
    marginTop: hp( heightToPercent(20) ),
    marginRight: wp( widhtToPercent(33) )
  },
  inputWrapper:{
    height: hp( heightToPercent(52) ),
    borderWidth:1,
    marginTop: hp( heightToPercent(25) ),
    marginBottom: hp( heightToPercent(40) ),
    alignItems:'center',
    flexDirection:'row',
    marginHorizontal: hp( heightToPercent(24) ),
    borderRadius:3,
    borderColor:Colors.coolGrey
  },
  inputLeftContainer:{
    width: wp( widhtToPercent(62) ),
    borderRightWidth: 1,
    height: hp( heightToPercent(52) ),
    justifyContent:'center',
    borderColor:Colors.coolGrey
  },
  inputRightContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  inputTextHint:{
    fontSize: hp( heightToPercent(17) ),
    marginRight: wp( widhtToPercent(21) ),
    marginLeft: wp( widhtToPercent(10) )
  },
  inputText:{
    fontSize: hp( heightToPercent(17) ),
    flex:1,
    top: Platform === 'ios' ? 0 : hp( heightToPercent(1) )
  }
}
