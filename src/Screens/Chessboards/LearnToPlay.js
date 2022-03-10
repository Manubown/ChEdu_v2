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

import {
  RightCircleTwoTone,
  LeftCircleTwoTone,
  ForwardFilled,
  BackwardFilled,
  UpCircleFilled,
} from '@ant-design/icons';

/*styles*/
import styles from '../../styles';

import Chessboard from 'chessboardjsx';
//import Resource from "./Resource";

import LogicalChessboard from './LogicalChessboard';
import {
  CommentBox,
  TablePGNViewer,
} from '../CustomComponents/ChessboardComponents';
import {
  ExportGameComponent,
  StandardGameComponent,
} from '../CustomComponents/GameComponents';

export default class LearnToPlay extends React.Component {
  state = {
    active: 0,
    xTabChessBasics: 0, //x co-ordinate of tab one
    xTabStrategicConcepts: 0, //x co-ordinate of tab two
    xTabOpeningConcepts: 0, //x co-ordinate of tab three
    xTabExpertMode: 0, //x co-ordinate of tab four
    xTabTextbookCheckmates: 0, //x co-ordinate of s
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
              currentTurn,
              pgnComment,
              moveIndex,
              SAN,
              updatePGNPosition,
              boardRotateBoard,
              orientation,
              firstMove,
              lastMove,
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
                      orientation={orientation}
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
                          onPress={() => {
                            firstMove();
                          }}>
                          <BackwardFilled
                            style={{
                              color: '#185a5c',
                              fontSize: global.g.getWindowWidth() / 60,
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
                            style={{fontSize: global.g.getWindowWidth() / 60}}
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
                            style={{fontSize: global.g.getWindowWidth() / 60}}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{width: 50}}
                          onPress={() => {
                            lastMove();
                          }}>
                          <ForwardFilled
                            style={{
                              color: '#185a5c',
                              fontSize: global.g.getWindowWidth() / 60,
                            }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{width: 50}}
                          onPress={() => {
                            boardRotateBoard();
                          }}>
                          <UpCircleFilled
                            style={{
                              color: '#185a5c',
                              fontSize: global.g.getWindowWidth() / 60,
                            }}
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

                    <TablePGNViewer
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
                    {currentTurn == 'w' ? (
                      <Text>Black has won!</Text>
                    ) : (
                      <Text>White has won!</Text>
                    )}
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
                            Chess Basics
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
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getSicilianDefencePicture()}
                          name={'Goal of the game'}
                          ComponentArray={
                            global.g.getSicilianDefence().PGN.join
                          } //.join('\n')
                          position={global.g.getSicilianDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getFrenchDefencePicture()}
                          name={'King'}
                          ComponentArray={global.g.getFrenchDefence().PGN}
                          position={global.g.getFrenchDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getRuyLopezPicture()}
                          name={'Pawn'}
                          ComponentArray={global.g.getRuyLopez().PGN}
                          position={global.g.getRuyLopez().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getSicilianDefencePicture()}
                          name={'Knight'}
                          ComponentArray={global.g.getSicilianDefence().PGN} //.join('\n')
                          position={global.g.getSicilianDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getFrenchDefencePicture()}
                          name={'Bishop'}
                          ComponentArray={global.g.getFrenchDefence().PGN}
                          position={global.g.getFrenchDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getRuyLopezPicture()}
                          name={'Rook'}
                          ComponentArray={global.g.getRuyLopez().PGN}
                          position={global.g.getRuyLopez().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getSicilianDefencePicture()}
                          name={'Queen'}
                          ComponentArray={global.g.getBasics().Queen.join('\n')} //.join('\n')
                          position={0}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getFrenchDefencePicture()}
                          name={'Castling'}
                          ComponentArray={global.g.getFrenchDefence().PGN}
                          position={global.g.getFrenchDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getRuyLopezPicture()}
                          name={'En Passant'}
                          ComponentArray={global.g.getRuyLopez().PGN}
                          position={global.g.getRuyLopez().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
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
                    <View>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: global.g.getWindowWidth() / 20,
                          color: global.g.getTextColor(),
                        }}>
                        Opening
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getCentralPawnsPicture()}
                            name={'Occupy the Centre with Pawns'}
                            bio={
                              'The most common move at the beginning of a game of chess is e4. The queen as well as the bishop can move and the pawn in the centre controls important squares. Besides e4 there is also d4. Here the black bishop has the opportunity to develop and the pawn controls important squares. Black usually responds to e4 with e5, especially in amateur play.'
                            }
                            ComponentArray={[
                              global.g.getOpenings().E4.join('\n'),
                              global.g.getOpenings().D4.join('\n'),
                              global.g.getOpenings().C4.join('\n'),
                            ]}
                            NameArray={['E4', 'D4', 'C4']}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={-1}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getDevelopPiecesPicture()}
                            name={'Develop minor Pieces'}
                            bio={
                              'These include the bishops and the knights. However, the piece that moves one square diagonally and one straight should not be on the edge, i.e. on the H and the A line, because it controls more squares in the centre.'
                            }
                            ComponentArray={[
                              global.g.getOpenings().Italian_Game.join('\n'),
                              global.g.getOpenings().Spanish_Game.join('\n'),
                            ]}
                            NameArray={['Italian Game', 'Spanish Game']}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getCastlingPicture()}
                            name={'Castle early'}
                            bio={
                              'The king must be brought to safety, otherwise there could be a quick checkmate.'
                            }
                            ComponentArray={[
                              global.g.getOpenings().Castling.join('\n'),
                            ]}
                            NameArray={['Castling']}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getInfluenceCentrePicture()}
                            name={'Exert influence on the Centre'}
                            bio={
                              'The more figures there are here, the better you stand with your figures.'
                            }
                            ComponentArray={[
                              global.g.getOpenings().Centre.join('\n'),
                            ]}
                            NameArray={['Develop towards the Centre']}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getRepeatMovesPicture()}
                            name={"Don't move the same Piece repeatendly"}
                            bio={
                              'Think of the pieces to be like an army which fights together. Every piece is important.'
                            }
                            ComponentArray={[
                              global.g
                                .getOpenings()
                                .Blundering_due_to_a_repeated_move.join('\n'),
                            ]}
                            NameArray={['Blundering due to repeated Move']}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getEarlyQueenPicture()}
                            name={"Don't develop the Queen too early"}
                            bio={
                              'It is the strongest piece in the game with the most possibilities of squares. Therefore, when they are being attacked Time is an important factor, as is space, and this is gained by getting the pieces into play quickly. So bringing a queen into play early means losing time.'
                            }
                            ComponentArray={[
                              global.g.getOpenings().Early_Queen.join('\n'),
                              global.g.getOpenings().Parham_Attack.join('\n'),
                            ]}
                            NameArray={['Early Queen', 'Parham Attack']}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getThreatsPicture()}
                            name={'Watch out for Threats'}
                            bio={
                              'As soon as pieces are attacked, there are four ways to react, depending on the situation: 1. cover the piece, 2. make a counter-threat, 3. interrupt connections to the attacked piece with another piece or 4. simply move the piece out of the attack.'
                            }
                            ComponentArray={[
                              global.g
                                .getOpenings()
                                .Two_Knights_Defence_Pawn.join('\n'),
                              global.g
                                .getOpenings()
                                .Traxler_Variation.join('\n'),
                              global.g.getOpenings().Queens_Gambit.join('\n'),
                            ]}
                            NameArray={[
                              'Two Knights Defence',
                              'Traxler Variation',
                              "Queen's Gambit",
                            ]}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                      </View>

                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: global.g.getWindowWidth() / 20,
                          color: global.g.getTextColor(),
                        }}>
                        Middlegame
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getParryPicture()}
                            name={'Watch out for Threats and parry them'}
                            bio={
                              'Recognising these is not always easy and beginners usually need longer. But the more you practise them, the faster you recognise them.'
                            }
                            ComponentArray={[
                              global.g
                                .getMiddleGames()
                                .Threat1_misplayed.join('\n'),
                              global.g
                                .getMiddleGames()
                                .Threat1_parried.join('\n'),
                              global.g.getMiddleGames().Threat2.join('\n'),
                              global.g
                                .getMiddleGames()
                                .Threat2_Variation.join('\n'),
                              global.g.getMiddleGames().Threat3.join('\n'),
                            ]}
                            NameArray={[
                              'Threat 1 misplayed',
                              'Threat 1 parried',
                              'Threat 2',
                              'Threat 2 Variation',
                              'Threat 3',
                            ]}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getAttackMarkers()}
                            name={'Recognise Attack Markers and exploit them'}
                            bio={
                              'Attack markers are by definition pawns that you can attack with your own pawns. As a rule, for black pieces they are the 5th and 6th row and in the white camp they are the 3rd and 4th row.'
                            }
                            ComponentArray={[
                              global.g
                                .getMiddleGames()
                                .AttackMarker1.join('\n'),
                              global.g
                                .getMiddleGames()
                                .AttackMarker2.join('\n'),
                              global.g
                                .getMiddleGames()
                                .AttackMarker2_Variation.join('\n'),
                            ]}
                            NameArray={[
                              'Attack Marker 1',
                              'AttackMarker 2',
                              'AttackMarker 2 Variation',
                            ]}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getPawnStructure()}
                            name={'Pay attention to Pawn Structures'}
                            bio={
                              'Observe pawn structures. Keeping the pawns together in chains and not interrupting them is the basic rule. Even though pawns are the most worthless pieces on the board, they are very strong as a unit. If the structure is destroyed, the opponent can take advantage of this and the danger arises that consequently attacks arise.'
                            }
                            ComponentArray={[
                              global.g
                                .getMiddleGames()
                                .PawnStructure1.join('\n'),
                              global.g
                                .getMiddleGames()
                                .PawnStructure2.join('\n'),
                              global.g
                                .getMiddleGames()
                                .PawnStructure3.join('\n'),
                              global.g
                                .getMiddleGames()
                                .PawnStructure4.join('\n'),
                              global.g
                                .getMiddleGames()
                                .PawnStructure5.join('\n'),
                            ]}
                            NameArray={[
                              'PawnStructure 1',
                              'PawnStructure 2',
                              'PawnStructure 3',
                              'PawnStructure 4',
                              'PawnStructure 5',
                            ]}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getStrongWeakSquares()}
                            name={
                              'Identify and exploit strong and weak Squares'
                            }
                            bio={
                              "A strong square means: If you control a square of the opponent's camp with your own pawns (i.e. the rows 7 - 5 or 2 - 4) and the opponent can only cover it with pieces and not with his own pawns. Conversely, weak squares are the exact opposite. On the edge (H and A line), however, these squares are not so important."
                            }
                            ComponentArray={[
                              global.g.getMiddleGames().Strong_Weak1.join('\n'),
                              global.g.getMiddleGames().Strong_Weak2.join('\n'),
                              global.g.getMiddleGames().Strong_Weak3.join('\n'),
                              global.g.getMiddleGames().Strong_Weak4.join('\n'),
                            ]}
                            NameArray={[
                              'Strong and Weak Squares 1',
                              'Strong and Weak Squares 2',
                              'Strong and Weak Squares 3',
                              'Strong and Weak Squares 4',
                            ]}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getImprovePieces()}
                            name={'Improve Pieces'}
                            bio={
                              'In a game, individual pieces are often in a bad position and therefore, as a player, you have to think about how you can improve them. A prime example is the knight on the edge. A well-known saying in the chess scene is: "A knight on the rim is grim". Bishops are often blocked by chains of pawns. You should therefore activate a bishop here if possible. Queens do not need to be activated often, as they are generally in a good position. Rooks can usually be activated by doubling them. That is, if they are on the same line and thus exert more pressure on it. Routing knights is also a way to improve your position.'
                            }
                            ComponentArray={[
                              global.g
                                .getMiddleGames()
                                .ImprovePieces1.join('\n'),
                              global.g
                                .getMiddleGames()
                                .ImprovePieces2.join('\n'),
                              global.g
                                .getMiddleGames()
                                .ImprovePieces3.join('\n'),
                              global.g
                                .getMiddleGames()
                                .ImprovePieces4.join('\n'),
                              global.g
                                .getMiddleGames()
                                .ImprovePieces5.join('\n'),
                            ]}
                            NameArray={[
                              'Improve Pieces 1',
                              'Improve Pieces 2',
                              'Improve Pieces 3',
                              'Improve Pieces 4',
                              'Improve Pieces 5',
                            ]}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                      </View>

                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: global.g.getWindowWidth() / 20,
                          color: global.g.getTextColor(),
                        }}>
                        Endgame
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getActivateKing()}
                            name={'Activate the King'}
                            bio={
                              'In the endgame the king is an extremely strong piece. This is because the queens and also many other pieces have left the field.'
                            }
                            ComponentArray={[
                              global.g.getEndGames().ActivateKing1.join('\n'),
                              global.g.getEndGames().ActivateKing2.join('\n'),
                            ]}
                            NameArray={['ActivateKing 1', 'ActivateKing 2']}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getForcingMoves()}
                            name={'Use forcing Moves as a sharp Weapon'}
                            bio={
                              'If there is a danger (e.g. pawn promotion) you can force your opponent to make a move by forcing him to make bad moves (e.g. sacrifice a piece).'
                            }
                            ComponentArray={[
                              global.g.getEndGames().ForcingMove1.join('\n'),
                              global.g.getEndGames().ForcingMove2.join('\n'),
                              global.g.getEndGames().ForcingMove3.join('\n'),
                            ]}
                            NameArray={[
                              'Forcing Move 1',
                              'Forcing Move 2',
                              'Forcing Move 3',
                            ]}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getNotRush()}
                            name={'Do not rush'}
                            bio={
                              'One of the reasons why this game can take a long time to play is that slow moves are also important. So strong and patient nerves are a prerequisite for a successful game.'
                            }
                            ComponentArray={[
                              global.g.getEndGames().NotRush1.join('\n'),
                              global.g
                                .getEndGames()
                                .NotRush1_Variation.join('\n'),
                              global.g.getEndGames().NotRush2.join('\n'),
                            ]}
                            NameArray={[
                              'Do not rush 1!',
                              'Do not rush 1 Variation!',
                              'Do not rush 2!',
                            ]}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getExchangePawns()}
                            name={'As a Defender, exchange Pawns'}
                            bio={
                              'If you find yourself in a situation where you can no longer win, but only draw, pawn sacrifices are a necessity. Activity is of course also active momentum.'
                            }
                            ComponentArray={[
                              global.g.getEndGames().ExchangePawns1.join('\n'),
                              global.g.getEndGames().ExchangePawns2.join('\n'),
                            ]}
                            NameArray={['Exchange Pawns 1', 'Exchange Pawns 2']}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                        <View>
                          <ExportGameComponent
                            picture={global.g.getDefendRookGames()}
                            name={'Actively defending rook games'}
                            bio={
                              'Here, too, activity is a momentum. Rooks are the centre here and should therefore not be blocked or prevented. Passivity is a big mistake!'
                            }
                            ComponentArray={[
                              global.g.getEndGames().RookEndgame1.join('\n'),
                              global.g.getEndGames().RookEndgame2.join('\n'),
                            ]}
                            NameArray={['Rook Endgame 1', 'Rook Endgame 2']}
                            updateGamePGNMethode={updateGamePGN}
                            currentPosition={moveIndex}
                          />
                        </View>
                      </View>
                    </View>
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
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getSicilianDefencePicture()}
                          name={'Sicilian Defence'}
                          ComponentArray={global.g.getSicilianDefence().PGN} //.join('\n')
                          position={global.g.getSicilianDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getFrenchDefencePicture()}
                          name={'French Defence'}
                          ComponentArray={global.g.getFrenchDefence().PGN}
                          position={global.g.getFrenchDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getRuyLopezPicture()}
                          name={'Ruy Lopez'}
                          ComponentArray={global.g.getRuyLopez().PGN}
                          position={global.g.getRuyLopez().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getCaroKannPicture()}
                          name={'Caro Kann'}
                          ComponentArray={global.g.getCaroKann().PGN}
                          position={global.g.getCaroKann().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getItalianGamePicture()}
                          name={'Italian Game'}
                          ComponentArray={global.g.getItalianGame().PGN}
                          position={global.g.getItalianGame().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getScandinavianDefencePicture()}
                          name={'Scandinavian Defence'}
                          ComponentArray={global.g.getScandinavianDefence().PGN}
                          position={global.g.getScandinavianDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getPircDefencePicture()}
                          name={'Pirc Defence'}
                          ComponentArray={global.g.getPircDefence().PGN}
                          position={global.g.getPircDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getScotchGamePicture()}
                          name={'Scotch Game'}
                          ComponentArray={global.g.getScotchGame().PGN}
                          position={global.g.getScotchGame().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getViennaGamePicture()}
                          name={'Vienna Game'}
                          ComponentArray={global.g.getViennaGame().PGN}
                          position={global.g.getViennaGame().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getQueensGambitPicture()}
                          name={"Queen's Gambit"}
                          ComponentArray={global.g.getQueensGambit().PGN}
                          position={global.g.getQueensGambit().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getSlavDefencePicture()}
                          name={'Slav Defence'}
                          ComponentArray={global.g.getSlavDefence().PGN}
                          position={global.g.getSlavDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getIndianDefencePicture()}
                          name={'Indian Defence'}
                          ComponentArray={global.g.getIndianDefence().PGN}
                          position={global.g.getIndianDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getDutchDefencePicture()}
                          name={'Dutch Defence'}
                          ComponentArray={global.g.getDutchDefence().PGN}
                          position={global.g.getDutchDefence().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getEnglishOpeningPicture()}
                          name={'English Opening'}
                          ComponentArray={global.g.getEnglishOpening().PGN}
                          position={global.g.getEnglishOpening().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getCatalanOpeningPicture()}
                          name={'Catalan Opening'}
                          ComponentArray={global.g.getCatalanOpening().PGN}
                          position={global.g.getCatalanOpening().position}
                          updateGamePGNMethode={updateGamePGN}
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <StandardGameComponent
                          picture={global.g.getRetiOpeningPicture()}
                          name={'Réti Opening'}
                          ComponentArray={global.g.getRetiOpening().PGN}
                          position={global.g.getRetiOpening().position}
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
                            'Magnus Carlsen is a Norwegian chess player who won the World Chess Championship in 2013, becoming the second youngest world chess champion at age 22.'
                          }
                          ComponentArray={[
                            global.g.getWorldChessChampionship2021Game6().PGN,
                            global.g.getKramnik_vs_Carlsen2008().PGN,
                            global.g.getCarlsen_vs_Aronian2015().PGN,
                            global.g.getCarlsen_vs_Nakamura2011().PGN,
                            global.g.getCarlsen_vs_Gelfand2013().PGN,
                            global.g.getCarlsen_vs_Kasparov2004().PGN,
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
                          currentPosition={moveIndex}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getGarryKasparov()}
                          name={'Garry Kasparov'}
                          bio={
                            'Garry Kasparov is a Russian chess Grandmaster considered by many to be the greatest chess player of all time. The former World Chess Champion is also a well-known writer and political activist.'
                          }
                          elo={2851}
                          ComponentArray={[
                            global.g.getMagerramov_vs_Kasparov1977().PGN,
                            global.g.getKasparov_vs_Palatnik1978().PGN,
                            global.g.getKasparov_vs_Topalov1999().PGN,
                            global.g.getKasparov_vs_Karpov1987().PGN,
                            global.g.getKasparov_vs_Anand1996().PGN,
                            global.g.getKasparov_vs_Deep_Blue1996().PGN,
                            global.g.getKarpov_vs_Kasparov1985().PGN,
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
                          currentPosition={moveIndex}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getHikaruNakamura()}
                          name={'Hikaru Nakamura'}
                          bio={
                            'Hikaru Nakamura, the youngest American Grandmaster of 2003, is a chess player, content creator, and live streaming on twitch.'
                          }
                          elo={2816}
                          ComponentArray={[
                            global.g.getGelfand_vs_Nakamura2010().PGN,
                            global.g.getStripunsky_vs_Nakamura1998().PGN,
                            global.g.getNakamura_vs_Oluto_Adu1999().PGN,
                            global.g.getNakamura_vs_Novikov2002().PGN,
                            global.g.getCrafty_AI_vs_Nakamura2007().PGN,
                          ]}
                          NameArray={[
                            'Gelfand vs Nakamura 2010',
                            'Stripunksy vs Nakamura 1998',
                            'Nakamura vs Adu 1999',
                            'Nakamura vs Novikov 2002',
                            'Crafty AI vs Nakamura 2007',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                          currentPosition={moveIndex}
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
                            'Anish Kumar Giri is a Russian-born Dutch Grandmaster and former chess prodigy. He achieved the grandmaster title at the age of 14 years and 7 months.'
                          }
                          ComponentArray={[
                            global.g.getGiri_vs_Hao2021().PGN,
                            global.g.getLiren_vs_Giri2017().PGN,
                            global.g.getGiri_vs_Harikrishna2019().PGN,
                          ]}
                          NameArray={[
                            'Giri vs Hao 2021',
                            'Liren vs Giri 2017',
                            'Giri vs Harikrishna 2019',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                          currentPosition={moveIndex}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getAntolyKarpov()}
                          name={'Antoly Karpov'}
                          elo={2780}
                          bio={
                            'Anatoly Karpov is a Russian chess grandmaster who was the official world champion from 1975 to 1985 before being defeated by Garry Kasparov.'
                          }
                          ComponentArray={[
                            global.g.getAnand_vs_Karpov1998().PGN,
                            global.g.getGelfand_vs_Karpov1995().PGN,
                            global.g.getKarpov_vs_Kasparov1988().PGN,
                            global.g.getKarpov_vs_Korchnoi1981().PGN,
                            global.g.getKarpov_vs_Spassky1979().PGN,
                          ]}
                          NameArray={[
                            'Anand vs Karpov 1998',
                            'Gelfand vs Karpov 1995',
                            'Karpov vs Kasparov 1988',
                            'Karpov vs Korchnoi 1981',
                            'Karpov vs Spassky 1979',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                          currentPosition={moveIndex}
                        />
                      </View>
                      <View>
                        <ExportGameComponent
                          picture={global.g.getBobbyFischer()}
                          name={'Bobby Fischer'}
                          elo={2785}
                          bio={
                            'A chess prodigy, Bobby Fischer went on to become the greatest chess player of all time, bagging the World Championship title along with several others.'
                          }
                          ComponentArray={[
                            global.g.getByrne_vs_Fischer1963().PGN,
                            global.g.getFischer_vs_Myagmarsuren1967().PGN,
                            global.g.getFischer_vs_Spassky1972().PGN,
                            global.g.getFischer_vs_Tal1961().PGN,
                            global.g.getSpassky_vs_Fischer1972().PGN,
                          ]}
                          NameArray={[
                            'Byrne vs Fischer 1963',
                            'Fischer vs Myagmarsuren 1967',
                            'Fischer vs Spassky 1972',
                            'Fischer vs Tal 1961',
                            'Spassky vs Fischer 1972',
                          ]}
                          updateGamePGNMethode={updateGamePGN}
                          currentPosition={moveIndex}
                        />
                      </View>
                    </View>
                  </Animated.View>

                  {/*Textbook Checkmates*/}
                  <Animated.View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
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
                    <Text style={{color: global.g.getTextColor()}}>s</Text>
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
