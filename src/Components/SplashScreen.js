import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "../Styles/SplashScreenStyle";

export default class SplashScreen extends Component {
  componentDidMount() {
//     Firebase.init();
    setTimeout(() => {
//       Firebase.auth.onAuthStateChanged(user => {
        this.props.navigation.replace("mainScreen");
      },1500);
//     });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle}
            source={require("../Image/splashscreen.jpg")} />

    </View>
    );
  }
}