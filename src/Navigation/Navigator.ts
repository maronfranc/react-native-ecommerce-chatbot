import {
  createStackNavigator,
  createSwitchNavigator,
  NavigationTransitionProps,
  TransitionConfig,
  StackViewTransitionConfigs,
  NavigationScreenProps,
  createAppContainer,
} from 'react-navigation';

import DetailScreen from '../screens/Detail/DetailScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import LoadingScreen from '../screens/Loading/LoadingScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import CartScreen from '../screens/Cart/CartScreen';

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
  { DetailScreen, HomeScreen, CartScreen, ChatScreen },
  {
    initialRouteName: "HomeScreen",
    transitionConfig: dynamicModalTransition,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#123',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
      },
    }
  }
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

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, HomeStack, LoginScreen },
  { initialRouteName: "HomeStack" }
);

const NavigationContainer = createAppContainer(RootSwitch);

export default NavigationContainer;