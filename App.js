import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AppLogo from './components/AppLogo';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import ArticleListScreen from './screens/ArticleListScreen';
import ArticleScreen from './screens/ArticleScreen';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: ArticleListScreen,
      navigationOptions: {
        headerTitle: <AppLogo />,
      },
    },
    Detail: {
      screen: ArticleScreen,
      navigationOptions: ({ navigation } ) => ({
        title: navigation.state.params.title.slice(0, 17),
        headerStyle: {
          backgroundColor: '#c8f277de',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        },
      }),
    },
  }
);

const RootStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: AppStack,
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
