import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import './styles.css'
import Character from './components/character';
import { TitlePage } from './components/TitlePage';

export default function App(){
const [characters, setCharacters] = useState([]);
const timestamp = new Date().getTime();
const apiPrivateKey = 'deaf92ef7a6f4a0b8a552ba1221aaff469616519';
const apiKeyPublic = '8c74855f312c29a14fda58143121f4d8';
const md5Key = md5(timestamp+apiPrivateKey+apiKeyPublic);
const baseUrl = 'https://gateway.marvel.com/v1/public/';

useEffect(()=>{
   searchData();
}, []);

async function searchData(){
  const response = await axios.get(`${baseUrl}characters?ts=${timestamp}&apikey=${apiKeyPublic}&hash=${md5Key}`);
  const list = response.data.data.results;
  setCharacters(list);
}

  return (
     <>
      <TitlePage/>
     <div  className='container'>
        {characters.map( character => (
          <div key={character.id} className='conteinerCharacter'  id={character.id}>
            <Character 
              id={character.id}
              path={character.thumbnail.path}
              extension={character.thumbnail.extension}
              request={ {base : baseUrl, md: md5Key, myKey: apiKeyPublic, time: timestamp}}
            />
            <label >{character.name}</label>
          </div>
        ))}
     </div>
     </>
  )
 
}