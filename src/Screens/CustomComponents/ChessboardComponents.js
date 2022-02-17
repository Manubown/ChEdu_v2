import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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

export const PGNViewer = props => {
  if (props.SAN != null) {
    var SAN = props.SAN;
    var updatePGNPosition = props.updatePGNPosition;
    var moveIndex = props.moveIndex;

    var i = 0;

    console.log('San: ');
    console.log(SAN);
    console.log(SAN.length);

    if (SAN.length > 1) {
      console.log('SAN > 1');
      console.log('Print SAN in PGNView: ');
      return (
        <View style={styles.GameSANComponentShadow}>
          {SANComponent(updatePGNPosition, SAN, moveIndex).map(type => (
            <View>{type}</View>
          ))}
        </View>
      );
    }
  }
  console.log('Null returned!');
  return null;
};

const SANComponent = (updatePGNPosition, SAN, position) => {
  console.log('Created San Component!');
  console.log(SAN);

  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState('#e0e0e0');

  var i = 0;
  var sanMapArray = Array();

  var MoveNumber = 0;
  var printIndex = 1;
  SAN.map(sanElement => {
    console.log(sanElement);
    var positionValue = i + 1;

    var text = '';

    if (printIndex >= 1) {
      printIndex = 0;
      MoveNumber++;
      text = MoveNumber + '. ';
    } else {
      printIndex++;
    }

    sanMapArray.push(
      <TouchableOpacity
        style={{margin: 5}}
        onPress={() => {
          updatePGNPosition(positionValue);
          console.log('PGN Position:' + positionValue);
        }}>
        <View
          style={{
            backgroundColor: currentBackgroundColor,
            padding: 3,
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 15}}>
            {text}
            {sanElement}
          </Text>
        </View>
      </TouchableOpacity>,
    );
    i++;
  });
  console.log('Return sanMAP');
  console.log(sanMapArray);
  return sanMapArray;
};
