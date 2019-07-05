import React from "react";
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  NavigationTransitionProps,
  TransitionConfig,
  StackViewTransitionConfigs,
  TabScene,
  NavigationScreenProps,
  createAppContainer
} from 'react-navigation';

import DetailScreen from '../screens/Detail/DetailScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import LoadingScreen from '../screens/Loading/LoadingScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

// If you are using TypeScript, import NavigationTransitionProps, 
// and TransitionConfig
const IOS_MODAL_ROUTES = ["OptionsScreen"];

let dynamicModalTransition = (
  transitionProps: NavigationTransitionProps,
  prevTransitionProps: NavigationTransitionProps
): TransitionConfig => {
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    IOS_MODAL_ROUTES.some(
      screenName =>
        screenName === transitionProps.scene.route.routeName ||
        (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    )
  );
};

const HomeStack = createStackNavigator(
  { DetailScreen, HomeScreen, },
  { initialRouteName: "HomeScreen", transitionConfig: dynamicModalTransition }
);

HomeStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "locked-closed";
  }

  return {
    tabBarLabel: "Chat",
    // tabBarIcon: ({ tintColor }: TabScene) => (
    //   <Icon name= "ios-home" type="ionicon" color={ tintColor } />
    // ),
    tabBarVisible,
    drawerLockMode,
    drawerLabel: "Chat",
    // drawerIcon: ({ tintColor }: TabScene) => (
    //   <Icon name= "md-home" type="ionicon" color={ tintColor } />
    // )
  };
};

const SettingsStack = createStackNavigator({ SettingsScreen });

SettingsStack.navigationOptions = {
  tabBarLabel: "Configurações",
  // tabBarIcon: ({ tintColor }: TabScene) => <Icon name="ios-cog" type = "ionicon" color={ tintColor } />,
  drawerLabel: "Configurações",
  // drawerIcon: ({ tintColor }: TabScene) => <Icon name="md-cog" type = "ionicon" color={ tintColor } />
};

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
  android: createDrawerNavigator({ HomeStack, SettingsStack }/*, { contentComponent: BurgerMenu }*/)
});

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, MainNavigator, LoginScreen },
  { initialRouteName: "LoginScreen" }
);

const NavigationContainer = createAppContainer(RootSwitch);

export default NavigationContainer;

/* Parte do Navigation mais Simples */
// const HomeStack = createStackNavigator({ DetailScreen, HomeScreen, OptionsScreen });
// const MainTabs = createBottomTabNavigator({ HomeStack, SettingsScreen });
// const RootSwitch = createSwitchNavigator({ LoadingScreen, MainTabs });
// const MainNavigator = Platform.select({
//   ios: createBottomTabNavigator({ HomeStack, SettingsScreen }),
//   android: createDrawerNavigator({ HomeStack, SettingsScreen })
// });
// export default RootSwitch;