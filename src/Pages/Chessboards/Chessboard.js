import React, {Component} from 'react';
import {Dimensions, View, TouchableOpacity, Text} from 'react-native';
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

export default class ChessBoard extends React.Component{  
  render(){
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

                <TouchableOpacity
                  style={{width: 100, height: 100}}
                  onPress={() => {
                    //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION//
                    var moves = 'e2:e3,e7:e5,f1:b5';
                    updateGameMove(moves);
                  }}>
                  <Text>Test 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: 100, height: 100}}
                  onPress={() => {
                    var moves = 'g1:f3,e7:e5';
                    updateGameMove(moves);
                  }}>
                  <Text>Test 2</Text>
                </TouchableOpacity>
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
