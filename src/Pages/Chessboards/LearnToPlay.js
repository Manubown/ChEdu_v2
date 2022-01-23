import React, {Component} from 'react';
import {Dimensions, View, TouchableOpacity, Text, Animated, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import * as Chess from 'chess.js'; // import Chess from  "chess.js"(default) if recieving an error about new Chess() not being a constructor
import {
  RightCircleTwoTone,
  LeftCircleTwoTone,
  TrophyFilled,
} from '@ant-design/icons';

import Chessboard from 'chessboardjsx';
//import Resource from "./Resource";

const windowHeight = Dimensions.get('window').height;

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
  };

  componentDidMount() {
    console.log('Component did mount: ' + this);
    this.game = new Chess();
    //this.state.fen übergeben für Logik
  }

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

  updateGameMove = moves => {
    console.log('updateGame:');

    /////// SET NEW POSITION ///////

    //// SET NEW POSITION ////
    this.game = new Chess();
    this.setState({position: this.game.position, fen: this.game.fen()});

    // Split into moves //
    const element = moves.split(',');
    //// GET POSITIONS FROM ARRAY ////

    console.log(moves);

    // BownMoveNotation //

    Array.prototype.forEach.call(element, move => {
      console.log('Move: ');

      // Split into positions //
      const movePosition = move.split(':');

      console.log('From: ' + movePosition[0] + 'to:' + movePosition[1]);

      this.game.move({from: movePosition[0], to: movePosition[1]});
    });

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
    });
  }
}

export default class LearnToPlay extends React.Component{
    state = {
        active: 0,
        xTabChessBasics: 0, //x co-ordinate of tab one
        xTabStrategicConcepts: 0, //x co-ordinate of tab two
        xTabOpeningConcepts: 0, //x co-ordinate of tab three
        xTabExpertMode: 0, //x co-ordinate of tab four
        xTabTextbookCheckmates: 0, //x co-ordinate of tab five
        translateX: new Animated.Value(0),
        translateXTabChessBasics: new Animated.Value(0),
        translateXTabStrategicConcepts: new Animated.Value(global.g.getWindowWidth()),
        translateXTabOpeningConcepts: new Animated.Value(global.g.getWindowWidth() * 2),
        translateXTabExpertMode: new Animated.Value(global.g.getWindowWidth() * 3),
        translateXTabTextbookCheckmates: new Animated.Value(global.g.getWindowWidth() * 4),
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
    
    render(){
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
                /*(global.g.getWindowWidth(),
                global.g.getWindowHeight(),
                {backgroundColor: global.g.getBackgroundColor()}),*/
                {flex: 1}
            }>
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
                updateGameFEN
                }) => (
                <View>
                    <Chessboard
                        id="humanVsHuman"
                        width={(windowHeight / 4) * 3}
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
                    />

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
                                    backgroundColor: '#007aff',
                                    borderRadius: 4,
                                    transform: [{translateX}],
                                }}
                            />
            
                            {/*Chess Basics*/}
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
                                this.setState({xTabChessBasics: event.nativeEvent.layout.x})
                                }
                                onPress={() =>
                                this.setState({active: 0}, () =>
                                    this.handleSlide(xTabChessBasics),
                                )
                                }>
                                <Text style={{color: active === 0 ? '#fff' : '#007aff'}}>
                                    Chess Basics
                                </Text>
                            </TouchableOpacity>
                                
                            {/*Strategic Concepts*/}
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
                                this.setState({xTabStrategicConcepts: event.nativeEvent.layout.x})
                                }
                                onPress={() =>
                                this.setState({active: 1}, () => this.handleSlide(xTabStrategicConcepts))
                                }>
                                <Text style={{color: active === 1 ? '#fff' : '#007aff'}}>
                                    Strategic Concepts
                                </Text>
                            </TouchableOpacity>
                
                            {/*Opening Concepts*/}
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
                                this.setState({xTabOpeningConcepts: event.nativeEvent.layout.x})
                                }
                                onPress={() =>
                                this.setState({active: 2}, () => this.handleSlide(xTabOpeningConcepts))
                                }>
                                <Text style={{color: active === 2 ? '#fff' : '#007aff'}}>
                                    Opening Concepts
                                </Text>
                            </TouchableOpacity>
                
                            {/*Expert Mode*/}
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
                                this.setState({xTabExpertMode: event.nativeEvent.layout.x})
                                }
                                onPress={() =>
                                this.setState({active: 3}, () => this.handleSlide(xTabExpertMode))
                                }>
                                <Text style={{color: active === 3 ? '#fff' : '#007aff'}}>
                                    Expert Mode
                                </Text>
                            </TouchableOpacity>
                
                            {/*Textbook Checkmates*/}
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
                                this.setState({xTabTextbookCheckmates: event.nativeEvent.layout.x})
                                }
                                onPress={() =>
                                this.setState({active: 4}, () =>
                                    this.handleSlide(xTabTextbookCheckmates),
                                )
                                }>
                                <Text style={{color: active === 4 ? '#fff' : '#007aff'}}>
                                    Textbook Checkmates
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    {/*Single Slides*/}
                    <ScrollView>
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
                        }
                        >
                            <Text>Tab One</Text>
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
                            translateYStrategicConcepts: event.nativeEvent.layout.height,
                            })
                        }
                        >
                            <Text>Tab Two</Text>
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
                                translateY: -translateYChessBasics - translateYStrategicConcepts,
                            },
                            ],
                        }}
                        onLayout={event =>
                            this.setState({
                            translateYOpeningConcepts: event.nativeEvent.layout.height,
                            })
                        }
                        >
                            <TouchableOpacity
                                style={{width: 100, height: 100}}
                                onPress={() => {
                                    updateGameFEN(global.g.getSicilianDefence());
                                }}>
                                <Text>Sicilian Defence</Text>
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
                                translateY: -translateYChessBasics - translateYStrategicConcepts - translateYOpeningConcepts,
                            },
                            ],
                        }}
                        onLayout={event =>
                            this.setState({
                            translateYExpertMode: event.nativeEvent.layout.height,
                            })
                        }
                        >
                            <Text>Tab Four</Text>
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
                                translateY: -translateYChessBasics - translateYStrategicConcepts - translateYOpeningConcepts - translateYExpertMode,
                            },
                            ],
                        }}
                        >
                            <Text>Tab Five</Text>
                        </Animated.View>
                    </ScrollView>
                </View>
                )}
            </HumanVsHuman>
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

