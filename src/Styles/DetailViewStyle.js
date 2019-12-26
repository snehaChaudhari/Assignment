import { StyleSheet } from "react-native";
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import colors from "./Colors";

export default StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: colors.white
    },
    favIconStyle: {
        color: colors.red
    },
    iconViewStyle: {
        // marginTop: '3%',
        marginLeft: '90%',
        
    },
    imageViewStyle: { 
        // marginTop:'-2%' ,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle: {
        width: '90%', 
        height: '70%'
    },
    descriptionStyle: {
        // fontFamily: '',
        fontSize: 18, 
        fontWeight: 'bold'
    }
})