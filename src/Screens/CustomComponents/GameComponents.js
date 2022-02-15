import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles';

export const ExportGameComponent = props => {
  return (
    <View style={styles.GameComponentShadow}>
      <Image style={styles.GameComponentImage} source={props.picture} />
      <Text style={{fontSize: 38, fontWeight: 'bold', textAlign: 'center'}}>
        {props.name}
      </Text>
      {props.elo != null ? (
        <View style={styles.GameInnerComponentShadow}>
          <Text style={{fontSize: 25, textAlign: 'center', margin: 10}}>
            {' '}
            Elo: {props.elo}
          </Text>
        </View>
      ) : null}
      {props.bio != null ? (
        <View style={styles.GameInnerComponentShadow}>
          <Text style={{fontSize: 25, textAlign: 'center', margin: 10}}>
            {' '}
            {props.bio}
          </Text>
        </View>
      ) : null}
      {props.ComponentArray.map(type => type)}
    </View>
  );
};
