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
  var SAN = props.SAN;
  var updatePGNPosition = props.updatePGNPosition;
  var currentPosition = props.currentPosition;

  //Create Table Array
  var tableData = new Array();

  for (var i = 0; i <= SAN.length - 1; i += 2) {
    if (SAN[i + 1] != null) {
      tableData.push([SAN[i], SAN[i + 1]]);
    } else {
      tableData.push([SAN[i], null]);
    }
  }

  const PgnComponents = Array();
  var columnWidth = global.g.getWindowWidth() / 5;
  var positionPointer = 1;
  tableData.forEach(tableDataElement => {
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
            console.log(tableDataElement[0]);
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
              console.log(tableDataElement[1]);
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
                backgroundColor: global.g.getBackgroundColor(),
                opacity: 0,
              }}>
              <Text></Text>
            </View>
          </TouchableOpacity>
        )}
      </View>,
    );
    positionPointer += 2;
  });
  if (PgnComponents.length >= 1) {
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
