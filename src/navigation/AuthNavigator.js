import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import createProfile from '../screens/Auth/CreateProfile';
import CreateAccount from '../screens/Auth/CreateAccount';
import VerifyOTP from '../screens/Auth/VerifyOTPScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="createProfile" component={createProfile} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
