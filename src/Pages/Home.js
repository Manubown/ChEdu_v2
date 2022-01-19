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
} from 'react-native';

/*styles*/
import styles from '../styles';

import {HandleSwitchBackground} from '../global';

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
    this.setState({
      switchValue: global.g.getSwitchValue(),
    });
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
                  <Image />
                </View>
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
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 80,
                        color: 'white',
                      }}>
                      Play Time:{' '}
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
                      {}
                    </Text>
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 80,
                        color: 'white',
                      }}>
                      {}
                    </Text>
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 80,
                        color: 'white',
                      }}>
                      {}
                    </Text>
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 80,
                        color: 'white',
                      }}>
                      {}
                    </Text>
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 80,
                        color: 'white',
                      }}>
                      {}
                    </Text>
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 80,
                        color: 'white',
                      }}>
                      {}
                    </Text>
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 80,
                        color: 'white',
                      }}>
                      {}
                    </Text>
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 80,
                        color: 'white',
                      }}>
                      {}
                    </Text>
                  </View>
                </View>
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
          </View>
        </View>

        {/*Video*/}
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text>Video</Text>
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
                marginTop: 60,
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
                  Learn to play
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
                  ChessBoard
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
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{translateX: translateXTabLearnToPlay}],
              }}
              onLayout={event =>
                this.setState({
                  translateYLearnToPlay: event.nativeEvent.layout.height,
                })
              }>
              <View style={{marginTop: 20, marginLeft: 0}}>
                <ImageBackground
                  source={global.g.getChessPosterChessBoard()}
                  style={styles.Poster_Schachbrett}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 25,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      You want to learn chess, get better and beyond?
                    </Text>
                    <Text
                      style={{
                        fontSize: global.g.getWindowWidth() / 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      THIS IS YOUR PLACE TO START!
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('LearnToPlay')
                      }>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 40,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: '#007aff',
                        }}>
                        Start here!
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>

                {/*Separator*/}
                <Image
                  source={global.g.getSeparator()}
                  style={{
                    height: global.g.getWindowWidth() / 8,
                  }}
                />

                <View style={{flexDirection: 'row'}}>
                  {/*Chess Basics*/}
                  <ImageBackground
                    source={global.g.getChessBasics()}
                    style={styles.Opening_Concepts}>
                    <View
                      style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        borderRadius: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 50,
                          color: 'white',
                          margin: 10,
                          textAlign: 'center',
                        }}>
                        Chess basics
                      </Text>
                    </View>
                  </ImageBackground>

                  {/*Strategic Conncepts*/}
                  <ImageBackground
                    source={global.g.getStrategyConcepts()}
                    style={styles.Opening_Concepts}>
                    <View
                      style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        borderRadius: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 50,
                          color: 'white',
                          margin: 10,
                          textAlign: 'center',
                        }}>
                        Strategic Concepts
                      </Text>
                    </View>
                  </ImageBackground>

                  {/*Opening Concepts*/}
                  <ImageBackground
                    source={global.g.getOpeningConcepts()}
                    style={styles.Opening_Concepts}>
                    <View
                      style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        borderRadius: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 50,
                          color: 'white',
                          margin: 10,
                          textAlign: 'center',
                        }}>
                        Opening Concepts
                      </Text>
                    </View>
                  </ImageBackground>
                </View>

                {/*Separator*/}
                <Image
                  source={global.g.getSeparator()}
                  style={{
                    height: global.g.getWindowWidth() / 8,
                  }}
                />

                <View style={{flexDirection: 'row'}}>
                  {/*Expert Mode*/}
                  <ImageBackground
                    source={global.g.getExpertMode()}
                    style={styles.Opening_Concepts}>
                    <View
                      style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        borderRadius: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 50,
                          color: 'white',
                          margin: 10,
                          textAlign: 'center',
                        }}>
                        Expert Mode
                      </Text>
                    </View>
                  </ImageBackground>

                  {/*Textbook Checkmates*/}
                  <ImageBackground
                    source={global.g.getTextbookCheckmates()}
                    style={styles.Opening_Concepts}>
                    <View
                      style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        borderRadius: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: global.g.getWindowWidth() / 50,
                          color: 'white',
                          margin: 10,
                          textAlign: 'center',
                        }}>
                        Textbook Checkmates
                      </Text>
                    </View>
                  </ImageBackground>

                  {/*Platzhalter*/}
                  <ImageBackground
                    source={global.g.getComingSoon()}
                    style={styles.Opening_Concepts}>
                    <View
                      style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        borderRadius: 20,
                      }}></View>
                  </ImageBackground>
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
                //TODO: Transform
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
                //Transform TODO
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
