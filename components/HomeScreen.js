import React from 'react';
import {SafeAreaView, TouchableHighlight, Alert, StyleSheet, Text, View, TextInput, Button, FlatList, Image, ScrollView} from 'react-native';

class Search extends React.Component {

    render() {
      return (
        <View>
          <TextInput
            onChangeText={text => this.props.onChangeText(text)}
            placeholder="Type to search"
            style={styles.input}
          />
        </View>
      )
    }
  }
  
  export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        movies: [],
        details: null
      }
    }
  
    onChangeText = (text) => {
      this.setState({text: text})
    }
  
    fetchData = (text) => {
      let apiUrl = 'http://www.omdbapi.com/?s=' + text + '&apikey=132335e8'
      fetch(apiUrl).then((response) => response.json()).then((responseJson) => this.setState({movies: responseJson['Search']}))
        .catch((error) =>{
          console.error(error);
      });
    }
  
    showDetails = (item) => {
        this.props.navigation.navigate('Details', {
            type: item.Type,
            poster: item.Poster,
            title: item.Title,
            year: item.Year,
            id: item.imdbId
        })
    }
    
    render() {
      return (
        <SafeAreaView contentContainerStyle={styles.container}>
          <Search onChangeText={this.fetchData.bind(this)}/>
          {this.state.movies ?
          (<FlatList 
          style={styles.list}
          data={this.state.movies}
          keyExtractor={item => item.imdbID}
          renderItem={({item}) => 
          <TouchableHighlight onPress={() => this.showDetails(item)}>
          <Image
            style={styles.image}
            source={{uri:item.Poster}}
          />
          </TouchableHighlight>}
          />) : (<Text style={styles.results}> no results </Text>)}
        </SafeAreaView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },
    list: {
      
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
    },
    image: {
      width: 300, 
      height: 400, 
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  });
  
  