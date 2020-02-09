import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image, ScrollView} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from './components/HomeScreen';
import MovieDetails from './components/MovieDetails';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: MovieDetails
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },
  input: {
    width: 300,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 25
  },
  results: {
    marginTop: 10,
    fontSize: 20,
    color: 'grey'
  }
});

