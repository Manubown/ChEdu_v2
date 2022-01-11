import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*global*/
import global from "../global";

export default class Home extends React.Component {
    state = {
        xTabLearnToPlay: 0, //x co-ordinate of tab one
        xTabOnline: 0, //x co-ordinate of tab two
        xTabChessBoard: 0, //x co-ordinate of tab three
        xTabAnalysis: 0,
        translateX: new Animated.Value(0),
        translateXTabLearnToPlay: new Animated.Value(0),
        translateXTabOnline: new Animated.Value(width),
        translateYChessboard: -1000,
    };

    
    /*handleSlide*/
    handleSlide = (type) => {
        let {
          active,
          translateX,
          translateXTabOne,
          translateXTabTwo,
          translateXTabThree,
          translateXTabFour,
        } = this.state;
        Animated.spring(translateX, {
          toValue: type,
          duration: 100,
        }).start();
        if (active === 1) {
          Animated.parallel([
            Animated.spring(translateXTabOne, {
              toValue: -width,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabTwo, {
              toValue: 0,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabThree, {
              toValue: width,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabFour, {
              toValue: width * 2,
              duration: 100,
            }).start(),
          ]);
        } else if (active === 2) {
          Animated.parallel([
            Animated.spring(translateXTabOne, {
              toValue: -width * 2,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabTwo, {
              toValue: -width,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabThree, {
              toValue: 0,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabFour, {
              toValue: width,
              duration: 100,
            }).start(),
          ]);
        } else if (active === 3) {
          Animated.parallel([
            Animated.spring(translateXTabOne, {
              toValue: -width * 3,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabTwo, {
              toValue: -width * 2,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabThree, {
              toValue: -width,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabFour, {
              toValue: 0,
              duration: 100,
            }).start(),
          ]);
        } else {
          Animated.parallel([
            Animated.spring(translateXTabOne, {
              toValue: 0,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabTwo, {
              toValue: width,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabThree, {
              toValue: width * 2,
              duration: 100,
            }).start(),
            Animated.spring(translateXTabFour, {
              toValue: width * 3,
              duration: 100,
            }).start(),
          ]);
        }
      };
    /*handleSlide end*/

    render(){
        let {
            xTabAnalysis,
            translateX,
            active,
            translateXTabLearnToPlay,
            translateXTabOnline,
            translateXTabChessBoard,
            translateXTabAnalysis,
            translateYLearnToPlay,
            translateYOnline,
            translateYChessboard,
        } = this.state;

        return (
            <View /*style = {global.g.getWindowHeight(), global.g.getWindowWidth()}*/>
                <Text>Hello World!</Text>
            </View>
        );
    }
}