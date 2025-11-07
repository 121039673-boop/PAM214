import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, SafeAreaView, TextInput, Alert, ScrollView, RefreshControl } from 'react-native';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const mostrarAlerta = () => {
    <Button
      title="Guardar"
      onPress={mostrarAlerta}
      color="#2377caff" />
  }

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000); 
  };



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // cambia el estado para ocultar el splash
    }, 4000);
    return () => clearTimeout(timer); // limpia el temporizador al desmontar el componente
  }, []);

  // Si "showSplash" es verdadero, se muestra esta vista (pantalla de bienvenida) 
  if (showSplash) {

    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App</Text>
      </View>)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ImageBackground
        source={{
          uri: 'https://tse3.mm.bing.net/th/id/OIP.bpEdKZYhh8c9MLYQvNqBswHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
        }}
        style={styles.background} // se aplican los estilos del fondo
      >
        <View style={styles.overlay}>
          {/* Texto principal */}
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>
          <Text style={styles.title}>Valeria Briones Patiño</Text>


          <Text style={styles.title}>Estudiante de TIID</Text>

          <Text style={styles.title}>Soy estudiante de la carrera de TIID, y me apasiona el desarrollo web y
            las bases de datos.</Text>

          <Text style={styles.title}>Correo: 121039673@upq.edu.mx</Text>

          <Text style={styles.title}>Teléfono: 4425012541</Text>

          <Button
            title="Editar Perfil"
            onPress={mostrarAlerta}
            color="#2377caff" />

          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
              
            stickyHeaderIndices={[0]}
            </ScrollView>


        </View>
      </ImageBackground>
    </SafeAreaView >
  );
}





const styles = StyleSheet.create({

  splashContainer: {
    flex: 1,
    backgroundColor: '#add9e44b',
    justifyContent: 'center',
    alignItems: 'center',
  },


  splashText: {
    fontSize: 24,
    color: '#3e0bf6ff',
  },


  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },


  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },

});













