import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
/*
Benutzername: null,
Elo: null,
PlayedGames: null,
WonGames: null,
LostGames: null,
*/
export const storeData = async () => {
  console.log('Store data');
  try {
    console.log('Store Data: ');

    /*{
    username: 'Michael',
    elo: 1000,
    playedGames: 0,
    wonGames: 0,
    lostGames: 0,
    localGames: 0,
    onlineGames: 0,
    }, */

    const storingString =
      '{"username":"' +
      global.g.getUsername() +
      '","elo":"' +
      global.g.getElo() +
      '","playedGames":"' +
      global.g.getPlayedGames() +
      '","wonGames":"' +
      global.g.getWonGames() +
      '","lostGames":"' +
      global.g.getLostGames() +
      '","localGames":"' +
      global.g.getLocalGames() +
      '","onlineGames":"' +
      global.g.getOnlineGames() +
      '","isLoggedIn":"' +
      global.g.getIsLoggedIn() +
      '"}';

    console.log(storingString);
    await AsyncStorage.setItem('@Storage', storingString);
    console.log('Data stored');
    return true;
  } catch (e) {
    console.log('Store data Error: ' + e);
    return false;
  }
};

export const getData = async () => {
  console.log('Get data');
  try {
    const item = await AsyncStorage.getItem('@Storage');
    console.log('try');
    console.log(JSON.parse(item));

    const jsonValue = JSON.parse(item);

    console.log('Json Value username: ' + jsonValue.username);
    global.g.setUserStats(
      jsonValue.username,
      jsonValue.elo,
      jsonValue.playedGames,
      jsonValue.wonGames,
      jsonValue.lostGames,
      jsonValue.localGames,
      jsonValue.onlineGames,
      jsonValue.isLoggedIn,
    );

    console.log('Is Logged in: JSON Value: ' + jsonValue.isLoggedIn);

    console.log('Is logged in Global: ' + global.g.getIsLoggedIn());

    console.log('Username: ' + global.g.getUsername());

    return true;
  } catch (e) {
    console.log('Get data Error: ' + e);
  }
};

export const deleteData = async () => {
  console.log('Delete data');
  try {
    await AsyncStorage.removeItem('@Storage');
  } catch (e) {
    console.log('Delete data Error: ' + e);
  }
};
