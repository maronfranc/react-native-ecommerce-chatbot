import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  NavigationTransitionProps,
  TransitionConfig,
  StackViewTransitionConfigs,
  NavigationScreenProps,
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation';

import DetailScreen from '../../screens/Detail/DetailScreen';
import HomeScreen from '../../screens/Home/HomeScreen';
import LoadingScreen from '../../screens/Loading/LoadingScreen';
import ChatScreen from '../../screens/Chat/ChatScreen';
import LoginScreen from '../../screens/Login/LoginScreen';

const IOS_MODAL_ROUTES = ["LoginScreen"];

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
    tabBarLabel: "Produtos",
    tabBarVisible,
    drawerLabel: "Produtos",
    drawerLockMode,
  };
};

const ChatStack = createStackNavigator({ ChatScreen });

ChatStack.navigationOptions = {
  tabBarLabel: "Chatbot",
  drawerLabel: "Chatbot",
};

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack, ChatStack }),
  android: createMaterialTopTabNavigator({ HomeStack, ChatStack})
});

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, MainNavigator, LoginScreen },
  { initialRouteName: "LoginScreen" }
);

const NavigationContainer = createAppContainer(RootSwitch);

export default NavigationContainer;