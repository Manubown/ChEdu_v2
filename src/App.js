/* React standart imports*/
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*Navigator*/
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/*Pages*/
import Home from './Pages/Home';
import Login from './Pages/LoginRegister/Login';
import Register from './Pages/LoginRegister/Register';
import User from './Pages/User';
import LearnToPlay from './Pages/Chessboards/LearnToPlay';
import Chessboard from './Pages/Chessboards/Chessboard';
import Online from './Pages/Chessboards/Online';
import Analysis from './Pages/Chessboards/Analysis';
import LoadingScreen from './Pages/LoadingScreen';

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
