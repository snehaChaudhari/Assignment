import { createAppContainer,  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import splashScreen from '../Components/SplashScreen'
import mainScreen from '../Components/MainScreen'
import detailView from '../Components/DetailView'

const AppNavigator = createStackNavigator({
       splashScreen:{
           screen: splashScreen,
           navigationOption: ()=>({
               header: null
           })
       },
       mainScreen: {
           screen: mainScreen,
           navigationOption: ()=>( {
            header: null,
            headerStyle: {
              borderBottomWidth:0,
             
            },
            
           })
          
           
       },
       detailView: {
           screen:detailView, 
           navigationOption: ()=>({
            //  header:null,
            //  headerStyle: {
            //   borderBottomWidth:0,
             
            // },
          })
       },
    },
  {
    initialRouteName: "splashScreen",
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth:0,
      },
      headerTintColor:'black'
    },
  }
)  

  
  export default createAppContainer(AppNavigator);