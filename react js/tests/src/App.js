import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import './styles.css'

export default function App(){
const [characters, setCharacters] = useState([]);

useEffect(()=>{
   searchData();
}, []);

async function searchData(){
  const timestamp = new Date().getTime();
  const apiPrivateKey = 'deaf92ef7a6f4a0b8a552ba1221aaff469616519';
  const apiKeyPublic = '8c74855f312c29a14fda58143121f4d8';
  const md5Key = md5(timestamp+apiPrivateKey+apiKeyPublic);
  const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKeyPublic}&hash=${md5Key}`);
  const list = response.data.data.results;
  setCharacters(list);
}

  return (
     <>
      <div className='divTitlePage'>
           <div className='titlePage'>MARVEL</div>
           <label className='titleComics'>comics</label>
      </div>
     <div  className='container'>
        {characters.map( character => (
          <div key={character.id} className='conteinerCharacter'>
            <img src={character.thumbnail.path + '/standard_xlarge.'+character.thumbnail.extension}></img>
            <label >{character.name}</label>
          </div>
        ))}
     </div>
     </>
  )
}