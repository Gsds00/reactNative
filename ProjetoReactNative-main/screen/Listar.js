import React, {useState, useEffect} from 'react';
import { View, TextInput,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar, Button, Header } from 'react-native-elements'; 
import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';


export default function ListaScreen({route,navigation}){

      const [list,setlist] = useState([]);
      const refresh = useIsFocused();
        useEffect(()=>{
            function consultarDados() {
                axios.get('http://professornilson.com/testeservico/clientes')
                   .then( function (response) {
                         setlist(response.data);
                       }).catch(function (error) {
                 console.log(error);
               
               });
            }
             consultarDados();
            },[refresh])

  return(
     <View>
        <ScrollView>
       <Header
           
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
             rightComponent={<Button
                   title="+"
                    onPress={() => navigation.navigate('Inserir')}

             />}
                  

/>


  {
    list.map((linha, indice) => (
      <ListItem key={indice} bottomDivider onPress={() =>navigation.navigate('Alterar',{

        nome:linha.nome,
        telefone:linha.telefone,
        email:linha.email,
        id:linha.id

     })}>
        <Avatar source={{uri: "https://cdn-icons-png.flaticon.com/512/1117/1117462.png"}} />
        <ListItem.Content>
          <ListItem.Title>{linha.nome}</ListItem.Title>
          <ListItem.Subtitle>{linha.telefone}</ListItem.Subtitle>
          <ListItem.Subtitle>{linha.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
           </ScrollView>
     </View>

  )





}
