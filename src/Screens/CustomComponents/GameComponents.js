import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles';

export const ExportGameComponent = props => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <View style={styles.GameComponentShadow}>
      <Image style={styles.GameComponentImage} source={props.picture} />
      <Text
        style={{
          fontSize: 38,
          color: global.g.getTextColor(),
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {props.name}
      </Text>
      {props.elo != null ? (
        <View style={styles.GameInnerComponentShadow}>
          <Text
            style={{
              fontSize: 25,
              color: global.g.getTextColor(),
              textAlign: 'center',
              margin: 10,
            }}>
            {' '}
            Elo: {props.elo}
          </Text>
        </View>
      ) : null}
      {props.bio != null ? (
        <View style={styles.GameInnerComponentShadow}>
          <Text
            style={{
              fontSize: 25,
              color: global.g.getTextColor(),
              textAlign: 'center',
              margin: 10,
            }}>
            {' '}
            {props.bio}
          </Text>
        </View>
      ) : null}
      {console.log('Render Component:')}
      {console.log(props.NameArray)}
      {renderElements(
        props.ComponentArray,
        props.NameArray,
        props.updateGamePGNMethode,
        isClosed,
      ).map(type => (
        <View>{type}</View>
      ))}
      <TouchableOpacity
        onPress={() => {
          setIsClosed(!isClosed);
        }}>
        <View style={styles.GameShowMoreComponentShadow}>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              textAlign: 'center',
              margin: 20,
            }}>
            {isClosed ? 'Show more games' : 'Show less games'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const renderElements = (pgnArray, nameArray, updateGamePGN, isClosed) => {
  var GameComponenets = Array();
  console.log('Is CLosed:' + isClosed);

  var finalArray = [];

  if (isClosed) {
    for (var i = 0; i < 3; i++) {
      finalArray.push(pgnArray[i]);
    }
  } else {
    pgnArray.forEach(element => {
      finalArray.push(element);
    });
  }
  console.log('Final Array:');
  console.log(finalArray);

  var i = 0;
  finalArray.forEach(element => {
    console.log(pgnArray[i]);
    GameComponenets.push(
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
        }}
        onPress={() => {
          updateGamePGN(element, 1);
        }}>
        <View style={styles.GameInnerComponentShadow}>
          <Text
            style={{
              fontSize: global.g.getWindowWidth() / 75,
              color: global.g.getTextColor(),
              textAlign: 'center',
              margin: 10,
            }}>
            {nameArray[i]}
          </Text>
        </View>
      </TouchableOpacity>,
    );
    i++;
  });
  return GameComponenets;
};
