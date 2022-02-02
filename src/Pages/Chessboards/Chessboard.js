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
              updateGameBGN,
              nextMoveBGN,
              lastMoveBGN,
              updateGamePGN,
              undoMovePGN,
              nextMovePGN,
              chessBoardMoves,
              gameOver,
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

                <TouchableOpacity
                  style={{width: 100, height: 100, backgroundColor: 'white'}}
                  onPress={() => {
                    //STARTPOSITION : ENDPOSITION , STARTPOSITION : ENDPOSITION, Number//
                    //updateGameBGN(global.g.getFIDE2021_Game6(), 0);
                    updateGamePGN(
                      '1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Ng5 Ngf6 6.Bd3 e6 7.N1f3 h6 8.Nxe6 Qe7 9.O-O fxe6 10.Bg6+ Kd8 {Kasparov schüttelt kurz den Kopf} 11.Bf4 b5 12.a4 Bb7 13.Re1 Nd5 14.Bg3 Kc8 15.axb5 cxb5 16.Qd3 Bc6 17.Bf5 exf5 18.Rxe7 Bxe7 19.c4 1-0',
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
