import React from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import Authenticator from '../data';

export default class SplashScreen extends React.Component {

  constructor(props) {
    super(props);
    this.launchScreen = this.launchScreen.bind(this);
  }

  componentDidMount(){
    this.launchScreen();
  }

  async launchScreen(){
    try {
      const token = await Authenticator.getAccessToken();

      if(token) {
        this.props.navigation.navigate('Home');
      } else {
        this.props.navigation.navigate('Login');
      }
    } catch(error) {
      console.log(error);
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.appImage}
               source={ { uri: 'https://pbs.twimg.com/profile_images/928496093381271564/LS3fqeXk_400x400.jpg' } } />
        <ActivityIndicator style={styles.indicator} size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c8f277de',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appImage: {
    width: 72,
    height: 72,
  },
  indicator: {
    paddingTop: 12
  }
});
