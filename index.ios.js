// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a component
const App = () => (
  //Add style property on the View Component to make the AlbumList well scrollable
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>

);


// Render it in a service
AppRegistry.registerComponent('albums', () => App);
