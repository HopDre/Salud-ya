import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Perfil = () => {
  const navigation = useNavigation();

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
          <Icon name="ios-person" size={30} color="#0074BD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Servicio")}
        >
          <Icon name="ios-medkit" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personal")}
        >
          <Icon name="ios-reader" size={30} color="#4BAADD" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.roundedImage}
            source={require("../assets/foto.jpg")}
          />
          <Text style={styles.nombre}>Magdalena Rojas</Text>
          <Text style={styles.correo}>magdalena12@gmail.com</Text>
          <View style={styles.botones}>
          <TouchableOpacity onPress={() => navigation.navigate("Prueba")}>
            <View style={styles.btnTop}>
              <Text style={styles.buttonText}>Editar perfil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Prueba")}>
            <View style={styles.btnBottom}>
              <Text style={styles.buttonText}>Configuración</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Prueba")}>
            <View style={styles.btnTop}>
              <Text style={styles.buttonText}>Mis visitas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Prueba")}>
            <View style={styles.btnBottom}>
              <Text style={styles.buttonText}>Mis certificados</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Prueba")}>
            <View style={styles.btnTop}>
              <Text style={styles.buttonText}>Preguntas frecuentes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Prueba")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Centro de soporte</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Prueba")}>
            <View style={styles.btnBottom}>
              <Text style={styles.buttonText}>Contáctanos</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
        {/* Otro contenido del contenedor principal */}
      </ScrollView>
    </View>
  );
};
export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    position: "relative",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DDDCDC",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex:100,
  },
  menuItem: {
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },
  roundedImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "#4BAADD",
  },
  scrollViewContainer: {
    marginTop: 50,
    backgroundColor: "#4BAADD",
    borderRadius: 20,
    height:800,
  },
  nombre: {
    fontSize: 20,
    color: "white",
  },
  correo: {
    fontSize: 15,
    color: "white",
    marginBottom:20,
  },
  button:{
    width:"100%",
    backgroundColor:"white",
    marginVertical:2
  },
  buttonText:{
    textAlign:"center",
    padding:15,
    fontSize:18,
    color:"#4BAADD",
    fontWeight:"500",
    
  },
  botones:{
    flex:1,
    width:"100%",
    padding:10,
  },
  btnTop:{
    backgroundColor:"white",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginBottom:2,
  },
  btnBottom:{
    backgroundColor:"white",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    marginTop:2,
    marginBottom:20,
  }
});
