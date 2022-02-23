import React from 'react';
import PropTypes from 'prop-types';
import * as Chess from 'chess.js'; // import Chess from  "chess.js"(default) if recieving an error about new Chess() not being a constructor
import {ConsoleSqlOutlined} from '@ant-design/icons';
import {TouchableOpacityBase} from 'react-native';

export default class LogicalChessboard extends React.Component {
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
    history: [], //PGN

    // saves last position of unduing
    futurMoves: Array(),
    //chessboardMoves: '',
    // chessboard move Index bgn
    pgnComment: '',

    SAN: '',

    orientation: 'white',

    moveIndex: 0,
    gameOver: false,
    autoplay: false,
  };

  componentDidMount() {
    console.log('Component did mount: ' + this);
    this.game = new Chess();
    //this.state.fen übergeben für Logik
    window.scrollTo(0, 0);
  }

  /*
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
  */

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

  updateGamePGN = (PGN, position) => {
    console.log('RESET FUTUR MOVES');
    this.state.futurMoves.length = 0;
    this.setState({SAN: [], moveIndex: position, history: []});

    console.log('TRY PGN SUCCESSFUL LOADED!');
    this.game.clear();
    var success = this.game.load_pgn(PGN);
    this.setState({position: this.game.position, fen: this.game.fen()});
    window.scrollTo(0, 0);

    if (success) {
      console.log('PGN SUCCESSFUL LOADED!');
    } else {
      console.log(success);
    }

    var currentPosition = this.game.history().length;
    for (let i = currentPosition; i > 0; i--) {
      this.undoMovePGN();
    }
    console.log('Undo move PGN Component:');
    console.log(this.state.futurMoves);
    /*
    

    console.log('FUTURE MOVES: ');
    console.log(this.state.futurMoves);

    this.generatePGNArray();
  */
    this.generatePGNArray();
    this.updatePGNPosition(position);
    this.updatePGNComment();
  };

  undoMovePGN = () => {
    const {futurMoves} = this.state;
    var undoMove = this.game.undo();
    this.setState({futurMoves: futurMoves.unshift(undoMove)});

    console.log(this.state.futurMoves);

    this.setState({
      position: this.game.position,
      fen: this.game.fen(),
      futurMoves: this.state.futurMoves,
    });

    this.setState({moveIndex: this.game.history().length});

    this.updatePGNComment();
  };

  nextMovePGN = () => {
    const {futurMoves} = this.state;

    var move = futurMoves.shift();
    this.game.move({from: move.from, to: move.to});
    this.setState({futurMoves: futurMoves});
    console.log(this.state.futurMoves);
    console.log('Next move PGN: ');
    console.log(this.state.futurMoves);
    console.log(move);

    this.setState({
      position: this.game.position,
      fen: this.game.fen(),
    });

    this.setState({moveIndex: this.game.history().length});

    this.updatePGNComment();
  };

  firstMove = () => {
    console.log('First Move:');
    console.log(this.game.history().length);
    var currentPosition = this.game.history().length;
    for (let i = currentPosition; i > 0; i--) {
      this.undoMovePGN();
    }
  };

  lastMove = () => {
    console.log('Last Move:');
    console.log(this.state.futurMoves.length);
    var lastMove = this.state.futurMoves.length;
    for (let i = 0; i < lastMove; i++) {
      this.nextMovePGN();
    }
  };

  boardRotateBoard = () => {
    if (this.state.orientation == 'white') {
      this.setState({orientation: 'black'});
    } else {
      this.setState({orientation: 'white'});
    }
  };

  autoplayM = () => {
    if (this.state.autoplay == true) {
      setTimeout(this.autoplayM, 3000);
    }
  };

  generatePGNArray = () => {
    var pgnArray = new Array();
    console.log(pgnArray);

    this.state.futurMoves.forEach(element => {
      pgnArray.push(element.san);
    });
    this.setState({SAN: pgnArray});
    console.log('PGN ARRAY:');
    console.log(pgnArray);
  };

  updatePGNPosition = position => {
    if (this.game != null) {
      var currentPosition = this.game.history().length;
      if (position < currentPosition) {
        for (let i = currentPosition; i > position; i--) {
          this.undoMovePGN();
        }
      } else if (position > currentPosition) {
        for (let i = currentPosition; i < position; i++) {
          this.nextMovePGN();
        }
      }
    }
  };

  // BGN
  /*
  nextMoveBGN = () => {
    console.log('**********************');
    //moveIndex++;
    if (this.state.chessboardMoves.split(',').length > this.state.moveIndex) {
      console.log('TRUE');
      const currentMoveIndex = this.state.moveIndex++;
      console.log('Current Move Idnex: ' + currentMoveIndex);
      this.setState({moveIndex: currentMoveIndex});
    }
    console.log(this.state.moveIndex);
    this.updateGameBGN(this.state.chessboardMoves, this.state.moveIndex);
  };

  lastMoveBGN = () => {
    console.log('**********************');
    //moveIndex--;
    if (this.state.moveIndex > 0) {
      console.log('TRUE');
      const currentMoveIndex = this.state.moveIndex--;
      console.log('Current Move Idnex: ' + currentMoveIndex);
      this.setState({moveIndex: currentMoveIndex});
    }
    console.log(this.state.moveIndex);
    this.updateGameBGN(this.state.chessboardMoves, this.state.moveIndex);
  };

  // UPDATE GAME MOVE //
  updateGameBGN = (moves, moveIndex) => {
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
  };
      */

  isGameOver = game => {
    //Game Over
    let possibleMoves = game.moves();
    if (
      game.game_over() === true ||
      game.in_draw() === true ||
      possibleMoves.length === 0
    ) {
      this.setState({gameOver: true});
      return true;
    } else {
      return false;
    }
  };
  //

  // keep clicked square style and remove hint squares
  removeHighlightSquare = () => {
    this.setState(({pieceSquare, history}) => ({
      squareStyles: squareStyling({pieceSquare, history}),
    }));
  };

  // show possible moves
  highlightSquare = (sourceSquare, squaresToHighlight) => {
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
    // see if the move is legal
    let move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    console.log('OnDrop: Game Over: ' + this.isGameOver(this.game));

    // illegal move
    if (move === null) return;
    //this.addChessBoardMove(sourceSquare, targetSquare);

    this.setState(({history, pieceSquare}) => ({
      fen: this.game.fen(),
      history: this.game.history({verbose: true}),
      squareStyles: squareStyling({pieceSquare, history}),
    }));
  };

  onMouseOverSquare = square => {
    // get list of possible moves for this square

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
    this.setState({
      dropSquareStyle:
        square === 'e4' || square === 'd4' || square === 'e5' || square === 'd5'
          ? {backgroundColor: 'cornFlowerBlue'}
          : {boxShadow: 'inset 0 0 1px 4px #185a5c'},
    });
  };

  onSquareClick = square => {
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

    //this.addChessBoardMove(this.state.pieceSquare, square);

    this.setState({
      fen: this.game.fen(),
      history: this.game.history({verbose: true}),
      pieceSquare: '',
    });
  };

  onSquareRightClick = square => {
    this.setState({
      squareStyles: {[square]: {backgroundColor: 'deepPink'}},
    });
  };

  updatePGNComment = () => {
    this.setState({pgnComment: this.game.get_comment()});
  };

  render() {
    const {
      fen,
      dropSquareStyle,
      squareStyles,
      pgnComment,
      moveIndex,
      SAN,
      orientation,
    } = this.state;

    console.log('############################');
    console.log();

    //Output Values
    return this.props.children({
      squareStyles,
      position: fen,
      pgnComment: pgnComment,
      moveIndex: moveIndex,
      SAN: SAN,
      orientation: orientation,
      onMouseOverSquare: this.onMouseOverSquare,
      onMouseOutSquare: this.onMouseOutSquare,
      onDrop: this.onDrop,
      dropSquareStyle,
      onDragOverSquare: this.onDragOverSquare,
      onSquareClick: this.onSquareClick,
      onSquareRightClick: this.onSquareRightClick,
      updateGameFEN: this.updateGameFEN,
      /* Todo: Remove 
      updateGameBGN: this.updateGameBGN,
      nextMoveBGN: this.nextMoveBGN,
      lastMoveBGN: this.lastMoveBGN,
      */
      updateGamePGN: this.updateGamePGN,
      undoMovePGN: this.undoMovePGN,
      nextMovePGN: this.nextMovePGN,
      updatePGNPosition: this.updatePGNPosition,
      boardRotateBoard: this.boardRotateBoard,
      firstMove: this.firstMove,
      lastMove: this.lastMove,
      gameOver: this.state.gameOver,
    });
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
