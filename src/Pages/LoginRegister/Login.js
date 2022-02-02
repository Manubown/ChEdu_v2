/* React standart imports*/
import * as React from 'react';
import {Text, View, Button, TextInput, TouchableOpacity, Image} from 'react-native';
import {Title} from 'react-native-paper';

/*styles*/
import styles from '../../styles';

//API Communication
import {RequestLogin} from '../../WEB/ApiCommunication';

export default class Login extends React.Component {
  state = {
    LoginSucced: false,
  };
  /*componontDidMount*/
  componentDidMount() {
    this.updateValuesStats();
    this.props.navigation.addListener('focus', () => {
      this.updateValuesStats();
    });

    addEventListener('change', () => {
      this.updateValuesStats();
    });
  }

  /*updateValuesStats*/
  updateValuesStats = () => {
    this.setState({
      switchValue: global.g.getSwitchValue(),
    });
  };

  render() {
    return (
      <View
        style={
          (global.g.getWindowWidth(),
          global.g.getWindowHeight(),
          {backgroundColor: global.g.getBackgroundColor()})
        }>
        {global.g.getOnlyLogo()}
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
              <Title style={{color: global.g.getTextColor()}}>Login</Title>
              <Text style={{color: global.g.getTextColor()}}>Email</Text>
              <TextInput
                style={{
                  margin: 20,
                  color: global.g.getTextColor(),
                }}
                onChangeText={Username => {
                  this.setState({Username});
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
              {this.state.LoginSucced ? (
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
                    Login Successfull!
                  </Text>
                </View>
              ) : null}
              <Button
                style={styles.Buttons}
                onPress={() => {
                  if (RequestLogin(this.state.Username, this.state.Password)) {
                    this.setState({LoginSucced: true});
                  }

                  setTimeout(() => {
                    this.props.navigation.navigate('LoadingScreen');
                  }, 1000);
                }}
                title="Login"
              />
            </View>
          </View>
        </View>

        {/*Darkmode*/}
        <View style={{height: global.g.getWindowHeight() / 2}}></View>
      </View>
    );
  }
}
