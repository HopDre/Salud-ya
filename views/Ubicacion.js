import React, { useEffect, useState }  from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Ubicacion = () => {
  const navigation = useNavigation();


  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permiso de ubicación no concedido');
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);
      } catch (error) {
        console.error('Error al obtener la ubicación:', error);
      }
    };

    getLocation();
  }, []);

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
      <GooglePlacesAutocomplete
        placeholder="Buscar lugares"
        onPress={(data, details = null) => {
          // `details` contiene información detallada sobre el lugar seleccionado
          console.log(data, details);
        }}
        query={{
          key: 'TU_API_KEY', // Reemplaza con tu propia clave de API de Google
          language: 'es', // Idioma de búsqueda
        }}
        nearbyPlacesAPI="GooglePlacesSearch" // Puedes ajustar según tus necesidades
        styles={{
          container: {
            flex: 0,
          },
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
            marginBottom:10,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Mi Ubicación"
            description="Ubicación actual del dispositivo"
          />
        </MapView>
      )}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pago")}>
        <Text style={styles.buttonText}>Proceder al pago</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Ubicacion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  },
  menuItem: {
    alignItems: "center",
  },
  map: {
    flex: 1,
  },
  button:{
    backgroundColor:"#4BAADD",
    paddingVertical:15,
    borderRadius:40,
    marginBottom:80,
    marginTop:10,
  },
  buttonText:{
    color:"white",
    fontWeight:"900",
    textAlign:"center",
    fontSize:18,
  }
});
