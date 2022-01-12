/* React standart imports*/
import * as React from 'react';
import {View, Text, Animated, Image, ImageBackground, TouchableOpacity} from 'react-native';

/*styles*/
import styles from "../styles";


export default class Home extends React.Component {
  state = {
    xTabLearnToPlay: 0, //x co-ordinate of tab one
    xTabOnline: 0, //x co-ordinate of tab two
    xTabChessBoard: 0, //x co-ordinate of tab three
    xTabAnalysis: 0,
    translateX: new Animated.Value(0),
    translateXTabLearnToPlay: new Animated.Value(0),
    translateXTabOnline: new Animated.Value(global.g.getWindowWidth()),
    translateYChessboard: -1000,
  };

  /*handleSlide*/
  handleSlide = type => {
    let {
      active,
      translateX,
      translateXTabOne,
      translateXTabTwo,
      translateXTabThree,
      translateXTabFour,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
    }).start();
    if (active === 1) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabFour, {
          toValue: global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
      ]);
    } else if (active === 2) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabFour, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
      ]);
    } else if (active === 3) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -global.g.getWindowWidth() * 3,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: -global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: -global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabFour, {
          toValue: 0,
          duration: 100,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: global.g.getWindowWidth(),
          duration: 100,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: global.g.getWindowWidth() * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabFour, {
          toValue: global.g.getWindowWidth() * 3,
          duration: 100,
        }).start(),
      ]);
    }
  };
  /*handleSlide end*/

  render() {
    let {
      xTabAnalysis,
      translateX,
      active,
      translateXTabLearnToPlay,
      translateXTabOnline,
      translateXTabChessBoard,
      translateXTabAnalysis,
      translateYLearnToPlay,
      translateYOnline,
      translateYChessboard,
    } = this.state;
    return (
      <View style = {global.g.getWindowHeight(), global.g.getWindowWidth(), {backgroundColor: global.g.getBackgroundColor()}}>
        {/*Topbar*/}
        {global.g.getTopbar()}

        {/*SideBar*/}
        <View style = {styles.SideBar}>
          {global.g.getLogo()}

          {/*Statistic + Start Button*/}
          <View>
            {/*Statistics*/}
            <View style={({ flexDirection: "row" }, styles.Stats)}>
              <View style={styles.StatsShadow}>
                <View style={styles.TopBoxStats}>
                  <Text style={{ fontSize: global.g.getWindowWidth() / 30, color: "black" }}>
                    Statistics
                  </Text>
                  <Image />
                </View>
                <View style={{ flexDirection: "row", fontSize: global.g.getWindowWidth() / 80 }}>
                  <View
                    style={{
                      flexDirection: "column",
                      width: global.g.getWindowWidth() / 10,
                      height: global.g.getWindowHeight() / 10,
                      textAlign: "right",
                    }}
                  >
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      Username:{" "}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      Elo:{" "}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      Played Games:{" "}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      Won Games:{" "}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      Lost Games:{" "}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      Local Games:{" "}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      Online Games:{" "}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      Play Time:{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      width: global.g.getWindowWidth() / 10,
                      textAlign: "left",
                    }}
                  >
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      {}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      {}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      {}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      {}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      {}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      {}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      {}
                    </Text>
                    <Text style={{ fontSize: global.g.getWindowWidth() / 80, color: "white" }}>
                      {}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/*Start Game Button*/}
            <ImageBackground
              style={styles.StartGameButtonShadow}
              source={global.g.getChessBoardImage()}
              resizeMode="cover"
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ChessBoard")}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: (global.g.getWindowWidth() / 10) * 1,
                    height: (global.g.getWindowWidth() / 10) * 1,
                  }}
                >
                  <Image
                    source={global.g.getStartArrow()}
                    style={{
                      width: (global.g.getWindowWidth() / 10) * 1,
                      height: (global.g.getWindowWidth() / 10) * 1,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: "rgba(52, 52, 52, 0.8)",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: global.g.getWindowWidth() / 50,
                    color: "white",
                    margin: 10,
                    textAlign: "center",
                  }}
                >
                  Start Game!
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}
