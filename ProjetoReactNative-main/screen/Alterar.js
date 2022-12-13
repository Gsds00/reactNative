import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar, Button, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';



export default function AlterarScreen({ route, navigation }) {

    const [getNome, setNome] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getCpf, setCpf] = useState();
    const [getId, setId] = useState();


    useEffect(() =>{

        if (route.params){
         const { nome } = route.params ;
         const { cpf } = route.params ;
         const { telefone} = route.params ;
         const { id } = route.params;

     
         setNome(nome);
         setCpf(cpf);
         setTelefone(telefone);
         setId(id);
         

        }
 
     }, [])
    

    /*async function inserirDados() {

     await axios.post('http://professornilson.com/testeservico/clientes'
                , {

                    nome: getNome,
                    telefone: getTelefone,
                    cpf: getCpf
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);

                });

        }*/


    function alterarDados(){

            axios.put('http://professornilson.com/testeservico/clientes/'+getId, {
                 nome: getNome,
                 telefone: getTelefone,
                 cpf: getCpf
                 }).then(function (response) {
                 console.log(response);}).catch(function (error) {
                 console.log(error);
            
                 });}

    function excluirDados() {

            axios.delete('http://professornilson.com/testeservico/clientes/' + getId).then(
               function (response) {   
                 setNome(null);
                  setCpf(null);
                   setTelefone(null);
                    setId(null);    
                  }).catch(function (error) {
                         console.log(error);
                    
                });
            }

    return (
        <View style={{ alignItems:'center'}}>
                
                <Header
           
           
             leftComponent={<Button
                   title="<=="
                    onPress={() => navigation.navigate('Listar')}

             />}
             centerComponent={{ text: 'Alterar Dados.', style: { color: '#fff' } }} 

/>


            <Text>Nome:</Text>
            <TextInput style={{ height: 40, backgroundColor: 'white', width: 300, borderWidth: 1 }}
                onChangeText={text => setNome(text)}
                value={getNome}
            />


            <Text>Telefone:</Text>
            <TextInput style={{ height: 40, backgroundColor: 'white', width: 300, borderWidth: 1 }}
                onChangeText={text => setTelefone(text)}
                value={getTelefone}
            />


            <Text>Cpf:</Text>
            <TextInput style={{ height: 40, backgroundColor: 'white', width: 300, borderWidth: 1 }}
                onChangeText={text => setCpf(text)}
                value={getCpf}
            />


            <Button title="Alterar dados"
            
                onPress={() => alterarDados()}

            ></Button>
            <Button title="Excluir"
             style={{paddingTop:20}}
            onPress={() => excluirDados()}

        ></Button>
        </View>    
    )
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