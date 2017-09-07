// Import libraries for making a component
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'


// Make a component
class AlbumList extends Component {
  state = {
    albums: [] 
  };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => this.setState({ albums: responseData }));
  }

  // Create a method to render each albums
  // Do not forget to give a key to each child of albums
  renderAlbums() {
    return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    //console.log('state of albumList : ', this.state);
    return (
      <View>
          {this.renderAlbums()}
      </View>
    );
  }
}


// Make the component available to other parts of the app
export default AlbumList;
