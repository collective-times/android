import React from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
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

  onChangeUserNameField(event) {
    const username = event.target.value;
    this.setState({username: username});
  }

  onChangePasswordField(event) {
    const password = event.target.value;
    this.setState({password: password});
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
