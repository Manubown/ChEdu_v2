import React from 'react';

import axios from 'axios';

import {storeData, deleteData} from '../Scripts/SaveData';

import {SHA256} from 'crypto-js';

export const RequestRegister = (username, password, email) => {
  console.log('Register POST Request Test: ' + username, password, email);

  var postRequest = {
    PlayerName: username,
    Email: email,
    HashedPassword: SHA256(password),
  };
  console.log(
    postRequest.PlayerName + postRequest.Email + postRequest.HashedPassword,
  );
  try {
    const response = axios
      .post('https://chedu.at:5000/register', postRequest)
      .then(function (response) {
        if (response) {
          console.log(
            'Register request Sent! \n Post request sent! ' +
              postRequest.username +
              postRequest.email,
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const RequestLogin = async (username, password) => {
  console.log('Login POST Request Test: ' + username, password);

  var postRequest = {
    Email: username,
    HashedPassword: SHA256(password),
  };
  console.log(postRequest.Email + postRequest.HashedPassword);
  try {
    const response = await axios
      .post('https://chedu.at:5000/VerifyPlayer', postRequest)
      .then(function (response) {
        console.log('Login request Sent! \n Post request sent! ');
        console.log(response.data);
        var responseData = response.data.Online;

        var responseDataOffline = response.data.Offline;
        global.g.setUserStats(
          responseData.PlayerName,
          responseData.OverallPoints,
          responseData.WonWhite +
            responseData.WonBlack +
            responseData.LostWhite +
            responseData.LostBlack +
            responseDataOffline.WonWhite +
            responseDataOffline.WonBlack +
            responseDataOffline.LostWhite +
            responseDataOffline.LostBlack,
          responseData.WonWhite + responseData.WonBlack,
          responseData.LostWhite + responseData.LostBlack,
          responseDataOffline.WonWhite +
            responseDataOffline.WonBlack +
            responseDataOffline.LostWhite +
            responseDataOffline.LostBlack,
          responseData.WonWhite +
            responseData.WonBlack +
            responseData.LostWhite +
            responseData.LostBlack,
          true,
        );

        if (storeData()) {
          return true;
        } else {
          return false;
        }
      })
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  } catch (error) {
    console.log(error);
  }
};

//////// TEST SAVE DATA ////////
export const SaveDataTest = () => {
  deleteData(DemoUserData);
  //storeData(DemoUserData);
};

//////// DEMO USER ////////
const DemoUserData = {
  Benutzername: 'Manubown',
  Elo: 66,
  PlayedGames: 12903,
  WonGames: 12000,
  LostGames: 9,
  SinglePlayer: 2800,
  Multiplayer: 10000,
  TimeSpend: 387575,
  isLoggedIn: true,
};
