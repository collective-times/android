import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ArticleListScreen from './ArticleListScreen';
import ArticleScreen from './ArticleScreen';

const RootStack = createStackNavigator(
  {
    Home: ArticleListScreen,
    Detail: ArticleScreen,
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
