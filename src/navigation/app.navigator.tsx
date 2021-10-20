import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AuthNavigator from 'src/navigation/auth.navigator';
import Welcome from 'src/screens/welcome';
import { useAuth } from '../hooks/use-auth';
import { Spinner } from '@ui-kitten/components';

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

export const AppNavigator = (): React.ReactElement => {
  const { isSignedIn, userLoading } = useAuth();
  return (
    <NavigationContainer theme={navigatorTheme}>
      {userLoading ? <Spinner /> : isSignedIn ? <Welcome /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
