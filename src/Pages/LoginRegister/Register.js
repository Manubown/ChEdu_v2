/* React standart imports*/
import * as React from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {Title} from 'react-native-paper';

/*styles*/
import styles from '../../styles';

//API Communication
import {RequestRegister} from '../../WEB/ApiCommunication';

export default class Register extends React.Component {
  state = {
    emailSend: false,
  };

  render() {
    return (
      <View
        style={
          (global.g.getWindowWidth(),
          global.g.getWindowHeight(),
          {backgroundColor: global.g.getBackgroundColor()})
        }>
        <TouchableOpacity
          onPress={() => {
            //RequestLogin(this.state.Username, this.state.Password);
            this.props.navigation.navigate('Home');
          }}>
          {global.g.getOnlyLogo()}
        </TouchableOpacity>
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
                  color: global.g.getTextColor(),
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
                  color: global.g.getTextColor(),
                }}
                onChangeText={Email => {
                  this.setState({Email});
                }}
                placeholder="Email"
                keyboardType="default"
              />
              <Text style={{color: global.g.getTextColor()}}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={{
                  margin: 20,
                  color: global.g.getTextColor(),
                }}
                onChangeText={Password => {
                  this.setState({Password});
                }}
                placeholder="Password"
                keyboardType="default"
              />
              {this.state.emailSend ? (
                <View
                  style={{
                    with: 150,
                    backgroundColor: 'green',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 20,
                      padding: 20,
                    }}>
                    Email Send!
                  </Text>
                </View>
              ) : null}

              <Button
                style={styles.Buttons}
                onPress={() => {
                  this.setState({emailSend: true});
                  RequestRegister(
                    this.state.Username,
                    this.state.Password,
                    this.state.Email,
                  );
                  setTimeout(() => {
                    this.props.navigation.navigate('Home');
                  }, 1000);
                }}
                title="Register"
              />
            </View>
          </View>
        </View>

        {/*Darkmode fix*/}
        <View style={{height: global.g.getWindowHeight() / 2}}></View>
      </View>
    );
  }
}
