/* React standart imports*/
import React, { } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    Animated,
    ScrollView,
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
    getWindowHeight = () => {
        return this.windowHeight
    }

    getWindowWidth = () => {
        return this.windowWidth
    }
    
    getDarkmode = () => {
        return this.darkmode
    }

    getUserStats = () => {
        return this.userStats
    }

    getPictures = () => {
        return this.getPictures
    }
    
    getSwitchValue = () => {
        return this.darkmode.switchValue
    }

    /*Setter*/
    setWindowHeight = () => {
        this.windowHeight = Dimensions.get("window").height
    }

    setWindowWidth = () => {
        this.windowWidth = Dimensions.get("window").width
    }

    setDarkmode = () => {
        this.setSwitchValue()
        if(this.getSwitchValue == true){
            this.darkmode = {
                switchValue: true, 
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
                switchValue: false, 
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

    setSwitchValue = () => {
        this.darkmode.switchValue = (this.getSwitchValue()) ? false : true
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