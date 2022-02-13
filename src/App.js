/* React standart imports*/
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*Navigator*/
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/*Pages*/
import Home from './Screens/Home';
import Login from './Screens/User_Info/Login';
import Register from './Screens/User_Info/Register';
import User from './Screens/User_Info/User';
import LearnToPlay from './Screens/Chessboards/LearnToPlay';
import Chessboard from './Screens/Chessboards/Chessboard';
import Online from './Screens/Chessboards/Online';
import Analysis from './Screens/Chessboards/Analysis';
import LoadingScreen from './Screens/LoadingScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{title: 'Loading'}}
        />

        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />

        <Stack.Screen
          name="LearnToPlay"
          component={LearnToPlay}
          options={{title: 'EduBoard'}}
        />

        <Stack.Screen
          name="Chessboard"
          component={Chessboard}
          options={{title: '1v1 Board'}}
        />

        <Stack.Screen
          name="Online"
          component={Online}
          options={{title: 'Online'}}
        />

        <Stack.Screen
          name="Analysis"
          component={Analysis}
          options={{title: 'Analysis'}}
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
