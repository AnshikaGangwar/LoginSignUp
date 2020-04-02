import React from 'react';
import {SwitchNavigator, createSwitchNavigator} from 'react-navigation';
import Loading from './screens/Loading';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import MainScreen from './screens/MainScreen';

const App = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    MainScreen,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default App;
