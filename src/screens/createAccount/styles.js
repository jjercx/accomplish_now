import fonts from '../../theme/fonts';
import Colors from '../../theme/palette';

export default {
  buttonForwardContainer:{
    width:60,
    height:60,
    borderRadius:60/2,
    backgroundColor:Colors.macaroneAndCheese,
    alignItems:'center',
    justifyContent:'center',
    elevation:10,
    alignSelf:'center',
    marginTop:60
  },
  container: {
    flex: 1
  },
  infoWrapper:{
    marginLeft:24,
    marginTop:20,
    marginRight:33
  },
  inputWrapper:{
    height:52,
    borderWidth:1,
    marginTop:25,
    marginBottom:40,
    alignItems:'center',
    flexDirection:'row',
    marginHorizontal:24,
    borderRadius:3,
    borderColor:Colors.coolGrey
  },
  inputLeftContainer:{
    width: 62,
    borderRightWidth: 1,
    height: 52,
    justifyContent:'center',
    borderColor:Colors.coolGrey
  },
  inputRightContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  inputTextHint:{
    fontSize:17,
    marginRight:21,
    marginLeft:10
  },
  inputText:{
    fontSize: 17,
    flex:1
  },
  titleWrapper:{
    marginLeft:24,
    marginTop:22
  }
}
