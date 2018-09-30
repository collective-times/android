import React from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';
import CollectiveTimesApiClient from '../CollectiveTimesApiClient';
import Authenticator from '../data';

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
    Authenticator.addAccountExplicitly (this.state.username, this.state.password, data)
      .then((account) => {
        this.props.navigation.navigate('Home');
      });
  }

  render() {
    return(
        <View style={ styles.container }>
          <View  style={styles.appImageWrap}>
            <Image style={styles.appImage}
                   source={ { uri: 'https://pbs.twimg.com/profile_images/928496093381271564/LS3fqeXk_400x400.jpg' } } />
          </View>
          <View style={ styles.textWrap }>
            <TextInput style={styles.textWrapUserName}
                       onChangeText={this.onChangeUserNameField}
                       underlineColorAndroid='transparent'
                       placeholder={"メールアドレス"}
                       value={this.state.username} />
            <TextInput style={styles.textWrapPassword}
                       textContetType="password"
                       secureTextEntry={true}
                       onChangeText={this.onChangePasswordField}
                       underlineColorAndroid='transparent'
                       placeholder={"パスワード"}
                       value={this.state.password} />
            <Button style={ styles.textWrapLogin }
                    title="ログイン"
                    accessibilityLabel="ログイン"
                    color="#4CAF50"
                    onPress={this.onClickLoginButton} />
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8f277de',
  },
  appImageWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appImage: {
    width: 72,
    height: 72,
  },
  textWrap: {
    flex: 2,
    paddingLeft: 48,
    paddingRight: 48,
  },
  textWrapUserName: {
    height: 48,
    marginTop: 8,
    marginBottom: 4,
    paddingTop: 12,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1
  },
  textWrapPassword: {
    height: 48,
    marginTop: 4,
    marginBottom: 4,
    paddingTop: 12,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1
  },
  textWrapLogin: {
    height: 48,
    marginTop: 4,
    marginBottom: 8,
  }
});
