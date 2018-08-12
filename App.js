import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ArticleListScreen from './ArticleListScreen';
import ArticleScreen from './ArticleScreen';
import LogoTitle from './LogoTitle';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: ArticleListScreen,
      navigationOptions: {
        headerTitle: <LogoTitle />,
//        headerStyle: {
//          backgroundColor: '#c8f277de',
//        },
//        headerTintColor: '#000000',
//        headerTitleStyle: {
//          fontWeight: 'bold',
//          fontFamily: 'Roboto',
//        },
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
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
