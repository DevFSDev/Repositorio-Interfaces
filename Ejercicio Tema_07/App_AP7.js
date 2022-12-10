import React, { Component, useState} from 'react';
import {StyleSheet,View} from 'react-native';
import {Text} from 'react-native-paper';
import { DNI } from './components/dni';


 class App extends Component {

   render() {
    
     return (
       <View style={styles.contenedor}>
            <DNI></DNI>
        </View>  
     );
   }
 };


 
 const styles = StyleSheet.create({
   contenedor: {
     flex: 1,
     borderWidth: 5,
   },
 });
 
 export default App;