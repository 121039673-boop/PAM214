import { Text,StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextScreen from './textScreen'
import ImageScreen from './imageScreen'
//import RepasoScreen from './repasoScreen'
import ScrollViewScreen from './scrollViewScreen'
import ActivityScreen from './activityScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomScreen from './BottomScreen'



export default function MenuScreen () {

    const[screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador' :
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
         case 'text' :
            return <TextScreen/>
         case 'image' :
            return <ImageScreen/>
        case 'Repaso' :
            return <RepasoScreen/>
        case 'scrollView' :
            return <ScrollViewScreen/>
       case 'activity' : 
             return <ActivityScreen/>
        case 'FlatList' :
            return <FlatListScreen/>
        case 'Modal' :
            return <ModalScreen/>
        case 'Bottom' : 
            return <BottomScreen/>
        case 'menu':
        default:
            return (
                
        <View style={styles.container}> 
        <Text style={styles.titulo}>Menu Practicas</Text> 
        
        
        <View style={styles.contenedorBotones}> 
        
        
        <Button color='#f4a30dff' onPress={()=>setScreen('contador')} title='Pract:Contador' />
        <Button color='#3d818cff' onPress={()=>setScreen('botones')} title='Pract:Buttons' />
        <Button color='#f4a30dff'onPress={()=>setScreen('text')} title='Pract:Text Input & Alert' />
        <Button color='#3d818cff' onPress={()=>setScreen('image')} title='Pract:ImageBackground & SlapshScreen' />
        <Button color='#f4a30dff' onPress={()=>setScreen('scrollView')} title='Pract:ScrollView' />
        <Button color='#3d818cff' onPress={()=>setScreen('activity')} title='Pract:ActivityIndicator' />
        <Button color='#f4a30dff' onPress={()=>setScreen('FlatList')} title='Pract:FlatList y Section List' />
        <Button color='#3d818cff' onPress={()=>setScreen('Modal')} title='Pract:Modal' />
        <Button color='#f4a30dff' onPress={()=>setScreen('Bottom')} title='Pract:Bottom Sheet' />
        <Button color='#3b6782ff' onPress={()=>setScreen('Repaso')} title='Pract: Repaso 1' />
        <Button color='#3b6782ff' onPress={()=>setScreen('proyecto')} title='proyecto' />
            
      </View>
      </View>

    )

    }
    
  }

const styles = StyleSheet.create({

  container: {
    flex: 1, //Asignar espacio disponible en la vista 
    backgroundColor: '#6caa31ff', //Color de fondo
    alignItems: 'center', //Centrado
    justifyContent: 'center', //Justificacion del texto 
  },

titulo:{
color:'#7722d2ff',
fontSize:40,
fontFamily: 'Arial',
fontWeight: '900',
textDecorationLine: 'underLine',
marginBottom: 20
},

contenedorBotones:{
marginTop:15,
flexDirection: 'center',
gap: 20,
},
})