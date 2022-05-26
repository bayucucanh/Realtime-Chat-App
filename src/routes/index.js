import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Login,
  Register,
  Splash,
  CrudScreen,
  DashboardUser,
  Chat,
  TestComponent,
} from '../screens';
import Header from '../components/Header';
import { Button } from '@rneui/base';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="TestComponent">
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CrudScreen"
        component={CrudScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DashboardUserScreen"
        component={DashboardUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TestComponent"
        component={TestComponent}
        options={{
          // headerTitle: () => <Header />
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default Router;
