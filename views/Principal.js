import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";

const Principal = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const slides = [
    {
      image: require('../assets/principal/slider1.png'), // Reemplaza con la ruta de tu primera imagen
      content: 'Te ofrecemos un servicio de calidad y a un costo que esté a tu alcance, nuestro enfoque principal está en tu bienestar',
    },
    {
      image: require('../assets/principal/slider1.png'), // Reemplaza con la ruta de tu segunda imagen
      content: 'Te ofrecemos un servicio de calidad y a un costo que esté a tu alcance, nuestro enfoque principal está en tu bienestar',
    },
    {
      image: require('../assets/principal/slider1.png'), // Reemplaza con la ruta de tu tercera imagen
      content: 'Te ofrecemos un servicio de calidad y a un costo que esté a tu alcance, nuestro enfoque principal está en tu bienestar',
    },
  ];

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        swiperRef.current.scrollBy(1);
      } else {
        swiperRef.current.scrollBy(-currentIndex);
      }
    }, 3000);

    return () => {
      clearInterval(autoPlay);
    };
  }, [currentIndex]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.imgPrincipal}>
        <Text style={styles.texto}>
          ¿Quieres solicitar un servicio?{"\n"}
          {"\n"}
          Servicios a la puerta de tu casa, sólo al alcance de un toque.
        </Text>
        <Image
          source={require("../assets/principal/doctores.png")}
          style={styles.imagen}
        />
      </View>
      <View style={styles.imgPrincipalDos}>
        <Text style={styles.textoDos}>Elige tus servicios en Salud Ya!</Text>
        <View style={styles.iconosServicios}>
          <View style={styles.icons}>
            <Image
              source={require("../assets/principal/estetoscopio.png")}
              style={styles.iconsImagen}
            ></Image>
            <Text style={styles.iconTexto}>Medicina</Text>
          </View>
          <View style={styles.icons}>
            <Image
              source={require("../assets/principal/enfermera.png")}
              style={styles.iconsImagen}
            ></Image>
            <Text style={styles.iconTexto}>Enfermeria</Text>
          </View>
          <View style={styles.icons}>
            <Image
              source={require("../assets/principal/fisioterapia.png")}
              style={styles.iconsImagen}
            ></Image>
            <Text style={styles.iconTexto}>Kinesiologia</Text>
          </View>
          <View style={styles.icons}>
            <Image
              source={require("../assets/principal/nutricion.png")}
              style={styles.iconsImagen}
            ></Image>
            <Text style={styles.iconTexto}>Nutricionista</Text>
          </View>
        </View>
      </View>


      <View style={styles.paginationContainer}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        onIndexChanged={handleIndexChanged}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.activePaginationDot}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slideContainer}>
            <View style={styles.slideContentContainer}>
              <Image source={slide.image} style={styles.slideImage} />
              <Text style={styles.slideContent}>{slide.content}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
        </ScrollView>
      {/* Menú fijo en la parte inferior con iconos presionables */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Principal")}
        >
          <Icon name="ios-home" size={30} color="#0074BD" />
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
          <Icon name="ios-medkit" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personal")}
        >
          <Icon name="ios-reader" size={30} color="#4BAADD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  imgPrincipal: {
    flexDirection: "row", // Esto asegura que los elementos estén en la misma fila
    backgroundColor: "#0074BD",
    paddingTop: 20,
    paddingLeft: 10,
    borderRadius: 40,
    margin: 10,
    marginTop: 30,
  },
  texto: {
    marginTop: 20,
    flex: 1, // Esto permite que el texto ocupe el espacio restante
    color: "white",
  },
  imagen: {
    width: 150,
    height: 150,
    marginLeft: 10,
  },
  imgPrincipalDos: {
    padding: 10,
    margin: 10,
  },
  textoDos: {
    color: "black",
  },
  iconosServicios: {
    flexDirection: "row",
  },
  icons: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#0074BD",
    padding: 8,
    borderRadius: 20,
    margin: 2,
  },
  iconsImagen: {
    width: 50,
    height: 50,
  },
  iconTexto: {
    color: "white",
    fontSize: 10,
  },
  slideContainer: {
    backgroundColor:"#4BAADD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius:40,
  },
  slideImage: {
    width: 150, // Ajusta el ancho de la imagen según tus necesidades
    height: 150, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: 'contain',
    marginBottom: 10,
  },
  slideContentContainer: {
    alignItems: 'center',
    flexDirection:"row",
  },
  slideContent: {
    fontSize: 16,
    marginVertical: 10,
    flex:1,
    color:"white",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 60,
    height:200,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginHorizontal: 3,
  },
  activePaginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0074BD",  // Puedes personalizar el color del punto activo
    marginHorizontal: 3,
  },
});
