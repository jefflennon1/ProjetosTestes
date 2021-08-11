import React, { useState } from 'react';
import { Text, TextInput, View , StyleSheet, TouchableOpacity} from 'react-native';

export default function App(){
  const [ newSkill, setNewSkill] = useState('');
  const [mySkills, setMyskills] = useState([]);

  function handleAddSkill(){
    setMyskills(oldState => [...oldState, newSkill])
  }

  return(
    <>
      <View style={style.container}>
         <Text style={style.text}>Bem vindo, Jefferson</Text>
         <TextInput 
            placeholder = 'Create new skill'
            placeholderTextColor='#707f84e8' 
            style={style.text}
            onChangeText={setNewSkill}
            style={style.textInput}
         />
         <TouchableOpacity style={style.buttonAdd}
          activeOpacity={.7}
          onPress={()=> handleAddSkill()}
         >
           <Text  style={style.textButton}>Add</Text>
         </TouchableOpacity>
         {
          mySkills.map(skill=>(
              <TouchableOpacity key={skill} style={style.flashCard}>
                <Text style={style.textTouchable}>{skill}</Text>
              </TouchableOpacity>
            ))
            }
      </View> 
    </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor : '#000',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: '#fff',
    fontSize: 18
  },
  textTouchable:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  buttonAdd:{
    backgroundColor: '#4a8da7',
    padding: 13,
    marginVertical: 5,
    width: 250,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15
  },
  textButton:{
    color: '#e1e4e5',
    fontWeight: 'bold',
    fontSize: 18
  },
  textInput:{
    backgroundColor: '#202122',
    marginVertical: 10,
    width: 250  ,
    color: '#fff',
    borderRadius: 8
  },
  flashCard:{
    backgroundColor: '#202122',
    padding: 35,
    marginVertical: 15,
    width: 500,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#c6e7e9'
  },
 
})