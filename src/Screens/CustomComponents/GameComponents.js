import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles';

export const ExportGameComponent = props => {
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
      ).map(type => (
        <View>{type}</View>
      ))}
    </View>
  );
};

const renderElements = (pgnArray, nameArray, updateGamePGN) => {
  var GameComponenets = Array();

  var i = 0;

  pgnArray.forEach(element => {
    console.log(pgnArray[i]);
    GameComponenets.push(
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
        }}
        onPress={() => {
          updateGamePGN(element, 5);
        }}>
        <View style={styles.GameInnerComponentShadow}>
          <Text
            style={{
              fontSize: 25,
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
