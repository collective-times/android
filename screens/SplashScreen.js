import React from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';

export default class SplashScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // TODO: ログイン済みか判断して起動を変更する
    setTimeout(() => { this.props.navigation.navigate('Login'); }, 3000);
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
