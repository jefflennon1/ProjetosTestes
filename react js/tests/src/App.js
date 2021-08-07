import React, { useEffect, useState } from 'react';

export default function App(){
  const [repos, setRepos] = useState([]);

useEffect(()=>{
  searchrepos();
}, [])

async function searchrepos(){
  const response = await fetch('https://api.github.com/users/jefflennon1/repos');
  const data = await response.json();
   setRepos(data);
}

  return (
     
      <ul>
          {repos.map( repo => (
            <>
              <li key={repo.id}>{repo.name}</li>
                <button>Favoritar</button>
            </>
          ))}
      </ul>
     
  )
}