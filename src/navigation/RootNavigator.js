import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/SplashScreen';
import AuthNavigator from './AuthNavigator';
import BottomTabs from './BottomTab';
import EditProfile from '../screens/Profile/Editprofile';
import SecuritySettings from '../screens/Profile/SecuritySettings';
import ChangePassword from '../screens/Profile/Changepassword';
import ChangePIN from '../screens/Profile/ChangePin';
import Notification from '../screens/Profile/Notification';
import Support from '../screens/Profile/Support';
import Legal from '../screens/Profile/Legal';
import GameStatistics from '../screens/Profile/GameStatistics';
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="SecuritySettings" component={SecuritySettings} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />

      <Stack.Screen name="ChangePIN" component={ChangePIN} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Legal" component={Legal} />
      <Stack.Screen name="GameStatistics" component={GameStatistics} />
    </Stack.Navigator>
  );
}
