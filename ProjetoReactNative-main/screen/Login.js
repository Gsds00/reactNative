//import React, {userState} from 'react';
import * as React from 'react';
import { View, Text } from 'react-native';

import { Button } from 'react-native-elements';

import {TextInput} from 'react-native';
import { Avatar } from 'react-native-elements';
import { StyleSheet} from 'react-native';



export default function LoginScreen({navigation}) {

  


  return (

<View style={styles.container}>
    <View style={{alignItems: 'center'}}>

       <Avatar
         size="large"rounded source={{ uri:'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png',}}/>

    </View>
    <View style={{marginTop:30, width:200,}}>
        
         <Text>Login:</Text>
           <TextInput style={{backgroundColor: 'white', height:30}}/>
          
         <Text>Senha:</Text>
           <TextInput style={{backgroundColor: 'white', height:30}}/>
      
    </View>
    <View style={{marginTop:30, width:200}}>
          
          <Button title="Login"
             onPress={ ()=> navigation.navigate('Listar')}
          />

        <View style={{marginTop:20}}>
          <Button title="Cadastre-se"
               onPress={ ()=> navigation.navigate('Cadastrar')}

              //style={{marginTop:30,}}
              // color={'red'}
               buttonStyle={{backgroundColor: 'red'}}
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
