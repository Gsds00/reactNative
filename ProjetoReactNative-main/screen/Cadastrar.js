//import * as React from 'react';
import React, {useState, useEffect} from 'react';

import { View, Text } from 'react-native';


import { Button } from 'react-native-elements';

import {TextInput} from 'react-native';
import { StyleSheet} from 'react-native';

export default function CadastrarScreen({navigation}) {

 // const [contador, setContador] = useState(0);
 // const [nome, setNome] = useState(0);


  /*useEffect(()=>{
    setNome(nome);
    },[])*/

    return (
  <View style={styles.container}>
      <View style={{marginTop:30, width:200}}>
        
         <Text>Login:</Text>
             <TextInput style={{backgroundColor: 'white', height:30}}/>
          
          <Text>Senha:</Text>
             <TextInput style={{backgroundColor: 'white', height:30}}/>
        
        <View style={{paddingTop:20}}>
           <Button
              title="Salvar"
              onPress={() => navigation.navigate('Login')}
             // onPress={()=> setContador(contador + 1)}
              //style={{paddingTop:20}}
              
              />  
           
        </View>

      </View>

  </View>


    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3dbc3',
    },
  });