/**
 * Flexbox1. Dividir la pantalla en tres partes iguales
 */

import React, { Component } from 'react';
import {StyleSheet,View,Text,Image, Alert} from 'react-native';
import { Button } from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar';
 
 const images = [
['https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
],
[
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
],
[
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
],

];

const menu =[
    {posts: '20', followers: '110304', following: '1103'}  
]


 class App extends Component {
   render() {
     return (
       <View style={styles.contenedor}>
         <View style={styles.seccion1}>
         <UserAvatar size={100} name="Avatar" src="https://as01.epimg.net/meristation/imagenes/2020/08/20/header_image/381825291597956543.jpg" />
         {menu.map((item) => {
            return (
                  <View style={{flexDirection: 'row', marginLeft: 30, marginTop: -20}}>
                        <View style={{ flexDirection: "column", margin: 10}}>
                              <Text style={{fontWeight: 'bold'}}>Posts</Text>
                              <Text>{item.posts}</Text>
                        </View>
                        <View style={{ flexDirection: "column" , margin: 10}}>
                              <Text style={{fontWeight: 'bold'}}>Followers</Text>
                              <Text>{item.followers}</Text>
                        </View>
                        <View style={{ flexDirection: "column" , margin: 10}}>
                              <Text style={{fontWeight: 'bold'}}>Following</Text>
                              <Text>{item.following}</Text>
                        </View> 
                  </View>   
                  );
            })} 
            <View style={{marginLeft:30}}>
                  <Button mode="contained" style={styles.boton}   onPress={() => Alert.alert('Pulsaste editar perfil!')}>EDIT PROFILE</Button>  
            </View>   
      </View>
          
      
      {images.map((pos) => {
            return (
            <View style={styles.seccion2}>
                  <Image style={styles.imagenes} source={{ uri: pos[0] }}></Image>
                  <Image style={styles.imagenes} source={{ uri: pos[1] }}></Image>
                  <Image style={styles.imagenes} source={{ uri: pos[2] }}></Image>
                  <Image style={styles.imagenes} source={{ uri: pos[3] }}></Image>
            </View>
            );
      })}

      </View>
     );
   }
 };
 
 const styles = StyleSheet.create({
   contenedor: {
     flex: 1,
     flexDirection: 'column',
     borderColor: 'purple',
     borderWidth: 5,
   },
   seccion1: {
    flex: 0.40,
    flexWrap: "wrap",
    justifyContent:"space-around",
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'center',
    paddingTop: 70,
    paddingBottom: 80,
   },
   seccion2: {
    textAlign: 'left',
    flexDirection: "row", 
    marginLeft: 10,
    marginRight: 10,
   },
   imagenes: {
      flex: 1,
      height: "25%",
      borderWidth: 40,
      margin: 4,
   },
   boton:{
      backgroundColor: '#dad7cd',


   }
 });
 
 export default App;