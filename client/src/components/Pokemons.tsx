import { useEffect, useState } from "react";
import Card from "./Card";
import style from './pokemons.module.css';

const Pokemons = () =>{
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(data => {

                const promesas = data.results.map((el : Pokemon) => {
                  /*  fetch(el.url)
                        .then(data=> data.json())
                        .then(data=> setPokemons(pokemon=> [...pokemon, data]))*/

                    return fetch(el.url).then(data => data.json());
                })

                Promise.all(promesas)
                    .then(data => setPokemons(data));
            });
        
    },[])
    
    return(
       <div className={style.container}>
          {pokemons.map(el => <Card nombre={el.name} imagen={el.sprites.other.home.front_default}/>)}
       </div>
    )
}


export default Pokemons;

interface Pokemon{
    name : string,
    url : string,
    sprites : string
}