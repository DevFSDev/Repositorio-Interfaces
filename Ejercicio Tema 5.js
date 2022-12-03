import React, {Component, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const estilo = "upv";
let isAdmin = true;
let color = "";

const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];




class App extends Component {
  render() {
    return (
      <ScrollView>
        {nombre('Adrián', 'López')}
        {datos()}
        {array()}
      </ScrollView>
    );
  }
}

const array = ( )=>{
  return(
    <View>{modulos2Dam.map((item,pos) => {return (<Text key={pos} style={pos %2 == 0 ? styles.modulos : styles.modulos2}>{pos+1} - {item.nombre} {'\n'} {item.profesor} {'\n'} {item.horas} horas {'\n'}</Text>);})}</View>
  )
}

const nombre = (unNombre, unApellido) => {
  return (
    <View>
      <Text>
        Soy {unNombre} {unApellido}
      </Text>
    </View>
  );
};

const datos = () => {

estilo == 'florida' ? color = 'white' : color = 'orange';

  return (
      <View style={estilo == 'florida'? styles.florida: styles.upv}>
        <TextInput 
        placeholderTextColor={color} placeholder='Usuario' label={'Introduce tus datos'} left={<TextInput.Icon name='eye' />}
        />
        <TextInput 
        placeholderTextColor= {color} placeholder='Contraseña' label={'Introduce tus datos'} left={<TextInput.Icon name='eye' />}
        />
        {isAdmin &&  <Button icon="format-list-bulleted" mode="contained"> INFORMES </Button>}
      </View>
  );
};
  

const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'right',
    width: 220,
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    width: 220,

  },
  modulos: {
    backgroundColor: '#F48FB1',
    width: 220,
  },
  modulos2: {
    backgroundColor: '#F8BBD0',
    width: 220,
  },
});
export default App;
