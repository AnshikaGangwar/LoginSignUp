import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';

export default class MainScreen extends React.Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }
  render() {
    const {currentUser} = this.state;
    if (currentUser) {
      return (
        <View style={styles.container}>
          <Text>{currentUser.email}</Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
