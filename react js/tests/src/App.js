import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App(){
const [characters, setCharacters] = useState([]);

useEffect(()=>{
   searchData();
}, []);

async function searchData(){
  const timestamp = new Date().getTime();
  const apiPrivateKey = 'deaf92ef7a6f4a0b8a552ba1221aaff469616519';
  const apiKeyPublic = '8c74855f312c29a14fda58143121f4d8';
  const md5Response = await axios.get(`https://api.hashify.net/hash/md5/hex?value=${timestamp+apiPrivateKey+apiKeyPublic}`);
  const md5 = md5Response.data.Digest;
  const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKeyPublic}&hash=${md5}`);
  const list = response.data.data.results;
  setCharacters(list);
}

  return (
     <>
     <ul>
        {characters.map( character => (
          <li key={character.id}>{character.name}</li>
        ))}
     </ul>
     </>
  )
}