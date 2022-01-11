/* React standart imports*/
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*Navigator*/
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/*Pages*/

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Options" component={testPage} title="Test Page" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Main: {
    flexGrow: 1,
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});

const testPage = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default AppNavigation;
