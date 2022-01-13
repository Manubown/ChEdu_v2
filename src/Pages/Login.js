/* React standart imports*/
import * as React from 'react';
import {
    Text,
    View,
    Button,
    TextInput
} from "react-native";
import { Title } from 'react-native-paper';

/*styles*/
import styles from "../styles";

//API Communication
//import { RequestLogin } from "../Connection/ApiCommunication";

export default class Login extends React.Component {
    render() {
        return(
            <View style = {
                global.g.getWindowWidth(),
                global.g.getWindowHeight(),
                {backgroundColor: global.g.getBackgroundColor()}
                }
            >
                {/*Topbar*/}
                {global.g.getTopbar()}

                {/*SideBar*/}
                <View style = {styles.SideBar}>
                    {/*Logo*/}
                    {global.g.getLogo()}
                </View>

                {/*Content*/}
                <View style={{ flexGrow: 1 }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Title style={{ color: global.g.getTextColor() }}>Login</Title>
                            <Text style={{ color: global.g.getTextColor() }}>Username</Text>
                            <TextInput
                                style={styles.Input}
                                onChangeText={(Username) => {
                                this.setState({ Username });
                                }}
                                placeholder="Username"
                                keyboardType="default"
                            />
                            <Text style={{ color: global.g.getTextColor() }}>Password</Text>
                            <TextInput
                                style={styles.Input}
                                onChangeText={(Password) => {
                                this.setState({ Password });
                                }}
                                placeholder="Password"
                                keyboardType="default"
                            />
                            <Button
                                style={styles.Buttons}
                                onPress={() => {
                                RequestLogin(this.state.Username, this.state.Password);
                                this.props.navigation.navigate("Home");
                                }}
                                title="Login"
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}