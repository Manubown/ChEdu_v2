import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {
  RightCircleTwoTone,
  LeftCircleTwoTone,
  ForwardFilled,
  BackwardFilled,
  UpCircleFilled,
  RollbackOutlined,
} from '@ant-design/icons';

import Chessboard from 'chessboardjsx';
//import Resource from "./Resource";

import LogicalChessboard from './LogicalChessboard';

import styles from '../../styles';
import {CommentBox, FENBox} from '../CustomComponents/ChessboardComponents';

export default class Analysis extends React.Component {
  render() {
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
              boardRotateBoard,
              orientation,
              firstMove,
              lastMove,
              resetGame,
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
                      position={position} //position zB. (a6: 'kW') ==> K??nig auf a6
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
                        <TouchableOpacity
                          style={{width: 50}}
                          onPress={() => {
                            resetGame();
                          }}>
                          <RollbackOutlined
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

                    <FENBox FEN={position} />
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
              </View>
            )}
          </LogicalChessboard>
        </View>
      </View>
    );
  }
}
