import React, {Component} from 'react';
import {
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  Animated,
  ScrollView,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Chess from 'chess.js'; // import Chess from  "chess.js"(default) if recieving an error about new Chess() not being a constructor
import {
  RightCircleTwoTone,
  LeftCircleTwoTone,
  TrophyFilled,
} from '@ant-design/icons';

/*styles*/
import styles from '../../styles';

import Chessboard from 'chessboardjsx';
//import Resource from "./Resource";

class HumanVsHuman extends Component {
  static propTypes = {children: PropTypes.func};
  state = {
    fen: 'start', //auf Lichess nachschauen
    // square styles for active drop square
    dropSquareStyle: {},
    // custom square styles
    squareStyles: {},
    // square with the currently clicked piece
    pieceSquare: '',
    // currently clicked square
    square: '',
    // array of past game moves
    history: [], //pgn
    // chessboard moves bgn
    chessboardMoves: '',
    moveIndex: 0,
  };

  componentDidMount() {
    console.log('Component did mount: ' + this);
    this.game = new Chess();
    //this.state.fen übergeben für Logik
  }

  // UPDATE GAME FEN //
  updateGameFEN = FEN => {
    console.log('updateGame:');

    /////// SET NEW POSITION ///////

    //// SET NEW POSITION ////
    this.game = new Chess();
    this.setState({position: this.game.position, fen: this.game.fen()});

    //// LOAD FEN TO GAME ////
    this.game.load(FEN);

    //// SET NEW POSITIONS TO BOARD ////
    this.setState({position: this.game.position, fen: this.game.fen()});
  };

  nextMove = () => {
    console.log('**********************');
    //moveIndex++;
    if (this.state.chessboardMoves.split(',').length > this.state.moveIndex) {
      console.log('TRUE');
      const currentMoveIndex = this.state.moveIndex++;
      console.log('Current Move Idnex: ' + currentMoveIndex);
      this.setState({moveIndex: currentMoveIndex});
    }
    console.log(this.state.moveIndex);
    this.updateGameMove(this.state.chessboardMoves, this.state.moveIndex);
  };
  lastMove = () => {
    console.log('**********************');
    //moveIndex--;
    if (this.state.moveIndex > 0) {
      console.log('TRUE');
      const currentMoveIndex = this.state.moveIndex--;
      console.log('Current Move Idnex: ' + currentMoveIndex);
      this.setState({moveIndex: currentMoveIndex});
    }
    console.log(this.state.moveIndex);
    this.updateGameMove(this.state.chessboardMoves, this.state.moveIndex);
  };
  // UPDATE GAME MOVE //
  updateGameMove = (moves, moveIndex) => {
    console.log('updateGame:');

    this.setState({chessboardMoves: moves, moveIndex: moveIndex});
    /////// SET NEW POSITION ///////

    console.log('Chessboard moves: ' + this.state.chessboardMoves);
    console.log('Chessboard moveIndex: ' + this.state.moveIndex);
    //// SET NEW POSITION ////
    this.game = new Chess();
    this.setState({position: this.game.position, fen: this.game.fen()});

    // Split into moves //
    const element = moves.split(',');

    //// GET POSITIONS FROM ARRAY ////

    console.log(moves);
    console.log('moveIndex: ' + moveIndex);

    // BownMoveNotation //

    if (moveIndex == undefined) {
      console.log('Move index is Null');
      this.setState({moveIndex: element.length});
      Array.prototype.forEach.call(element, move => {
        console.log('Move: ');

        // Split into positions //
        const movePosition = move.split(':');

        console.log('From: ' + movePosition[0] + 'to:' + movePosition[1]);

        this.game.move({from: movePosition[0], to: movePosition[1]});
      });
    } else {
      console.log('Move index is not null');
      for (let index = 0; index < moveIndex; index++) {
        console.log('Move: ');

        // Split into positions //
        const movePosition = element[index].split(':');

        console.log('From: ' + movePosition[0] + 'to:' + movePosition[1]);

        this.game.move({from: movePosition[0], to: movePosition[1]});
      }
    }

    //// SET NEW POSITIONS TO BOARD ////
    this.setState({position: this.game.position, fen: this.game.fen()});

    //'rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
    /*
    this.game = new Chess();
    this.setState({position: this.game.position, fen: this.game.fen()});

    this.game.move({from: 'e2', to: 'e3'});

    this.game.move({from: 'e7', to: 'e5'});

    this.game.move({from: 'e2', to: 'e3'});
    this.setState({position: this.game.position, fen: this.game.fen()});

    
    this.game.load(
      'rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
    );

    var history = this.game.history({verbose: true});
    for (var i = 0; i < history.length; i++) {
      this.game.move(history[i]);
    }
    
    this.setState(({pieceSquare}) => ({
      position: this.state.fen,
    }));

    
    onSquareClick('e2');
    onSquareClick('e3');
    //THERORETISCHE MÖGLICVHEKIT OHNE UPDATE
    
    this.game.move({
      from: 'e2',
      to: 'e3',
      promotion: 'q',
    });

    
    this.game.move({
      from: 'e2',
      to: 'e3',
    });

    this.game.load(
      'rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
    );
    
    this.setState({
      fen: 'rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
    });

    var history = this.game.history({verbose: true});
    for (var i = 0; i < history.length; i++) {
      this.game.move(history[i]);
    }

    this.setState({
          fen: this.state.startingPositions.Openings.FrenchDefense,
        });
        this.game = new Chess(this.state.fen);
        this.game.position = this.state.fen;


    this.setState({
      fen: 'rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
    });
    
    
    this.setState({
      fen: 'rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
    });

    this.game = new Chess(this.state.fen);

    this.game.position = this.state.fen;

    if (
      this.game.load(
        'rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
      )
    ) {
      console.log('fen: ' + this.state.fen);
    }
    */
  };

  //

  // keep clicked square style and remove hint squares
  removeHighlightSquare = () => {
    console.log('removeHighlightSquare');
    this.setState(({pieceSquare, history}) => ({
      squareStyles: squareStyling({pieceSquare, history}),
    }));
  };

  // show possible moves
  highlightSquare = (sourceSquare, squaresToHighlight) => {
    console.log('highlightSquare');
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                'radial-gradient(circle, #185a5c 36%, transparent 40%)',
              borderRadius: '50%',
            },
          },
          ...squareStyling({
            history: this.state.history,
            pieceSquare: this.state.pieceSquare,
          }),
        };
      },
      {},
    );

    this.setState(({squareStyles}) => ({
      squareStyles: {...squareStyles, ...highlightStyles},
    }));
  };

  onDrop = ({sourceSquare, targetSquare}) => {
    console.log('onDrop');
    // see if the move is legal
    let move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;
    this.setState(({history, pieceSquare}) => ({
      fen: this.game.fen(),
      history: this.game.history({verbose: true}),
      squareStyles: squareStyling({pieceSquare, history}),
    }));
  };

  onMouseOverSquare = square => {
    // get list of possible moves for this square

    console.log('onMouseOverSquare');
    let moves = this.game.moves({
      square: square,
      verbose: true,
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    let squaresToHighlight = [];
    for (var i = 0; i < moves.length; i++) {
      squaresToHighlight.push(moves[i].to);
    }

    this.highlightSquare(square, squaresToHighlight);
  };

  onMouseOutSquare = square => this.removeHighlightSquare(square);

  // central squares get diff dropSquareStyles
  onDragOverSquare = square => {
    console.log('onDragOverSquare');

    this.setState({
      dropSquareStyle:
        square === 'e4' || square === 'd4' || square === 'e5' || square === 'd5'
          ? {backgroundColor: 'cornFlowerBlue'}
          : {boxShadow: 'inset 0 0 1px 4px #185a5c'},
    });
  };

  onSquareClick = square => {
    console.log('onSquareClick: ' + square);
    this.setState(({history}) => ({
      squareStyles: squareStyling({pieceSquare: square, history}),
      pieceSquare: square,
    }));

    let move = this.game.move({
      from: this.state.pieceSquare,
      to: square,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    this.setState({
      fen: this.game.fen(),
      history: this.game.history({verbose: true}),
      pieceSquare: '',
    });
  };

  onSquareRightClick = square => {
    console.log('onSquareRightClick');
    this.setState({
      squareStyles: {[square]: {backgroundColor: 'deepPink'}},
    });
  };

  render() {
    const {fen, dropSquareStyle, squareStyles} = this.state;
    console.log('Render: Fen: ' + fen);
    console.log();
    console.log('History:');

    this.state.history.forEach(element => console.log(element));

    console.log('############################');
    console.log();

    return this.props.children({
      squareStyles,
      position: fen,
      onMouseOverSquare: this.onMouseOverSquare,
      onMouseOutSquare: this.onMouseOutSquare,
      onDrop: this.onDrop,
      dropSquareStyle,
      onDragOverSquare: this.onDragOverSquare,
      onSquareClick: this.onSquareClick,
      onSquareRightClick: this.onSquareRightClick,
      updateGameMove: this.updateGameMove,
      updateGameFEN: this.updateGameFEN,
      nextMove: this.nextMove,
      lastMove: this.lastMove,
    });
  }
}

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
        <Text>Test</Text>
        <View
          style={{
            paddingTop: global.g.getWindowHeight() / 10,
            paddingBottom: global.g.getWindowHeight() / 10,
          }}>
          <HumanVsHuman>
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
              updateGameMove,
              updateGameFEN,
              nextMove,
              lastMove,
            }) => (
              <View
                style={{
                  backgroundColor: global.g.getBackgroundColor(),
                }}>
                {/*Chessboard with info*/}
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <Chessboard
                    id="humanVsHuman"
                    width={(global.g.getWindowHeight() / 4) * 3}
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

                {/*Tools*/}
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <TouchableOpacity
                    style={{width: 50}}
                    onPress={() => {
                      //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                      lastMove();
                    }}>
                    <LeftCircleTwoTone twoToneColor={'#185a5c'} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{width: 50}}
                    onPress={() => {
                      //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                      nextMove();
                    }}>
                    <RightCircleTwoTone twoToneColor={'#185a5c'} />
                  </TouchableOpacity>
                </View>

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
                        updateGameFEN(global.g.getSicilianDefence());
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
                    <TouchableOpacity
                      style={{width: 100, height: 100}}
                      onPress={() => {
                        //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                        updateGameMove(global.g.getFIDE2021_Game6(), 0);
                      }}>
                      <Text style={{color: global.g.getTextColor()}}>
                        FIDE 2021 Game 6
                      </Text>
                    </TouchableOpacity>
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
          </HumanVsHuman>
        </View>
      </View>
    );
  }
}

const squareStyling = ({pieceSquare, history}) => {
  const sourceSquare = history.length && history[history.length - 1].from;
  const targetSquare = history.length && history[history.length - 1].to;

  return {
    [pieceSquare]: {backgroundColor: '#185a5c'},
    ...(history.length && {
      [sourceSquare]: {
        backgroundColor: '#3c8688',
      },
    }),
    ...(history.length && {
      [targetSquare]: {
        backgroundColor: '#185a5c',
      },
    }),
  };
};
