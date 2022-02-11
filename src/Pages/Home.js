/* React standart imports*/
import React, {useState} from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Switch,
  Linking,
} from 'react-native';

/*styles*/
import styles from '../styles';

import {HandleSwitchBackground} from '../global';
import {getData, deleteData} from '../Scripts/SaveData';

export default class Home extends React.Component {
  state = {
    active: 0,
    xTabLearnToPlay: 0, //x co-ordinate of tab one
    xTabOnline: 0, //x co-ordinate of tab two
    xTabChessBoard: 0, //x co-ordinate of tab three
    xTabAnalysis: 0, //x co-ordinate of tab four
    translateX: new Animated.Value(0),
    translateXTabLearnToPlay: new Animated.Value(0),
    translateXTabOnline: new Animated.Value(global.g.getWindowWidth()),
    translateXTabChessBoard: new Animated.Value(global.g.getWindowWidth() * 2),
    translateXTabAnalysis: new Animated.Value(global.g.getWindowWidth() * 3),
    translateYLearnToPlay: -1000,
    translateYOnline: -1000,
    translateYChessboard: -1000,

    /*User Stats*/
    username: 'User',
    elo: 1000,
    playedGames: 0,
    wonGames: 0,
    lostGames: 0,
    localGames: 0,
    onlineGames: 0,
    isLoggedIn: false,
  };

  /*componontDidMount*/
  componentDidMount() {
    this.updateValuesStats();

    this.props.navigation.addListener('focus', () => {
      this.updateValuesStats();
    });

    addEventListener('change', () => {
      this.updateValuesStats();
    });
  }

  /*updateValuesStats*/
  updateValuesStats = () => {
    console.log('Update value stats');
    if (getData()) {
      this.setState({
        username: global.g.getUsername(),
        elo: global.g.getElo(),
        playedGames: global.g.getPlayedGames(),
        wonGames: global.g.getWonGames(),
        lostGames: global.g.getLostGames(),
        localGames: global.g.getLocalGames(),
        onlineGames: global.g.getOnlineGames(),
        switchValue: global.g.getSwitchValue(),
        isLoggedIn: global.g.getIsLoggedIn(),
      });
      console.log('is logged in: local: ' + this.state.isLoggedIn);
      console.log('is logged in: global: ' + global.g.getIsLoggedIn());
    }
  };

  /*handleSlide*/
  handleSlide = type => {
    let {
      active,
      translateX,
      translateXTabLearnToPlay,
      translateXTabOnline,
      translateXTabChessBoard,
      translateXTabAnalysis,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
    }).start();
    if (active === 1) {
      Animated.parallel([
        Animated.spring(translateXTabLearnToPlay, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabOnline, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabChessBoard, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabAnalysis, {
          toValue: global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
      ]);
    } else if (active === 2) {
      Animated.parallel([
        Animated.spring(translateXTabLearnToPlay, {
          toValue: -global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabOnline, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabChessBoard, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabAnalysis, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
      ]);
    } else if (active === 3) {
      Animated.parallel([
        Animated.spring(translateXTabLearnToPlay, {
          toValue: -global.g.getWindowWidth() * 3,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabOnline, {
          toValue: -global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabChessBoard, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabAnalysis, {
          toValue: 0,
          duration: 100,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabLearnToPlay, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabOnline, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabChessBoard, {
          toValue: global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabAnalysis, {
          toValue: global.g.getWindowWidth() * 3,
          duration: 100,
        }).start(),
      ]);
    }
  };
  /*handleSlide end*/

  render() {
    let {
      xTabLearnToPlay,
      xTabOnline,
      xTabChessBoard,
      xTabAnalysis,
      translateX,
      active,
      translateXTabLearnToPlay,
      translateXTabOnline,
      translateXTabChessBoard,
      translateXTabAnalysis,
      translateYLearnToPlay,
      translateYOnline,
      translateYChessboard,
      switchValue,
    } = this.state;

    return (
      <View
        style={
          (global.g.getWindowHeight(),
          global.g.getWindowWidth(),
          {backgroundColor: global.g.getBackgroundColor()})
        }>
        {/*Topbar*/}
        <View style={styles.Topbar}>
          <View style={styles.RightSwitch}>
            <HandleSwitchBackground />
            <Text>{global.g.getSunMoon()}</Text>
          </View>
        </View>

        {/*SideBar*/}
        <View style={styles.SideBar}>
          {/*Logo*/}
          <TouchableOpacity
            onPress={() => {
              //RequestLogin(this.state.Username, this.state.Password);
              this.props.navigation.navigate('Home');
            }}>
            {global.g.getLogo()}
          </TouchableOpacity>

          {/*Statistic + Start Button*/}
          <View>
            {/*Statistics*/}
            <View style={({flexDirection: 'row'}, styles.Stats)}>
              <View style={styles.StatsShadow}>
                <View style={styles.TopBoxStats}>
                  <Text
                    style={{
                      fontSize: global.g.getWindowWidth() / 30,
                      color: 'black',
                    }}>
                    Statistics
                  </Text>
                </View>
                {this.state.isLoggedIn ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      fontSize: global.g.getWindowWidth() / 80,
                    }}>
                    <View
                      style={{
                        flexDirection: 'column',
                        width: global.g.getWindowWidth() / 10,
                        height: global.g.getWindowHeight() / 10,
                        textAlign: 'right',
                      }}>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        Username:{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        Elo:{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        Played Games:{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        Won Games:{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        Lost Games:{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        Local Games:{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        Online Games:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        width: global.g.getWindowWidth() / 10,
                        textAlign: 'left',
                      }}>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        {global.g.getUsername()}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        {global.g.getElo()}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        {global.g.getPlayedGames()}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        {global.g.getWonGames()}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        {global.g.getLostGames()}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        {global.g.getLocalGames()}
                      </Text>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 80,
                          color: 'white',
                        }}>
                        {global.g.getOnlineGames()}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <Text
                    style={{
                      padding: 10,
                      fontSize: global.g.getWindowWidth() / 70,
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Login or Register to save your stats which will be shown
                    here!
                  </Text>
                )}
              </View>
            </View>

            {/*Start Game Button*/}
            <ImageBackground
              style={styles.StartGameButtonShadow}
              source={global.g.getChessBoardImage()}
              resizeMode="cover">
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chessboard')}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: (global.g.getWindowWidth() / 10) * 1,
                    height: (global.g.getWindowWidth() / 10) * 1,
                  }}>
                  <Image
                    source={global.g.getStartArrow()}
                    style={{
                      width: (global.g.getWindowWidth() / 10) * 1,
                      height: (global.g.getWindowWidth() / 10) * 1,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: 'rgba(52, 52, 52, 0.8)',
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: global.g.getWindowWidth() / 50,
                    color: 'white',
                    margin: 10,
                    textAlign: 'center',
                  }}>
                  Start Game!
                </Text>
              </View>
            </ImageBackground>
          </View>

          {/*Menu*/}
          <View>
            {console.log('Menue button is Logged IN: ' + this.state.isLoggedIn)}
            {!this.state.isLoggedIn ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <View
                  style={
                    ({
                      backgroundColor: global.g.getBackgroundColor(),
                    },
                    styles.MenuShadow)
                  }>
                  <Image
                    source={global.g.getSwitchLogin()}
                    style={{
                      width: (global.g.getWindowWidth() / 10) * 0.8,
                      height: (global.g.getWindowWidth() / 10) * 0.8,
                      color: 'white',
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: global.g.getTextColor(),
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  deleteData(),
                    global.g.setIsLoggedIn(false),
                    this.updateValuesStats();
                  this.props.navigation.navigate('LoadingScreen');
                }}>
                <View
                  style={
                    ({
                      backgroundColor: global.g.getBackgroundColor(),
                    },
                    styles.MenuShadow)
                  }>
                  <Image
                    source={global.g.getSwitchLogin()}
                    style={{
                      width: (global.g.getWindowWidth() / 10) * 0.8,
                      height: (global.g.getWindowWidth() / 10) * 0.8,
                      color: 'white',
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: global.g.getTextColor(),
                  }}>
                  Logout
                </Text>
              </TouchableOpacity>
            )}

            {!this.state.isLoggedIn ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <View
                  style={
                    ({backgroundColor: global.g.getBackgroundColor()},
                    styles.MenuShadow)
                  }>
                  <Image
                    source={global.g.getSwitchRegister()}
                    style={{
                      width: (global.g.getWindowWidth() / 10) * 0.8,
                      height: (global.g.getWindowWidth() / 10) * 0.8,
                      color: 'white',
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: global.g.getTextColor(),
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('User')}>
                <View
                  style={
                    ({backgroundColor: global.g.getBackgroundColor()},
                    styles.MenuShadow)
                  }>
                  <Image
                    source={global.g.getUserPicture()}
                    style={{
                      width: (global.g.getWindowWidth() / 10) * 0.8,
                      height: (global.g.getWindowWidth() / 10) * 0.8,
                      color: 'white',
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: global.g.getTextColor(),
                  }}>
                  User
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/*Video*/}
        <View
          style={{
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://youtu.be/0feB-55VoEk?t=1782')
            }>
            <Image
              source={global.g.getCheduVideo()}
              style={{
                height: global.g.getWindowWidth() / 8,
                width: global.g.getWindowWidth() / 4.5,
                borderRadius: 20
              }}
            />
          </TouchableOpacity>
        </View>

        {/*Content*/}
        <View style={{flex: 1}}>
          {/*Scroll Bar*/}
          <View
            style={{
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 20,
                height: 36,
                position: 'relative',
                backgroundColor: global.g.getBackgroundColor(),
              }}>
              {/*Animated.View Settings*/}
              <Animated.View
                style={{
                  position: 'absolute',
                  width: '25%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  backgroundColor: '#007aff',
                  borderRadius: 4,
                  transform: [{translateX}],
                }}
              />

              {/*Learn to play*/}
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#007aff',
                  borderRadius: 4,
                  borderRightWidth: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                onLayout={event =>
                  this.setState({xTabLearnToPlay: event.nativeEvent.layout.x})
                }
                onPress={() =>
                  this.setState({active: 0}, () =>
                    this.handleSlide(xTabLearnToPlay),
                  )
                }>
                <Text style={{color: active === 0 ? '#fff' : '#007aff'}}>
                  EduBoard
                </Text>
              </TouchableOpacity>

              {/*Online*/}
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#007aff',

                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onLayout={event =>
                  this.setState({xTabOnline: event.nativeEvent.layout.x})
                }
                onPress={() =>
                  this.setState({active: 1}, () => this.handleSlide(xTabOnline))
                }>
                <Text style={{color: active === 1 ? '#fff' : '#007aff'}}>
                  Online
                </Text>
              </TouchableOpacity>

              {/*Chessboard*/}
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#007aff',

                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onLayout={event =>
                  this.setState({xTabChessBoard: event.nativeEvent.layout.x})
                }
                onPress={() =>
                  this.setState({active: 2}, () =>
                    this.handleSlide(xTabChessBoard),
                  )
                }>
                <Text style={{color: active === 2 ? '#fff' : '#007aff'}}>
                  1v1 Board
                </Text>
              </TouchableOpacity>

              {/*Analysis*/}
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#007aff',
                  borderRadius: 4,
                  borderLeftWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onLayout={event =>
                  this.setState({xTabAnalysis: event.nativeEvent.layout.x})
                }
                onPress={() =>
                  this.setState({active: 3}, () =>
                    this.handleSlide(xTabAnalysis),
                  )
                }>
                <Text style={{color: active === 3 ? '#fff' : '#007aff'}}>
                  Analysis
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*Single Slides*/}
          <ScrollView>
            {/*Learn to play*/}
            <Animated.View
              style={{
                transform: [{translateX: translateXTabLearnToPlay}],
              }}
              onLayout={event =>
                this.setState({
                  translateYLearnToPlay: event.nativeEvent.layout.height,
                })
              }>
              <View style={{marginTop: 20, marginLeft: 0, flexDirection: 'row', justifyContent: 'center', }}>
                <View style = {styles.TextShadow}>
                  <Text style = {styles.ContentText, {color: global.g.getTextColor()}}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('LearnToPlay')
                    }>
                    <View
                    style={
                      ({backgroundColor: global.g.getBackgroundColor()},
                      styles.BookShadow)
                    }>
                      <Image
                        source={global.g.getBook()}
                        style={{
                          width: (global.g.getWindowWidth() / 5) * 0.8,
                          height: (global.g.getWindowWidth() / 5) * 0.8,
                          color: 'white',
                        }}
                      />
                    </View>
                      
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 40,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: global.g.getTextColor(),
                      }}>
                      Start here!
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.TextShadow}>
                  <Text style = {styles.ContentText, {color: global.g.getTextColor()}}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores 
                  </Text>
                </View>
              </View>
            </Animated.View>

            {/*Online*/}
            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                //Transform, damit die Position von oben koriigiert wird hier eben -translateY
                transform: [
                  {
                    translateX: translateXTabOnline,
                  },
                  {
                    translateY: -translateYLearnToPlay,
                  },
                ],
              }}
              onLayout={event =>
                this.setState({
                  translateYOnline: event.nativeEvent.layout.height,
                })
              }>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>
              <Text>Tab Two</Text>

              <View style={{marginTop: 20}}>
                <Image
                  source={global.g.getTwoKings()}
                  style={{width: 30, height: 30, borderRadius: 15}}
                />
              </View>
            </Animated.View>

            {/*Chessboard*/}
            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {
                    translateX: translateXTabChessBoard,
                  },
                  {
                    translateY: -translateYLearnToPlay - translateYOnline,
                  },
                ],
              }}
              onLayout={event =>
                this.setState({
                  translateYChessboard: event.nativeEvent.layout.height,
                })
              }>
              <Text>ddd</Text>
            </Animated.View>

            {/*Analysis*/}
            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {
                    translateX: translateXTabAnalysis,
                  },
                  {
                    translateY:
                      -translateYLearnToPlay -
                      translateYOnline -
                      translateYChessboard,
                  },
                ],
              }}>
              <Text>Tab Four</Text>
              <View style={{marginTop: 20}}>
                <Image
                  source={global.g.getTwoKings()}
                  style={{width: 30, height: 30, borderRadius: 15}}
                />
              </View>
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
