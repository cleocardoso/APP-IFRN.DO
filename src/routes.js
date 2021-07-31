import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

const Stack = createStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='home' component={Login}  options={{ headerShown: false  }}  />
          
        </Stack.Navigator>
    );
}