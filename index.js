/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);




import React,{ Component } from 'react'
import {AppRegistry} from 'react-native';
// import App from './App';
import Navigator from './src/Router/StackNav'
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configureStore from "./src/Redux/Store";

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => App);
