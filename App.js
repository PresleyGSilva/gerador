import {Text, View, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import React, { useState } from 'react';
import { ModalPassword } from './src/components/modal';


let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
export default function App(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(){
    let password = '';
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true)
  }
  return(
    <View style = {styles.contaier}>
      <Image source = {require('./src/assets/logo.png')}
      style={styles.logo}/>
      <Text style={styles.title}> {size} Caracteres</Text>

      <View style={styles.area}>
      <Slider
        style={{height: 50}}
        minimumValue={6}
        maximumValue={20}
        minimumTrackTintColor="#000"
        maximumTrackTintColor='#ff0000'
        thumbTintColor='#392de9'
        value={size}
        onValueChange={(value) => setSize(value.toFixed(0))}
        /> 
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerador de Senha</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true }>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)}/>
      </Modal>
    </View>
    
    
    
  )
}

const styles = StyleSheet.create({
  contaier:{
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    marginBottom: 60
  },
  area: {
    marginBottom: 14,
    marginTop: 14,
    width: '80%',
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 8,
  },
  button:{
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    color: '#FFF',
    fontSize: 20,
    
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    
  }
})