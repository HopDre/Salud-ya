import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Recuperacion = () => {
    const [correo, setCorreo] = useState('');

    const navigation = useNavigation();


    return(
        <View style={styles.container}>
            <Image
        source={require("../assets/login/header.png")}
        style={styles.header}
      ></Image>
      <View style={styles.recu}>
      <Text style={styles.leftAlignedText}>Ingrese su correo:</Text>
        <TextInput
        style={styles.input}
        placeholder="Email"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Recuperar contraseña</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
    )
}
export default Recuperacion;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    input:{
        backgroundColor:"white",
        marginTop:10,
        height:50,
        fontSize:14,
        paddingHorizontal: 8,
        width:"80%",
      },
      header: {
        width: "100%",
        height: 180,
        objectFit: "cover",
      },
      recu:{
        marginTop:80,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: "#4BAADD",
        padding: 15,
        borderRadius: 40,
        marginTop:20,
        marginBottom: 10,
        alignItems: "center",
        width: "100%",
        alignSelf: "center",
      },
      buttonText: {
        color: "white",
        fontSize: 20,
      },
})