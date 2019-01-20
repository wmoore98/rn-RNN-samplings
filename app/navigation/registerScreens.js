// import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  HomeScreen,
  PostsScreen,
  ProfileScreen,
  SideMenuScreen
} from 'AppScreens';

import {
  HOME_SCREEN,
  POSTS_SCREEN,
  PROFILE_SCREEN,
  SIDEMENU_SCREEN
} from './Screens';

console.log('HomeScreen', HomeScreen);
console.log('PostsScreen', PostsScreen);
console.log('ProfileScreen', ProfileScreen);
console.log('SideMenuScreen', SideMenuScreen);

export default function () {
    Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
    Navigation.registerComponent(POSTS_SCREEN, () => PostsScreen);
    Navigation.registerComponent(PROFILE_SCREEN, () => ProfileScreen);
    Navigation.registerComponent(SIDEMENU_SCREEN, () => SideMenuScreen);
    console.info('All screens have been registered...');
}
  

/*
function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(WELCOME_SCREEN, () => WrappedComponent(WelcomeScreen));
  Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(LoginScreen));
  Navigation.registerComponent(SINGLE_APP_SCREEN, () => WrappedComponent(SingleAppScreen));
  Navigation.registerComponent(TAB1_SCREEN, () => WrappedComponent(Tab1Screen));
  Navigation.registerComponent(TAB2_SCREEN, () => WrappedComponent(Tab2Screen));
  console.info('All screens have been registered...');
}
*/