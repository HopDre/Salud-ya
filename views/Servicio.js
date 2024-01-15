import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";

const Servicio = () => {
  const navigation = useNavigation();

  const [textInputValue, setTextInputValue] = useState("");
  const [textInputValueDos, setTextInputValueDos] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [codigo, setCodigo] = useState("");

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      if (result.type === "success") {
        setSelectedFile(result);
      }
    } catch (err) {
      console.error("Error al seleccionar el documento:", err);
    }
  };

  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };
  const handleTextInputChangeDos = (text) => {
    setTextInputValueDos(text);
  };

  return (
    <View style={styles.container}>
      {/* Menú fijo en la parte inferior con iconos presionables */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Principal")}
        >
          <Icon name="ios-home" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Icon name="ios-person" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Servicio")}
        >
          <Icon name="ios-medkit" size={30} color="#0074BD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personal")}
        >
          <Icon name="ios-reader" size={30} color="#4BAADD" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contenido}>
        <Text>
          Detalla al profesional los servicios que solicitas: Toda información
          es importante*
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese aquí los detalles"
          multiline
          numberOfLines={7}
          value={textInputValue}
          onChangeText={handleTextInputChange}
        />
        <Text>
          Adjunta Aquí tus ordenes medicas, recetas, epicrisis, interconsultas,
          etc.
        </Text>
        <TouchableOpacity style={styles.archivo} onPress={pickDocument}>
          <Text style={styles.archivoText}>Seleccionar Archivo</Text>
        </TouchableOpacity>
        {selectedFile && (
          <View style={styles.selectedFileContainer}>
            <Text style={styles.selectedFileName}>{selectedFile.name}</Text>
          </View>
        )}

        <Text>¿Qué síntomas experimentaste?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese aquí los síntomas"
          multiline
          numberOfLines={7}
          value={textInputValueDos}
          onChangeText={handleTextInputChangeDos}
        />
        <View style={styles.cajaTres}>
          <View style={styles.valor}>
            <Text style={styles.cajaTresTexto}>Costo de la consulta</Text>
            <Text style={styles.cajaTresPrecio}>$00.000</Text>
          </View>
          <Text style={styles.codigoTexto}>
            ¿Tienes un código de descuento?
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Código"
            value={codigo}
            onChangeText={setCodigo}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Ubicacion")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </View>
      </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Servicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  contenido: {
    margin: 15,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomMenu: {
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DDDCDC",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    alignItems: "center",
  },
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#DDDCDC",
    paddingHorizontal: 10,
    paddingTop: 10,
    textAlignVertical: "top",
  },
  archivo: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#4BAADD",
    padding: 10,
    borderRadius: 20,
  },
  archivoText: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },
  selectedFileContainer: {
    marginTop: 20,
  },
  selectedFileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cajaTres: {
    marginVertical: 40,
    backgroundColor: "#4BAADD",
    paddingVertical: 40,
    paddingHorizontal:20,
    borderRadius:30,
  },
  valor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cajaTresTexto: {
    fontWeight: "600",
    color: "white",
  },
  cajaTresPrecio: {
    fontWeight: "900",
    color: "white",
  },
  codigoTexto: {
    color: "white",
    fontSize: 11,
    marginVertical: 10,
  },
  input:{
    backgroundColor:"#DDDCDC",
    fontSize:11,
    padding:10,
  },
  button:{
    backgroundColor:"white",
    paddingVertical:15,
    borderRadius:40,
    marginTop:40
  },
  buttonText:{
    color:"#0074BD",
    fontWeight:"900",
    textAlign:"center",
    fontSize:18,
  }
});
