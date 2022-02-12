import React from 'react';
import {View, Text} from 'react-native';

export default class Explanation extends React.Component {
  state = {
    currentExplanation: <Text></Text>,
  };
  changeExplanation = () => {
    switch (this.props.value) {
      case global.g.getSicilianDefence():
        console.log('Sicilian Defense is here');
        this.setState({
          currentExplanation: global.g.getExplanationSicilianDefense(),
        });
        break;

      default:
        break;
    }
  };
  render() {
    return <View>{this.state.currentExplanation}</View>;
  }
}
