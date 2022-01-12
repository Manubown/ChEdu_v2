/* React standart imports*/
import React, { } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Switch,
    ImageBackground,
} from "react-native";

/*Pictures*/
import cheduLogo from "./Pictures/Logo.png";
import twoKings from "./Pictures/two_kings.jpg";
import openingConcepts from "./Pictures/opening_concepts.jpg";
import chessBasics from "./Pictures/chess_basics.jpg";
import strategyConcepts from "./Pictures/strategy_concepts.jpg";
import expertModus from "./Pictures/expert_modus.jpg";
import textbookCheckmates from "./Pictures/textbook_checkmates.jpg";
import comingSoon from "./Pictures/coming_soon.jpg";
import loginPictureBlack from "./Pictures/login.png";
import loginPictureWhite from "./Pictures/login_white.png";
import registerPictureBlack from "./Pictures/register.png";
import registerPictureWhite from "./Pictures/register_white.png";
import userPictureBlack from "./Pictures/user.png";
import userPictureWhite from "./Pictures/user_white.png";
import blackSeparator from "./Pictures/black_separator.png";
import whiteSeparator from "./Pictures/white_separator.png";
import chessBoardImage from "./Pictures/chessBoard.png";
import posterChessBoard from "./Pictures/Poster_Schachbrett.png";
import startArrow from "./Pictures/right-arrow.jpeg";

/*styles*/
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";

class Global extends React.Component {
    /*ctor*/
    constructor(windowHeight, windowWidth, darkmode, userStats, pictures) {
        super();
        this.windowHeight = windowHeight;
        this.windowWidth = windowWidth;
        this.darkmode = darkmode;
        this.userStats = userStats;
        this.pictures = pictures;
    }

/*Getter*/
    /*Window*/
    getWindowHeight = () => {
        return this.windowHeight
    }

    getWindowWidth = () => {
        return this.windowWidth
    }
    /*Window end*/
    
    /*Darkmode*/
    getDarkmode = () => {
        return this.darkmode
    }

    getSwitchValue = () => {
        return this.darkmode.switchValue
    }

    getBackgroundColor = () => {
        return this.darkmode.backgroundColor
    }

    getSunMoon = () => {
        return this.darkmode.sunMoon
    }
    /*Darkmode end*/

    /*Pictures*/
    getPictures = () => {
        return this.pictures
    }
    
    /*Pictures end*/

    /*UserStats*/
    getUsername = () => {
        return this.userStats.username
    }

    getElo = () => {
        return this.userStats.elo
    }

    getPlayedGames = () => {
        return this.userStats.playedGames
    }

    getWonGames = () => {
        return this.userStats.wonGames
    }

    getLostGames = () => {
        return this.userStats.lostGames
    }

    getLocalGames = () => {
        return this.userStats.localGames
    }

    getOnlineGames = () => {
        return this.userStats.onlineGames
    }

    getLostGames = () => {
        return this.userStats.lostGames
    }

    getPlayTime = () => {
        return this.userStats.playTime
    }
    /*UserStats end*/

/*Setter*/
    setWindowHeight = () => {
        this.windowHeight = Dimensions.get("window").height
    }

    setWindowWidth = () => {
        this.windowWidth = Dimensions.get("window").width
    }

    setDarkmode = (switchValue) => {
        if(switchValue == true){
            this.darkmode = {
                switchValue: this.setSwitchValue(false), 
                backgroundColor: "black", 
                switchLogin: loginPictureWhite, 
                switchRegister: registerPictureWhite, 
                switchUser: userPictureWhite, 
                sunMoon: "🌙", 
                textColor: "white", 
                separator: whiteSeparator
            }
        }
        else{
            this.darkmode = {
                switchValue: this.setSwitchValue(true), 
                backgroundColor: "white", 
                switchLogin: loginPictureBlack, 
                switchRegister: registerPictureBlack, 
                switchUser: userPictureBlack, 
                sunMoon: "☀️", 
                textColor: "black", 
                separator: blackSeparator
            }
        }
    }

    setSwitchValue = (bool) => {
        
        this.darkmode.switchValue = bool;
    }

/*Standards*/
    getTopbar = () => {
        return (
            /*Topbar*/
            <View style = {styles.Topbar}>
                <View style = {styles.RightSwitch}>
                    <Switch
                        value={g.getSwitchValue()}
                        onValueChange={() =>
                            g.setDarkmode(g.getSwitchValue()),
                            console.log(g.getDarkmode()) 
                        }
                    />
                    <Text>{global.g.getSunMoon()}</Text>
                </View>
            </View>
        )
    }

    /*Logo*/
    getLogo = () => {
        return(
            <View style={({ flexDirection: "row" }, styles.Column)}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Homepage")}>
                    <View style={styles.BaseShadow}>
                        <View style={styles.TopBoxLogo}>
                        <View style={{}}>
                            <View
                            style={{
                                justifyContent: "center",
                                flexDirection: "row",
                            }}
                            >
                                <Text style={styles.CheduBlue}>Ch</Text>
                                <Text style={styles.CheduDarkBlue}>Edu</Text>
                            </View>
                            <Text style={styles.LearnToPlayText}>
                                Learn to play chess!
                            </Text>
                        </View>
                        {<Image source={cheduLogo} style={styles.Logo} />}
                        </View>

                        <Text style={styles.LearnToPlayText2}>
                            Learn to play Chess!
                        </Text>
                        <Text style={styles.EasiestWay}>
                            The easiest way to work your way up to get better at chess!
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    
}

//Global Object
var g = new Global(
    Dimensions.get("window").height, 
    Dimensions.get("window").width, 
    {
        switchValue: false, 
        backgroundColor: "white", 
        switchLogin: loginPictureBlack, 
        switchRegister: registerPictureBlack, 
        switchUser: userPictureBlack, 
        sunMoon: "☀️", 
        textColor: "black", 
        separator: blackSeparator
    },
    {
        username: "Michael",
        elo: 1000,
        playedGames: 0,
        wonGames: 0,
        lostGames: 0,
        localGames: 0,
        onlineGames: 0,
        playTime: 0
    },
    {
        cheduLogo: cheduLogo,
        twoKings: twoKings,
        openingConcepts: openingConcepts,
        chessBasics: chessBasics,
        strategyConcepts: strategyConcepts,
        expertModus: expertModus,
        textbookCheckmates: textbookCheckmates,
        comingSoon: comingSoon,
        loginPictureBlack: loginPictureBlack,
        loginPictureWhite: loginPictureWhite,
        registerPictureBlack: registerPictureBlack,
        registerPictureWhite: registerPictureWhite,
        userPictureBlack: userPictureBlack,
        userPictureWhite: userPictureWhite,
        blackSeparator: blackSeparator,
        whiteSeparator: whiteSeparator,
        chessBoardImage: chessBoardImage,
        posterChessBoard: posterChessBoard,
        startArrow: startArrow
    }
)

/*global Variable*/
global.g = g;