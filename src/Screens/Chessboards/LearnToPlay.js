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

import {RightCircleTwoTone, LeftCircleTwoTone} from '@ant-design/icons';

/*styles*/
import styles from '../../styles';

import Chessboard from 'chessboardjsx';
//import Resource from "./Resource";

import LogicalChessboard from './LogicalChessboard';
import MoreLessComponent from '../CustomComponents/MoreLessComponent';
import {CommentBox, FENBox} from '../CustomComponents/ChessboardComponents';
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
                    <TouchableOpacity
                      onPress={() => {
                        //RequestLogin(this.state.Username, this.state.Password);
                        this.props.navigation.navigate('Home');
                      }}>
                      {global.g.getOnlyLogo()}
                    </TouchableOpacity>
                    <View style={styles.ChessBoardButtonShadow}>
                      <TouchableOpacity
                        style={{width: 100}}
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
                        style={{width: 100}}
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
                    </View>

                    <FENBox FEN={position} />
                    <View style={styles.ChessBoardButtonShadow}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'white',
                        }}
                        onPress={() => {}}>
                        <Text>Learning steps below :)</Text>
                      </TouchableOpacity>
                    </View>
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
                    <TouchableOpacity
                      style={{width: 100, height: 100}}
                      onPress={() => {
                        updateGameFEN(global.g.getSicilianDefence(), 2);
                        window.scrollTo(0, 0);
                      }}>
                      <Text style={{color: global.g.getTextColor()}}>
                        Sicilian Defence
                      </Text>
                    </TouchableOpacity>
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
                    <ExportGameComponent
                      picture={global.g.getMagnusCarlsen()}
                      name={'Magnus Carlsen'}
                      elo={1600}
                      bio={
                        'Bester spieler einfach der hammer!11!1! Immer schon toll gewesen!'
                      }
                      ComponentArray={[
                        '1. d4 {01010011 01101111 01101111 01101110 00100000 01000001 01110110 01100001 01101001 01101100 01100001 01100010 01101100 01100101} Nf6 2. Nf3 d5 3. e3 Bf5 4. c4 c6 5. Nc3 e6 6. Bd3 Bxd3 7. Qxd3 Nbd7 8. b3 Bd6 9. O-O O-O 10. Bb2 Qe7 11. Rad1 Rad8 12. Rfe1 dxc4 13. bxc4 e5 14. dxe5 Nxe5 15. Nxe5 Bxe5 16. Qe2 Rxd1 17. Rxd1 Rd8 18. Rxd8+ Qxd8 19. Qd1 Qxd1+ 20. Nxd1 Bxb2 21. Nxb2 b5 22. f3 Kf8 23. Kf2 Ke7',
                        '1. e4 {Carlsen vs. Nakamura Game in 2021} e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. c3 O-O 6. O-O d6 7. h3 a6 8. Bxc6 bxc6 9. Nbd2 Re8 10. Re1 Bb6 11. Nf1 Nd7 12. Ng3 Nf8 13. d4 Ng6 14. Be3 a5 15. Qc2 a4 16. Rad1 Be6 17. c4 f6 18. b4 axb3 19. axb3 Ba5 20. Rf1 Bb4 21. Ra1 Qd7 22. Rfd1 Rxa1 23. Rxa1 d5 24. cxd5 cxd5 25. dxe5 Nxe5 26. Nxe5 fxe5 27. exd5 Bxd5 28. Ra7 Rc8 29. Bb6 cxb6 30. Rxd7 Rxc2 31. Rxd5 Bc5 32. Ne4 Bd4 33. Kf1 Rb2 34. f4 Rb1+ 35. Ke2 Rb2+ 36. Kf1 Rb1+ 37. Ke2 Rb2+ 38. Kf1 Rb1+ 1/2-1/2',
                        '1. d4 Nf6 2. Nf3 d5 3. g3 e6 4. Bg2 Be7 5. O-O O-O 6. b3 c5 7. dxc5 Bxc5 8. c4 dxc4 9. Qc2 Qe7 10. Nbd2 Nc6 11. Nxc4 b5 12. Nce5 Nb4 13. Qb2 Bb7 14. a3 Nc6 15. Nd3 Bb6 16. Bg5 Rfd8 17. Bxf6 gxf6 18. Rac1 Nd4 19. Nxd4 Bxd4 20. Qa2 Bxg2 21. Kxg2 Qb7+ 22. Kg1 Qe4 23. Qc2 a5 24. Rfd1 Kg7 25. Rd2 Rac8 26. Qxc8 Rxc8 27. Rxc8 Qd5 28. b4 a4 29. e3 Be5 30. h4 h5 31. Kh2 Bb2 32. Rc5 Qd6 33. Rd1 Bxa3 34. Rxb5 Qd7 35. Rc5 e5 36. Rc2 Qd5 37. Rdd2 Qb3 38. Ra2 e4 39. Nc5 Qxb4 40. Nxe4 Qb3 41. Rac2 Bf8 42. Nc5 Qb5 43. Nd3 a3 44. Nf4 Qa5 45. Ra2 Bb4 46. Rd3 Kh6 47. Rd1 Qa4 48. Rda1 Bd6 49. Kg1 Qb3 50. Ne2 {50!!!!} Qd3 51. Nd4 Kh7 52. Kh2 Qe4 53. Rxa3 Qxh4+ 54. Kg1 Qe4 55. Ra4 Be5 56. Ne2 Qc2 {Qc2} 57. R1a Bb6 62. Ra1 Qb3 63. Re4 Kg7 64. Re8 f5 65. Raa8 Qb4 66. Rac8 Ba5 67. Rc1 Bb6 68. Re5 Qb3 69. Re8 Qd5 70. Rcc8 Qh1  71. Rc1 Qd5 72. Rb1 Ba7 73. Re7 Bc5 74. Re5 Qd3 75. Rb7 Qc2 76. Rb5 Ba7 77. Ra5 Bb6 78. Rab5 Ba7 79. Rxf5  Qd3 80. Rxf7+ Kxf7 81. Rb7+ Kg6 82. Rxa7 Qd5 83. Ra6+ Kh7 84. Ra1 Kg6 85. Nd4 Qb7 86. Ra2 Qh1 87. Ra6+ Kf7 88. Nf3 Qb1 89. Rd6 Kg7 90. Rd5 Qa2+ 91. Rd2 Qb1 92. Re2 Qb6 93. Rc2 Qb1 94. Nd4 Qh1 95. Rc7+ Kf6 96. Rc6+ Kf7 97. Nf3 Qb1 98. Ng5+ Kg7 99. Ne6+ Kf7 100. Nd4 {100!!!} Qh1 101. Rc7+ Kf6 102. Nf3 Qb1 103. Rd7 Qb2+ 104. Rd2 Qb1 105. Ng1 Qb4 106. Rd1 Qb3 107. Rd6+ Kg7 108. Rd4 Qb2+ 109. Ne2 Qb1 110. e4 Qh1 111. Rd7+ Kg8 112. Rd4 Qh2+ 113. Ke3 h4 114. gxh4 Qh3+ 115. Kd2 Qxh4 116. Rd3 Kf8 117. Rf3 Qd8+ 118. Ke3 Qa5 119. Kf2 Qa7+ 120. Re3 Qd7 121. Ng3 Qd2+ 122. Kf3 Qd1+ 123. Re2 Qb3+ 124. Kg2 Qb7 125. Rd2 Qb3 126. Rd5 Ke7 127. Re5+ Kf7 128. Rf5+ Ke8 129. e5 Qa2+ 130. Kh3 Qe6 131. Kh4 Qh6+ 132. Nh5 Qh7 133. e6 Qg6 134. Rf7 Kd8 135. f5 Qg1 136. Ng7 1-0',
                      ]}
                      NameArray={[
                        'Some Carlsen Game',
                        'New in chess classic final 2021',
                        'World Chess Championship 2021 Game6'
                      ]}
                      updateGamePGNMethode={updateGamePGN}
                    />
                    <ExportGameComponent
                      picture={global.g.getMagnusCarlsen()}
                      name={'Magnus Carlsen'}
                      elo={1600}
                      bio={
                        'Bester spieler einfach der hammer!11!1! Immer schon toll gewesen!'
                      }
                      ComponentArray={[
                        '1. d4 {01010011 01101111 01101111 01101110 00100000 01000001 01110110 01100001 01101001 01101100 01100001 01100010 01101100 01100101} Nf6 2. Nf3 d5 3. e3 Bf5 4. c4 c6 5. Nc3 e6 6. Bd3 Bxd3 7. Qxd3 Nbd7 8. b3 Bd6 9. O-O O-O 10. Bb2 Qe7 11. Rad1 Rad8 12. Rfe1 dxc4 13. bxc4 e5 14. dxe5 Nxe5 15. Nxe5 Bxe5 16. Qe2 Rxd1 17. Rxd1 Rd8 18. Rxd8+ Qxd8 19. Qd1 Qxd1+ 20. Nxd1 Bxb2 21. Nxb2 b5 22. f3 Kf8 23. Kf2 Ke7',
                        '1. e4 {Carlsen vs. Nakamura Game in 2021} e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. c3 O-O 6. O-O d6 7. h3 a6 8. Bxc6 bxc6 9. Nbd2 Re8 10. Re1 Bb6 11. Nf1 Nd7 12. Ng3 Nf8 13. d4 Ng6 14. Be3 a5 15. Qc2 a4 16. Rad1 Be6 17. c4 f6 18. b4 axb3 19. axb3 Ba5 20. Rf1 Bb4 21. Ra1 Qd7 22. Rfd1 Rxa1 23. Rxa1 d5 24. cxd5 cxd5 25. dxe5 Nxe5 26. Nxe5 fxe5 27. exd5 Bxd5 28. Ra7 Rc8 29. Bb6 cxb6 30. Rxd7 Rxc2 31. Rxd5 Bc5 32. Ne4 Bd4 33. Kf1 Rb2 34. f4 Rb1+ 35. Ke2 Rb2+ 36. Kf1 Rb1+ 37. Ke2 Rb2+ 38. Kf1 Rb1+ 1/2-1/2',
                      ]}
                      NameArray={[
                        'Some Carlsen Game',
                        'New in chess classic final 2021',
                      ]}
                      updateGamePGNMethode={updateGamePGN}
                    />
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

const getComponentArray = props => {
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
};
