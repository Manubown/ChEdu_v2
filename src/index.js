/**
 * @format
 */

import './global';
import {AppRegistry} from 'react-native';
import App from './App';
//import {name as appName} from './app.json';

const appName = 'Chedu_v2';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
