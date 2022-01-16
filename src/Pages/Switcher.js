import '../global';
import React from 'react';
import {Switch} from 'react-native';

export function HandleSwitchBackground() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(global.g.getSwitchValue());

  if (isSwitchOn === true) {
    global.g.setSwitchValue(true);
    //TODO: When switch is true set global variables:
    /*
      backgroundColor: "#121212",
      CurrentColor: "white",
      SwitchLogin: loginPictureWhite,
      SwitchRegister: registerPictureWhite,
      SwitchUser: userPictureWhite,
      SunMoon: "🌙",
      TextColor: "white",
      separator: white_separator,
      */
  } else if (isSwitchOn === false) {
    global.g.setSwitchValue(false);
    //TODO: When switch is true set global variables:
    /*
      backgroundColor: "white",
      CurrentColor: "white",
      SwitchLogin: loginPictureBlack,
      SwitchRegister: registerPictureBlack,
      SwitchUser: userPictureBlack,
      SunMoon: "☀️",
      TextColor: "black",
      separator: black_separator,
      */
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
