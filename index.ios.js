// Import a library to help create a component

import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from './src/components/header';


// Create a component

const App = () => (
  <Header headerText={'Albums'} />
);


// Render it in a service

AppRegistry.registerComponent('albums', () => App);
