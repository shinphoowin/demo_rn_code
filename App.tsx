/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginBiometric from './app/views/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesEncrypted from './app/views/secure-notes';
import NotesEncryptedList from './app/views/secure-notes/Notes';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Login' component={LoginBiometric}></Stack.Screen>
        <Stack.Screen name='Notesencrypt' component={NotesEncrypted}></Stack.Screen>
        <Stack.Screen name='NotesencryptedList' component={NotesEncryptedList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
