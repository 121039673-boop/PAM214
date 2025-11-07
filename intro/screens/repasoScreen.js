import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, SafeAreaView } from 'react-native';


export default function RepasoScreen () {
    
   return (
       // SafeAreaView evita que el contenido se superponga con la barra de estado (iOS o Android)
       <SafeAreaView style={{ flex: 1 }}>
         
         {/* ImageBackground coloca una imagen como fondo de toda la pantalla */}
         <ImageBackground
           source={{
             uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
           }} // URL de la imagen que se usa como fondo
           style={styles.background} // se aplican los estilos del fondo
         >
           {/* View que contiene el texto y el botón, con un fondo semitransparente */}
           <View style={styles.overlay}>
             {/* Texto principal */}
             <Text style={styles.title}>Bienvenido!</Text>
   
           </View>
         </ImageBackground>
       </SafeAreaView>
     );
    }
   
const styles = StyleSheet.create({})

