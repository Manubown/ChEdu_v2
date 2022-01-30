import React from 'react';
import {View, Text, Image, Animated} from 'react-native';

import {getData} from '../Scripts/SaveData';
import styles from '../styles';

export default class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.RotateValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.load();
    this.props.navigation.addListener('focus', () => {
      this.load();
    });
  }

  load() {
    getData();
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000);
  }

  render() {
    return (
      <View
        style={{
          width: global.g.getWindowWidth(),
          height: global.g.getWindowHeight(),
          alignContent: 'center',
          alignItems: 'center',
          marginTop: (global.g.getWindowHeight() / 5) * 2,
        }}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={styles.CheduBlue}>Ch</Text>
          <Text style={styles.CheduDarkBlue}>Edu</Text>
        </View>

        <Text style={styles.LearnToPlayText}>Learn to play chess!</Text>
      </View>
    );
  }
}
