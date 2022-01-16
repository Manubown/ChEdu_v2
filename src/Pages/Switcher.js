import React from 'react';
import {Switch} from 'react-native';

export function HandleSwitchBackground() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(false);
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch()} />;
}
