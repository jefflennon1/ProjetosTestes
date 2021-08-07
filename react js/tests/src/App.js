import React, { useEffect, useState } from 'react';

export default function App(){
  const [repos, setRepos] = useState([]);
  const [ favorite, setFavorites] = useState([]);

useEffect(()=>{
  searchrepos();
}, []);

useEffect(()=>{
  handleFavoritiesTitle();
}, [repos]);

async function searchrepos(){
  const response = await fetch('https://api.github.com/users/jefflennon1/repos');
  const data = await response.json();
   setRepos(data);
}
function handleFavoritiesTitle(){
    const filtered = repos.filter(repo => repo.favorite);
    document.title = 'Você tem '+filtered.length+' favoritos';
}

function handleAddToFavorites(id){
    const newRepo = repos.map(repo =>{
        return repo.id === id ? {...repo, favorite : !repo.favorite} : repo;
    });
    setRepos(newRepo);
}

  return (
      <ul>
          {repos.map( repo => (
            <>
              <li key={repo.id}>{repo.name} {repo.favorite && <span>(FAVORITE)</span>}
                 <button  onClick={()=>handleAddToFavorites(repo.id)}>Favoritar</button>
              </li>
            </>
          ))}
      </ul>
  )
}