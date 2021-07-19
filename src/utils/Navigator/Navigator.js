import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../../screens/Splash/Splash'
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DisplayScreen from '../../screens/DisplayScreen/DisplayScreen'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = () => {
    const Stack = createStackNavigator()
  
    return (
      <Stack.Navigator 
        initialRouteName={HomeScreen} 
        screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'DisplayScreen'} component={DisplayScreen} />
      </Stack.Navigator>
    );
  }

const Navigator = () => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none" initialRouteName={"Splash"} >
        <RootStack.Screen name="App" component={AppStack} />
        <RootStack.Screen name="Splash" component={Splash} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator