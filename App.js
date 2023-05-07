import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './screens/home';
import signup from './screens/signup';
import signin from './screens/signin';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={home}
        />
        <Stack.Screen
          name="signin" options={{headerShown: false}}
          component={signin}
        />
        <Stack.Screen options={{headerShown: false}}
          name="signup"
          component={signup}
        />    
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default MyStack;

