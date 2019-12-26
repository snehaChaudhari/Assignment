import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "../Styles/SplashScreenStyle";
import { SafeAreaView } from "react-navigation";

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
        this.props.navigation.replace("mainScreen");
      },1500);
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
        <Image style={styles.imageStyle} resizeMode=''
            source={require("../Image/splashscreen.jpg")} />

        </View>
      </SafeAreaView>
      
    );
  }
}