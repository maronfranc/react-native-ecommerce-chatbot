import {
  createStackNavigator,
  createSwitchNavigator,
  NavigationTransitionProps,
  TransitionConfig,
  StackViewTransitionConfigs,
  NavigationScreenProps,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import DetailScreen from '../screens/Detail/DetailScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import LoadingScreen from '../screens/Loading/LoadingScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import CartScreen from '../screens/Cart/CartScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import ShoppingCartIcon from '../components/ShoppingCart/ShoppingCartIcon/ShoppingCartIcon';

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

const ChatStack = createStackNavigator({ ChatScreen },
  {
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
  });
ChatStack.navigationOptions = {
  tabBarLabel: "Chatbot",
  drawerLabel: "Chatbot",
};

const ShoppingCartStack = createStackNavigator({ CartScreen },
  {
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
  });
ShoppingCartStack.navigationOptions = {
  tabBarLabel: 'Carrinho',
  drawerLabel: 'Carrinho',
}


const MainNavigator = createBottomTabNavigator({ HomeStack, ChatStack, ShoppingCartStack },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // https://reactnavigation.org/docs/en/tab-based-navigation.html
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName: string;
        if (routeName === 'HomeStack') {
          iconName = `md-home`;
        } else if (routeName === 'ChatStack') {
          iconName = `md-chatboxes`;
        } else if (routeName === 'ShoppingCartStack') {
          iconName = 'md-cart'
          // Substitui o ícone do carrinho com badge
          IconComponent = ShoppingCartIcon;
        }
        // Typescript: Non-null assertion operator
        return <IconComponent name={iconName!} size={30} color={tintColor!} />;
      },
    }),
    tabBarOptions: {
      activeBackgroundColor: 'gold',
      activeTintColor: '#123',
      inactiveBackgroundColor: '#123',
      inactiveTintColor: 'gold',
    },
  });

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, MainNavigator, LoginScreen },
  { initialRouteName: "MainNavigator" }
);

const NavigationContainer = createAppContainer(RootSwitch);

export default NavigationContainer;