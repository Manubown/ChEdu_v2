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

    var backgroundColorPointer ='red'

    var i = 0;


    if (SAN.length > 1) {
      return (
        <View style={styles.GameSANComponentShadow}>
          {SANComponent(updatePGNPosition, SAN, moveIndex).map(type => (
            <View >{type}</View>
          ))}
        </View>
      );
    }
  }
  return null;
};

const SANComponent = (updatePGNPosition, SAN, position) => {


  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState('#e0e0e0');

  var i = 0;
  var sanMapArray = Array();

  var MoveNumber = 0;
  var printIndex = 1;
  //Render 1
  SAN.map(sanElement => {
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
        style={{margin: 5, marginLeft:2, marginRight:2,}}
        onPress={() => {
          updatePGNPosition(positionValue);
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
  return sanMapArray;
};
