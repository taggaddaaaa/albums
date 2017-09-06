// Import libraries for making a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


// Make a component
class AlbumList extends Component {
  componentWillMount() {
    // I CAN USE CHROME TO DEBUG THE APP
    // console.log('componentWillMount in AlbumList');
    // debugger;
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => this.setState({ albums: responseData }));
    console.log(this);

}


  render() {
    return (
      <View>
        <Text>
          Album List !!!
        </Text>
      </View>
    );
  }
}


// Make the component available to other parts of the app
export default AlbumList;
