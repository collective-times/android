import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class LogoTitle extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./img/logo.jpg')} />
          <Text style={styles.appTitle}>CollectiveTimes</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 56,
    elevation: 4,
    backgroundColor: '#c8f277de',
    padding: 10
  },
  appTitle: {
    paddingLeft: 12,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});
