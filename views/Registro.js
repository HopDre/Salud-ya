import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";

const data = [
  { label: "Profesional de la salud", value: "1" },
  { label: "Paciente", value: "2" },
];
const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rut, setRut] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordDos, setPasswordDos] = useState('');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/login/header.png")}
        style={styles.header}
      ></Image>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Crear una cuenta</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Soy: " : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
       <TextInput
        style={styles.input}
        placeholder="RUT"
        value={rut}
        onChangeText={setRut}
      />
       <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={direccion}
        onChangeText={setDireccion}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        value={passwordDos}
        onChangeText={setPasswordDos}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },
  titulo:{
    fontSize:18,
    color:"#FFFF",
    marginBottom:10,
    fontWeight:"600",
  },
  formulario:{
    backgroundColor: "#4BAADD",
    padding:20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    marginTop:20,
  },
  dropdown: {
    marginTop: 10,
    height: 50,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color:"grey",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  input:{
    backgroundColor:"white",
    marginTop:10,
    height:50,
    fontSize:14,
    paddingHorizontal: 8,
  },
  placeholder:{
    color:"black"
  },
  button: {
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 20,
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
});
