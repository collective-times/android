import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SplashScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(() => { this.props.navigation.navigate('Home'); }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>nypermkt</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
