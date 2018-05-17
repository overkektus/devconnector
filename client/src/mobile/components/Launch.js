import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Button } from 'react-native';
import { Text, H1 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './Spacer';

import { loginUser } from '../../actions/authActions';

class Launch extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  render() {
    if(this.props.auth.isAuthenticated) Actions.dashboard();
    return (
      <View
        {...this.props}
        style={styles.container}
      >
        <H1 style={styles.header}>Welcome to DevConnector</H1>
        <Text >
          Create a developer profile/portfolio, share posts and get help from other developers
        </Text>
        <Spacer size={10} />
        <View style={styles.button}>
          <Button title='Login' onPress={() => Actions.login()}/>
        </View>
        <Spacer size={1} />
        <View style={styles.button}>
          <Button title='Register' onPress={() => Actions.register()}/>
        </View>
        <Spacer size={30} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  header: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    width: 100
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {
  onFormSubmit: loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Launch);
