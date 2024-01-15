import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from 'react-native-animatable';
const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Inicio")
        },3000)
    },[])
  return (
    <View style={styles.contenedor}>
      <Animatable.Image
        source={require("../assets/logo.png")}
        style={styles.imagen} duration={2000} animation="fadeInUpBig"
      ></Animatable.Image>
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#0074BD",
    justifyContent: "center",
    alignItems: "center"
  },
  imagen:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
});
