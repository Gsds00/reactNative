import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './screen/Login';
import CadastrarScreen from './screen/Cadastrar';
import ListarScreen from './screen/Listar';
import InserirScreen from './screen/Inserir';
import AlterarScreen from './screen/Alterar';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Listar" component={ListarScreen} options={{headerShown:false}} />
        <Stack.Screen name="Cadastrar" component={CadastrarScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Inserir" component={InserirScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Alterar" component={AlterarScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;