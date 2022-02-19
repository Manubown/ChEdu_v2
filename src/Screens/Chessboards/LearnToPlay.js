import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';

import {RightCircleTwoTone, LeftCircleTwoTone, ForwardFilled, BackwardFilled, UpCircleFilled} from '@ant-design/icons';

/*styles*/
import styles from '../../styles';

import Chessboard from 'chessboardjsx';
//import Resource from "./Resource";

import LogicalChessboard from './LogicalChessboard';
import MoreLessComponent from '../CustomComponents/MoreLessComponent';
import {
  CommentBox,
  FENBox,
  PGNViewer,
} from '../CustomComponents/ChessboardComponents';
import {ExportGameComponent} from '../CustomComponents/GameComponents';

export default class LearnToPlay extends React.Component {
  state = {
    active: 0,
    xTabChessBasics: 0, //x co-ordinate of tab one
    xTabStrategicConcepts: 0, //x co-ordinate of tab two
    xTabOpeningConcepts: 0, //x co-ordinate of tab three
    xTabExpertMode: 0, //x co-ordinate of tab four
    xTabTextbookCheckmates: 0, //x co-ordinate of tab five
    translateX: new Animated.Value(0),
    translateXTabChessBasics: new Animated.Value(0),
    translateXTabStrategicConcepts: new Animated.Value(
      global.g.getWindowWidth(),
    ),
    translateXTabOpeningConcepts: new Animated.Value(
      global.g.getWindowWidth() * 2,
    ),
    translateXTabExpertMode: new Animated.Value(global.g.getWindowWidth() * 3),
    translateXTabTextbookCheckmates: new Animated.Value(
      global.g.getWindowWidth() * 4,
    ),
    translateYChessBasics: -1000,
    translateYStrategicConcepts: -1000,
    translateYOpeningConcepts: -1000,
    translateYExpertMode: -1000,
  };
  /*handleSlide*/
  handleSlide = type => {
    let {
      active,
      translateX,
      translateXTabChessBasics,
      translateXTabStrategicConcepts,
      translateXTabOpeningConcepts,
      translateXTabExpertMode,
      translateXTabTextbookCheckmates,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
    }).start();
    if (active === 1) {
      Animated.parallel([
        Animated.spring(translateXTabChessBasics, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabStrategicConcepts, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabOpeningConcepts, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabExpertMode, {
          toValue: global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTextbookCheckmates, {
          toValue: global.g.getWindowWidth() * 3,
          duration: 100,
        }).start(),
      ]);
    } else if (active === 2) {
      Animated.parallel([
        Animated.spring(translateXTabChessBasics, {
          toValue: -global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabStrategicConcepts, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabOpeningConcepts, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabExpertMode, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTextbookCheckmates, {
          toValue: global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
      ]);
    } else if (active === 3) {
      Animated.parallel([
        Animated.spring(translateXTabChessBasics, {
          toValue: -global.g.getWindowWidth() * 3,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabStrategicConcepts, {
          toValue: -global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabOpeningConcepts, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabExpertMode, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTextbookCheckmates, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
      ]);
    } else if (active === 4) {
      Animated.parallel([
        Animated.spring(translateXTabChessBasics, {
          toValue: -global.g.getWindowWidth() * 4,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabStrategicConcepts, {
          toValue: -global.g.getWindowWidth() * 3,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabOpeningConcepts, {
          toValue: -global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabExpertMode, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTextbookCheckmates, {
          toValue: 0,
          duration: 100,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabChessBasics, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabStrategicConcepts, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabOpeningConcepts, {
          toValue: global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabExpertMode, {
          toValue: global.g.getWindowWidth() * 3,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTextbookCheckmates, {
          toValue: global.g.getWindowWidth() * 4,
          duration: 100,
        }).start(),
      ]);
    }
  };
  /*handleSlide end*/

  render() {
    let {
      xTabChessBasics,
      xTabStrategicConcepts,
      xTabOpeningConcepts,
      xTabExpertMode,
      xTabTextbookCheckmates,
      translateX,
      active,
      translateXTabChessBasics,
      translateXTabStrategicConcepts,
      translateXTabOpeningConcepts,
      translateXTabExpertMode,
      translateXTabTextbookCheckmates,
      translateYChessBasics,
      translateYStrategicConcepts,
      translateYOpeningConcepts,
      translateYExpertMode,
    } = this.state;

    return (
      <View
        style={
          (global.g.getWindowWidth(),
          global.g.getWindowHeight(),
          {
            backgroundColor: global.g.getBackgroundColor(),
          })
        }>
        <View
          style={{
            paddingBottom: global.g.getWindowHeight() / 10,
          }}>
          <LogicalChessboard>
            {({
              position,
              onDrop,
              onMouseOverSquare,
              onMouseOutSquare,
              squareStyles,
              dropSquareStyle,
              onDragOverSquare,
              onSquareClick,
              onSquareRightClick,
              updateGameFEN,
              updateGamePGN,
              undoMovePGN,
              nextMovePGN,
              chessBoardMoves,
              gameOver,
              pgnComment,
              moveIndex,
              SAN,
              updatePGNPosition,
            }) => (
              <View style={{}}>
                {/*////// Window row Element //////*/}
                <View style={{flexDirection: 'row'}}>
                  {/*///// Chessboard Field /////*/}
                  <View>
                    <Chessboard
                      id="Chessboard"
                      width={
                        global.g.getWindowHeight() -
                        global.g.getWindowHeight() / 15
                      }
                      position={position} //position zB. (a6: 'kW') ==> König auf a6
                      onDrop={onDrop}
                      onMouseOverSquare={onMouseOverSquare}
                      onMouseOutSquare={onMouseOutSquare}
                      boardStyle={{
                        borderRadius: '5px',
                        boxShadow: `0 5px 15px #185a5c`,
                      }}
                      squareStyles={squareStyles}
                      dropSquareStyle={dropSquareStyle}
                      onDragOverSquare={onDragOverSquare}
                      onSquareClick={onSquareClick}
                      onSquareRightClick={onSquareRightClick}
                      orientation="white"
                    />
                  </View>

                  <View
                    style={{
                      alignItems: 'center',
                      width:
                        global.g.getWindowWidth() -
                        (global.g.getWindowHeight() -
                          global.g.getWindowHeight() / 30),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.ChessBoardButtonShadow}>
                        <TouchableOpacity
                          style={{width: 50}}
                        >
                          <BackwardFilled 
                            style={{color: '#185a5c',fontSize: 30}}
                            onPress={() => {
                              //TODO: set on first move
                              nextMovePGN();
                            }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{width: 50}}
                          onPress={() => {
                            //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                            undoMovePGN();
                          }}>
                          <LeftCircleTwoTone
                            twoToneColor={'#185a5c'}
                            style={{fontSize: 30}}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{width: 50}}
                          onPress={() => {
                            //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                            //nextMove();
                            nextMovePGN();
                          }}>
                          <RightCircleTwoTone
                            twoToneColor={'#185a5c'}
                            style={{fontSize: 30}}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{width: 50}}
                          onPress={() => {
                            //TODO: set on last move
                            nextMovePGN();
                          }}
                        >
                          <ForwardFilled 
                            style={{color: '#185a5c', fontSize: 30}}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{width: 50}}
                          onPress={() => {
                            //TODO: routate Board
                            nextMovePGN();
                          }}
                        >
                          <UpCircleFilled 
                            style={{color: '#185a5c', fontSize: 30}}
                          />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          //RequestLogin(this.state.Username, this.state.Password);
                          this.props.navigation.navigate('Home');
                        }}>
                        {global.g.getOnlyLogo()}
                      </TouchableOpacity>
                    </View>

                    <PGNViewer
                      SAN={SAN}
                      updatePGNPosition={updatePGNPosition}
                    />
                  </View>
                </View>

                <CommentBox pgnComment={pgnComment} />
                {/*Tools*/}

                {gameOver ? (
                  <View
                    style={{
                      zIndex: '500',
                      position: 'absolute',
                      marginTop: global.g.getWindowHeight() / 3,
                      marginLeft: global.g.getWindowHeight() / 3,
                      width: global.g.getWindowHeight() / 3,
                      height: global.g.getWindowHeight() / 3,
                      backgroundColor: global.g.getBackgroundColor(),
                      opacity: 1,
                    }}>
                    <Text style={{textAlign: 'center'}}>GAME OVER!</Text>
                  </View>
                ) : null}

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
                        width: '20%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        transform: [{translateX}],
                      }}
                    />

                    {/*Chess Basics*/}
                    <TouchableOpacity
                      style={
                        (styles.LearnToPlaySlider,
                        {
                          justifyContent: 'center',
                          alignItems: 'center',
                        })
                      }
                      onLayout={event =>
                        this.setState({
                          xTabChessBasics: event.nativeEvent.layout.x,
                        })
                      }
                      onPress={() =>
                        this.setState({active: 0}, () =>
                          this.handleSlide(xTabChessBasics),
                        )
                      }>
                      <ImageBackground
                        source={global.g.getChessBasics()}
                        style={styles.LearnToPlaySlider}>
                        <View
                          style={{
                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                            borderRadius: 20,
                            margin: global.g.getWindowWidth() / 20,
                            marginTop: global.g.getWindowWidth() / 20,
                            marginBottom: global.g.getWindowWidth() / 20,
                          }}>
                          <Text
                            style={{
                              fontSize: global.g.getWindowWidth() / 75,
                              color: 'white',
                              margin: 10,
                              textAlign: 'center',
                            }}>
                            Chess basics
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>

                    {/*Strategic Concepts*/}
                    <TouchableOpacity
                      style={
                        (styles.LearnToPlaySlider,
                        {
                          justifyContent: 'center',
                          alignItems: 'center',
                        })
                      }
                      onLayout={event =>
                        this.setState({
                          xTabStrategicConcepts: event.nativeEvent.layout.x,
                        })
                      }
                      onPress={() =>
                        this.setState({active: 1}, () =>
                          this.handleSlide(xTabStrategicConcepts),
                        )
                      }>
                      <ImageBackground
                        source={global.g.getStrategyConcepts()}
                        style={styles.LearnToPlaySlider}>
                        <View
                          style={{
                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                            borderRadius: 20,
                            margin: global.g.getWindowWidth() / 20,
                            marginTop: global.g.getWindowWidth() / 20,
                            marginBottom: global.g.getWindowWidth() / 20,
                          }}>
                          <Text
                            style={{
                              fontSize: global.g.getWindowWidth() / 75,
                              color: 'white',
                              margin: 10,
                              textAlign: 'center',
                            }}>
                            Strategic Concepts
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>

                    {/*Opening Concepts*/}
                    <TouchableOpacity
                      style={
                        (styles.LearnToPlaySlider,
                        {
                          justifyContent: 'center',
                          alignItems: 'center',
                        })
                      }
                      onLayout={event =>
                        this.setState({
                          xTabOpeningConcepts: event.nativeEvent.layout.x,
                        })
                      }
                      onPress={() =>
                        this.setState({active: 2}, () =>
                          this.handleSlide(xTabOpeningConcepts),
                        )
                      }>
                      <ImageBackground
                        source={global.g.getOpeningConcepts()}
                        style={styles.LearnToPlaySlider}>
                        <View
                          style={{
                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                            borderRadius: 20,
                            margin: global.g.getWindowWidth() / 20,
                            marginTop: global.g.getWindowWidth() / 20,
                            marginBottom: global.g.getWindowWidth() / 20,
                          }}>
                          <Text
                            style={{
                              fontSize: global.g.getWindowWidth() / 75,
                              color: 'white',
                              margin: 10,
                              textAlign: 'center',
                            }}>
                            Opening Concepts
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>

                    {/*Expert Mode*/}
                    <TouchableOpacity
                      style={
                        (styles.LearnToPlaySlider,
                        {
                          justifyContent: 'center',
                          alignItems: 'center',
                        })
                      }
                      onLayout={event =>
                        this.setState({
                          xTabExpertMode: event.nativeEvent.layout.x,
                        })
                      }
                      onPress={() =>
                        this.setState({active: 3}, () =>
                          this.handleSlide(xTabExpertMode),
                        )
                      }>
                      <ImageBackground
                        source={global.g.getExpertMode()}
                        style={styles.LearnToPlaySlider}>
                        <View
                          style={{
                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                            borderRadius: 20,
                            margin: global.g.getWindowWidth() / 20,
                            marginTop: global.g.getWindowWidth() / 20,
                            marginBottom: global.g.getWindowWidth() / 20,
                          }}>
                          <Text
                            style={{
                              fontSize: global.g.getWindowWidth() / 75,
                              color: 'white',
                              margin: 10,
                              textAlign: 'center',
                            }}>
                            Expert Mode
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>

                    {/*Textbook Checkmates*/}
                    <TouchableOpacity
                      style={
                        (styles.LearnToPlaySlider,
                        {
                          justifyContent: 'center',
                          alignItems: 'center',
                        })
                      }
                      onLayout={event =>
                        this.setState({
                          xTabTextbookCheckmates: event.nativeEvent.layout.x,
                        })
                      }
                      onPress={() =>
                        this.setState({active: 4}, () =>
                          this.handleSlide(xTabTextbookCheckmates),
                        )
                      }>
                      <ImageBackground
                        source={global.g.getTextbookCheckmates()}
                        style={styles.LearnToPlaySlider}>
                        <View
                          style={{
                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                            borderRadius: 20,
                            margin: global.g.getWindowWidth() / 20,
                            marginTop: global.g.getWindowWidth() / 20,
                            marginBottom: global.g.getWindowWidth() / 20,
                          }}>
                          <Text
                            style={{
                              fontSize: global.g.getWindowWidth() / 75,
                              color: 'white',
                              margin: 10,
                              textAlign: 'center',
                            }}>
                            Textbook Checkmates
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>

                {/*Single Slides*/}
                <ScrollView style={{marginTop: global.g.getWindowWidth() / 50}}>
                  {/*Chess Basics*/}
                  <Animated.View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      transform: [{translateX: translateXTabChessBasics}],
                    }}
                    onLayout={event =>
                      this.setState({
                        translateYChessBasics: event.nativeEvent.layout.height,
                      })
                    }>
                    <Text style={{color: global.g.getTextColor()}}>
                      Tab One
                    </Text>
                  </Animated.View>

                  {/*Strategic Concepts*/}
                  <Animated.View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      //Transform, damit die Position von oben koriigiert wird hier eben -translateY
                      transform: [
                        {
                          translateX: translateXTabStrategicConcepts,
                        },
                        {
                          translateY: -translateYChessBasics,
                        },
                      ],
                    }}
                    onLayout={event =>
                      this.setState({
                        translateYStrategicConcepts:
                          event.nativeEvent.layout.height,
                      })
                    }>
                    <Text style={{color: global.g.getTextColor()}}>
                      Tab Two
                    </Text>
                  </Animated.View>

                  {/*Opening Concepts*/}
                  <Animated.View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      transform: [
                        {
                          translateX: translateXTabOpeningConcepts,
                        },
                        {
                          translateY:
                            -translateYChessBasics -
                            translateYStrategicConcepts,
                        },
                      ],
                    }}
                    onLayout={event =>
                      this.setState({
                        translateYOpeningConcepts:
                          event.nativeEvent.layout.height,
                      })
                    }>
                    <View style = {{flexDirection: 'row'}}>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getSicilianDefencePicture()}
                          name={'Sicilian Defence'}
                          ComponentArray={[
                            global.g.getSicilianDefence(),
                          ]}
                          NameArray={[
                            'Sicilian Defence',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getFrenchDefencePicture()}
                          name={'French Defence'}
                          ComponentArray={[
                            global.g.getFrenchDefence(),
                          ]}
                          NameArray={[
                            'French Defence',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getRuyLopezPicture()}
                          name={'Ruy Lopez'}
                          ComponentArray={[
                            global.g.getRuyLopez(),
                          ]}
                          NameArray={[
                            'Ruy Lopez',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getCaroKannPicture()}
                          name={'Caro Kann'}
                          ComponentArray={[
                            global.g.getCaroKann(),
                          ]}
                          NameArray={[
                            'Caro Kann',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getItalianGamePicture()}
                          name={'Italian Game'}
                          ComponentArray={[
                            global.g.getItalianGame(),
                          ]}
                          NameArray={[
                            'Italian Game',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getScandinavianDefencePicture()}
                          name={'Scandinavian Defence'}
                          ComponentArray={[
                            global.g.getScandinavianDefence(),
                          ]}
                          NameArray={[
                            'Scandinavian Defence',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getPircDefencePicture()}
                          name={'Pirc Defence'}
                          ComponentArray={[
                            global.g.getPircDefence(),
                          ]}
                          NameArray={[
                            'Pirc Defence',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getScotchGamePicture()}
                          name={'Scotch Game'}
                          ComponentArray={[
                            global.g.getScotchGame(),
                          ]}
                          NameArray={[
                            'Scotch Game',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getViennaGamePicture()}
                          name={'Vienna Game'}
                          ComponentArray={[
                            global.g.getViennaGame(),
                          ]}
                          NameArray={[
                            'Vienna Game',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getQueensGambitPicture()}
                          name={'Queen\'s Gambit'}
                          ComponentArray={[
                            global.g.getQueensGambit(),
                          ]}
                          NameArray={[
                            'Queen\'s Gambit',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getSlavDefencePicture()}
                          name={'Slav Defence'}
                          ComponentArray={[
                            global.g.getSlavDefence(),
                          ]}
                          NameArray={[
                            'Slav Defence',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getIndianDefencePicture()}
                          name={'Indian Defence'}
                          ComponentArray={[
                            global.g.getIndianDefence(),
                          ]}
                          NameArray={[
                            'Indian Defence',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getDutchDefencePicture()}
                          name={'Dutch Defence'}
                          ComponentArray={[
                            global.g.getDutchDefence(),
                          ]}
                          NameArray={[
                            'Dutch Defence',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getEnglishOpeningPicture()}
                          name={'English Opening'}
                          ComponentArray={[
                            global.g.getEnglishOpening(),
                          ]}
                          NameArray={[
                            'English Opening',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getCatalanOpeningPicture()}
                          name={'Catalan Opening'}
                          ComponentArray={[
                            global.g.getCatalanOpening(),
                          ]}
                          NameArray={[
                            'Catalan Opening',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getRetiOpeningPicture()}
                          name={'Réti Opening'}
                          ComponentArray={[
                            global.g.getRetiOpening(),
                          ]}
                          NameArray={[
                            'Réti Opening',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                  </Animated.View>

                  {/*Expert Mode*/}
                  <Animated.View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      transform: [
                        {
                          translateX: translateXTabExpertMode,
                        },
                        {
                          translateY:
                            -translateYChessBasics -
                            translateYStrategicConcepts -
                            translateYOpeningConcepts,
                        },
                      ],
                    }}
                    onLayout={event =>
                      this.setState({
                        translateYExpertMode: event.nativeEvent.layout.height,
                      })
                    }>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getMagnusCarlsen()}
                          name={'Magnus Carlsen'}
                          elo={2882}
                          bio={
                            'Bester spieler einfach der hammer!11!1! Immer schon toll gewesen!'
                          }
                          ComponentArray={[
                            global.g.getWorldChessChampionship2021Game6(),
                            global.g.getKramnik_vs_Carlsen2008(),
                            global.g.getCarlsen_vs_Aronian2015(),
                            global.g.getCarlsen_vs_Nakamura2011(),
                            global.g.getCarlsen_vs_Gelfand2013(),
                            global.g.getCarlsen_vs_Kasparov2004(),
                          ]}
                          NameArray={[
                            'World Chess Championship 2021 Game6',
                            'Kramnik vs Carlsen',
                            'Carlsen vs Aronian',
                            'Carlsen vs Nakamura',
                            'Carlsen vs Gelfand',
                            'Carlsen vs Kasparov',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getGarryKasparov()}
                          name={'Garry Kasparov'}
                          bio={
                            'Bester spieler einfach der hammer!11!1! Immer schon toll gewesen!'
                          }
                          elo={2851}
                          ComponentArray={[
                            global.g.getMagerramov_vs_Kasparov1977(),
                            global.g.getKasparov_vs_Palatnik1978(),
                            global.g.getKasparov_vs_Topalov1999(),
                            global.g.getKasparov_vs_Karpov1987(),
                            global.g.getKasparov_vs_Anand1996(),
                            global.g.getKasparov_vs_Deep_Blue1996(),
                            global.g.getKarpov_vs_Kasparov1985(),
                          ]}
                          NameArray={[
                            'Magerramov vs Kasparov',
                            'Kasparov vs Palatnik',
                            'Kasparov vs Topalov',
                            'Kasparov vs Karpov',
                            'Kasparov vs Anand',
                            'Kasparov vs Deep Blue',
                            'Kasparov vs Karpov Second',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getHikaruNakamura()}
                          name={'Hikaru Nakamura'}
                          bio={
                            'Bester spieler einfach der hammer!11!1! Immer schon toll gewesen!'
                          }
                          elo={2816}
                          ComponentArray={[
                            global.g.getGelfand_vs_Nakamura2010(),
                            global.g.getStripunsky_vs_Nakamura1998(),
                            global.g.getNakamura_vs_Oluto_Adu1999(),
                            global.g.getNakamura_vs_Novikov2002(),
                            global.g.getCrafty_AI_vs_Nakamura2007(),
                          ]}
                          NameArray={[
                            'Gelfand vs Nakamura 2010',
                            'Stripunksy vs Nakamura 1998',
                            'Nakamura vs Adu 1999',
                            'Nakamura vs Novikov 2002',
                            'Crafty AI vs Nakamura 2007',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getAnishGiri()}
                          name={'Anish Giri'}
                          elo={2798}
                          bio={
                            'Bester spieler einfach der hammer!11!1! Immer schon toll gewesen!'
                          }
                          ComponentArray={[
                            global.g.getGiri_vs_Hao2021(),
                            global.g.getLiren_vs_Giri2017(),
                            global.g.getGiri_vs_Harikrishna2019(),
                          ]}
                          NameArray={[
                            'Giri vs Hao 2021',
                            'Liren vs Giri 2017',
                            'Giri vs Harikrishna 2019',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getAntolyKarpov()}
                          name={'Antoly Karpov'}
                          elo={2780}
                          bio={
                            'Bester spieler einfach der hammer!11!1! Immer schon toll gewesen!'
                          }
                          ComponentArray={[
                            global.g.getAnand_vs_Karpov1998(),
                            global.g.getGelfand_vs_Karpov1995(),
                            global.g.getKarpov_vs_Kasparov1988(),
                            global.g.getKarpov_vs_Korchnoi1981(),
                            global.g.getKarpov_vs_Spassky1979(),
                          ]}
                          NameArray={[
                            'Anand vs Karpov 1998',
                            'Gelfand vs Karpov 1995',
                            'Karpov vs Kasparov 1988',
                            'Karpov vs Korchnoi 1981',
                            'Karpov vs Spassky 1979',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getBobbyFischer()}
                          name={'Bobby Fischer'}
                          elo={2785}
                          bio={
                            'Bester spieler einfach der hammer!11!1! Immer schon toll gewesen!'
                          }
                          ComponentArray={[
                            global.g.getByrne_vs_Fischer1963(),
                            global.g.getFischer_vs_Myagmarsuren1967(),
                            global.g.getFischer_vs_Spassky1972(),
                            global.g.getFischer_vs_Tal1961(),
                            global.g.getSpassky_vs_Fischer1972(),
                          ]}
                          NameArray={[
                            'Byrne vs Fischer 1963',
                            'Fischer vs Myagmarsuren 1967',
                            'Fischer vs Spassky 1972',
                            'Fischer vs Tal 1961',
                            'Spassky vs Fischer 1972',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                  </Animated.View>

                  {/*Textbook Checkmates*/}
                  <Animated.View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      //TODO: Transform
                      transform: [
                        {
                          translateX: translateXTabTextbookCheckmates,
                        },
                        {
                          translateY:
                            -translateYChessBasics -
                            translateYStrategicConcepts -
                            translateYOpeningConcepts -
                            translateYExpertMode,
                        },
                      ],
                    }}>
                    <Text style={{color: global.g.getTextColor()}}>
                      Tab Five
                    </Text>
                  </Animated.View>
                </ScrollView>
              </View>
            )}
          </LogicalChessboard>
        </View>
      </View>
    );
  }
}

/*const getComponentArray = props => {
  var ComponentArray = Array();
  ComponentArray[0] = (
    <TouchableOpacity
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'white',
      }}
      onPress={() => {
        //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
        //updateGameBGN(global.g.getFIDE2021_Game6(), 0);
        props.updateGamePGN(global.g.getSomeCarlsenGame(), 1);
      }}>
      <Text>Testgame</Text>
    </TouchableOpacity>
  );
  return ComponentArray;
};*/
