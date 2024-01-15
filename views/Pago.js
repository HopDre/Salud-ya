import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Pago = () => {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState(null);

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
      <Text style={styles.titulo}>Seleccione su método de pago</Text>
      <ScrollView>
        <View style={styles.azul}>
          {/* Radio button 1 */}
          <View style={styles.radio}>
            <View style={styles.tipo}>
              <Text style={styles.texto}>Tarjeta de crédito/débito</Text>
              <Image
                source={require("../assets/pago/visamaster.png")}
                style={styles.imagen}
              ></Image>
            </View>
            <RadioButton
              selected={selectedOption === "credito-debito"}
              onSelect={() => setSelectedOption("credito-debito")}
            />
          </View>

          {/* Campos de entrada para el radio button 1 */}
          {selectedOption === "credito-debito" && (
            <View style={styles.seleccionado}>
              <TextInput
                placeholder="Nombre del titular de la tarjeta"
                style={styles.input}
              />
              <TextInput
                placeholder="Número de tarjeta"
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Fecha de vencimiento"
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Código de seguridad"
                style={styles.input}
                keyboardType="numeric"
              />
               <TouchableOpacity
                onPress={() => navigation.navigate("Principal")}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Pagar</Text>
                </View>
              </TouchableOpacity>
              {/* Agrega más campos de entrada según tus necesidades */}
            </View>
          )}

          {/* Radio button 2 */}
          <View style={styles.radio}>
            <View style={styles.tipo}>
              <Text style={styles.texto}>Mercado Pago</Text>
              <Image
                source={require("../assets/pago/mercado.png")}
                style={styles.imagen}
              ></Image>
            </View>
            <RadioButton
              selected={selectedOption === "mercado-pago"}
              onSelect={() => setSelectedOption("mercado-pago")}
            />
          </View>

          {/* Campos de entrada para el radio button 1 */}
          {selectedOption === "mercado-pago" && (
            <View style={styles.seleccionado}>
              <TextInput
                placeholder="Nombre del titular de la tarjeta"
                style={styles.input}
              />
              <TextInput
                placeholder="Número de tarjeta"
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Fecha de vencimiento"
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Código de seguridad"
                style={styles.input}
                keyboardType="numeric"
              />
               <TouchableOpacity
                onPress={() => navigation.navigate("Principal")}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Pagar</Text>
                </View>
              </TouchableOpacity>
              {/* Agrega más campos de entrada según tus necesidades */}
            </View>
          )}

          {/* Radio button 2 */}
          <View style={styles.radio}>
            <View style={styles.tipo}>
              <Text style={styles.texto}>WebPay</Text>
              <Image
                source={require("../assets/pago/webpay.png")}
                style={styles.imagen}
              ></Image>
            </View>
            <RadioButton
              selected={selectedOption === "web-pay"}
              onSelect={() => setSelectedOption("web-pay")}
            />
          </View>

          {/* Campos de entrada para el radio button 1 */}
          {selectedOption === "web-pay" && (
            <View style={styles.seleccionado}>
              <TextInput
                placeholder="Nombre del titular de la tarjeta"
                style={styles.input}
              />
              <TextInput
                placeholder="Número de tarjeta"
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Fecha de vencimiento"
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Código de seguridad"
                style={styles.input}
                keyboardType="numeric"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("Principal")}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Pagar</Text>
                </View>
              </TouchableOpacity>
              {/* Agrega más campos de entrada según tus necesidades */}
            </View>
          )}

           {/* Radio button 2 */}
           <View style={styles.radio}>
            <View style={styles.tipo}>
              <Text style={styles.texto}>Pago en efectivo</Text>
              <Image
                source={require("../assets/pago/dinero.png")}
                style={styles.imagen}
              ></Image>
            </View>
            <RadioButton
              selected={selectedOption === "efectivo"}
              onSelect={() => setSelectedOption("efectivo")}
            />
          </View>

          {/* Campos de entrada para el radio button 1 */}
          {selectedOption === "efectivo" && (
            <View style={styles.seleccionado}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Principal")}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Continuar</Text>
                </View>
              </TouchableOpacity>
              {/* Agrega más campos de entrada según tus necesidades */}
            </View>
          )}

        </View>
      </ScrollView>
    </View>
  );
};

const RadioButton = ({ selected, onSelect }) => (
  <TouchableOpacity onPress={onSelect}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "white",
          marginRight: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selected && (
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "white",
            }}
          />
        )}
      </View>
      <Text style={styles.texto}>Seleccionar</Text>
    </View>
  </TouchableOpacity>
);

export default Pago;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
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
    zIndex:100
  },
  menuItem: {
    alignItems: "center",
  },
  titulo: {
    fontSize: 15,
    marginTop: 5,
  },
  azul: {
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom:40,
  },
  radio: {
    marginBottom: 20,
  },
  seleccionado: {
    backgroundColor: "white",
    padding: 20,
  },
  texto: {
    color: "white",
  },
  imagen: {
    width: 60,
    height: 40,
    objectFit: "contain",
  },
  tipo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 10,
    fontSize: 15,
    paddingLeft: 5,
  },
  button:{
    marginTop:20,
    backgroundColor:"#4BAADD",
    height:40,
    borderRadius:20,
  },
  buttonText:{
    textAlign:"center",
    lineHeight:30,
    color:"white",
    padding:5,
    fontSize:16,
  }
});
