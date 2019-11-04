import React, { Component } from "react";
import Geolocation from '@react-native-community/geolocation';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
  AppRegistry,
  StatusBar,
} from 'react-native';
class Current extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
       (position) => {
         console.log("current position properties");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
     );
   }


  render() {
    return (
      <View>
        <Text>Current</Text>
        <Text> Latitude {this.state.latitude} </Text>
        <Text> Longitude {this.state.longitude} </Text>
        <Text> {this.state.error} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Current;