import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  TopBoxLogo: {
    width: (windowWidth / 10) * 3,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  TopBoxStats: {
    width: (windowWidth / 10) * 2.8,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },

  Topbar: {
    marginBottom: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    height: windowHeight / 14,
  },

  //Topbar Styles
  RightSwitch: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
  },

  LoginStyle: {
    left: 0,
    flexDirection: 'row',
  },

  RegisterStyle: {
    position: 'absolute',
    left: windowWidth / 4,
    flexDirection: 'row',
  },

  UserStyle: {
    position: 'absolute',
    right: windowWidth / 4,
    flexDirection: 'row',
  },

  //Homepage Styles

  Stats: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  Column: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  Box: {
    justifyContent: 'center',
  },

  Logo: {
    width: windowWidth / 8,
    height: windowWidth / 8,
  },

  TwoKings: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },

  CheduBlue: {
    margin: 0,
    padding: 0,
    color: '#00578a',
    fontSize: windowWidth / 20,
    fontWeight: 'bold',
  },
  CheduDarkBlue: {
    padding: 0,
    margin: 0,
    color: '#0e113f',
    fontSize: windowWidth / 20,
    fontWeight: 'bold',
  },

  BaseShadow: {
    overflow: 'hidden',
    margin: (windowWidth / 10) * 0.1,
    width: (windowWidth / 10) * 3,
    height: (windowWidth / 10) * 3,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#328da8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },

  StatsShadow: {
    overflow: 'hidden',
    margin: (windowWidth / 10) * 0.1,
    width: (windowWidth / 10) * 2.8,
    height: (windowWidth / 10) * 1.8,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#00578a',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },

  StartGameButtonShadow: {
    flexDirection: 'row',
    overflow: 'hidden',
    margin: (windowWidth / 10) * 0.1,
    width: (windowWidth / 10) * 2.8,
    height: (windowWidth / 10) * 1,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },
  MenuShadow: {
    flexDirection: 'row',
    overflow: 'hidden',
    margin: (windowWidth / 10) * 0.1,
    width: (windowWidth / 10) * 0.85,
    height: (windowWidth / 10) * 0.85,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },

  Opening_Concepts: {
    overflow: 'hidden',
    margin: (windowWidth / 10) * 0.1,
    width: (windowWidth / 10) * 2.8,
    height: (windowWidth / 10) * 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Poster_Schachbrett: {
    overflow: 'hidden',
    alignSelf: 'center',
    margin: (windowWidth / 5) * 0.1,
    width: (windowWidth / 5) * 2.8,
    borderRadius: 20,
  },

  Buttons: {
    margin: 15,
    width: 150,
  },

  buttonView: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: (windowHeight / 10) * 8,
    margin: 30,
    padding: 20,
  },

  PlayLog: {
    flex: 1,
    height: (windowHeight / 10) * 8,
    width: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ChessBoard: {
    height: (windowHeight / 10) * 5,
    width: (windowHeight / 10) * 5,
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ChessBoardChildren: {
    fontSize: 10,
    borderWidth: 2,
  },

  BottonVield: {
    height: 100,
    width: 100,
    marginBottom: 80,
    backgroundColor: 'white',
    borderRadius: 90,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  SideBar: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  LearnToPlayText: {
    color: '#00578a',
    fontSize: windowWidth / 80,
  },

  LearnToPlayText2: {
    fontSize: windowWidth / 30,
    color: 'white',
  },

  EasiestWay: {
    fontSize: windowWidth / 50,
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },

  Input: {
    margin: 20,
  },
});

export default styles;
