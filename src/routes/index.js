import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login, Register, Splash, CrudScreen, DashboardUser} from '../screens';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
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
    </Stack.Navigator>
  );
}

export default Router;
