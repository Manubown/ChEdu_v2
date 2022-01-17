/* React standart imports*/
import * as React from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {Title} from 'react-native-paper';

/*styles*/
import styles from '../styles';
import {HandleSwitchBackground} from '../global';

//API Communication
//import { RequestLogin } from "../Connection/ApiCommunication";

export default class Register extends React.Component {
  render() {
    return (
      <View
        style={
          (global.g.getWindowWidth(),
          global.g.getWindowHeight(),
          {backgroundColor: global.g.getBackgroundColor()})
        }>

        {/*SideBar*/}
        <View style={styles.SideBar}>
          {/*Logo*/}
          <TouchableOpacity
          onPress={() => {
            //RequestLogin(this.state.Username, this.state.Password);
            this.props.navigation.navigate('Home');
          }}>
            {global.g.getLogo()}
          </TouchableOpacity>
        </View>

        {/*Content*/}
        <View style={{flexGrow: 1}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Title style={{color: global.g.getTextColor()}}>Register</Title>
              <Text style={{color: global.g.getTextColor()}}>Username</Text>
              <TextInput
                style={{
                  margin: 20,
                  color: global.g.getTextColor()
                }}
                onChangeText={Username => {
                  this.setState({Username});
                }}
                placeholder="Username"
                keyboardType="default"
              />
              <Text style={{color: global.g.getTextColor()}}>Email</Text>
              <TextInput
                style={{
                  margin: 20,
                  color: global.g.getTextColor()
                }}
                onChangeText={Email => {
                  this.setState({Email});
                }}
                placeholder="Email"
                keyboardType="default"
              />
              <Text style={{color: global.g.getTextColor()}}>Password</Text>
              <TextInput
                style={{
                  margin: 20,
                  color: global.g.getTextColor()
                }}
                onChangeText={Password => {
                  this.setState({Password});
                }}
                placeholder="Password"
                keyboardType="default"
              />
              <Button
                style={styles.Buttons}
                onPress={() => {
                  //RequestLogin(this.state.Username, this.state.Password, this.state.Email);
                  this.props.navigation.navigate('Home');
                }}
                title="Register"
              />
            </View>
          </View>
        </View>

        {/*Darkmode fix*/}
        <View style = {{height: global.g.getWindowHeight()/2}}>
          
        </View>
      </View>
    );
  }
}
