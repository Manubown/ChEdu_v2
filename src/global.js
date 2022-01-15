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
import expertMode from "./Pictures/expert_modus.jpg";
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

    getSwitchLogin = () => {
        return this.darkmode.switchLogin
    }

    getSwitchRegister = () => {
        return this.darkmode.switchRegister
    }

    getSwitchUser = () => {
        return this.darkmode.switchUser
    }

    getSunMoon = () => {
        return this.darkmode.sunMoon
    }

    getTextColor = () => {
        return this.darkmode.textColor
    }

    getSeparator = () => {
        return this.darkmode.separator
    }
    /*Darkmode end*/

    /*UserStats*/
    getUserStats = () => {
        return this.userStats
    }
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

    /*Pictures*/
    getPictures = () => {
        return this.pictures
    }

    getCheduLogo = () => {
        return this.pictures.cheduLogo
    }
    
    getTwoKings = () => {
        return this.pictures.getTwoKings
    }

    getOpeningConcepts = () => {
        return this.pictures.openingConcepts
    }

    getChessBasics = () => {
        return this.pictures.chessBasics
    }

    getStrategyConcepts = () => {
        return this.pictures.strategyConcepts
    }

    getExpertMode = () => {
        return this.pictures.expertMode
    }

    getTextbookCheckmates = () => {
        return this.pictures.textbookCheckmates
    }

    getComingSoon = () => {
        return this.pictures.comingSoon
    }

    getLoginPictureBlack = () => {
        return this.pictures.loginPictureBlack
    }

    getLoginPictureWhite = () => {
        return this.pictures.loginPictureWhite
    }

    getRegisterPictureBlack = () => {
        return this.pictures.registerPictureBlack
    }

    getRegisterPictureWhite = () => {
        return this.pictures.registerPictureWhite
    }

    getUserPictureBlack = () => {
        return this.pictures.userPictureBlack
    }

    getUserPictureWhite = () => {
        return this.pictures.userPictureWhite
    }

    getBlackSeparator = () => {
        return this.pictures.blackSeparator
    }

    getWhiteSeparator = () => {
        return this.pictures.whiteSeparator
    }

    getChessBoardImage = () => {
        return this.pictures.chessBoardImage
    }

    getChessPosterChessBoard = () => {
        return this.pictures.posterChessBoard
    }

    getStartArrow = () => {
        return this.pictures.startArrow
    }
    /*Pictures end*/

/*Setter*/
    /*Window*/
    setSwitchValue = (switchValue) => {
        this.darkmode.switchValue = switchValue;
    }

/*Standards*/

    handleSwitchBackground = () =>{
        const [isSwitchOn, setIsSwitchOn] = React.useState(false);          
        const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
        return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
    }
    /*Logo*/
    getLogo = () => {
        return(
            <View style={({ flexDirection: "row" }, styles.Column)}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
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
        expertMode: expertMode,
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