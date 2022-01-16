/* React standart imports*/
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*Navigator*/
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/*Pages*/
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import User from './Pages/User';
import Chessboard from './Pages/Chessboards/Chessboard';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />

        <Stack.Screen
          name="Chessboard"
          component={Chessboard}
          options={{title: 'Chessboard'}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register'}}
        />

        <Stack.Screen name="User" component={User} options={{title: 'User'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
