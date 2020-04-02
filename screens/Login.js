import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import firebase from 'react-native-firebase';
//anshika
export default class Login extends React.Component {
  state = {email: '', password: '', errormsg: ''};
  handleSignUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('Main');
      })
      .catch(error => {
        this.setState({errormsg: error.message});
      });
  };

  render() {
    if (this.state.errormsg) {
      return <Text style={{color: 'red'}}>{this.state.errormsg}</Text>;
    }
    return (
      <View style={styles.container}>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={emailn => {
              this.setState({email: {emailn}});
            }}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={passwordn => {
              this.setState({password: {passwordn}});
            }}
            value={this.state.password}
          />
          <TouchableOpacity onPress={this.handleLogin}>
            <Text style={styles.signupBtn}>SIGNUP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginText}>Don't Have an Account? SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 2,
    borderWidth: 2,
    height: 40,
    width: '90%',
    borderColor: 'gray',
    marginTop: 10,
  },
});
