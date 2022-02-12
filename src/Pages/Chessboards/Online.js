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

export default class Online extends React.Component {
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
            <TouchableOpacity
              onPress={() => {
                //RequestLogin(this.state.Username, this.state.Password);
                this.props.navigation.navigate('Home');
              }}>
              {global.g.getOnlyLogo()}
            </TouchableOpacity>
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
                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                      {gameOver ? (
                        <View
                          style={{
                            zIndex: '10000',
                            position: 'absolute',
                            marginTop: global.g.getWindowHeight() / 4,
                            marginLeft: global.g.getWindowHeight() / 4,
                            width: global.g.getWindowHeight() / 4,
                            height: global.g.getWindowHeight() / 4,
                            backgroundColor: global.g.getBackgroundColor(),
                            opacity: 1,
                          }}>
                          <Text style={{textAlign: 'center'}}>GAME OVER!</Text>
                        </View>
                      ) : null}
                      <Chessboard
                        id="Chessboard"
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
                        style={{width: 100}}
                        onPress={() => {
                          //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                          undoMovePGN();
                        }}>
                        <LeftCircleTwoTone twoToneColor={'#185a5c'} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{width: 100}}
                        onPress={() => {
                          //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                          //nextMove();
                          nextMovePGN();
                        }}>
                        <RightCircleTwoTone twoToneColor={'#185a5c'} />
                      </TouchableOpacity>
                    </View>
    
                    <Text style={{fontSize: 20, textAlign: 'center'}}>
                      FEN: {position}
                    </Text>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>
                      Comment: {pgnComment}
                    </Text>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>
                      Move: {moveIndex}
                    </Text>
                    <TouchableOpacity
                      style={{width: 100, height: 100, backgroundColor: 'white'}}
                      onPress={() => {
                        //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                        //updateGameBGN(global.g.getFIDE2021_Game6(), 0);
                        updateGamePGN(
                          '1.e4 {The interesting part of this game begins at move 40.} e5 2.Bc4 c6 3.Qe2 d6 4.c3 f5 5.d3 Nf6 6.exf5 Bxf5 7.d4 e4 8.Bg5 d5 9.Bb3 Bd6 10.Nd2 Nbd7 11.h3 h6 12.Be3 Qe7 13.f4 h5 14.c4 a6 15.cxd5 cxd5 16.Qf2 O-O 17.Ne2 b5 18.O-O Nb6 19.Ng3 g6 20.Rac1 Nc4 21.Nxf5 gxf5 22.Qg3+ Qg7 23.Qxg7+ Kxg7 24.Bxc4 bxc4 25.g3 Rab8 26.b3 Ba3 27.Rc2 cxb3 28.axb3 Rbc8 29.Rxc8 Rxc8 30.Ra1 Bb4 31.Rxa6 Rc3 32.Kf2 Rd3 33.Ra2 Bxd2 34.Rxd2 Rxb3 35.Rc2 h4 36.Rc7+ Kg6 37.gxh4 Nh5 38.Rd7 Nxf4 39.Bxf4 Rf3+ 40.Kg2 Rxf4 41.Rxd5 Rf3 {This is an example of a rook and pawn endgame, also just called a rook endgame . Even though White has more pawns, they are scattered and isolated. The doubled pawns are particularly weak, so Black actually has the advantage.} 42.Rd8 Rd3 43.d5 f4 44.d6 Rd2+ 45.Kf1 Kf7 {Whites pawn has advanced down the board, but the Black king takes an active role in the defense.} 46.h5 e3 47.h6 f3 {Now Black has established mating net. The threat is Rd1 mate. White actually resigned, because the only escape from mate is to move the king away from the pawns, but then Black gets a queen:} 48.Kg1 Rg2+ 49.Kf1 {49.Kh1 e2} e2+ 50.Ke1 Rg1+ 51.Kd2 Rd1+ 52.Kc2 e1=Q 0-1',
                          82,
                        );
                      }}>
                      <Text>Testgame</Text>
                    </TouchableOpacity>
                    <Text
                      style={{fontSize: 20, color: 'green'}}
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