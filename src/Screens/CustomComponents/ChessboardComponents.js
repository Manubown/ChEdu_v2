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
  var SAN = props.SAN;
  var updatePGNPosition = props.updatePGNPosition;
  var moveIndex = props.moveIndex;

  if (props.SAN != null) {
    var backgroundColorPointer = 'red';

    var i = 0;

    if (SAN.length > 1) {
      return (
        <View style={styles.GameSANComponentShadow}>
          {SANComponent(updatePGNPosition, SAN, moveIndex).map(type => (
            <View>{type}</View>
          ))}
        </View>
      );
    }
  }
  return null;
};

const SANComponent = (updatePGNPosition, SAN, position) => {
  console.log('San:');
  console.log(SAN);
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
        style={{margin: 5, marginLeft: 2, marginRight: 2}}
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

/*
export const TablePGNViewer = props => {
  console.log('Table View:');
  var SAN = props.SAN;
  var updatePGNPosition = props.updatePGNPosition;

  console.log(SAN);
  console.log(updatePGNPosition);

  //Create Table Array
  var tableData = new Array();

  for (var i = 0; i <= SAN.length - 1; i += 2) {
    tableData.push([SAN[i], SAN[i + 1]]);
  }

  console.log('Table Array:');

  console.log({tableData});

  var x = 0;
  var updatePosition = Array();
  if (tableData != null) {
    tabledata.forEach(element => {
      updatePosition.push(x);
      x++;
      updatePosition.push(x);
      x++;
    });
  }

  const PgnComponents = Array();
  var columnWidth = global.g.getWindowWidth() / 5;

  for (var i = 0; i < tableData.length; i++) {
    PgnComponents.push(
      <View
        style={{
          width: columnWidth,
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          borderColor: 'black',
        }}>
        <View
          style={{
            fontSize: 30,
            padding: 5,
            backgroundColor: '#c4cbcf',
            width: columnWidth / 4,
            alignItems: 'center',
          }}>
          <Text>{i + 1}.</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('Clicked: ' + (i + 1) * 2 - 1);
            updatePGNPosition(updatePosition[(i + 1) * 2 - 1]);
          }}>
          <View
            style={{
              fontSize: 30,
              padding: 5,
              width: columnWidth / 4,
              alignItems: 'center',
              backgroundColor: '#f0d9b5',
            }}>
            <Text>{tableData[i][0]}</Text>
          </View>
        </TouchableOpacity>
        {tableData[i][1] != null ? (
          <TouchableOpacity
            onPress={() => {
              console.log('Clicked: ' + (i + 1) * 2 - 1);
              updatePGNPosition(updatePosition[(i + 1) * 2]);
            }}>
            <View
              style={{
                fontSize: 30,
                padding: 5,
                width: columnWidth / 4,
                alignItems: 'center',
                backgroundColor: '#f0d9b5',
              }}>
              <Text>{tableData[i][1]}</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>,
    );
  }
  if (PgnComponents.length > 1) {
    console.log('RETURN PGN TABLE COMPONENT');
    return (
      <View style={styles.GameTableComponentShadow}>
        {PgnComponents.map(element => (
          <View>{element}</View>
        ))}
      </View>
    );
  }
  return null;
};
*/
