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
          <Text style={{fontSize: global.g.getWindowWidth() / 80}}>
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

export const TablePGNViewer = props => {
  console.log('Table View:');
  var SAN = props.SAN;
  var updatePGNPosition = props.updatePGNPosition;
  var currentPosition = props.currentPosition;

  console.log(SAN);
  console.log(updatePGNPosition);

  //Create Table Array
  var tableData = new Array();

  for (var i = 0; i <= SAN.length - 1; i += 2) {
    tableData.push([SAN[i], SAN[i + 1]]);
  }

  console.log('Table Array:');

  console.log({tableData});

  var updatePosition = Array();
  if (tableData != null) {
    for (var i = 1; i < tableData.length; i++) {
      updatePosition.push(i);
    }
  }

  const PgnComponents = Array();
  var columnWidth = global.g.getWindowWidth() / 5;
  var positionPointer = 1;
  tableData.forEach(tableDataElement => {
    console.log('PGN TABLE VIEW RENDERER');

    var pointer1 = positionPointer;
    var pointer2 = positionPointer + 1;

    PgnComponents.push(
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          alignContent: 'center',
          borderColor: 'black',
        }}>
        <View
          style={{
            fontSize: global.g.getWindowWidth() / 60,
            padding: 5,
            backgroundColor: '#c4cbcf',
            width: columnWidth / 4,
            alignItems: 'center',
          }}>
          <Text>{(positionPointer + 1) / 2}.</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('Clicked: ');
            console.log(pointer1);
            updatePGNPosition(pointer1);
          }}>
          <View
            style={{
              fontSize: global.g.getWindowWidth() / 60,
              padding: 5,
              width: columnWidth / 4,
              alignItems: 'center',
              backgroundColor: '#f0d9b5',
            }}>
            <Text>{tableDataElement[0]}</Text>
          </View>
        </TouchableOpacity>
        {tableDataElement[1] != null ? (
          <TouchableOpacity
            onPress={() => {
              console.log('Clicked: ');
              console.log(pointer2);
              updatePGNPosition(pointer2);
            }}>
            <View
              style={{
                fontSize: global.g.getWindowWidth() / 60,
                padding: 5,
                width: columnWidth / 4,
                alignItems: 'center',
                backgroundColor: '#f0d9b5',
              }}>
              <Text>{tableDataElement[1]}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <View
              style={{
                fontSize: global.g.getWindowWidth() / 60,
                padding: 5,
                width: columnWidth / 4,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text></Text>
            </View>
          </TouchableOpacity>
        )}
      </View>,
    );
    positionPointer += 2;
  });
  if (PgnComponents.length > 1) {
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
