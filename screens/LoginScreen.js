import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import CollectiveTimesApiClient from '../CollectiveTimesApiClient';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeUserNameField = this.onChangeUserNameField.bind(this);
    this.onChangePasswordField = this.onChangePasswordField.bind(this);
    this.onClickLoginButton = this.onClickLoginButton.bind(this);
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.state = { username: '', passwrord: '' };
  }

  onChangeUserNameField(value) {
    this.setState({username: value});
  }

  onChangePasswordField(value) {
    this.setState({password: value});
  }

  onClickLoginButton(){
    const client = new CollectiveTimesApiClient();
    client.login(this.state.username, this.state.password, (data) => { this.handleLoggedIn(data); });
  }

  handleLoggedIn(data){
    // TODO: save token
    this.props.navigation.navigate('Home');
  }

  render() {
    return(
        <View>
        <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={this.onChangeUserNameField}
      value={this.state.username}
        />
         <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.onChangePasswordField}
        value={this.state.password}
        />
        <Button
  onPress={this.onClickLoginButton}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
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
