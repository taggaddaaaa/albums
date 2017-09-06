// TODO: Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// TODO: Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return  (
    <View style={viewStyle}>
        <Text style={textStyle}>Albums</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F3C7A1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#E87975',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#FFFFFF',
    fontSize: 20
  }
};


//TODO: Make the component available to other parts of the app
export default Header;
