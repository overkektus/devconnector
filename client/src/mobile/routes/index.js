import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import Launch from '../components/Launch';
import Dashboard from '../components/Dashboard';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const Index = (
  <Stack>
    <Scene
      initial
      key="launch"
      component={Launch}
    >
    </Scene>
    <Scene
      key="dashboard"
      component={Dashboard}
    />
    <Scene
      key="login"
      component={Login}
    />
    <Scene
      key="register"
      component={Register}
    />
  </Stack>
);

export default Index;
