import '../global';
import React from 'react';
import {Switch} from 'react-native';

export function HandleSwitchBackground() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(global.g.getSwitchValue());

  if (isSwitchOn === true) {
    global.g.setSwitchValue(true);
    global.g.setBackgroundColor("#121212");
    global.g.setSwitchLogin(global.g.getLoginPictureWhite());
    global.g.setSwitchRegister(global.g.getRegisterPictureWhite());
    global.g.setSunMoon("🌙");
    global.g.setTextColor("white");
    global.g.setSeparator(global.g.getWhiteSeparator());
  } else if (isSwitchOn === false) {
    global.g.setSwitchValue(false);
    global.g.setBackgroundColor("white");
    global.g.setSwitchLogin(global.g.getLoginPictureBlack());
    global.g.setSwitchRegister(global.g.getRegisterPictureBlack());
    global.g.setSunMoon("☀️");
    global.g.setTextColor("balck");
    global.g.setSeparator(global.g.getBlackSeparator());
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
