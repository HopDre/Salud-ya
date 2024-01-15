import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "./views/Splash";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Recuperacion from "./views/Recuperacion";
import Principal from "./views/Principal";
import Servicio from "./views/Servicio";
import Perfil from "./views/Perfil";
import Personal from "./views/Personal";
import Ubicacion from "./views/Ubicacion";
import Pago from "./views/Pago";
import Prueba from "./views/Prueba";


const App = () => {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Recuperacion" component={Recuperacion} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Servicio" component={Servicio} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="Ubicacion" component={Ubicacion} />
        <Stack.Screen name="Pago" component={Pago} />
        <Stack.Screen name="Prueba" component={Prueba} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App