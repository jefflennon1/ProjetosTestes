import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App(){
const [personagens, setPersonagens] = useState([]);
  useEffect(async ()=>{
    const timestamp = '1610912198001';
    const apiKeyPublic = '8c74855f312c29a14fda58143121f4d8';
    const md5 = 'bfbfc7bee4da7c6a036fa598ba6a8a79';
    const response = await fetch(`http://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKeyPublic}&hash=${md5}`);
    setPersonagens(response.data);
  }, []);

  return(
    <>
      <View style={styles.conteiner}>
        <Text style={styles.titles}>Api Marvel</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor :'#16082f'
  },
  titles:{
    color: '#FFF',
    fontSize: 23,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})