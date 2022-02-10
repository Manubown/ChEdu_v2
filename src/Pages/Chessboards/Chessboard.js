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

                <Text style={{fontSize: 20, textAlign: 'center'}}>
                  FEN: {position}
                </Text>
              </View>
            )}
          </LogicalChessboard>
        </View>
      </View>
    );
  }
}
