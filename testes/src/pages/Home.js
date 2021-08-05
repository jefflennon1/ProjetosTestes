import React, { useState } from 'react';
import { 
  Text, 
  View , 
  StyleSheet, 
  TextInput 
} from 'react-native';

export function Home(){
  const [newtext, setNewText] = useState();

  return(
    <>
      <View style={estilos.view}>
        <Text style={estilos.texto}>Login</Text>
        <TextInput
        placeholder='password'
        placeholderTextColor="#707070"
        style={estilos.input}
        onChangeText={setNewText}
        />
        <Text style={estilos.texto}>
          {newtext}
        </Text>
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  view :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'    
  },
  texto: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input:{
    backgroundColor: "#1e1e1e",
    padding: 10,
    marginTop: 15,
    borderRadius: 7,
    width: 200,
    color: '#ffff'
  }
});