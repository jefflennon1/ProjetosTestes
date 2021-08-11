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
         <Text style={style.text}>Hello Word</Text>
         <TextInput 
            placeholder = 'new skill...'
            placeholderTextColor='#f11111' 
            style={style.text}
            onChangeText={setNewSkill}
         />
         <TouchableOpacity style={style.buttonAdd}
          activeOpacity={.7}
         >
           <Text  style={style.textButton}>Add</Text>
         </TouchableOpacity>
         {
          mySkills.map(skill=>(
              <TouchableOpacity key={skill} style={style.touchable}>
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
  },
  touchable: {
    backgroundColor:'#D3D3D3',
    padding: 15,
    marginVertical: 25
  },
  textTouchable:{
    color: '#000',
    fontWeight: 'bold'
  },
  buttonAdd:{
    backgroundColor: '#919',
    padding: 10,
    marginVertical: 20,
    width: 200
  },
  textButton:{
    color: '#000'
  }
})