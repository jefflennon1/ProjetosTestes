import React from 'react';


export default function Character(props){
  const id = props.id;
  const path = props.path;
  const extension = props.extension;
  return(
    <>
      <img src={path + '/standard_xlarge.'+extension}
             onClick={()=>characterSelected(id)}></img>
    </>
  )
  function characterSelected(){
    console.log('ola')
  }
}