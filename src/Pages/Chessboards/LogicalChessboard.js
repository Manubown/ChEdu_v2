import React from 'react';
import PropTypes from 'prop-types';
import * as Chess from 'chess.js'; // import Chess from  "chess.js"(default) if recieving an error about new Chess() not being a constructor

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
    history: [], //

    // saves last position of unduing
    futurMoves: [],

    // chessboard moves bgn
    chessboardMoves: '', //bgn
    // chessboard move Index bgn
    moveIndex: 0,
    gameOver: false,
  };

  componentDidMount() {
    console.log('Component did mount: ' + this);
    this.game = new Chess();
    //this.state.fen übergeben für Logik
    window.scrollTo(0, 0);
  }

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

  undoMovePGN = () => {
    var undoMove = this.game.undo();
    console.log('Undo Move: ' + undoMove.to);
    this.setState({
      position: this.game.position,
      fen: this.game.fen(),
    });
    this.state.futurMoves.unshift(undoMove),
      console.log('Future moves: ' + this.state.futurMoves);
  };

  nextMovePGN = () => {
    var move = this.state.futurMoves.shift();
    console.log('Next Move: ' + move);
    if (this.game.move({from: move.from, to: move.to}) === null) {
      console.log('invalid move');
    }

    this.setState({
      position: this.game.position,
      fen: this.game.fen(),
    });

    console.log('Future moves: ' + this.state.futurMoves);
  };

  updateGamePGN = PGN => {
    this.game.load_pgn(PGN);
    this.setState({position: this.game.position, fen: this.game.fen()});
  };

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
      */
  };

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

    console.log('OnDrop: Game Over: ' + this.isGameOver(this.game));

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

    console.log('OnDrop: Game Over: ' + this.isGameOver(this.game));

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
      updateGameFEN: this.updateGameFEN,
      updateGameBGN: this.updateGameBGN,
      nextMoveBGN: this.nextMoveBGN,
      lastMoveBGN: this.lastMoveBGN,
      updateGamePGN: this.updateGamePGN,
      undoMovePGN: this.undoMovePGN,
      nextMovePGN: this.nextMovePGN,
      chessBoardMoves: this.state.chessboardMoves,
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
