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
    // saves last position of unduing
    undoPosition: '',
    // chessboard moves bgn
    chessboardMoves: '', //bgn
    // chessboard move Index bgn
    moveIndex: 0,
  };

  addChessBoardMove = (from, to) => {
    console.log('add Chess board moves: ' + this.state.chessboardMoves);
    var x = this.state.chessboardMoves.split(',').length;
    if (this.state.moveIndex < x) {
      var mewChessboardMoves = this.state.chessboardMoves
        .split(',')
        .splice(0, this.state.moveIndex);

      var newbdn = mewChessboardMoves.toString() + ',' + from + ':' + to;
      console.log('Chessboard Moves: ' + newbdn);

      console.log('add Chess board moves: ' + this.state.chessboardMoves);
      this.setState({
        chessboardMoves: newbdn,
        moveIndex: newbdn.length + 1,
      });
    } else {
      this.setState({
        chessboardMoves: this.state.chessboardMoves + ',' + from + ':' + to,
        moveIndex: this.state.chessboardMoves.split(',').length + 1,
      });
    }
    console.log('add Chess board moves: ' + this.state.chessboardMoves);
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

  undoMovePgn = () => {
    var undoMove = this.game.undo();
    console.log('Undo Move: ' + undoMove);
    this.setState({
      position: this.game.position,
      fen: this.game.fen(),
      undoPosition: undoMove,
    });
  };

  nextMovePgn = () => {
    for (let index = 0; index < this.state.history.length; index++) {
      const position = this.state.history[index];
      console.log(position.to);
      console.log(this.state.undoPosition);
      console.log(
        'IF(' + position.to + '==' + this.state.undoPosition.to + ')',
      );
      if (position == this.state.undoPosition) {
        console.log('true');
        this.game.move(this.state.history[index].to);
        this.setState({
          position: this.game.position,
          fen: this.game.fen(),
          undoPosition: this.state.history[index++],
        });
        break;
      }
    }
  };

  nextMoveBgn = () => {
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
  lastMoveBgn = () => {
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

  updateGamePGN = () => {
    this.game.load_pgn(
      '1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Ng5 Ngf6 6.Bd3 e6 7.N1f3 h6 8.Nxe6 Qe7 9.O-O fxe6 10.Bg6+ Kd8 {Kasparov schüttelt kurz den Kopf} 11.Bf4 b5 12.a4 Bb7 13.Re1 Nd5 14.Bg3 Kc8 15.axb5 cxb5 16.Qd3 Bc6 17.Bf5 exf5 18.Rxe7 Bxe7 19.c4 1-0',
    );
    this.setState({position: this.game.position, fen: this.game.fen()});
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
    this.addChessBoardMove(sourceSquare, targetSquare);
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

    this.addChessBoardMove(this.state.pieceSquare, square);

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
      nextMoveBgn: this.nextMoveBgn,
      lastMoveBgn: this.lastMoveBgn,
      undoMovePgn: this.undoMovePgn,
      nextMovePgn: this.nextMovePgn,
      updateGamePGN: this.updateGamePGN,
      chessBoardMoves: this.state.chessboardMoves,
    });
  }
}

export default class ChessBoard extends React.Component {
  render() {
    return (
      <View style={(global.g.getWindowWidth(), global.g.getWindowHeight()),
        {
          marginTop: global.g.getWindowHeight()/10,
          marginBottom: global.g.getWindowHeight()/10
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
            nextMoveBgn,
            lastMoveBgn,
            updateGamePGN,
            undoMovePgn,
            nextMovePgn,
            chessBoardMoves,
          }) => (
            <View
              style={{
                backgroundColor: global.g.getBackgroundColor(),
              }}>
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
                  style={{width: 100, height: 100}}
                  onPress={() => {
                    //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                    undoMovePgn();
                  }}>
                  <LeftCircleTwoTone twoToneColor={'#185a5c'} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: 100, height: 100}}
                  onPress={() => {
                    //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                    //nextMove();
                    nextMovePgn();
                  }}>
                  <RightCircleTwoTone twoToneColor={'#185a5c'} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{width: 100, height: 100}}
                onPress={() => {
                  //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                  //updateGameMove(global.g.getFIDE2021_Game6(), 0);
                  updateGamePGN();
                }}>
                <Text>Testgame</Text>
              </TouchableOpacity>
              <Text Text={chessBoardMoves} />
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
