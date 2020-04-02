import React from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import firebase from 'react-native-firebase';
export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'MainScreen' : 'SignUp');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
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
});
