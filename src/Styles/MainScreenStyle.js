import {StyleSheet} from 'react-native';
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import colors from './Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white'
  },
  cardStyle: {
    borderRadius: 10,
    elevation: 5,
    padding: '2%',
    // width: '85%'
  },
  viewStyle: {
    marginLeft: '5%',
    marginRight: '5%',
    // marginBottom:'2%',
    marginTop: '1%',
    // flexDirection:'row'
  },
  listViewStyle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 60,
    borderRightWidth: 50,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    position: 'relative',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    alignItems: 'center',
  },
  renderViewStyle: {
    margin: 5,
    marginTop: '3%',
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  nameNumStyle: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
  },
  textInputStyle: {
    width: '85%',
    marginTop: '4%',
    marginLeft: '2%',
    marginRight: '2%',
    borderWidth: 1,
    borderRadius: 10,
  },
  titleText: {
    width: '80%',
    fontSize: 24,
    color: colors.blue,
    marginTop: 5,
    // fontFamily: 'Quicksand-SemiBold',
  },
  item: {
    // fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    marginTop: 5,
    color: colors.contrast2,
  },
  titleStyle: {
    width: '85%',
    // fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    color: colors.black,
  },
  favIconStyle: {
    color: colors.red,
  },
  iconViewStyle: {
    marginTop: '3%',
    position: 'absolute',
    right: '5%',
  },
});
