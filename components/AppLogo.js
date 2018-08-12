import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class LogoTitle extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Image style={styles.appImage}
                 source={ { uri: 'https://pbs.twimg.com/profile_images/928496093381271564/LS3fqeXk_400x400.jpg' } } />
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
  appImage: {
    width: 36,
    height: 36,
    borderRadius: 64
  },
  appTitle: {
    paddingLeft: 12,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});
