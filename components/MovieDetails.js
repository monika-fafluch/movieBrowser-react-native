import React from 'react';
import {TouchableHighlight, Alert, StyleSheet, Text, SafeAreaView, View, TextInput, Button, FlatList, Image, ScrollView} from 'react-native';
import { withOrientation } from 'react-navigation';

export default class MovieDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        plot: ''
      }
    }
    componentWillMount() {
        let plot = ''
        let apiUrl = "http://www.omdbapi.com/?t=" + this.props.navigation.getParam('title') + '&plot=full' + '&apikey=132335e8'
        fetch(apiUrl).then((response) => response.json()).then((responseJson) => this.setState({plot: responseJson['Plot']}))
            .catch((error) =>{
            console.error(error);
        });

      }

    render() {
      return (
        <ScrollView contentContainerStyle={styles.main}>
          <Image 
            style={styles.image}
            source={{uri: this.props.navigation.getParam('poster')}} />
            <Text style={styles.title}>{this.props.navigation.getParam('title')}</Text>
            <Text style={styles.lable}> Year: {this.props.navigation.getParam('year')} </Text>
            <Text style={styles.plot}> {this.state.plot}</Text>
        </ScrollView>
      )
    }
  }
  

  const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        fontFamily: "Helvetica",
        marginTop: 20
    },
    lable: {
        fontSize: 18,
        fontWeight: "600",
        color: "#4a4a4a",
        marginLeft: 15
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#404040",
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    },
    plot: {
      marginTop: 20,
      marginBottom: 50,
      marginLeft: 15,
      marginRight: 15
    }, 
    image: {
      width: 350, 
      height: 350, 
      marginTop: 20,
      marginLeft: "auto",
      marginRight: "auto"
    }
  });