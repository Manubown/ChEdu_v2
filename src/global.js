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
    explanation,
  ) {
    super();
    this.windowHeight = windowHeight;
    this.windowWidth = windowWidth;
    this.darkmode = darkmode;
    this.userStats = userStats;
    this.pictures = pictures;
    this.fen = fen;
    this.pgn = pgn;
    this.explanation = explanation;
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
  //#endregion Pictures end

  //#region fen
  getSicilianDefence = () => {
    return this.fen.Openings.SicilianDefence;
  };

  getFrenchDefence = () => {
    return this.fen.Openings.FrenchDefense;
  };

  getRuyLopez = () => {
    return this.fen.Openings.RuyLopez;
  };

  getCaroKann = () => {
    return this.fen.Openings.CaroKann;
  };

  getItalianGame = () => {
    return this.fen.Openings.ItalianGame;
  };

  getScandinavianDefense = () => {
    return this.fen.Openings.ScandinavianDefense;
  };

  getPircDefence = () => {
    return this.fen.Openings.PircDefense;
  };

  getScotchGame = () => {
    return this.fen.Openings.ScotchGame;
  };

  getViennaGame = () => {
    return this.fen.Openings.ViennaGame;
  };

  getQueensGambit = () => {
    return this.fen.Openings.QueensGambit;
  };

  getSlavDefense = () => {
    return this.fen.Openings.SlavDefense;
  };

  getIndianDefense = () => {
    return this.fen.Openings.IndianDefense;
  };

  getDutchDefense = () => {
    return this.fen.Openings.DutchDefense;
  };

  getEnglishOpening = () => {
    return this.fen.Openings.EnglishOpening;
  };

  getCatalanOpening = () => {
    return this.fen.Openings.CatalanOpening;
  };

  getRetiOpening = () => {
    return this.fen.Openings.RetiOpening;
  };
  //#endregion fen end

  //#region pgn
  getSomeCarlsenGame = () => {
    return this.pgn.Carlsen.Some_Carlsen_Game;
  };
  //#endregion pgn end

  //#region Explanations
  getExplanationSicilianDefense = () => {
    return this.explanation.Openings.SicilianDefence;
  };
  //#endregion Explanations end

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

      ScandinavianDefense:
        'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',

      PircDefense:
        'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4',

      ScotchGame:
        'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',

      ViennaGame:
        'rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1',

      QueensGambit:
        'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',

      SlavDefense:
        'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',

      IndianDefense:
        'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2',

      DutchDefense:
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
    Carlsen: {
      Some_Carlsen_Game:
        '1. d4 {01010011 01101111 01101111 01101110 00100000 01000001 01110110 01100001 01101001 01101100 01100001 01100010 01101100 01100101} Nf6 2. Nf3 d5 3. e3 Bf5 4. c4 c6 5. Nc3 e6 6. Bd3 Bxd3 7. Qxd3 Nbd7 8. b3 Bd6 9. O-O O-O 10. Bb2 Qe7 11. Rad1 Rad8 12. Rfe1 dxc4 13. bxc4 e5 14. dxe5 Nxe5 15. Nxe5 Bxe5 16. Qe2 Rxd1 17. Rxd1 Rd8 18. Rxd8+ Qxd8 19. Qd1 Qxd1+ 20. Nxd1 Bxb2 21. Nxb2 b5 22. f3 Kf8 23. Kf2 Ke7',
      New_In_Chess_Classic_Final_2021:
        '1. e4 {Carlsen vs. Nakamura Game in 2021} e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. c3 O-O 6. O-O d6 7. h3 a6 8. Bxc6 bxc6 9. Nbd2 Re8 10. Re1 Bb6 11. Nf1 Nd7 12. Ng3 Nf8 13. d4 Ng6 14. Be3 a5 15. Qc2 a4 16. Rad1 Be6 17. c4 f6 18. b4 axb3 19. axb3 Ba5 20. Rf1 Bb4 21. Ra1 Qd7 22. Rfd1 Rxa1 23. Rxa1 d5 24. cxd5 cxd5 25. dxe5 Nxe5 26. Nxe5 fxe5 27. exd5 Bxd5 28. Ra7 Rc8 29. Bb6 cxb6 30. Rxd7 Rxc2 31. Rxd5 Bc5 32. Ne4 Bd4 33. Kf1 Rb2 34. f4 Rb1+ 35. Ke2 Rb2+ 36. Kf1 Rb1+ 37. Ke2 Rb2+ 38. Kf1 Rb1+ 1/2-1/2',
    },
    Nakamura: {
      New_In_Chess_Classic_Final_2021:
        '1. e4 {Carlsen vs. Nakamura Game in 2021} e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. c3 O-O 6. O-O d6 7. h3 a6 8. Bxc6 bxc6 9. Nbd2 Re8 10. Re1 Bb6 11. Nf1 Nd7 12. Ng3 Nf8 13. d4 Ng6 14. Be3 a5 15. Qc2 a4 16. Rad1 Be6 17. c4 f6 18. b4 axb3 19. axb3 Ba5 20. Rf1 Bb4 21. Ra1 Qd7 22. Rfd1 Rxa1 23. Rxa1 d5 24. cxd5 cxd5 25. dxe5 Nxe5 26. Nxe5 fxe5 27. exd5 Bxd5 28. Ra7 Rc8 29. Bb6 cxb6 30. Rxd7 Rxc2 31. Rxd5 Bc5 32. Ne4 Bd4 33. Kf1 Rb2 34. f4 Rb1+ 35. Ke2 Rb2+ 36. Kf1 Rb1+ 37. Ke2 Rb2+ 38. Kf1 Rb1+ 1/2-1/2',
    },
  },
  {
    Openings: {
      SicilianDefence: <Text>This is the Sicilian Defence</Text>,
    },
  },
);

/*global Variable*/
global.g = g;
