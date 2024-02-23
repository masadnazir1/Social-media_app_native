import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './utls/SplashScreen';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import Notification from './pages/Notification';
import Watch from './pages/Watch';
import Reels from './comp/Reels';
import Search from './comp/Search';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Watch" component={Watch} />
        <Stack.Screen name="Reels" component={Reels} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
