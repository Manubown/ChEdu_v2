import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';

export const CommentBox = props => {
  return (
    <View style={styles.CommentBox}>
      <Text style={{fontSize: global.g.getWindowHeight() / 50}}>
        Comment: {props.pgnComment}
      </Text>
    </View>
  );
};
export const FENBox = props => {
  return (
    <View style={styles.ChessBoardButtonShadow}>
      <Text style={{fontSize: global.g.getWindowHeight() / 40}}>
        FEN: {props.FEN}
      </Text>
    </View>
  );
};
