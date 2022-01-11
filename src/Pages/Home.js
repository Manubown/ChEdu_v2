/*React standart imports*/
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*global*/
import global from "../global";

export default class Home extends React.Component {
    state = {
        active: 0,
        xTabLearnToPlay: 0, //x co-ordinate of tab one
        xTabOnline: 0, //x co-ordinate of tab two
        xTabChessBoard: 0, //x co-ordinate of tab three
        translateX: new Animated.Value(0),
        translateXTabLearnToPlay: new Animated.Value(0),
        translateXTabOnline: new Animated.Value(width),
        translateXTabChessBoard: new Animated.Value(width * 2),
        translateXTabAnalysis: new Animated.Value(width * 3),
        translateYLearnToPlay: -1000,
        translateYOnline: -1000,
        translateYChessboard: -1000,
    };

    
}
