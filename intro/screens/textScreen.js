import { Text,StyleSheet,View,TextInput,Button,Alert} from 'react-native';
import React,{ Component,useState } from 'react'



export default function TextScreen () {
    
  const[nombre,setNombre] = useState('');
  
  const mostrarAlerta = () => {
    if ([nombre.trim(), password.trim(), comentario.trim()].includes("")) {
      alert("Error, Por favor rellena todos los campos."); // Navegador
    } else {
      alert(`Hola, ${nombre}!`,`Tu nombre ha sido registrado con éxito. Tu contraseña es ${password}`);
      setNombre("");
  
    }
  };

              return (
      <View style={styles.container}>
        <Text style={styles.label}>Ingresa tu nombre:</Text>
        <TextInput
        style={styles.input}
        placeholder="Ejemplo: Valeria"
        valor={nombre}
        onChangeText={setNombre}
        keyboardType="default"
        autoCapitalize="words"
        />

        <TextInput 
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        />
    
        <TextInput 
        style={styles.input}
        placeholder="Contraseña"
        keyboardType="numeric" 
        secureTextEntry={true}
        />

      <Button
      title="Saludar"
      onPress={mostrarAlerta}
      color="#2377caff"
      />

      </View>
    )
    }
   
const styles = StyleSheet.create({
  // 4. Estilos para nuestros componentes
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});
