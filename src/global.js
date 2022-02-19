/* React standart imports*/
import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  Switch,
  TouchableHighlightBase,
  TouchableOpacity,
} from 'react-native';

/*Pictures*/
import cheduLogo from './Pictures/Logo.png';
import twoKings from './Pictures/two_kings.jpg';
import openingConcepts from './Pictures/opening_concepts.jpg';
import chessBasics from './Pictures/chess_basics.jpg';
import strategyConcepts from './Pictures/strategy_concepts.jpg';
import expertMode from './Pictures/expert_modus.jpg';
import textbookCheckmates from './Pictures/textbook_checkmates.jpg';
import comingSoon from './Pictures/coming_soon.jpg';
import loginPictureBlack from './Pictures/login.png';
import loginPictureWhite from './Pictures/login_white.png';
import registerPictureBlack from './Pictures/register.png';
import registerPictureWhite from './Pictures/register_white.png';
import userPicture from './Pictures/user.png';
import blackSeparator from './Pictures/black_separator.png';
import whiteSeparator from './Pictures/white_separator.png';
import chessBoardImage from './Pictures/chessBoard.png';
import posterChessBoard from './Pictures/Poster_Schachbrett.png';
import startArrow from './Pictures/right-arrow.jpeg';
import cheduVideo from './Pictures/ChEdu_Video.png';
import whiteBook from './Pictures/book_white.png';
import blackBook from './Pictures/book_black.png';
import whiteWWW from './Pictures/world-wide-web_white.png';
import blackWWW from './Pictures/world-wide-web_black.png';
import whiteSword from './Pictures/sword_white.png';
import blackSword from './Pictures/sword_black.png';
import whiteLens from './Pictures/zoom-lens_white.png';
import blackLens from './Pictures/zoom-lens_black.png';
import alirezaFirouzja from './Pictures/Alireza_Firouzja .jpg';
import anishGiri from './Pictures/Anish_giri.jpg';
import antolyKarpov from './Pictures/Antoly_Karpov.jpg';
import bobbyFischer from './Pictures/Bobby_Fischer.jpg';
import garryKasparov from './Pictures/Garry_Kasparov.png';
import hikaruNakamura from './Pictures/Hikaru_Nakamura.jpg';
import magnusCarlsen from './Pictures/Magnus_Carlsen.jpg';
import sicilianDefencePicture from './Pictures/SicilianDefence.png';
import frenchDefencePicture from './Pictures/FrenchDefence.png';
import ruyLopezPicture from './Pictures/RuyLopez.png';
import caroKannPicture from './Pictures/SicilianDefence.png';
import italianGamePicture from './Pictures/ItalianGame.png';
import scandinavianDefencePicture from './Pictures/ScandinavianDefence.png';
import pircDefencePicture from './Pictures/PircDefence.png';
import scotchGamePicture from './Pictures/ScotchGame.png';
import viennaGamePicture from './Pictures/ViennaGame.png';
import queensGambitPicture from './Pictures/QueensGambit.png';
import slavDefencePicture from './Pictures/SlavDefence.png';
import indianDefencePicture from './Pictures/IndianDefence.png';
import dutchDefencePicture from './Pictures/DutchDefence.png';
import englishOpeningPicture from './Pictures/EnglishOpening.png';
import catalanOpeningPicture from './Pictures/CatalanOpening.png';
import retiOpeningPicture from './Pictures/RetiOpening.png';

/*styles*/
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';

/*Pages */
import Home from './Screens/Home';
import Login from './Screens/User_Info/Login';

class Global extends React.Component {
  /*ctor*/
  constructor(
    windowHeight,
    windowWidth,
    darkmode,
    userStats,
    pictures,
    fen,
    pgn,
  ) {
    super();
    this.windowHeight = windowHeight;
    this.windowWidth = windowWidth;
    this.darkmode = darkmode;
    this.userStats = userStats;
    this.pictures = pictures;
    this.fen = fen;
    this.pgn = pgn;
  }

  //#region Getter
  //#region Window
  getWindowHeight = () => {
    return this.windowHeight;
  };

  getWindowWidth = () => {
    return this.windowWidth;
  };
  //#endregion Window end

  //#region User Data
  getIsLoggedIn = () => {
    return this.userStats.isLoggedIn;
  };
  //#endregion User Data

  //#region Darkmode
  getDarkmode = () => {
    return this.darkmode;
  };

  getSwitchValue = () => {
    return this.darkmode.switchValue;
  };

  getBackgroundColor = () => {
    return this.darkmode.backgroundColor;
  };

  getSwitchLogin = () => {
    return this.darkmode.switchLogin;
  };

  getSwitchRegister = () => {
    return this.darkmode.switchRegister;
  };

  getSwitchUser = () => {
    return this.darkmode.switchUser;
  };

  getSunMoon = () => {
    return this.darkmode.sunMoon;
  };

  getTextColor = () => {
    return this.darkmode.textColor;
  };

  getSeparator = () => {
    return this.darkmode.separator;
  };

  getBook = () => {
    return this.darkmode.book;
  };

  getWWW = () => {
    return this.darkmode.www;
  };

  getSword = () => {
    return this.darkmode.sword;
  };

  getLens = () => {
    return this.darkmode.lens;
  };
  //#endregion Darkmode end

  //#region UserStats
  getUserStats = () => {
    return this.userStats;
  };
  getUsername = () => {
    return this.userStats.username;
  };

  getElo = () => {
    return this.userStats.elo;
  };

  getPlayedGames = () => {
    return this.userStats.playedGames;
  };

  getWonGames = () => {
    return this.userStats.wonGames;
  };

  getLostGames = () => {
    return this.userStats.lostGames;
  };

  getLocalGames = () => {
    return this.userStats.localGames;
  };

  getOnlineGames = () => {
    return this.userStats.onlineGames;
  };

  getLostGames = () => {
    return this.userStats.lostGames;
  };
  //#endregion UserStats end

  //#region Pictures
  getPictures = () => {
    return this.pictures;
  };

  getCheduLogo = () => {
    return this.pictures.cheduLogo;
  };

  getTwoKings = () => {
    return this.pictures.getTwoKings;
  };

  getOpeningConcepts = () => {
    return this.pictures.openingConcepts;
  };

  getChessBasics = () => {
    return this.pictures.chessBasics;
  };

  getStrategyConcepts = () => {
    return this.pictures.strategyConcepts;
  };

  getExpertMode = () => {
    return this.pictures.expertMode;
  };

  getTextbookCheckmates = () => {
    return this.pictures.textbookCheckmates;
  };

  getComingSoon = () => {
    return this.pictures.comingSoon;
  };

  getLoginPictureBlack = () => {
    return this.pictures.loginPictureBlack;
  };

  getLoginPictureWhite = () => {
    return this.pictures.loginPictureWhite;
  };

  getRegisterPictureBlack = () => {
    return this.pictures.registerPictureBlack;
  };

  getRegisterPictureWhite = () => {
    return this.pictures.registerPictureWhite;
  };

  getUserPicture = () => {
    return this.pictures.userPicture;
  };

  getBlackSeparator = () => {
    return this.pictures.blackSeparator;
  };

  getWhiteSeparator = () => {
    return this.pictures.whiteSeparator;
  };

  getChessBoardImage = () => {
    return this.pictures.chessBoardImage;
  };

  getChessPosterChessBoard = () => {
    return this.pictures.posterChessBoard;
  };

  getStartArrow = () => {
    return this.pictures.startArrow;
  };

  getCheduVideo = () => {
    return this.pictures.cheduVideo;
  };

  getBookBlack = () => {
    return this.pictures.blackBook;
  };

  getBookWhite = () => {
    return this.pictures.whiteBook;
  };

  getWWWBlack = () => {
    return this.pictures.blackWWW;
  };

  getWWWWhite = () => {
    return this.pictures.whiteWWW;
  };

  getSwordBlack = () => {
    return this.pictures.blackSword;
  };

  getSwordWhite = () => {
    return this.pictures.whiteSword;
  };

  getLensBlack = () => {
    return this.pictures.blackLens;
  };

  getLensWhite = () => {
    return this.pictures.whiteLens;
  };

  getAlirezaFirouzja = () => {
    return this.pictures.alirezaFirouzja;
  };

  getAnishGiri = () => {
    return this.pictures.anishGiri;
  };

  getAntolyKarpov = () => {
    return this.pictures.antolyKarpov;
  };

  getBobbyFischer = () => {
    return this.pictures.bobbyFischer;
  };

  getGarryKasparov = () => {
    return this.pictures.garryKasparov;
  };

  getHikaruNakamura = () => {
    return this.pictures.hikaruNakamura;
  };

  getMagnusCarlsen = () => {
    return this.pictures.magnusCarlsen;
  };

  getSicilianDefencePicture = () => {
    return this.pictures.sicilianDefencePicture;
  };

  getFrenchDefencePicture = () => {
    return this.pictures.frenchDefencePicture;
  };

  getRuyLopezPicture = () => {
    return this.pictures.ruyLopezPicture;
  };

  getCaroKannPicture = () => {
    return this.pictures.caroKannPicture;
  };

  getItalianGamePicture = () => {
    return this.pictures.italianGamePicture;
  };

  getScandinavianDefencePicture = () => {
    return this.pictures.scandinavianDefencePicture;
  };

  getPircDefencePicture = () => {
    return this.pictures.pircDefencePicture;
  };

  getScotchGamePicture = () => {
    return this.pictures.scotchGamePicture;
  };

  getViennaGamePicture = () => {
    return this.pictures.viennaGamePicture;
  };

  getQueensGambitPicture = () => {
    return this.pictures.queensGambitPicture;
  };

  getSlavDefencePicture = () => {
    return this.pictures.slavDefencePicture;
  };

  getIndianDefencePicture = () => {
    return this.pictures.indianDefencePicture;
  };

  getDutchDefencePicture = () => {
    return this.pictures.dutchDefencePicture;
  };

  getEnglishOpeningPicture = () => {
    return this.pictures.englishOpeningPicture;
  };

  getCatalanOpeningPicture = () => {
    return this.pictures.catalanOpeningPicture;
  };

  getRetiOpeningPicture = () => {
    return this.pictures.retiOpeningPicture;
  };
  //#endregion Pictures end

  //#region Openings
  getSicilianDefence = () => {
    return this.pgn.Openings.SicilianDefence;
  };

  getFrenchDefence = () => {
    return this.pgn.Openings.FrenchDefense;
  };

  getRuyLopez = () => {
    return this.pgn.Openings.RuyLopez;
  };

  getCaroKann = () => {
    return this.pgn.Openings.CaroKann;
  };

  getItalianGame = () => {
    return this.pgn.Openings.ItalianGame;
  };

  getScandinavianDefence = () => {
    return this.pgn.Openings.ScandinavianDefence;
  };

  getPircDefence = () => {
    return this.pgn.Openings.PircDefence;
  };

  getScotchGame = () => {
    return this.pgn.Openings.ScotchGame;
  };

  getViennaGame = () => {
    return this.pgn.Openings.ViennaGame;
  };

  getQueensGambit = () => {
    return this.pgn.Openings.QueensGambit;
  };

  getSlavDefence = () => {
    return this.pgn.Openings.SlavDefence;
  };

  getIndianDefence = () => {
    return this.pgn.Openings.IndianDefence;
  };

  getDutchDefence = () => {
    return this.pgn.Openings.DutchDefence;
  };

  getEnglishOpening = () => {
    return this.pgn.Openings.EnglishOpening;
  };

  getCatalanOpening = () => {
    return this.pgn.Openings.CatalanOpening;
  };

  getRetiOpening = () => {
    return this.pgn.Openings.RetiOpening;
  };
  //#endregion Openings end

  //#region pgn

  //#region Carlsen
  getWorldChessChampionship2021Game6 = () => {
    return this.pgn.Carlsen.World_Chess_Championship_2021_Game6;
  };

  getKramnik_vs_Carlsen2008 = () => {
    return this.pgn.Carlsen.Kramnik_vs_Carlsen2008;
  };

  getCarlsen_vs_Aronian2015 = () => {
    return this.pgn.Carlsen.Carlsen_vs_Aronian2015;
  };

  getCarlsen_vs_Nakamura2011 = () => {
    return this.pgn.Carlsen.Carlsen_vs_Nakamura2011;
  };

  getCarlsen_vs_Gelfand2013 = () => {
    return this.pgn.Carlsen.Carlsen_vs_Gelfand2013;
  };

  getCarlsen_vs_Kasparov2004 = () => {
    return this.pgn.Carlsen.Carlsen_vs_Kasparov2004;
  };
  //#endregion

  //#region Nakamura
  getGelfand_vs_Nakamura2010 = () => {
    return this.pgn.Nakamura.Gelfand_vs_Nakamura2010;
  };
  getStripunsky_vs_Nakamura1998 = () => {
    return this.pgn.Nakamura.Stripunsky_vs_Nakamura1998;
  };
  getNakamura_vs_Oluto_Adu1999 = () => {
    return this.pgn.Nakamura.Nakamura_vs_Oluto_Adu1999;
  };
  getNakamura_vs_Novikov2002 = () => {
    return this.pgn.Nakamura.Nakamura_vs_Novikov2002;
  };
  getCrafty_AI_vs_Nakamura2007 = () => {
    return this.pgn.Nakamura.Crafty_AI_vs_Nakamura2007;
  };

  //#endregion

  //#region Kasparov
  getMagerramov_vs_Kasparov1977 = () => {
    return this.pgn.Kasparov.Magerramov_vs_Kasparov1977;
  };
  getKasparov_vs_Palatnik1978 = () => {
    return this.pgn.Kasparov.Kasparov_vs_Palatnik1978;
  };
  getKasparov_vs_Topalov1999 = () => {
    return this.pgn.Kasparov.Kasparov_vs_Topalov1999;
  };
  getKasparov_vs_Karpov1987 = () => {
    return this.pgn.Kasparov.Kasparov_vs_Karpov1987;
  };
  getKasparov_vs_Anand1996 = () => {
    return this.pgn.Kasparov.Kasparov_vs_Anand1996;
  };
  getKasparov_vs_Deep_Blue1996 = () => {
    return this.pgn.Kasparov.Kasparov_vs_Deep_Blue1996;
  };
  getKarpov_vs_Kasparov1985 = () => {
    return this.pgn.Kasparov.Karpov_vs_Kasparov1985;
  };
  //#endregion

  //#region Giri
  getGiri_vs_Hao2021 = () => {
    return this.pgn.Giri.Giri_vs_Hao2021;
  };
  getLiren_vs_Giri2017 = () => {
    return this.pgn.Giri.Liren_vs_Giri2017;
  };
  getGiri_vs_Harikrishna2019 = () => {
    return this.pgn.Giri.Giri_vs_Harikrishna2019;
  };
  //#endregion
  //#endregion pgn end

  //#region Fischer
  getByrne_vs_Fischer1963 = () => {
    return this.pgn.Fischer.Byrne_vs_Fischer1963;
  };
  getFischer_vs_Myagmarsuren1967 = () => {
    return this.pgn.Fischer.Fischer_vs_Myagmarsuren1967;
  };
  getFischer_vs_Spassky1972 = () => {
    return this.pgn.Fischer.Fischer_vs_Spassky1972;
  };
  getFischer_vs_Tal1961 = () => {
    return this.pgn.Fischer.Fischer_vs_Tal1961;
  };
  getSpassky_vs_Fischer1972 = () => {
    return this.pgn.Fischer.Spassky_vs_Fischer1972;
  };
  //#endregion

  //#region Karpov
  getAnand_vs_Karpov1998 = () => {
    return this.pgn.Karpov.Anand_vs_Karpov1998;
  };
  getGelfand_vs_Karpov1995 = () => {
    return this.pgn.Karpov.Gelfand_vs_Karpov1995;
  };
  getKarpov_vs_Kasparov1988 = () => {
    return this.pgn.Karpov.Karpov_vs_Kasparov1988;
  };
  getKarpov_vs_Korchnoi1981 = () => {
    return this.pgn.Karpov.Karpov_vs_Korchnoi1981;
  };
  getKarpov_vs_Spassky1979 = () => {
    return this.pgn.Karpov.Karpov_vs_Spassky1979;
  };
  //#endregion

  //#endregion Getter

  //#region Setter
  /*User Data*/
  setIsLoggedIn = value => {
    this.userStats.isLoggedIn = value;
  };

  /*Darkmode*/
  setSwitchValue = value => {
    this.darkmode.switchValue = value;
  };

  setBackgroundColor = value => {
    this.darkmode.backgroundColor = value;
  };

  setSwitchLogin = value => {
    this.darkmode.switchLogin = value;
  };

  setSwitchRegister = value => {
    this.darkmode.switchRegister = value;
  };

  setSunMoon = value => {
    this.darkmode.sunMoon = value;
  };

  setTextColor = value => {
    this.darkmode.textColor = value;
  };

  setSeparator = value => {
    this.darkmode.separator = value;
  };

  setBook = value => {
    this.darkmode.book = value;
  };

  setWWW = value => {
    this.darkmode.www = value;
  };

  setSword = value => {
    this.darkmode.sword = value;
  };

  setLens = value => {
    this.darkmode.lens = value;
  };
  /*Darkmode end*/

  /*UserStats*/
  setUserStats = (
    username,
    elo,
    playedGames,
    wonGames,
    lostGames,
    localGames,
    onlineGames,
    isLoggedIn,
  ) => {
    this.userStats.username = username;
    this.userStats.elo = elo;
    this.userStats.playedGames = playedGames;
    this.userStats.wonGames = wonGames;
    this.userStats.lostGames = lostGames;
    this.userStats.localGames = localGames;
    this.userStats.onlineGames = onlineGames;
    this.userStats.isLoggedIn = isLoggedIn;
  };
  /*UserStats end*/
  //#endregion Setter

  /*Standards*/
  /*Logo*/
  getLogo = () => {
    return (
      <View style={({flexDirection: 'row'}, styles.Column)}>
        <View style={styles.BaseShadow}>
          <View style={styles.TopBoxLogo}>
            <View style={{}}>
              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={styles.CheduBlue}>Ch</Text>
                <Text style={styles.CheduDarkBlue}>Edu</Text>
              </View>
              <Text style={styles.LearnToPlayText}>Learn to play chess!</Text>
            </View>
            {<Image source={cheduLogo} style={styles.Logo} />}
          </View>

          <Text style={styles.LearnToPlayText2}>Learn to play Chess!</Text>
          <Text style={styles.EasiestWay}>
            The easiest way to work your way up to get better at chess!
          </Text>
        </View>
      </View>
    );
  };

  /*Only Logo*/
  getOnlyLogo = () => {
    return (
      <View style={{width: global.g.getWindowWidth() / 10}}>
        <Image
          source={global.g.getCheduLogo()}
          style={{
            width: global.g.getWindowWidth() / 10,
            height: global.g.getWindowWidth() / 10,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            width: global.g.getWindowWidth() / 10,
            textAlign: 'center',
            color: global.g.getTextColor(),
          }}>
          Back to Home
        </Text>
      </View>
    );
  };
}

/*HandleSwitch*/
export function HandleSwitchBackground() {
  console.log('HandleSwitchBackgroundEvent');

  /*Update Pages*/
  Home.updateValuesStats;
  Login.updateValuesStats;

  const [isSwitchOn, setIsSwitchOn] = React.useState(global.g.getSwitchValue());

  if (isSwitchOn === true) {
    console.log('Switch ON');
    global.g.setSwitchValue(true);
    global.g.setBackgroundColor('#121212');
    global.g.setSwitchLogin(global.g.getLoginPictureWhite());
    global.g.setSwitchRegister(global.g.getRegisterPictureWhite());
    global.g.setSunMoon('🌙');
    global.g.setTextColor('white');
    global.g.setSeparator(global.g.getWhiteSeparator());
    global.g.setBook(global.g.getBookWhite());
    global.g.setWWW(global.g.getWWWWhite());
    global.g.setSword(global.g.getSwordWhite());
    global.g.setLens(global.g.getLensWhite());
  } else if (isSwitchOn === false) {
    console.log('Switch OFF');
    global.g.setSwitchValue(false);
    global.g.setBackgroundColor('white');
    global.g.setSwitchLogin(global.g.getLoginPictureBlack());
    global.g.setSwitchRegister(global.g.getRegisterPictureBlack());
    global.g.setSunMoon('☀️');
    global.g.setTextColor('balck');
    global.g.setSeparator(global.g.getBlackSeparator());
    global.g.setBook(global.g.getBookBlack());
    global.g.setWWW(global.g.getWWWBlack());
    global.g.setSword(global.g.getSwordBlack());
    global.g.setLens(global.g.getLensBlack());
  }

  console.log('Switch Value: ' + isSwitchOn);
  console.log('Global Switch Value: ' + global.g.getSwitchValue());
  return (
    <Switch
      value={isSwitchOn}
      onValueChange={isSwitchOn => setIsSwitchOn(isSwitchOn ? true : false)}
    />
  );
}

//Global Object
var g = new Global(
  Dimensions.get('window').height,
  Dimensions.get('window').width,
  {
    switchValue: false,
    backgroundColor: 'white',
    switchLogin: loginPictureBlack,
    switchRegister: registerPictureBlack,
    switchUser: userPicture,
    sunMoon: '☀️',
    textColor: 'black',
    separator: blackSeparator,
    book: blackBook,
    www: blackWWW,
    sword: blackSword,
    lens: blackLens,
  },
  {
    username: 'User',
    elo: 1000,
    playedGames: 0,
    wonGames: 0,
    lostGames: 0,
    localGames: 0,
    onlineGames: 0,
    isLoggedIn: false,
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
    userPicture: userPicture,
    blackSeparator: blackSeparator,
    whiteSeparator: whiteSeparator,
    chessBoardImage: chessBoardImage,
    posterChessBoard: posterChessBoard,
    startArrow: startArrow,
    cheduVideo: cheduVideo,
    blackBook: blackBook,
    whiteBook: whiteBook,
    blackWWW: blackWWW,
    whiteWWW: whiteWWW,
    blackSword: blackSword,
    whiteSword: whiteSword,
    blackLens: blackLens,
    whiteLens: whiteLens,
    alirezaFirouzja: alirezaFirouzja,
    anishGiri: anishGiri,
    antolyKarpov: antolyKarpov,
    bobbyFischer: bobbyFischer,
    garryKasparov: garryKasparov,
    hikaruNakamura: hikaruNakamura,
    magnusCarlsen: magnusCarlsen,
    sicilianDefencePicture: sicilianDefencePicture,
    frenchDefencePicture: frenchDefencePicture,
    ruyLopezPicture: ruyLopezPicture,
    caroKannPicture: caroKannPicture,
    italianGamePicture: italianGamePicture,
    scandinavianDefencePicture: scandinavianDefencePicture,
    pircDefencePicture: pircDefencePicture,
    scotchGamePicture: scotchGamePicture,
    viennaGamePicture: viennaGamePicture,
    queensGambitPicture: queensGambitPicture,
    slavDefencePicture: slavDefencePicture,
    indianDefencePicture: indianDefencePicture,
    dutchDefencePicture: dutchDefencePicture,
    englishOpeningPicture: englishOpeningPicture,
    catalanOpeningPicture: catalanOpeningPicture,
    retiOpeningPicture: retiOpeningPicture,
  },
  {
    Openings: {
      SicilianDefence:
        'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',

      FrenchDefense:
        'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',

      RuyLopez:
        'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',

      CaroKann: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',

      ItalianGame:
        'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',

      ScandinavianDefence:
        'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',

      PircDefence:
        'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4',

      ScotchGame:
        'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',

      ViennaGame:
        'rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1',

      QueensGambit:
        'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',

      SlavDefence:
        'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',

      IndianDefence:
        'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2',

      DutchDefence:
        'rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',

      EnglishOpening:
        'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1',

      CatalanOpening:
        'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3',

      RetiOpening:
        'rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq - 1 2',
    },
    MiddleGame: {},
    EndGame: {},
    BasicRules: {
      Start: 'start',
    },
  },
  {
    Openings: {
      SicilianDefence: {
        PGN: "1. e4 {The moves 1.e4 c5 constitute the Sicilian Defence, a counter-attacking opening in which players typically attack on opposite sides of the board. The Sicilian was introduced to the chess world in 1594 by Polerio, and emerged into the mainstream in the early 20th century as a somewhat tame variation. With the discovery of new attacking ideas, it became Black's most feared weapon by the 1950s and is, pound for pound, the most exhaustively analysed of all openings.} c5 {Black's move 1...c5 seeks to create a half-open file, controls the important d4 square, and allows the black queen to venture out if desired, while the c-pawn itself is safe from attack, unlike the e-pawn after 1.e4 e5.}",
        position: 2,
      },

      FrenchDefense:
        "1. e4 {After 1. e4 Black plays e6 signifying his intent to play the French Defense. The move 1... e6 bolsters support for the coming advance d7-d5, providing Black with a good stake in the center and allowing Black to decline recapturing with the queen after the plausible continuation exd5.} e6 {In most lines White will follow up with 2. d4, with Black's only serious reply to this being 2... d5 (over 154 times more popular than 2... c5 in master play.)}",

      RuyLopez:
        "1. e4 {The essential move marking the Ruy Lopez, or Spanish Game. \"It is the double king's pawn opening most commonly used in master play; it has been adopted by almost all players at some point in their careers and many play it from both the White and Black sides.\"} e5 2. Nf3 Nc6 3. Bb5 {White threatens to trade off Black's c6-knight, leaving the e5-pawn undefended. It's not an immediate threat, because after 4. Bxc6 dxc6 5. Nxe5, Black can win the pawn back with 5... Qd4 or 5... Qg5. Black can respond in a variety of ways. The most common move is the Morphy Defence 3... a6. This forces White to make a decision about the Bishop - retreat or exchange. Many other moves are available, some neglecting completely the protection of the knight and the pawn and continuing development.}",

      CaroKann:
        "1. e4 {In choosing the Caro-Kann, Black gives up the centre in exchange for easier development. In contrast to the French, the queen's bishop is not blocked, but the c6-square is no longer available for the knight. Black often aims to let White's pawns overextend, or develop a poor structure, and take advantage in the endgame.} c6 {White's natural move is now 2. d4 as nothing prevents them from building a strong center. Bobby Fischer sometimes played 2. Nf3 followed by 3. Nc3.}",

      ItalianGame:
        "1. e4 e5 2. Nf3 Nc6 3. Bc4 {And so we reach the Italian Game. White takes aim at Black's weak f7 pawn. Now there are a number of options for Black. This opening is more reserved than the Ruy Lopez.}",

      ScandinavianDefence:
        "1. e4 {When White opens with 1. e4, the pawn on e4 is immediately a big asset, a bulwark in the centre of the board interfering with Black's plans.} d5 {Black can either manoeuvre around it, for example by putting a pawn of his own on e5, or he can go after that e4 pawn. There is one move that virtually guarantees the disappearance of White's pawn: 1... d5, the Centre Counter or Scandinavian Defence.}",

      PircDefence:
        "1. e4 {In this opening, Black does not immediately fight for the center, but prefers to prepare counter-play while White advances White's pawns.} d6 {If White dislikes this opening, White can play 2. Nf3 in order to transpose into the Sicilian Defence (2...c5) or into the Philidor Defence (2...e5).} 2. d4 {If White agrees to play this defence, White has no reason not to build its pawn center with 2. d4.} Nf6 3. Nc3 g6",

      ScotchGame:
        '1. e4 e5 2. Nf3 Nc6 3. d4 {This aggressive move practically forces Black to play 3...exd4 which releases central tension very early. This should lead to a very open game with a lot of space for both players. A few tries have been made with 3...d6 but this move is considered inferior because of 4.dxe5 dxe5 5.Qxd8+ Kxd8 6.Bc4. 3...Nxd4 is playable: 4.Nxd4 exd4 5.Qxd4 and some good players believe that black nearly equalizes in this line. Also seen after 3...Nxd4 is 4. Nxe5, after which black will have to move the knight.}',

      ViennaGame:
        "1. e4 e5 {White's wish is to advance the f-pawn two squares to remove Black's powerful e5 pawn and strike at the heart of his position.} 2. Nc3 {Now it is possible to play f4 on the second move, for the King's Gambit, but when no Black piece has yet declared its intentions is there not a degree of hit-and-hope about such a move? If you have the patience to let Black build his bridge before you blow it up: welcome to the Vienna Game, a poison-tipped opening from the nineteenth century. If you should find yourself up against the Vienna as Black, keep your nerve. The harder White tries to checkmate you, the less time he has to develop naturally and control territory; consequently, if you survive the opening your hand is a little freer than in the Ruy Lopez.}",

      QueensGambit:
        "1. d4 d5 2. c4 {2. c4 is the Queen's Gambit. White immediately responds to Black's attempt to gain a foothold in the center by striking out with their c-pawn. Though this pawn is not defended and Black can capture it with ... dxc4, doing so will remove Black's d-pawn from the center and give White more opportunities for central control. Therefore, Black often chooses to decline the gambit, which he can do in several ways.}",

      SlavDefence:
        "1. d4 {Originally considered a less-orthodox defence in the Queen's Gambit, this opening has stood as an entire opening system in its own right for decades.} d5 2. c4 c6 {The idea behind this defence is straightforward: instead of locking in the light squared bishop on c8, why not support the center with the c-pawn instead? Black tends to be more active in this variation than the QGD.}",

      IndianDefence:
        '1. d4 Nf6 {Black\'s 1...Nf6 in response to 1.d4 is characteristic of the various "Indian" defences. Unlike 1...d5, which fights for the center in traditional fashion by occupying it with pawns, Indian systems reflect the hyper modern approach to opening theory. In such openings, Black often allows White to construct a classical pawn center, but then attempts to attack it with pieces and undermine it with timely pawn advances. By delaying the movement of his own central pawns, Black retains a certain degree of flexibility at the cost of ceding the center to White. It should be noted that while 1...Nf6 often leads to Indian systems, transpositions back into other openings such as the Queen\'s Gambit are not uncommon. As in any opening, both players should remain aware of these possibilities. The main continuation for White is 2.c4. In fact, there are many playable moves at this point, but most of them either transpose back into a typical 2.c4 position or into other more or less orthodox 1.d4 openings. Some lines such as 2.Bg5 may lead to strange positions, but even these may transpose or become similar to other mainstream 1.d4 openings. Hopefully this gives some background as to why 2.c4 is the main move discussed in opening books. Feel free to play 2.Nf3, 2.Nc3, or even 2.c3, 2.Bf4, or 2.Bg5. Even so, learning the main positions (and, more importantly, the strategies) arising from 2.c4 will not be time wasted. Nd2 is a weak move by White where Black can play the Budapest trap (Nd2 - e5, dxe5 - Ng4, h3 - Ne3)}',

      DutchDefence:
        '1. d4 f5 {The Dutch Defence has a character all of its own. Black usually plays either for a Classical setup with 2... e6 3... d6 4... Be7, a Stonewall with 2... e6 3... d5 4... c6, or for the Leningrad with 2... g6 3... Bg7 4... d6. White usually plays 2. c4 here, though many moves are playable. One interesting, though often considered dubious, option is to play the Staunton Gambit with 2. e4 leading to more tactical positions rather than the positional grinds and straightforward attacks the Dutch usually provides. This grabs the e4-square without copying moves.}',

      EnglishOpening:
        '1. c4 {This opening is very flexible. It can transpose into many others.}',

      CatalanOpening:
        "1. d4 {This is the Catalan Opening, named after the Spanish region of Catalonia, when Grandmaster Savielly Tartakower was asked, at the Barcelona tournament of 1929, to invent an opening system in honor of the region's chess history. } Nf6 2. c4 e6 3. g3 {Usually, the game continues 3...d5 4.Nf3. The Catalan then has two main branches, the Open Variation and the Closed Variation. In the Open Variation, Black takes the pawn on c4. This gives White strong pressure on Black's queenside, thanks to the fianchettoed bishop on g2. In the Closed Variation, Black retains his strong-point on d5, attempting to block out the bishop on g2, but stays passive.}",

      RetiOpening:
        '1. c4 {The Réti Opening is a hypermodern chess opening.} d5 2. Nf3 { White plans to bring the d5-pawn under attack from the flank, or entice it to advance to d4 and undermine it later. White will couple this plan with a Kingside fianchetto (g3 and Bg2) to create pressure on the light squares in the center.}',
    },
    MiddleGame: {},
    EndGame: {},
    Carlsen: {
      World_Chess_Championship_2021_Game6:
        '1. d4 Nf6 2. Nf3 d5 3. g3 e6 4. Bg2 Be7 5. O-O O-O 6. b3 c5 7. dxc5 Bxc5 8. c4 dxc4 9. Qc2 Qe7 10. Nbd2 Nc6 11. Nxc4 b5 12. Nce5 Nb4 13. Qb2 Bb7 14. a3 Nc6 15. Nd3 Bb6 16. Bg5 Rfd8 17. Bxf6 gxf6 18. Rac1 Nd4 19. Nxd4 Bxd4 20. Qa2 Bxg2 21. Kxg2 Qb7+ 22. Kg1 Qe4 23. Qc2 a5 24. Rfd1 Kg7 25. Rd2 Rac8 26. Qxc8 Rxc8 27. Rxc8 Qd5 28. b4 a4 29. e3 Be5 30. h4 h5 31. Kh2 Bb2 32. Rc5 Qd6 33. Rd1 Bxa3 34. Rxb5 Qd7 35. Rc5 e5 36. Rc2 Qd5 37. Rdd2 Qb3 38. Ra2 e4 39. Nc5 Qxb4 40. Nxe4 Qb3 41. Rac2 Bf8 42. Nc5 Qb5 43. Nd3 a3 44. Nf4 Qa5 45. Ra2 Bb4 46. Rd3 Kh6 47. Rd1 Qa4 48. Rda1 Bd6 49. Kg1 Qb3 50. Ne2 Qd3 51. Nd4 Kh7 52. Kh2 Qe4 53. Rxa3 Qxh4+ 54. Kg1 Qe4 55. Ra4 Be5 56. Ne2 Qc2 57. R1a2 Qb3 58. Kg2 Qd5+ 59. f3 Qd1 60. f4 Bc7 61. Kf2 Bb6 62. Ra1 Qb3 63. Re4 Kg7 64. Re8 f5 65. Raa8 Qb4 66. Rac8 Ba5 67. Rc1 Bb6 68. Re5 Qb3 69. Re8 Qd5 70. Rcc8 Qh1  71. Rc1 Qd5 72. Rb1 Ba7 73. Re7 Bc5 74. Re5 Qd3 75. Rb7 Qc2 76. Rb5 Ba7 77. Ra5 Bb6 78. Rab5 Ba7 79. Rxf5  Qd3 80. Rxf7+ Kxf7 81. Rb7+ Kg6 82. Rxa7 Qd5 83. Ra6+ Kh7 84. Ra1 Kg6 85. Nd4 Qb7 86. Ra2 Qh1 87. Ra6+ Kf7 88. Nf3 Qb1 89. Rd6 Kg7 90. Rd5 Qa2+ 91. Rd2 Qb1 92. Re2 Qb6 93. Rc2 Qb1 94. Nd4 Qh1 95. Rc7+ Kf6 96. Rc6+ Kf7 97. Nf3 Qb1 98. Ng5+ Kg7 99. Ne6+ Kf7 100. Nd4 Qh1 101. Rc7+ Kf6 102. Nf3 Qb1 103. Rd7 Qb2+ 104. Rd2 Qb1 105. Ng1 Qb4 106. Rd1 Qb3 107. Rd6+ Kg7 108. Rd4 Qb2+ 109. Ne2 Qb1 110. e4 Qh1 111. Rd7+ Kg8 112. Rd4 Qh2+ 113. Ke3 h4 114. gxh4 Qh3+ 115. Kd2 Qxh4 116. Rd3 Kf8 117. Rf3 Qd8+ 118. Ke3 Qa5 119. Kf2 Qa7+ 120. Re3 Qd7 121. Ng3 Qd2+ 122. Kf3 Qd1+ 123. Re2 Qb3+ 124. Kg2 Qb7 125. Rd2 Qb3 126. Rd5 Ke7 127. Re5+ Kf7 128. Rf5+ Ke8 129. e5 Qa2+ 130. Kh3 Qe6 131. Kh4 Qh6+ 132. Nh5 Qh7 133. e6 Qg6 134. Rf7 Kd8 135. f5 Qg1 136. Ng7 1-0',
      Kramnik_vs_Carlsen2008:
        '1. Nf3 Nf6 2. c4 e6 3. Nc3 c5 4. g3 b6 5. Bg2 Bb7 6. O-O Be7 7. d4 cxd4 8. Qxd4 d6 9. Rd1 a6 10. Ng5 Bxg2 11. Kxg2 Nc6 12. Qf4 O-O 13. Nce4 Ne8 14. b3 Ra7 15. Bb2 Rd7 16. Rac1 Nc7 17. Nf3 f5 18. Nc3 g5 19. Qd2 g4 20. Ne1 Bg5 21. e3 Rff7 22. Kg1 Ne8 23. Ne2 Nf6 24. Nf4 Qe8 25. Qc3 Rg7 26. b4 Ne4 27. Qb3 Rge7 28. Qa4 Ne5 29. Qxa6 Ra7 30. Qb5 Qxb5 31. cxb5 Rxa2 32. Rc8+ Kf7 33. Nfd3 Bf6 34. Nxe5+ dxe5 35. Rc2 Rea7 36. Kg2 Ng5 37. Rd6 e4 38. Bxf6 Kxf6 39. Kf1 Ra1 40. Ke2 Rb1 41. Rd1 Rxb4 42. Ng2 Rxb5 43. Nf4 Rc5 44. Rb2 b5 45. Kf1 Rac7 46. Rbb1 Rb7 47. Rb4 Rc4 48. Rb2 b4 49. Rdb1 Nf3 50. Kg2 Rd7 51. h3 e5 52. Ne2 Rd2 53. hxg4 fxg4 54. Rxd2 Nxd2 55. Rb2 Nf3 56. Kf1 b3 57. Kg2 Rc2 0-1',
      Carlsen_vs_Aronian2015:
        '1.d4 d5 2.c4 e6 3.Nc3 Be7 4.cxd5 exd5 5.Bf4 c6 6.Qc2 Bg4 7.e3 Bh5 8.Bd3 Bg6 9.Bxg6 hxg6 10.O-O-O Nf6 11.f3 Nbd7 12.Nge2 b5 13.e4 b4 14.Na4 dxe4 15.fxe4 Qa5 16.Kb1 O-O 17.h4 Rfe8 18.e5 Nd5 19.h5 g5 20.h6 g6 21.Bc1 N7b6 22.Nc5 Bxc5 23.dxc5 b3 24.Qxb3 Qxc5 25.Nd4 Rxe5 26.Nf3 Re2 27.Nxg5 Qe7 28.Qd3 Rf8 29.Rdf1 f5 30.g4 Na4 31.Qd4 Qe5 32.Qxe5 Rxe5 33.gxf5 gxf5 34.Nf3 Re7 35.Rfg1+ Kh7 36.Rg7+ Kh8 37.Rhg1 Rfe8 38.Nh4 Rxg7 1-0',
      Carlsen_vs_Nakamura2011:
        '1.d4 d5 2.c4 e6 3.Nc3 Be7 4.cxd5 exd5 5.Bf4 c6 6.Qc2 Bg4 7.e3 Bh5 8.Bd3 Bg6 9.Bxg6 hxg6 10.O-O-O Nf6 11.f3 Nbd7 12.Nge2 b5 13.e4 b4 14.Na4 dxe4 15.fxe4 Qa5 16.Kb1 O-O 17.h4 Rfe8 18.e5 Nd5 19.h5 g5 20.h6 g6 21.Bc1 N7b6 22.Nc5 Bxc5 23.dxc5 b3 24.Qxb3 Qxc5 25.Nd4 Rxe5 26.Nf3 Re2 27.Nxg5 Qe7 28.Qd3 Rf8 29.Rdf1 f5 30.g4 Na4 31.Qd4 Qe5 32.Qxe5 Rxe5 33.gxf5 gxf5 34.Nf3 Re7 35.Rfg1+ Kh7 36.Rg7+ Kh8 37.Rhg1 Rfe8 38.Nh4 Rxg7 1-0',
      Carlsen_vs_Gelfand2013:
        '1.d4 Nf6 2.c4 e6 3.Nf3 d5 4.Nc3 Nbd7 5.Bg5 c6 6.e3 Qa5 7.cxd5 Nxd5 8.Rc1 Nxc3 9.bxc3 Ba3 10.Rc2 b6 11.Bd3 Ba6 12.O-O Bxd3 13.Qxd3 O-O 14.e4 Rfe8 15.e5 h6 16.Bh4 c5 17.Nd2 cxd4 18.cxd4 Rac8 19.Nc4 Qb5 20.f4 Rc7 21.Qxa3 Rxc4 22.Rxc4 Qxc4 23.Bf2 Qc7 24.Rc1 Qb7 25.Qd6 Nf8 26.g3 Rc8 27.Rxc8 Qxc8 28.d5 exd5 29.Qxd5 g6 30.Kg2 Ne6 31.Qf3 Kg7 32.a3 h5 33.h4 Qc2 34.Qb7 Qa4 35.Qf3 b5 36.f5 gxf5 37.Qxf5 Qxa3 38.Qxh5 a5 39.Qg4+ Kf8 40.h5 Qc1 41.Qe4 b4 42.Be3 Qc7 43.Qa8+ Kg7 44.h6+ Kh7 45.Qe4+ Kg8 46.Qa8+ Qd8 47.Qxd8+ Nxd8 48.Kf3 a4 49.Ke4 Nc6 50.Bc1 Na5 51.Bd2 b3 52.Kd3 Nc4 53.Bc3 a3 54.g4 Kh7 55.g5 Kg6 56.Bd4 b2 57.Kc2 Nd2 0-1',
      Carlsen_vs_Kasparov2004:
        '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. Nd2 Bb4 8. Qc2 O-O 9. Be2 e5 10. O-O exd4 11. Nb3 Qb6 12. exd4 dxc4 13. Bxc4 a5 14. a4 Qc7 15. Rae1 h6 16. Bh4 Bd6 17. h3 Nb6 18. Bxf6 Nxc4 19. Ne4 Bh2+ 20. Kh1 Nd6 21. Kxh2 Nxe4+ 22. Be5 Nd6 23. Qc5 Rd8 24. d5 Qd7 25. Nd4 Nf5 26. dxc6 bxc6 27. Nxc6 Re8 28. Rd1 Qe6 29. Rfe1 Bb7 30. Nd4 Nxd4 31. Qxd4 Qg6 32. Qg4 Qxg4 33. hxg4 Bc6 34. b3 f6 35. Bc3 Rxe1 36. Rxe1 Bd5 37. Rb1 Kf7 38. Kg3 Rb8 39. b4 axb4 40. Bxb4 Bc4 41. a5 Ba6 42. f3 Kg6 43. Kf4 h5 44. gxh5+ Kxh5 45. Rh1+ Kg6 46. Bc5 Rb2 47. Kg3 Ra2 48. Bb6 Kf7 49. Rc1 g5 50. Rc7+ Kg6 51. Rc6 Bf1 52. Bf2 1/2-1/2',
    },
    Nakamura: {
      Gelfand_vs_Nakamura2010:
        '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Nd2 Ne8 10. b4 f5 11. c5 Nf6 12. f3 f4 13. Nc4 g5 14. a4 Ng6 15. Ba3 Rf7 16. b5 dxc5 17. Bxc5 h5 18. a5 g4 19. b6 g3 20. Kh1 Bf8 21. d6 axb6 22. Bg1 Nh4 23. Re1 Nxg2 24. dxc7 Nxe1 25. Qxe1 g2+ 26. Kxg2 Rg7+ 27. Kh1 Bh3 28. Bf1 Qd3 29. Nxe5 Bxf1 30. Qxf1 Qxc3 31. Rc1 Qxe5 32. c8=Q Rxc8 33. Rxc8 Qe6 0-1',
      Stripunsky_vs_Nakamura1998:
        '1. e4 c5 2. Nf3 e6 3. c3 d5 4. exd5 exd5 5. d4 Nc6 6. Be3 cxd4 7. Nxd4 Nf6 8. Be2 Be7 9. O-O O-O 10. Nd2 Be6 11. N2b3 Qd7 12. Re1 Rfd8 13. Nxe6 fxe6 14. Bg5 e5 15. Bf1 h6 16. Bh4 a6 17. Qc2 Rac8 18. Rad1 b5 19. Qg6 Qe6 20. Rd3 Qf7 21. Qf5 Nh7 22. Qxf7+ Kxf7 23. Bxe7 Kxe7 24. Nc5 Ra8 25. h4 Nf6 26. f3 g5 27. hxg5 hxg5 28. Rde3 Re8 29. b4 Kd6 30. Rd1 a5 31. Bxb5 axb4 32. cxb4 Rxa2 33. Rc3 Nd4 34. Nb7+ Ke6 35. Rxd4 exd4 36. Rc6+ Ke5 37. Nc5 Re7 38. Nd3+ Kf5 39. Nc1 Re1+ 40. Kh2 Ra1 41. Ne2 Rh1+ 42. Kg3 Nh5+ 43. Kf2 Raf1# 0-1',
      Nakamura_vs_Oluto_Adu1999:
        '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 e6 5. Nc3 a6 6. f4 Nc6 7. Be3 Nf6 8. Qf3 Qc7 9. O-O-O Bd7 10. g4 Nxd4 11. Bxd4 Bc6 12. Bxf6 gxf6 13. f5 Be7 14. Bc4 b5 15. Bb3 b4 16. Ne2 e5 17. Ng3 a5 18. Kb1 a4 19. Bc4 Rc8 20. b3 Qb7 21. Qe2 Rb8 22. Rhe1 Rg8 23. h3 Qd7 24. Qd2 Rg5 25. Nh5 Qb7 26. Nxf6+ Bxf6 27. Qxd6 Be7 28. Qxe5 f6 29. Qe6 Rg7 30. e5 Bd7 31. Qxf6 Bxf6 32. exf6+ Kf8 33. fxg7+ Kxg7 34. Re7+ Kf6 35. Rexd7 Qe4 36. g5+ Kxg5 37. Rg1+ 1-0',
      Nakamura_vs_Novikov2002:
        '1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 dxc4 7. e4 g5 8. Bg3 b5 9. Be2 Bb7 10. h4 g4 11. Ne5 h5 12. O-O Nbd7 13. Qc2 Nxe5 14. Bxe5 Rg8 15. Rad1 Nd7 16. Bg3 e5 17. dxe5 Qe7 18. a4 a6 19. axb5 axb5 20. Ra1 Rxa1 21. Rxa1 Bg7 22. Ra7 Nc5 23. Bf4 Bxe5 24. Be3 Ne6 25. g3 Qc7 26. Qd2 Ke7 27. Nd5+ cxd5 28. exd5 Ra8 29. Qb4+ Bd6 30. Qxb5 Rxa7 31. Bxa7 Bxd5 32. Qxd5 Qxa7 33. Kg2 Qc5 34. Qb7+ Bc7 35. Qc8 Qe5 0-1',
      Crafty_AI_vs_Nakamura2007:
        '1. Nc3 g6 2. e4 Bg7 3. Bc4 e6 4. Nf3 Ne7 5. O-O d6 6. d4 O-O 7. Bg5 h6 8. Be3 b6 9. Qd2 Kh7 10. d5 e5 11. Ne1 f5 12. f3 f4 13. Bf2 g5 14. Nd3 h5 15. Rae1 Ng6 16. Re2 Bh6 17. Ne1 g4 18. Qd3 a6 19. a4 Nd7 20. Kh1 Nf6 21. b4 Rf7 22. Rg1 g3 23. hxg3 fxg3 24. Bxg3 h4 25. Bxh4 Nxh4 26. g3 Ng6 27. Rh2 Kg7 28. Kg2 Rf8 29. Nd1 Rh8 30. Rgh1 Bg5 31. Rxh8 Nxh8 32. Nf2 Ng6 33. c3 Qe8 34. b5 a5 35. Nc2 Ne7 36. Nh3 Bxh3+ 37. Rxh3 Qg6 38. Kf2 Rh8 39. Rxh8 Kxh8 40. Ba2 Nd7 41. Ne1 Nc5 42. Qc2 Qh6 43. Ng2 Ng6 44. Bc4 Qh2 45. Bf1 Kg7 46. Qa2 Nf8 47. Bc4 Nh7 48. Kf1 Qh1+ 49. Kf2 Qc1 50. Be2 Nf6 51. Qc4 Bd2 52. g4 Qxc3 53. Qxc3 Bxc3 54. Bd1 Bd2 55. Nh4 Ng8 56. Ke2 Bg5 57. Nf5+ Kf7 58. Bc2 Ne7 59. Ng3 Nd7 60. Kd3 Ng6 61. Nf5 Kf6 62. Kc3 Nh4 63. Nxh4 Bxh4 64. Kd2 Kg5 65. Bd1 Kf4 66. Ke2 Nf6 67. Kf1 Nh7 68. Kg2 Be1 69. Kf1 Bg3 70. Be2 Ng5 71. Kg1 Nxf3+ 72. Kg2 Ne1+ 73. Kf1 Nc2 74. Kg2 Ne3+ 75. Kh3 Be1 76. g5 Kxg5 77. Kh2 Kf4 78. Bd3 Ng4+ 79. Kg2 Nf2 80. Bc2 Nxe4 81. Bb3 Nc5 82. Kf1 Nxb3 83. Kxe1 Nc5 84. Ke2 Nxa4 85. Ke1 Nc5 86. Kf2 Ke4 87. Kg2 Kxd5 88. Kg3 Kc4 89. Kg4 Kxb5 90. Kg3 a4 91. Kf3 a3 92. Ke3 a2 93. Kf2 a1=N 94. Ke3 Kc6 95. Kf3 Nab3 96. Kg4 Nd4 97. Kg5 Nde6+ 98. Kf5 Kd7 99. Kg4 b5 100. Kf3 b4 101. Kg3 b3 102. Kf3 b2 103. Kg4 b1=N 104. Kf5 Na3 105. Kg4 Nb7 106. Kf5 Nf8 107. Ke4 Nd8 108. Kd3 Nb5 109. Kc4 Na7 110. Kd3 Nc8 111. Ke4 Ke6 112. Ke3 d5 113. Kd2 c5 114. Kd1 e4 115. Kc2 d4 116. Kb2 Kd5 117. Kc1 c4 118. Kd2 e3+ 119. Ke1 Ke4 120. Kf1 d3 121. Ke1 c3 122. Kd1 c2+ 123. Kc1 e2 124. Kd2 Kd4 125. Ke1 c1=N 126. Kd2 Nb3+ 127. Ke1 Kc3 128. Kf2 Nc5 129. Ke1 Nce6 130. Kf2 Nc7 131. Kf3 e1=N+ 132. Kf2 Nc2 133. Kf1 Ne8 134. Kg2 Nfe6 135. Kf2 Nf6 136. Kf3 Nd6 137. Kg3 Nc6 138. Kg2 N2d4 139. Kh3 N4f5 140. Kg2 Nfe7 141. Kf2 Ng6 142. Ke1 Kc2 143. Kf2 d2 144. Kg2 d1=N 145. Kf1 Nc3 146. Kf2 Ncd5 147. Kg2 Nce5 148. Kg1 Nde4 149. Kg2 Nd4 150. Kg1 Ngf4 151. Kh1 Nfg4 152. Kg1 Nde3 153. Kh1 Ndf5 154. Kg1 Nf3+ 155. Kh1 Nfg3# 0-1',
    },
    Kasparov: {
      Magerramov_vs_Kasparov1977:
        '1.Nf3 Nf6 2.d4 e6 3.c4 d5 4.Nc3 Be7 5.Bg5 h6 6.Bh4 O-O 7.e3 b6 8.Qb3 Bb7 9.Bxf6 Bxf6 10.cxd5 exd5 11.Rd1 c5 12.dxc5 Nd7 13.c6 Bxc6 14.Nd4 Bxd4 15.Rxd4 Nc5 16.Qd1 Ne6 17.Rd2 d4 18.exd4 Re8 19.f3 Bxf3 20.gxf3 Qh4+ 21.Rf2 Nxd4 22.Be2 Nxf3+ 23.Kf1 Qh3+ 24.Rg2 Nh4 25.Rg1 Rad8 26.Qe1 Rd3 27.Qf2 Nf3 28.Rh1 Rde3 29.Rg1 Kh8 30.Rh1 b5 0-1',
      Kasparov_vs_Palatnik1978:
        '1.e4 Nf6 2.e5 Nd5 3.d4 d6 4.Nf3 g6 5.Bc4 Nb6 6.Bb3 a5 7.a4 Bg7 8.Ng5 e6 9.f4 dxe5 10.fxe5 c5 11.O-O O-O 12.c3 Nc6 13.Ne4 Nd7 14.Be3 Ne7 15.Bg5 cxd4 16.cxd4 h6 17.Bh4 g5 18.Bf2 Ng6 19.Nbc3 Qe7 20.Bc2 b6 21.Be3 Ba6 22.Rf2 Nh8 23.Bxg5 hxg5 24.Qh5 f5 25.Nxg5 Rf7 26.Bxf5 Rxf5 27.Rxf5 exf5 28.Nd5 Qe8 29.Qh7+ Kf8 30.Qxf5+ Kg8 31.Qh7+ Kf8 32.Ra3 Rc8 33.Rf3+ Nf6 34.h3 Qg6 35.Rxf6+ Bxf6 36.Ne6+ Ke8 37.Nxf6+ 1-0',
      Kasparov_vs_Topalov1999:
        '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4 22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6 26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7 Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2 35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8 Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7 1-0',
      Kasparov_vs_Karpov1987:
        '1.c4 {I can look back at my chess career and pick out more than a few crisis points, but only one Mount Everest. I would like to share the tale to investigate the means I used in winning the most important game of my life. ... After a tough, prolonged defense I suffered one of the worst hallucinations of my career and blundered to a loss in game 23. Suddenly, Karpov was up by a point and was only a draw away from taking back the crown he had lost to me two years earlier. The very next day after this catastrophe, I had to take the white pieces into a must-win game 24. Caissa, the goddess of chess, had punished me for my conservative play, for betraying my nature. I would not be allowed to hold on to my title without winning a game in the second half of the match. Only once before in chess history had the champion won a final game to retain his title. With his back against the wall, Emanuel Lasker beat Carl Schlechter in the last game of their match in 1910. The win allowed Lasker to draw the match and keep his title for a further eleven years. The Austrian Schlechter had, like Karpov, a reputation as a defensive wizard. In fact, his uncharacteristically aggressive play in the final game against Lasker has led some historians to believe that the rules of that particular match required him to win by two points. When preparing for my turn on the other side of this situation, I recalled that critical encounter. What strategy should I employ with the white pieces in this must-win final game? There was more to think about than game 23 and game 24, of course. These were also games 119 and 120 between us, an extraordinary number of top-level encounters between the same two players, all played in a span of thirty-nine months. It felt like one long match, with this final game in December, 1987, the climax of what we had started in September 1984. My plan for the final game had to consider not only what I would like best but what my opponent would like least. And what could be more annoying for Karpov than my turning the tables and playing like Karpov?" -- Garry Kasparov, excerpt from "How Life Imitates Chess", 2007, Bloomsbury Publishing USA, ISBN: 1596913878. } e6 2.Nf3 Nf6 3.g3 d5 4.b3 Be7 5.Bg2 O-O 6.O-O b6 7.Bb2 Bb7 8.e3 Nbd7 9.Nc3 Ne4 10.Ne2 a5 11.d3 Bf6 12.Qc2 Bxb2 13.Qxb2 Nd6 14.cxd5 Bxd5 15.d4 c5 16.Rfd1 Rc8 17.Nf4 Bxf3 18.Bxf3 Qe7 19.Rac1 Rfd8 20.dxc5 Nxc5 21.b4 axb4 22.Qxb4 Qa7 23.a3 Nf5 24.Rb1 Rxd1+ 25.Rxd1 Qc7 26.Nd3 h6 27.Rc1 Ne7 28.Qb5 Nf5 29.a4 Nd6 30.Qb1 Qa7 31.Ne5 {Seeing a chance to play for an attack, I moved my knight to the central e5 square, offering a pawn. Karpov took the bait and grabbed the pawn, a temptation that could have led to disaster. And he had to play quickly now, as it was still a long way to move 40, when, by the rules then in force, the game would be adjourned and more time added before continuation the next day. -- Kasparov, "How Life Imitates Chess"} Nxa4 32.Rxc8+ {I exchanged rooks, leaving me with queen, knight, and bishop against his queen and two knights. He had an extra pawn, but I had seen a tactical possibility that would give me a powerful attack. His pieces were dangerously uncoordinated, and his king was vulnerable. If I could penetrate into his position with my queen, I could exploit both of these factors at the same time. The question was where to move my queen on move 33. Karpov could only wait, knowing he would have to reply almost immediately or he wouldnt have enough time to make the next eight moves without losing on time. -- Kasparov, "How Life Imitates Chess"} Nxc8 33.Qd1 {Lost in thought, I was startled by a tap on my shoulder. The Dutch arbiter leaned over and said, "Mr. Kasparov, you have to write the moves." I had become so wrapped up in the game that I had forgotten to make note of the last two moves on my score sheet as required by the rules. The arbiter was of course correct to remind me of the regulations, but what a moment to be strict! Distracted, I played my queen to the wrong square. I missed a subtlety and failed to see why a different move with the same idea would have been stronger. My move gave Karpov a clever defense, and suddenly he was one move from reclaiming his title. But under pressure from the clock, he missed the best move (though our exchange of errors would not be discovered until well after the game), and the momentum was still with me. -- Kasparov, "How Life Imitates Chess"} Ne7 34.Qd8+ Kh7 35.Nxf7 Ng6 36.Qe8 Qe7 37.Qxa4 Qxf7 38.Be4 Kg8 39.Qb5 Nf8 40.Qxb6 {Karpovs best opportunity to defend had passed, and my forces surrounded the black king. I regained my sacrificed pawn with interest, and by the time we reached move 40, ending the time scramble, my position was clearly superior. The game was adjourned until the next day with the title still up in the air. It was going to be a long night. Getting a good nights sleep before the game had been wise, but now there was work to do. Thirteen pieces were still on the board, including queens, too much material for definitive endgame analysis. I had an extra pawn, but with such limited material, Karpov had definite chances of a draw. A lot of chess was still ahead. -- Kasparov, "How Life Imitates Chess"} Qf6 41.Qb5 Qe7 42.Kg2 {The best news was that I could play this position forever, maneuvering around to provoke a mistake by my opponent. Black would be tied down on defense the entire time, and Karpov knew it. The prospect of such prolonged torture took its toll; I could see it in his eyes when he walked on the stage a few minutes after I did. His fatalistic expression told me that he had already lost the game psychologically, which boosted my confidence. -- Kasparov, "How Life Imitates Chess"} g6 {The maneuvering began. I remember being surprised when early on Karpov made a pawn push that my team and I had established as bad for blacks defensive chances. Apparently Karpov and his team disagreed with our analysis, or perhaps it was a psychological error. Sometimes the hardest thing to do in a pressure situation is to allow the tension to persist. The temptation is to make a decision, any decision, even if it is an inferior choice. And Karpovs move made the position more concrete, reducing the level of uncertainty. But in my favor, his structure was now fixed, presenting me with clearer targets. Convinced of the quality of our analysis, I took Karpovs significant deviation from it as a mistake, not a potential improvement, further increasing my confidence. -- Kasparov, "How Life Imitates Chess"} 43.Qa5 Qg7 44.Qc5 Qf7 45.h4 h5 46.Qc6 Qe7 47.Bd3 Qf7 48.Qd6 Kg7 49.e4 Kg8 50.Bc4 Kg7 51.Qe5+ Kg8 52.Qd6 Kg7 53.Bb5 Kg8 54.Bc6 Qa7 55.Qb4 Qc7 56.Qb7 Qd8 57.e5 Qa5 58.Be8 Qc5 59.Qf7+ Kh8 60.Ba4 Qd5+ 61.Kh2 Qc5 62.Bb3 Qc8 63.Bd1 Qc5 64.Kg2 {After another ten moves of steady squeezing, I began to feel the win was in the bag. Karpovs pieces were pinned up against the wall, and a little more maneuvering would lead to decisive material gain. Later I heard that FIDE President Florencio Campomanes was busy calling a special meeting in another room to decide how to handle the closing ceremony, which was scheduled to be held on the same day. But it still looked as if this game could last forever; what was to be done? Two crises were averted at once when someone ran into the meeting room to announce, "Karpov resigned!" It was without question the loudest and longest standing ovation I had ever received outside my native country. The theater thundered as Spanish television cut from futbol to broadcast the conclusion of the match. I had done what Karpov had failed to do in 1985: won the final game and drawn the match to retain my title. This time I would have a good, long time to enjoy it. -- Garry Kasparov, excerpt from "How Life Imitates Chess", 2007, Bloomsbury Publishing USA, ISBN: 1596913878. } 1-0',
      Kasparov_vs_Anand1996:
        '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be3 Ng4 7.Bg5 h6 8.Bh4 g5 9.Bg3 Bg7 10.Be2 h5 11.Bxg4 Bxg4 12.f3 Bd7 13.Bf2 Nc6 14.Qd2 Ne5 15.O-O g4 16.f4 Nc4 17.Qe2 Rc8 18.b3 Na3 19.Nd5 e6 20.Nb4 Qa5 21.Qe1 h4 22.Be3 h3 23.g3 Nb5 24.Rd1 Nc3 25.Nd3 Qc7 26.Rc1 Nxe4 27.f5 e5 28.f6 Nxf6 29.Nf5 Bxf5 30.Rxf5 Qc6 31.Qe2 Qe4 32.Rf2 Nd5 33.Re1 Qxe3 34.Qxg4 O-O 35.Rxe3 Nxe3 36.Qxh3 Nxc2 37.Qd7 Nd4 38.Qxb7 a5 39.Kg2 Rc3 40.Nb2 Nc2 41.Nc4 d5 42.Nd6 Ne3+ 43.Kh3 f5 44.Qd7 f4+ 45.Qe6+ Kh7 46.Nf7 Rxf7 47.Qxf7 Rc6 48.gxf4 Rf6 49.Qc7 e4 50.f5 d4 51.Qe7 Rh6+ 52.Kg3 Nd1 53.Rf4 e3 54.Rg4 1-0',
      Kasparov_vs_Deep_Blue1996:
        '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 h6 10.d4 Re8 11.Nbd2 Bf8 12.Nf1 Bd7 13.Ng3 Na5 14.Bc2 c5 15.b3 Nc6 16.d5 Ne7 17.Be3 Ng6 18.Qd2 Nh7 19.a4 Nh4 20.Nxh4 Qxh4 21.Qe2 Qd8 22.b4 Qc7 23.Rec1 c4 24.Ra3 Rec8 25.Rca1 Qd8 26.f4 Nf6 27.fxe5 dxe5 28.Qf1 Ne8 29.Qf2 Nd6 30.Bb6 Qe8 31.R3a2 Be7 32.Bc5 Bf8 33.Nf5 Bxf5 34.exf5 f6 35.Bxd6 Bxd6 36.axb5 axb5 37.Be4 Rxa2 38.Qxa2 Qd7 39.Qa7 Rc7 40.Qb6 Rb7 41.Ra8+ Kf7 42.Qa6 Qc7 43.Qc6 Qb6+ 44.Kf1 Rb8 45.Ra6 1-0',
      Karpov_vs_Kasparov1985:
        '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be2 e6 7.O-O Be7 8.f4 O-O 9.Kh1 Qc7 10.a4 Nc6 11.Be3 Re8 12.Bf3 Rb8 13.Qd2 Bd7 14.Nb3 b6 15.g4 Bc8 16.g5 Nd7 17.Qf2 Bf8 18.Bg2 Bb7 19.Rad1 g6 20.Bc1 Rbc8 21.Rd3 Nb4 22.Rh3 Bg7 23.Be3 Re7 24.Kg1 Rce8 25.Rd1 f5 26.gxf6 Nxf6 27.Rg3 Rf7 28.Bxb6 Qb8 29.Be3 Nh5 30.Rg4 Nf6 31.Rh4 g5 32.fxg5 Ng4 33.Qd2 Nxe3 34.Qxe3 Nxc2 35.Qb6 Ba8 36.Rxd6 Rb7 37.Qxa6 Rxb3 38.Rxe6 Rxb2 39.Qc4 Kh8 40.e5 Qa7+ 41.Kh1 Bxg2+ 42.Kxg2 Nd4+ 0-1',
    },
    Giri: {
      Giri_vs_Hao2021:
        '1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Be7 5. Bg2 O-O 6. O-O dxc4 7. Qc2 a6 8. a4 Bd7 9. Qxc4 Bc6 10. Bf4 Bd6 11. Nc3 Bxf4 12. gxf4 a5 13. e3 Na6 14. Ne5 Bxg2 15. Kxg2 c6 16. h3 Qb6 17. Qe2 c5 18. Rfd1 cxd4 19. Rxd4 Rad8 20. Rxd8 Qxd8 21. Rd1 Qa8 22. Kg1 Nb4 23. Qb5 Nbd5 24. Nxd5 Nxd5 25. Rc1 h6 26. Qd7 Nf6 27. Qd6 g6 28. b3 h5 29. Kh2 Kg7 30. Qd4 Rd8 31. Qb2 Qb8 32. b4 axb4 33. Rc4 b3 34. Rb4 Qa7 35. Rxb3 Qxa4 36. Rxb7 Qe8 37. Ra7 Rd5 38. Qb7 Ne4 39. Nxf7 1-0',
      Liren_vs_Giri2017:
        '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 O-O 6. h3 d6 7. c3 a6 8. a4 Ba7 9. Re1 h6 10. Nbd2 Be6 11. Bxe6 fxe6 12. Nf1 Nh5 13. Be3 a5 14. Bxa7 Rxa7 15. d4 Qf6 16. Re3 Nf4 17. h4 Qg6 18. g3 Raa8 19. dxe5 Nxe5 20. Nxe5 dxe5 21. f3 Rad8 22. Qc2 Nh5 23. Kh2 Rf6 24. Rd1 Rdf8 25. Rdd3 Qf7 26. Qd1 Rg6 27. Qe1 Qe7 28. Kh3 Rxg3+ 29. Nxg3 Nf4+ 30. Kh2 Qxh4+ 31. Kg1 Rf6 32. Rd8+ Kh7 33. Rd2 Rg6 34. Rg2 h5 35. Rh2 Rxg3+ 36. Kh1 Qg5 37. Qf1 h4 38. Re1 h3 39. Rd1 Qh5 40. Rd7 Qxf3+ 41. Qxf3 Rxf3 42. Rhd2 Kh6 43. Rd8 Kh5 44. Rh8+ Kg4 45. Rd1 Ne2 0-1',
      Giri_vs_Harikrishna2019:
        '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 O-O 6. O-O d5 7. exd5 Nxd5 8. Re1 Bg4 9. Nbd2 Nb6 10. h3 Bh5 11. Bb3 Qxd3 12. Nxe5 Bxd1 13. Nxd3 Bxb3 14. axb3 Be7 15. b4 a6 16. Ne4 Nd7 17. Bf4 Rac8 18. Rad1 Rfd8 19. g4 Bf8 20. Kg2 Re8 21. Bg3 f6 22. f4 Re7 23. f5 Rce8 24. Nf4 Nd8 25. Rxd7 Rxd7 26. Nxf6+ gxf6 27. Rxe8 Kf7 28. Re3 Rd2+ 29. Re2 Rd1 30. Ne6 Nxe6 31. fxe6+ Ke8 32. Bxc7 Rd3 33. Bf4 Rd5 34. Kf3 Ke7 35. Re4 Bg7 36. Be3 f5 37. Bg5+ Bf6 38. Bxf6+ Kxf6 39. g5+ Kxg5 40. Re3 1-0',
    },
    Fischer: {
      Byrne_vs_Fischer1963:
        '1. d4 {Notes from various sources.} Nf6 2. c4 g6 3. g3 c6 4. Bg2 d5 5. cxd5 {5.Qb3 maintains more tension. -- Fischer} cxd5 6. Nc3 Bg7 7. e3 O-O 8. Nge2 Nc6 9. O-O b6 10. b3 {It is hard for either side to introduce an imbalance into this essentially symmetrical variation. Deadeye equality also ensues afer 10.Nf4 e6 11.b3 Ba6 12.Re1 Rc8 13.Ba3 Re8 14.Rc1 (Stahlberg-Flohr, Kemeri 1937) -- Fischer} Ba6 11. Ba3 {After White his 11th move I should adjudicate his position as slightly superior, and at worst completely safe. To turn this into a mating position in eleven more moves is more witchcraft than chess! Quite honestly, I do not see the man who can stop Bobby at this time. -- K.F. Kirby, South African Chess Quarterly} Re8 12. Qd2 e5 {! I was a bit worried about weakening my QP, but felt that the tremendous activity obtained by my minor pieces would permit White no time to exploit it. 12...e6 would probably lead to a draw. -- Fischer} 13. dxe5 Nxe5 14. Rfd1 {"Add another to those melancholy case histories entitled: The Wrong Rook." -- Fischer ~ "This is very much a case of the wrong rook. One can understand Byrne his desire to break the pin on the e2-knight, but this turns out to be less important than other considerations. Fischer spends a lot of time and energy analysing the superior 14. Rad1!, but still comes to the conclusion that Black can keep the advantage." -- John Nunn} Nd3 {Now it is all systems go for the Fischer rocket. -- Robert Wade} 15. Qc2 {There is hardly any other defense to the threat of ...Ne4. -- Fischer} Nxf2 {! The key to Black his previous play. The complete justification for this sac does not become apparent until White resigns! -- Fischer} 16. Kxf2 Ng4+ 17. Kg1 Nxe3 18. Qd2 {Byrne: As I sat pondering why Fischer would choose such a line, because it was so obviously lost for Black, there suddenly comes...} Nxg2 {!! This dazzling move came as the shocker... the culminating combination is of such depth that, even at the very moment at which I resigned, both grandmasters who were commenting on the play for the spectators in a separate room believed I had a won game! -- Robert Byrne} 19. Kxg2 d4 {!} 20. Nxd4 Bb7+ {The King is at Black his mercy. -- Fischer} 21. Kf1 {In a room set aside for commentaries on the games in progress, two grandmasters were stating, for the benefit of the spectators, that Byrne had a won game. Byrne his reply to Fischer his next move must have been jaw dropping! -- Wade} Qd7 {And White resigns. Fischer writes: "A bitter disappointment. I would hoped for 22.Qf2 Qh3+ 23.Kg1 Re1+!! 24.Rxe1 Bxd4 with mate to follow shortly."} 0-1',
      Fischer_vs_Myagmarsuren1967:
        '1. e4 e6 2. d3 d5 3. Nd2 Nf6 4. g3 c5 5. Bg2 Nc6 6. Ngf3 Be7 7. O-O O-O 8. e5 Nd7 9. Re1 b5 10. Nf1 b4 11. h4 a5 12. Bf4 a4 13. a3 bxa3 14. bxa3 Na5 15. Ne3 Ba6 16. Bh3 d4 17. Nf1 Nb6 18. Ng5 Nd5 19. Bd2 Bxg5 20. Bxg5 Qd7 21. Qh5 Rfc8 22. Nd2 Nc3 23. Bf6 Qe8 24. Ne4 g6 25. Qg5 Nxe4 26. Rxe4 c4 27. h5 cxd3 28. Rh4 Ra7 29. Bg2 dxc2 30. Qh6 Qf8 31. Qxh7+ 1-0',
      Fischer_vs_Spassky1972:
        '1. c4 e6 2. Nf3 d5 3. d4 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6 12. Qa4 c5 13. Qa3 Rc8 14. Bb5 a6 15. dxc5 bxc5 16. O-O Ra7 17. Be2 Nd7 18. Nd4 Qf8 19. Nxe6 fxe6 20. e4 d4 21. f4 Qe7 22. e5 Rb8 23. Bc4 Kh8 24. Qh3 Nf8 25. b3 a5 26. f5 exf5 27. Rxf5 Nh7 28. Rcf1 Qd8 29. Qg3 Re7 30. h4 Rbb7 31. e6 Rbc7 32. Qe5 Qe8 33. a4 Qd8 34. R1f2 Qe8 35. R2f3 Qd8 36. Bd3 Qe8 37. Qe4 Nf6 38. Rxf6 gxf6 39. Rxf6 Kg8 40. Bc4 Kh8 41. Qf4 1-0',
      Fischer_vs_Tal1961:
        '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e6 5. Nc3 Qc7 6. g3 Nf6 7. Ndb5 Qb8 8. Bf4 Ne5 9. Be2 Bc5 10. Bxe5 Qxe5 11. f4 Qb8 12. e5 a6 13. exf6 axb5 14. fxg7 Rg8 15. Ne4 Be7 16. Qd4 Ra4 17. Nf6+ Bxf6 18. Qxf6 Qc7 19. O-O-O Rxa2 20. Kb1 Ra6 21. Bxb5 Rb6 22. Bd3 e5 23. fxe5 Rxf6 24. exf6 Qc5 25. Bxh7 Qg5 26. Bxg8 Qxf6 27. Rhf1 Qxg7 28. Bxf7+ Kd8 29. Be6 Qh6 30. Bxd7 Bxd7 31. Rf7 Qxh2 32. Rdxd7+ Ke8 33. Rde7+ Kd8 34. Rd7+ Kc8 35. Rc7+ Kd8 36. Rfd7+ Ke8 37. Rd1 b5 38. Rb7 Qh5 39. g4 Qh3 40. g5 Qf3 41. Re1+ Kf8 42. Rxb5 Kg7 43. Rb6 Qg3 44. Rd1 Qc7 45. Rdd6 Qc8 46. b3 Kh7 47. Ra6 1-0',
      Spassky_vs_Fischer1972:
        '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 g6 5. Bc4 Nb6 6. Bb3 Bg7 7. Nbd2 O-O 8. h3 a5 9. a4 dxe5 10. dxe5 Na6 11. O-O Nc5 12. Qe2 Qe8 13. Ne4 Nbxa4 14. Bxa4 Nxa4 15. Re1 Nb6 16. Bd2 a4 17. Bg5 h6 18. Bh4 Bf5 19. g4 Be6 20. Nd4 Bc4 21. Qd2 Qd7 22. Rad1 Rfe8 23. f4 Bd5 24. Nc5 Qc8 25. Qc3 e6 26. Kh2 Nd7 27. Nd3 c5 28. Nb5 Qc6 29. Nd6 Qxd6 30. exd6 Bxc3 31. bxc3 f6 32. g5 hxg5 33. fxg5 f5 34. Bg3 Kf7 35. Ne5+ Nxe5 36. Bxe5 b5 37. Rf1 Rh8 38. Bf6 a3 39. Rf4 a2 40. c4 Bxc4 41. d7 Bd5 42. Kg3 Ra3+ 43. c3 Rha8 44. Rh4 e5 45. Rh7+ Ke6 46. Re7+ Kd6 47. Rxe5 Rxc3+ 48. Kf2 Rc2+ 49. Ke1 Kxd7 50. Rexd5+ Kc6 51. Rd6+ Kb7 52. Rd7+ Ka6 53. R7d2 Rxd2 54. Kxd2 b4 55. h4 Kb5 56. h5 c4 57. Ra1 gxh5 58. g6 h4 59. g7 h3 60. Be7 Rg8 61. Bf8 h2 62. Kc2 Kc6 63. Rd1 b3+ 64. Kc3 h1=Q 65. Rxh1 Kd5 66. Kb2 f4 67. Rd1+ Ke4 68. Rc1 Kd3 69. Rd1+ Ke2 70. Rc1 f3 71. Bc5 Rxg7 72. Rxc4 Rd7 73. Re4+ Kf1 74. Bd4 f2 0-1',
    },
    Karpov: {
      Anand_vs_Karpov1998:
        '1.e4 c6 2.d4 d5 3.exd5 cxd5 4.c4 Nf6 5.Nc3 e6 6.Nf3 Be7 7.cxd5 Nxd5 8.Bd3 Nc6 9.O-O O-O 10.Re1 Bf6 11.Be4 Nce7 12.h4 Nf5 13.Qd3 Nxc3 14.bxc3 h6 15.h5 Nd6 16.Ne5 Nxe4 17.Qxe4 Bxe5 18.dxe5 f5 19.Qe2 Bd7 20.Rd1 Bb5 21.Qf3 Qe8 22.Bf4 Rc8 23.Rd4 Rc4 24.Rad1 Qf7 25.Rxc4 Bxc4 26.a3 Rc8 27.Rd4 Kh7 28.Bd2 Bd5 29.Qh3 b5 30.a4 bxa4 31.Rxa4 Rc4 32.Rxc4 Bxc4 33.Qh4 Bb5 34.c4 Be8 35.c5 Qd7 36.Bc3 Qd3 37.Qd4 Qxd4 38.Bxd4 a5 39.c6 Bxc6 40.f3 f4 41.Bb2 Be8 42.Bc1 a4 43.Bxf4 a3 44.Be3 Bxh5 45.Kf2 Be8 46.Bd4 Bc6 47.Bc3 a2 48.g3 h5 49.g4 h4 0-1',
      Gelfand_vs_Karpov1995:
        '1.c4 e5 2.g3 Nf6 3.Bg2 Nc6 4.Nf3 Bc5 5.O-O d6 6.Nc3 O-O 7.d3 a6 8.a3 Nd4 9.Nd2 c6 10.b4 Ba7 11.Bb2 Bf5 12.e3 Ne6 13.Nf3 h6 14.Qb3 Qd7 15.Rad1 Bg4 16.Rd2 Rad8 17.Rc1 Bxf3 18.Bxf3 d5 19.cxd5 cxd5 20.Na4 d4 21.Nc5 Qe7 22.Rdc2 dxe3 23.fxe3 e4 24.Bxf6 gxf6 25.Bxe4 Ng5 26.Bxb7 Bxc5 27.bxc5 Qxe3+ 28.Kh1 Rxd3 29.Qc4 Rfd8 30.Rf1 R8d4 31.Qxa6 Ne4 32.Rg2 Rd1 33.Bxe4 Qxe4 34.Qxf6 Qd5 35.Kg1 Rxf1+ 36.Kxf1 Rd1+ 0-1',
      Karpov_vs_Kasparov1988:
        '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3 Bg7 7.Bc4 c5 8.Ne2 Nc6 9.Be3 O-O 10.O-O Bg4 11.f3 Na5 12.Bxf7+ Rxf7 13.fxg4 Rxf1+ 14.Kxf1 Qd6 15.e5 Qd5 16.Bf2 Rd8 17.Qa4 b6 18.Qc2 Rf8 19.Kg1 Qc4 20.Qd2 Qe6 21.h3 Nc4 22.Qg5 h6 23.Qc1 Qf7 24.Bg3 g5 25.Qc2 Qd5 26.Bf2 b5 27.Ng3 Rf7 28.Re1 b4 29.Qg6 Kf8 30.Ne4 Rxf2 31.Kxf2 bxc3 32.Qf5+ Kg8 33.Qc8+ Kh7 34.Qxc5 Qf7+ 35.Kg1 c2 36.Ng3 Bf8 37.Nf5 Kg8 38.Rc1 1-0',
      Karpov_vs_Korchnoi1981:
        '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Nbd2 Nc5 10. c3 d4 11. Bxe6 Nxe6 12. cxd4 Ncxd4 13. a4 Be7 14. Nxd4 Nxd4 15. Ne4 Ne6 16. Be3 O-O 17. f4 Qxd1 18. Rfxd1 Rfb8 19. Rd7 Bf8 20. f5 Nd8 21. a5 Nc6 22. e6 fxe6 23. f6 Ne5 24. Rxc7 Rc8 25. Rac1 Rxc7 26. Rxc7 Rd8 27. h3 h6 28. Ra7 Nc4 29. Bb6 Rb8 30. Bc5 Bxc5+ 31. Nxc5 gxf6 32. b4 Rd8 33. Rxa6 Kf7 34. Ra7+ Kg6 35. Rd7 Re8 36. a6 Ra8 37. Rb7 Kf5 38. Rxb5 Ke5 39. Rb7 Kd5 40. Rf7 f5 41. Rf6 e5 1-0',
      Karpov_vs_Spassky1979:
        '1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4 O-O 6. e3 c5 7. dxc5 Nc6 8. Qc2 Qa5 9. a3 Bxc5 10. Rd1 Be7 11. Nd2 Bd7 12. Be2 Rfc8 13. O-O Qd8 14. cxd5 exd5 15. Nf3 h6 16. Ne5 Be6 17. Nxc6 Rxc6 18. Bf3 Qb6 19. Be5 Ne4 20. Qe2 Nxc3 21. Bxc3 Rd8 22. Rd3 Rcd6 23. Rfd1 R6d7 24. R1d2 Qb5 25. Qd1 b6 26. g3 Bf8 27. Bg2 Be7 28. Qh5 a6 29. h3 Qc6 30. Kh2 a5 31. f4 f6 32. Qd1 Qb5 33. g4 g5 34. Kh1 Qc6 35. f5 Bf7 36. e4 Kg7 37. exd5 Qc7 38. Re2 b5 39. Rxe7 Rxe7 40. d6 Qc4 41. b3 1-0',
    },
  },
);

/*global Variable*/
global.g = g;
