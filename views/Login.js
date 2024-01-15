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

const LoginScreen = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const passwordInputRef = useRef(null);
  const handleInputChange = (inputText) => {
    setText(inputText);
  };
  const handlePasswordChange = (inputText) => {
    setPassword(inputText);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.contenedor}>
      <Image
        source={require("../assets/login/header.png")}
        style={styles.header}
      ></Image>
      <Text style={styles.titulo}>Ingreso de usuario</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={handleInputChange}
        value={text}
        placeholder="Ingrese su correo"
        returnKeyType="next"
        onSubmitEditing={() => {
          passwordInputRef.current.focus();
        }}
      />
      <TextInput
        ref={passwordInputRef}
        style={styles.pass}
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry={true}
        placeholder="Ingrese su contraseña"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Recuperacion")}>
        <Text style={styles.forget}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
      <View style={styles.containerDos}>
      <Text style={styles.crear}>
        ¿No tienes una cuenta? 
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <View style={styles.linkContainer}>
          <Text style={styles.crearLink}> Regístrate</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0074BD",
    marginTop: 40,
    marginLeft: 20,
  },
  inputs: {
    height: 40,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    padding: 4,
  },
  pass: {
    height: 40,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    padding: 4,
    marginBottom:80,
  },
  button: {
    backgroundColor: "#4BAADD",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  forget: {
    textAlign: "center",
    marginTop: 20,
    color: "#4BAADD",
    fontWeight: "500",
    fontSize:16,
  },
  containerDos: {
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crear: {
    fontSize: 16,
    // Otros estilos que desees aplicar
  },
  crearLink: {
    color: '#4BAADD',
    fontSize: 16,
    fontWeight: "500",
  },
});
