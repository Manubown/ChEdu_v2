import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {
  RightCircleTwoTone,
  LeftCircleTwoTone,
  TrophyFilled,
} from '@ant-design/icons';

import Chessboard from 'chessboardjsx';
//import Resource from "./Resource";

import LogicalChessboard from './LogicalChessboard';

import styles from '../../styles';
import {CommentBox, FENBox} from '../CustomComponents/ChessboardComponents';

export default class ChessBoard extends React.Component {
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
                          style={{fontSize: global.g.getWindowWidth() / 60}}
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
                          style={{fontSize: global.g.getWindowWidth() / 60}}
                        />
                      </TouchableOpacity>
                    </View>

                    <FENBox FEN={position} />
                    <View style={styles.ChessBoardButtonShadow}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'white',
                        }}
                        onPress={() => {
                          //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                          //updateGameBGN(global.g.getFIDE2021_Game6(), 0);
                          updateGamePGN(global.g.getSomeCarlsenGame(), 1);
                        }}>
                        <Text>Testgame</Text>
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

                <Text
                  style={{
                    fontSize: global.g.getWindowWidth() / 70,
                    textAlign: 'center',
                  }}>
                  FEN: {position}
                </Text>

                <Text
                  style={{
                    fontSize: global.g.getWindowWidth() / 70,
                    textAlign: 'center',
                  }}>
                  Move: {moveIndex}
                </Text>

                <Text
                  style={{
                    fontSize: global.g.getWindowWidth() / 70,
                    color: 'green',
                  }}
                  Text={chessBoardMoves}
                />
              </View>
            )}
          </LogicalChessboard>
        </View>
      </View>
    );
  }
}
