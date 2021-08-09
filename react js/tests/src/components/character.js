import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Character(props){
  const id = props.id;
  const path = props.path;
  const extension = props.extension;
  const request = props.request;
  const [comics, setComics ] = useState([]);


  return(
    <>
      <div id='divCaracterDescription'>
          <img src={path + '/standard_xlarge.'+extension}
          onClick={()=>characterSelected(id)}/>
         
      </div>
    </>
  )
  async function characterSelected(){
    const response = await axios.get(`${request.base}characters/${id}?ts=${request.time}&apikey=${request.myKey}&hash=${request.md}`);
    const characterData = response.data.data.results;
    const list = characterData.map( data =>{return data.comics});
    setComics(list);
    exibeCommics();
}  

   function exibeCommics(){
      const div = document.getElementById('divCaracterDescription');
      const items = comics.map( list => {return list.items});
    const  retorno =   items.map( item => {
           item.map(comic =>{
                    div.append(comic.name)
                    });
                  });
              

   }
}