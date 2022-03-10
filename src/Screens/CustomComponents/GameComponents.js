import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles';

export const StandardGameComponent = props => {
  //name, picture, PGN, updateGamePGN
  var updateGamePGN = props.updateGamePGNMethode;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: global.g.getBackgroundColor(),
      }}
      onPress={() => {
        console.log(props.ComponentArray);
        updateGamePGN(props.ComponentArray, props.position);
      }}>
      <View style={styles.GameComponentShadow}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.GameImageComponentShadow}
            source={props.picture}
          />
          <Text
            style={{
              padding: 10,
              fontSize: global.g.getWindowWidth() / 50,
              width: global.g.getWindowWidth() / 7,
              color: global.g.getTextColor(),
              fontWeight: 'bold',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            {props.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ExportGameComponent = props => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <View style={styles.GameComponentShadow}>
      <Image style={styles.GameComponentImage} source={props.picture} />
      <Text
        style={{
          fontSize: global.g.getWindowWidth() / 50,
          color: global.g.getTextColor(),
          fontWeight: 'bold',
          textAlign: 'center',
          width: global.g.getWindowWidth() / 5,
        }}>
        {props.name}
      </Text>
      {props.elo != null ? (
        <View style={styles.GameInnerComponentShadow}>
          <Text
            style={{
              fontSize: global.g.getWindowWidth() / 70,
              color: global.g.getTextColor(),
              textAlign: 'center',
              margin: 10,
            }}>
            {' '}
            Highest Elo: {props.elo}
          </Text>
        </View>
      ) : null}
      {props.bio != null ? (
        <View style={styles.GameInnerComponentShadow}>
          <Text
            style={{
              fontSize: global.g.getWindowWidth() / 70,
              color: global.g.getTextColor(),
              textAlign: 'center',
              margin: 10,
            }}>
            {' '}
            {props.bio}
          </Text>
        </View>
      ) : null}

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
              fontSize: global.g.getWindowWidth() / 70,
              color: 'white',
              textAlign: 'center',
              margin: 20,
            }}>
            {isClosed ? 'show games' : 'hide games'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const renderElements = (pgnArray, nameArray, updateGamePGN, isClosed) => {
  var GameComponenets = Array();

  //Set how many games get Showen
  var ShowGames = 0;

  var finalArray = [];

  if (isClosed) {
    for (var i = 0; i < ShowGames; i++) {
      finalArray.push(pgnArray[i]);
    }
  } else {
    pgnArray.forEach(element => {
      finalArray.push(element);
    });
  }

  var i = 0;
  finalArray.forEach(element => {
    GameComponenets.push(
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
        }}
        onPress={() => {
          updateGamePGN(element, 0);
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
